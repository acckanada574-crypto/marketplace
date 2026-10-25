import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";

export const Route = createFileRoute("/api/product/$id/review")({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация" }), { status: 401 });
        }

        try {
          const { rating, text } = await request.json();
          const sql = await getSql();

          const users = await sql`SELECT name FROM "user" WHERE id = ${userId}`;
          const authorName = users[0]?.name || "Покупатель";

          const id = crypto.randomUUID();
          await sql`
            INSERT INTO reviews (id, product_id, author, rating, text, date)
            VALUES (${id}, ${params.id}, ${authorName}, ${rating}, ${text}, CURRENT_DATE)
          `;

          await sql`
            UPDATE products 
            SET 
              rating = (SELECT AVG(rating)::numeric(2,1) FROM reviews WHERE product_id = ${params.id}),
              review_count = (SELECT COUNT(*) FROM reviews WHERE product_id = ${params.id})
            WHERE id = ${params.id}
          `;

          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка добавления отзыва:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});