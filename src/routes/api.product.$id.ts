import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/product/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        try {
          const sql = await getSql();
          
          const products = await sql`SELECT * FROM products WHERE id = ${params.id}`;
          if (products.length === 0) {
            return new Response(JSON.stringify({ error: "Товар не найден" }), { status: 404 });
          }
          
          const product = products[0];
          
          const artisans = await sql`SELECT * FROM artisans WHERE id = ${product.artisan_id}`;
          const artisan = artisans[0] || null;
          
          const reviews = await sql`SELECT * FROM reviews WHERE product_id = ${params.id} ORDER BY created_at DESC`;

          // Приводим рейтинг и количество отзывов к числу прямо на сервере
          const safeProduct = {
            ...product,
            rating: Number(product.rating) || 0,
            review_count: Number(product.review_count) || 0,
            price: Number(product.price) || 0,
            stock: Number(product.stock) || 0,
            images: Array.isArray(product.images) ? product.images : [],
          };

          const safeReviews = reviews.map((r: any) => ({
            ...r,
            rating: Number(r.rating) || 0,
          }));

          return new Response(JSON.stringify({ 
            product: safeProduct, 
            artisan, 
            reviews: safeReviews 
          }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        } catch (error) {
          console.error("Ошибка получения товара:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});