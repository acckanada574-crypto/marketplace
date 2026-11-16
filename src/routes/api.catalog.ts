import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/catalog")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const kind = url.searchParams.get("kind");
          const sql = await getSql();
          const products = kind === "digital" || kind === "physical"
            ? await sql`SELECT * FROM products WHERE status = 'published' AND kind = ${kind} ORDER BY created_at DESC`
            : await sql`SELECT * FROM products WHERE status = 'published' ORDER BY created_at DESC`;
          return new Response(JSON.stringify(products), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Ошибка каталога:", error);
          return new Response(JSON.stringify({ error: "Каталог временно недоступен" }), {
            status: 503,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
