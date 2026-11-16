import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/home")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const published = "status = 'published'";
          const countResult = await sql`SELECT count(*)::int as count FROM products WHERE ${published}`;
          const totalProducts = countResult[0]?.count || 0;
          const featured = await sql`SELECT * FROM products WHERE ${published} AND featured = true LIMIT 6`;
          const displayFeatured = featured.length > 0
            ? featured
            : await sql`SELECT * FROM products WHERE ${published} LIMIT 6`;
          const digital = await sql`SELECT * FROM products WHERE ${published} AND kind = 'digital' LIMIT 5`;
          const physical = await sql`SELECT * FROM products WHERE ${published} AND kind = 'physical' LIMIT 3`;
          const artisans = await sql`SELECT * FROM artisans WHERE status = 'approved' LIMIT 6`;

          return new Response(JSON.stringify({ featured: displayFeatured, digital, physical, artisans, totalProducts }), {
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
