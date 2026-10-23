import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

// Пока используем заглушку для ID пользователя.
// Позже мы заменим это на реальный ID из сессии Better Auth.
const MOCK_USER_ID = "dev-user";

export const Route = createFileRoute("/api/cart")({
  server: {
    handlers: {
      // 1. Получить содержимое корзины
      GET: async () => {
        try {
          const sql = await getSql();
          const items = await sql`
            SELECT c.id, c.quantity, p.id as product_id, p.title, p.price, p.image, p.kind
            FROM cart c 
            JOIN products p ON p.id = c.product_id
            WHERE c.user_id = ${MOCK_USER_ID}
          `;
          return new Response(JSON.stringify({ items }), { status: 200 });
        } catch (error) {
          console.error("Ошибка получения корзины:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
      
      // 2. Добавить товар в корзину
      POST: async ({ request }) => {
        try {
          const { productId, quantity = 1 } = await request.json();
          const sql = await getSql();
          
          const existing = await sql`SELECT * FROM cart WHERE user_id = ${MOCK_USER_ID} AND product_id = ${productId}`;
          
          if (existing.length > 0) {
            // Если товар уже есть, увеличиваем количество
            await sql`UPDATE cart SET quantity = quantity + ${quantity} WHERE id = ${existing[0].id}`;
          } else {
            // Если нет, создаем новую запись
            const id = crypto.randomUUID();
            await sql`INSERT INTO cart (id, user_id, product_id, quantity) VALUES (${id}, ${MOCK_USER_ID}, ${productId}, ${quantity})`;
          }
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка добавления в корзину:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
      
      // 3. Удалить товар из корзины
      DELETE: async ({ request }) => {
        try {
          const { searchParams } = new URL(request.url);
          const id = searchParams.get("id");
          if (!id) return new Response(JSON.stringify({ error: "id не указан" }), { status: 400 });
          
          const sql = await getSql();
          await sql`DELETE FROM cart WHERE id = ${id} AND user_id = ${MOCK_USER_ID}`;
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка удаления из корзины:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});