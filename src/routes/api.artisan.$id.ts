import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/artisan/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        try {
          const sql = await getSql();
          const artisans = await sql`SELECT * FROM artisans WHERE id = ${params.id}`;
          if (artisans.length === 0) return new Response(JSON.stringify({ error: "Мастер не найден" }), { status: 404 });
          
          const artisan = artisans[0];
          const products = await sql`SELECT * FROM products WHERE artisan_id = ${params.id} ORDER BY created_at DESC`;

          return new Response(JSON.stringify({ artisan, products }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});