import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/home")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();

          // 1. Считаем общее количество товаров
          const countResult = await sql`SELECT count(*)::int as count FROM products`;
          const totalProducts = countResult[0]?.count || 0;

          // 2. Берем 6 товаров для витрины
          const featured = await sql`SELECT * FROM products LIMIT 6`;
          
          // 3. Берем цифровые и физические товары
          // ВНИМАНИЕ: Если в твоей базе колонка называется не kind, а type или is_digital, 
          // напиши мне, и мы поменяем это слово.
          const digital = await sql`SELECT * FROM products WHERE kind = 'digital' LIMIT 5`;
          const physical = await sql`SELECT * FROM products WHERE kind = 'physical' LIMIT 3`;

          // 4. Берем мастеров
          const artisans = await sql`SELECT * FROM artisans LIMIT 6`;

          return new Response(JSON.stringify({
            featured,
            digital,
            physical,
            artisans,
            totalProducts
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
          
        } catch (error) {
          console.error("Ошибка при загрузке данных из БД:", error);
          return new Response(JSON.stringify({ error: "Ошибка базы данных" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
