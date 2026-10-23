import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/catalog")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const kind = url.searchParams.get("kind"); // 'digital' или 'physical'
          const category = url.searchParams.get("category");

          const sql = await getSql();

          // Базовый запрос — получаем все товары
          // В реальном проекте тут нужно динамически собирать WHERE условия,
          // но для старта давай просто вернем все товары, чтобы каталог заработал.
          // Если нужна фильтрация, мы добавим её чуть позже.
          const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;

          return new Response(JSON.stringify({ products }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Ошибка при загрузке каталога:", error);
          return new Response(JSON.stringify({ error: "Ошибка базы данных" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});