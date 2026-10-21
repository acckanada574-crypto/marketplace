// @ts-nocheck
import { Buffer } from "node:buffer";

export function artisansApiPlugin() {
  return {
    name: "app-builder:artisans-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url ?? "";
        const pathOnly = rawUrl.split("?", 1)[0] ?? "";

        if (pathOnly === "/api/become-artisan") {
          await handleBecomeArtisan(server, req, res);
          return;
        }
        if (pathOnly === "/api/sell") {
          await handleSellProduct(server, req, res);
          return;
        }
        if (pathOnly.startsWith("/api/artisan/")) {
          await handleGetArtisan(server, req, res, pathOnly);
          return;
        }
        if (pathOnly === "/api/home") {
          await handleHome(server, res);
          return;
        }
        if (pathOnly === "/api/artisans") {
          await handleArtisans(server, res);
          return;
        }
        if (pathOnly === "/api/catalog") {
          await handleCatalog(server, req, res, rawUrl);
          return;
        }

        next();
      });
    },
  };
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function getSession(server, req) {
  const { auth } = await server.ssrLoadModule("/src/lib/auth/server.ts");
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) {
      if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
      else headers.set(key, value);
    }
  }
  return auth.api.getSession({ headers });
}

// ── /api/become-artisan ─────────────────────────────────────────────
async function handleBecomeArtisan(server, req, res) {
  try {
    const input = await readJsonBody(req);
    const session = await getSession(server, req);
    if (!session?.user?.id) {
      res.statusCode = 401;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Не авторизован" }));
      return;
    }

    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts");
    const sql = await getSql();

    const existing = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (existing.length > 0) {
      res.statusCode = 200;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ id: existing[0].id, created: false }));
      return;
    }

    const id = `art-${session.user.id.slice(0, 10)}`;
    const year = new Date().getFullYear();

    await sql`
      insert into artisans (id, name, city, craft, bio, since, mark, user_id, status, subscription_tier)
      values (${id}, ${input.name}, ${input.city}, ${input.craft}, ${input.bio}, ${year}, ${input.mark}, ${session.user.id}, 'approved', 'free')
    `;

    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ id, created: true }));
  } catch (err) {
    console.error("[api/become-artisan]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}

// ── /api/sell ───────────────────────────────────────────────────────
async function handleSellProduct(server, req, res) {
  try {
    const input = await readJsonBody(req);
    const session = await getSession(server, req);
    if (!session?.user?.id) {
      res.statusCode = 401;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Не авторизован" }));
      return;
    }

    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts");
    const sql = await getSql();

    const artisanRows = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (artisanRows.length === 0) {
      res.statusCode = 400;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Сначала создайте мастерскую" }));
      return;
    }
    const artisanId = artisanRows[0].id;

    const id = `item-${Date.now().toString(36)}`;
    const slug = id;

    await sql`
      insert into products (
        id, slug, title, subtitle, description, price, kind, category, artisan_id,
        image, materials, stock, rating, review_count, featured, is_new,
        digital_format, digital_pages, license, file_size, custom
      ) values (
        ${id}, ${slug}, ${input.title}, ${input.subtitle}, ${input.description},
        ${input.price}, ${input.kind}, ${input.category}, ${artisanId},
        ${input.image}, ${input.materials}, ${input.stock}, 0, 0, false, true,
        ${input.digitalFormat}, ${input.digitalPages}, ${input.license}, ${input.fileSize}, true
      )
    `;

    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ id }));
  } catch (err) {
    console.error("[api/sell]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}

// ── /api/artisan/:id ────────────────────────────────────────────────
async function handleGetArtisan(server, req, res, pathOnly) {
  try {
    const artisanId = decodeURIComponent(pathOnly.replace("/api/artisan/", ""));
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts");
    const sql = await getSql();

    const artisanRows = await sql`
      select id, name, city, craft, bio, since, mark
      from artisans where id = ${artisanId} and status = 'approved' limit 1
    `;
    if (artisanRows.length === 0) {
      res.statusCode = 404;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Мастер не найден" }));
      return;
    }

    const productRows = await sql`
      select id, slug, title, subtitle, description, price, kind, category,
             artisan_id, image, materials, size, care, ships_in_days,
             stock, rating, review_count, featured, is_new,
             digital_format, digital_pages, license, file_size, custom
      from products where artisan_id = ${artisanId}
      order by featured desc, created_at asc
    `;

    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ artisan: artisanRows[0], products: productRows }));
  } catch (err) {
    console.error("[api/artisan]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}

// ── /api/home ───────────────────────────────────────────────────────
async function handleHome(server, res) {
  try {
    const mod = await server.ssrLoadModule("/src/lib/products.server.ts");
    const data = await mod.getHomeData();
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts");
    const sql = await getSql();
    const countRows = await sql`select count(*)::int as n from products`;
    const totalProducts = countRows[0]?.n ?? 0;

    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ...data, totalProducts }));
  } catch (err) {
    console.error("[api/home]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}

// ── /api/artisans ───────────────────────────────────────────────────
async function handleArtisans(server, res) {
  try {
    const mod = await server.ssrLoadModule("/src/lib/products.server.ts");
    const data = await mod.getAllArtisans();
    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify(data));
  } catch (err) {
    console.error("[api/artisans]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}

// ── /api/catalog ────────────────────────────────────────────────────
async function handleCatalog(server, req, res, rawUrl) {
  try {
    const url = new URL(rawUrl, "http://localhost");
    const mod = await server.ssrLoadModule("/src/lib/products.server.ts");
    const products = await mod.getFilteredProducts({
      q: url.searchParams.get("q") || undefined,
      kind: url.searchParams.get("kind") || undefined,
      category: url.searchParams.get("category") || undefined,
      sort: url.searchParams.get("sort") || undefined,
    });
    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify(products));
  } catch (err) {
    console.error("[api/catalog]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: err?.message ?? "Ошибка" }));
    }
  }
}