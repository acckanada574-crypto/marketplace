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

          let products;
          if (kind === "digital" || kind === "physical") {
            products = await sql`SELECT * FROM products WHERE kind = ${kind} ORDER BY created_at DESC`;
          } else {
            products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
          }

          // ВАЖНО: Возвращаем МАССИВ сразу, без обертки { products }
          return new Response(JSON.stringify(products), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Ошибка каталога:", error);
          return new Response(JSON.stringify([]), { status: 200 }); // Отдаем пустой массив при ошибке
        }
      },
    },
  },
});