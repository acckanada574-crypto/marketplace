import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/home")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();

          const countResult = await sql`SELECT count(*)::int as count FROM products`;
          const totalProducts = countResult[0]?.count || 0;

          // Берем товары, которые помечены как featured, или просто первые 6
          const featured = await sql`SELECT * FROM products WHERE featured = true LIMIT 6`;
          // Если featured пуст, берем просто 6 товаров
          const displayFeatured = featured.length > 0 ? featured : await sql`SELECT * FROM products LIMIT 6`;

          const digital = await sql`SELECT * FROM products WHERE kind = 'digital' LIMIT 5`;
          const physical = await sql`SELECT * FROM products WHERE kind = 'physical' LIMIT 3`;
          const artisans = await sql`SELECT * FROM artisans LIMIT 6`;

          return new Response(JSON.stringify({
            featured: displayFeatured,
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