import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/product/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        try {
          const sql = await getSql();
          const products = await sql`SELECT * FROM products WHERE id = ${params.id}`;
          if (products.length === 0) return new Response(JSON.stringify({ error: "Товар не найден" }), { status: 404 });
          
          const product = products[0];
          const artisans = await sql`SELECT * FROM artisans WHERE id = ${product.artisan_id}`;
          const reviews = await sql`SELECT * FROM reviews WHERE product_id = ${params.id} ORDER BY created_at DESC`;

          return new Response(JSON.stringify({ product, artisan: artisans[0] || null, reviews }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});