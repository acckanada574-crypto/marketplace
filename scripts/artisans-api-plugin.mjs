// @ts-nocheck
import { Buffer } from "node:buffer";
import nodeCrypto from "node:crypto";

export function artisansApiPlugin() {
  return {
    name: "app-builder:artisans-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url ?? "";
        const pathOnly = rawUrl.split("?", 1)[0] ?? "";

        if (pathOnly === "/api/debug") {
          try {
            const { dbSource } = await server.ssrLoadModule("/src/lib/db.ts");
            res.statusCode = 200;
            res.setHeader("content-type", "application/json; charset=utf-8");
            res.end(JSON.stringify({ dbSource, hasUrl: !!process.env.DATABASE_URL }));
          } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: e.message })); }
          return;
        }

        if (pathOnly === "/api/become-artisan") { await handleBecomeArtisan(server, req, res); return; }
        if (pathOnly === "/api/sell") { await handleSellProduct(server, req, res); return; }
        if (pathOnly.startsWith("/api/artisan/")) { await handleGetArtisan(server, req, res, pathOnly); return; }
        if (pathOnly.startsWith("/api/product/")) { await handleGetProduct(server, req, res, pathOnly); return; }
        if (pathOnly === "/api/home") { await handleHome(server, res); return; }
        if (pathOnly === "/api/artisans") { await handleArtisans(server, res); return; }
        if (pathOnly === "/api/catalog") { await handleCatalog(server, req, res, rawUrl); return; }
        if (pathOnly === "/api/checkout") { await handleCheckout(server, req, res); return; }
        if (pathOnly === "/api/orders") { await handleGetMyOrders(server, req, res); return; }
        if (pathOnly === "/api/artisan-orders") { await handleGetArtisanOrders(server, req, res); return; }
        if (pathOnly.startsWith("/api/order/")) { await handleGetOrder(server, req, res, pathOnly); return; }
        if (pathOnly === "/api/my-products") { await handleMyProducts(server, req, res); return; }
        if (pathOnly === "/api/generate-promo") { await handleGeneratePromo(server, req, res); return; }

        next();
      });
    },
  };
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) { chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)); }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function getSession(server, req) {
  const { auth } = await server.ssrLoadModule("/src/lib/auth/server.ts");
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) { if (Array.isArray(value)) value.forEach((v) => headers.append(key, v)); else headers.set(key, value); }
  }
  return auth.api.getSession({ headers });
}

async function handleBecomeArtisan(server, req, res) {
  try {
    const input = await readJsonBody(req); const session = await getSession(server, req);
    if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const existing = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (existing.length > 0) { res.statusCode = 200; res.end(JSON.stringify({ id: existing[0].id, created: false })); return; }
    const id = `art-${session.user.id.slice(0, 10)}`; const year = new Date().getFullYear();
    await sql`insert into artisans (id, name, city, craft, bio, since, mark, user_id, status, subscription_tier) values (${id}, ${input.name}, ${input.city}, ${input.craft}, ${input.bio}, ${year}, ${input.mark}, ${session.user.id}, 'approved', 'free')`;
    res.statusCode = 200; res.end(JSON.stringify({ id, created: true }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleSellProduct(server, req, res) {
  try {
    const input = await readJsonBody(req); const session = await getSession(server, req);
    if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const artisanRows = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (artisanRows.length === 0) { res.statusCode = 400; res.end(JSON.stringify({ error: "Сначала создайте мастерскую" })); return; }
    const artisanId = artisanRows[0].id;
    const id = `item-${Date.now().toString(36)}`;

    await sql`
      insert into products (
        id, slug, title, subtitle, description, price, kind, category, artisan_id,
        image, materials, stock, rating, review_count, featured, is_new,
        digital_format, digital_pages, license, file_size, custom
      ) values (
        ${id}, ${id}, ${input.title}, ${input.subtitle}, ${input.description},
        ${input.price}, ${input.kind}, ${input.category}, ${artisanId},
        ${input.image}, ${input.materials}, ${input.stock}, 0, 0, false, true,
        ${input.digitalFormat}, ${input.digitalPages}, ${input.license}, ${input.fileSize}, true
      )
    `;

    // Техническая подпись (SHA-256) для цифровых товаров
    if (input.kind === "digital") {
      const payload = [
        input.title,
        input.subtitle,
        input.description,
        String(input.price),
        artisanId,
        input.digitalFormat || "",
        input.digitalPages || "",
        input.license || "",
        id,
      ].join("|");
      const hash = nodeCrypto.createHash("sha256").update(payload).digest("hex");
      await sql`
        update products
        set file_hash = ${hash}, signed_at = now(), signed_by = ${artisanId}
        where id = ${id}
      `;
    }

    res.statusCode = 200; res.end(JSON.stringify({ id }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGetArtisan(server, req, res, pathOnly) {
  try {
    const artisanId = decodeURIComponent(pathOnly.replace("/api/artisan/", ""));
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const artisanRows = await sql`select id, name, city, craft, bio, since, mark from artisans where id = ${artisanId} and status = 'approved' limit 1`;
    if (artisanRows.length === 0) { res.statusCode = 404; res.end(JSON.stringify({ error: "Мастер не найден" })); return; }
    const productRows = await sql`select id, slug, title, subtitle, description, price, kind, category, artisan_id, image, materials, size, care, ships_in_days, stock, rating, review_count, featured, is_new, digital_format, digital_pages, license, file_size, custom, file_hash, signed_at, signed_by from products where artisan_id = ${artisanId} order by featured desc, created_at asc`;
    res.statusCode = 200; res.end(JSON.stringify({ artisan: artisanRows[0], products: productRows }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGetProduct(server, req, res, pathOnly) {
  try {
    const productId = decodeURIComponent(pathOnly.replace("/api/product/", ""));
    const mod = await server.ssrLoadModule("/src/lib/products.server.ts"); const data = await mod.getProductWithArtisan(productId);
    if (!data) { res.statusCode = 404; res.end(JSON.stringify({ error: "Товар не найден" })); return; }
    const related = await mod.getRelatedProducts(data.product.id, data.product.kind, data.product.artisanId, 3);
    res.statusCode = 200; res.end(JSON.stringify({ ...data, related }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleHome(server, res) {
  try {
    const mod = await server.ssrLoadModule("/src/lib/products.server.ts"); const data = await mod.getHomeData();
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const countRows = await sql`select count(*)::int as n from products`;
    res.statusCode = 200; res.end(JSON.stringify({ ...data, totalProducts: countRows[0]?.n ?? 0 }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleArtisans(server, res) {
  try { const mod = await server.ssrLoadModule("/src/lib/products.server.ts"); const data = await mod.getAllArtisans(); res.statusCode = 200; res.end(JSON.stringify(data)); }
  catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleCatalog(server, req, res, rawUrl) {
  try {
    const url = new URL(rawUrl, "http://localhost"); const mod = await server.ssrLoadModule("/src/lib/products.server.ts");
    const products = await mod.getFilteredProducts({ q: url.searchParams.get("q") || undefined, kind: url.searchParams.get("kind") || undefined, category: url.searchParams.get("category") || undefined, sort: url.searchParams.get("sort") || undefined });
    res.statusCode = 200; res.end(JSON.stringify(products));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleCheckout(server, req, res) {
  try {
    const input = await readJsonBody(req); const session = await getSession(server, req);
    if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const orderId = `ord-${Date.now().toString(36)}`; const hasPhysical = input.items.some((i) => i.kind === "physical");
    const paymentPlan = hasPhysical ? "split_50_50" : "full"; const subtotal = input.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = hasPhysical ? (subtotal >= 6000 ? 0 : 400) : 0; const total = subtotal + shipping;
    const commissionAmount = Math.round(subtotal * 0.1); const payoutTotal = subtotal - commissionAmount;
    const paidAmount = paymentPlan === "split_50_50" ? Math.round(total / 2) : total; const dueAmount = total - paidAmount;
    await sql`insert into orders (id, user_id, customer_name, customer_email, customer_phone, customer_city, customer_address, subtotal, shipping, total, commission_amount, payout_total, payment_plan, paid_amount, due_amount, status) values (${orderId}, ${session.user.id}, ${input.customer.name}, ${input.customer.email}, ${input.customer.phone}, ${input.customer.city}, ${input.customer.address}, ${subtotal}, ${shipping}, ${total}, ${commissionAmount}, ${payoutTotal}, ${paymentPlan}, ${paidAmount}, ${dueAmount}, 'pending')`;
    for (const item of input.items) {
      const itemId = `oi-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`; const lineTotal = item.price * item.qty;
      const itemCommission = Math.round(lineTotal * 0.1); const itemPayout = lineTotal - itemCommission;
      await sql`insert into order_items (id, order_id, product_id, artisan_id, title, price, qty, kind, image, line_total, commission_amount, payout_amount) values (${itemId}, ${orderId}, ${item.productId}, ${item.artisanId || 'unknown'}, ${item.title}, ${item.price}, ${item.qty}, ${item.kind}, ${item.image}, ${lineTotal}, ${itemCommission}, ${itemPayout})`;
    }
    res.statusCode = 200; res.end(JSON.stringify({ orderId, paymentPlan, paidAmount, dueAmount }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGetMyOrders(server, req, res) {
  try {
    const session = await getSession(server, req); if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const orders = await sql`select * from orders where user_id = ${session.user.id} order by created_at desc`;
    const ordersWithItems = [];
    for (const order of orders) { const items = await sql`select * from order_items where order_id = ${order.id}`; ordersWithItems.push({ ...order, items }); }
    res.statusCode = 200; res.end(JSON.stringify(ordersWithItems));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGetOrder(server, req, res, pathOnly) {
  try {
    const orderId = decodeURIComponent(pathOnly.replace("/api/order/", "").trim()); const session = await getSession(server, req);
    if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const orders = await sql`select * from orders where id = ${orderId} limit 1`;
    if (orders.length === 0) { res.statusCode = 404; res.end(JSON.stringify({ error: "Заказ не найден" })); return; }
    const items = await sql`select * from order_items where order_id = ${orderId}`;
    res.statusCode = 200; res.end(JSON.stringify({ order: orders[0], items }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGetArtisanOrders(server, req, res) {
  try {
    const session = await getSession(server, req); if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const artisanRows = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (artisanRows.length === 0) { res.statusCode = 200; res.end(JSON.stringify([])); return; }
    const rows = await sql`select oi.id as item_id, oi.title, oi.qty, oi.price, oi.line_total, oi.payout_amount, o.id as order_id, o.customer_name, o.customer_city, o.customer_address, o.customer_phone, o.status, o.created_at from order_items oi join orders o on o.id = oi.order_id where oi.artisan_id = ${artisanRows[0].id} order by o.created_at desc`;
    res.statusCode = 200; res.end(JSON.stringify(rows));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleMyProducts(server, req, res) {
  try {
    const session = await getSession(server, req); if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const artisanRows = await sql`select id from artisans where user_id = ${session.user.id} limit 1`;
    if (artisanRows.length === 0) { res.statusCode = 200; res.end(JSON.stringify([])); return; }
    const products = await sql`select id, title, subtitle, price from products where artisan_id = ${artisanRows[0].id} order by created_at desc`;
    res.statusCode = 200; res.end(JSON.stringify(products));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}

async function handleGeneratePromo(server, req, res) {
  try {
    const input = await readJsonBody(req); const session = await getSession(server, req);
    if (!session?.user?.id) { res.statusCode = 401; res.end(JSON.stringify({ error: "Не авторизован" })); return; }
    const { getSql } = await server.ssrLoadModule("/src/lib/db.ts"); const sql = await getSql();
    const rows = await sql`select * from products where id = ${input.productId} limit 1`;
    if (rows.length === 0) { res.statusCode = 404; res.end(JSON.stringify({ error: "Товар не найден" })); return; }
    const p = rows[0];

    const base = `Ты — маркетолог маркетплейса ручной работы "Живица".\nТовар: "${p.title}"\nПодзаголовок: "${p.subtitle}"\nОписание: "${p.description}"\nЦена: ${p.price} ₽\nМатериалы: ${p.materials || "не указаны"}`;
    let prompt = "";
    if (input.type === "telegram") prompt = base + `\n\nНапиши пост для Telegram. До 800 символов, с эмодзи (умеренно), в конце призыв перейти на сайт. Только текст поста.`;
    else if (input.type === "vk") prompt = base + `\n\nНапиши пост для ВКонтакте. До 1000 символов, без обилия эмодзи, с историей вещи и призывом. Только текст.`;
    else if (input.type === "reels") prompt = base + `\n\nПридумай сценарий для Reels/Shorts (15-30 сек). Дай: 1) хук в первые 3 секунды, 2) что в кадре, 3) текст озвучки, 4) хэштеги. По пунктам.`;
    else if (input.type === "hashtags") prompt = base + `\n\nПридумай 15 хэштегов: смесь широких и нишевых. Только хэштеги через пробел.`;
    else if (input.type === "image-prompt") prompt = base + `\n\nНапиши промпт на английском для Midjourney/DALL-E: красивый уютный кадр этого товара, естественный свет, стиль ручной работы. Только промпт.`;
    else { res.statusCode = 400; res.end(JSON.stringify({ error: "Неизвестный тип" })); return; }

    const response = await fetch("http://127.0.0.1:11434/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "llama3.1:8b", prompt, stream: false }) });
    if (!response.ok) throw new Error("Ollama не отвечает");
    const data = await response.json();
    res.statusCode = 200; res.end(JSON.stringify({ text: data.response.trim() }));
  } catch (err) { if (!res.headersSent) { res.statusCode = 500; res.end(JSON.stringify({ error: err?.message })); } }
}