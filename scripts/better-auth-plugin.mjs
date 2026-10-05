import { Buffer } from "node:buffer";

/**
 * Dev-server middleware: routes /api/auth/* to Better Auth handler.
 * Mirrors authPopupPlugin in vite.config.ts — bypasses TanStack Router so the
 * auth endpoint always resolves in dev.
 */
export function betterAuthPlugin() {
  return {
    name: "app-builder:better-auth",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url ?? "";
        const pathOnly = rawUrl.split("?", 1)[0] ?? "";
        if (!pathOnly.startsWith("/api/auth/")) {
          next();
          return;
        }
        try {
          const host = String(
            req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost:8080",
          );
          const proto = String(
            req.headers["x-forwarded-proto"] ??
              (req.socket && req.socket.encrypted ? "https" : "http"),
          );
          const requestHeaders = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value === undefined) continue;
            if (Array.isArray(value)) {
              for (const v of value) requestHeaders.append(key, v);
            } else {
              requestHeaders.set(key, value);
            }
          }

          let body;
          if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
            const chunks = [];
            for await (const chunk of req) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }
            body = Buffer.concat(chunks);
          }

          const request = new Request(`${proto}://${host}${rawUrl}`, {
            method: req.method,
            headers: requestHeaders,
            body,
            ...(body ? { duplex: "half" } : {}),
          });

          const mod = await server.ssrLoadModule("/src/lib/auth/server.ts");
          const response = await mod.auth.handler(request);

          res.statusCode = response.status;
          const setCookies =
            typeof response.headers.getSetCookie === "function"
              ? response.headers.getSetCookie()
              : [];
          response.headers.forEach((value, key) => {
            if (key.toLowerCase() === "set-cookie") return;
            res.setHeader(key, value);
          });
          for (const cookie of setCookies) {
            res.appendHeader("set-cookie", cookie);
          }
          const respBody = Buffer.from(await response.arrayBuffer());
          res.end(respBody);
        } catch (err) {
          console.error("[app-builder] /api/auth handler failed:", err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("auth handler failed");
          }
        }
      });
    },
  };
}