import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";

export const Route = createFileRoute("/api/reviews")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const { productId, rating, text } = await request.json();

          if (!productId || !rating || !text || !text.trim()) {
            return new Response(JSON.stringify({ error: "Заполните все поля" }), { status: 400 });
          }
          if (rating < 1 || rating > 5) {
            return new Response(JSON.stringify({ error: "Оценка от 1 до 5" }), { status: 400 });
          }

          const sql = await getSql();

          // Имя автора берём из аккаунта
          const users = await sql`SELECT name FROM "user" WHERE id = ${userId}`;
          const author = users[0]?.name || "Покупатель";

          const id = crypto.randomUUID();
          await sql`
            INSERT INTO reviews (id, product_id, author, rating, text, date)
            VALUES (${id}, ${productId}, ${author}, ${rating}, ${text}, CURRENT_DATE)
          `;

          // Пересчитываем рейтинг и количество отзывов у товара
          await sql`
            UPDATE products 
            SET 
              review_count = (SELECT COUNT(*) FROM reviews WHERE product_id = ${productId}),
              rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE product_id = ${productId})
            WHERE id = ${productId}
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