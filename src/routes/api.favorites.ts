import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

const MOCK_USER_ID = "dev-user";

export const Route = createFileRoute("/api/favorites")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const items = await sql`
            SELECT f.id, p.id as product_id, p.title, p.price, p.image, p.kind
            FROM favorites f 
            JOIN products p ON p.id = f.product_id
            WHERE f.user_id = ${MOCK_USER_ID}
          `;
          return new Response(JSON.stringify({ items }), { status: 200 });
        } catch (error) {
          console.error("Ошибка получения избранного:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
      
      POST: async ({ request }) => {
        try {
          const { productId } = await request.json();
          const sql = await getSql();
          
          const existing = await sql`SELECT * FROM favorites WHERE user_id = ${MOCK_USER_ID} AND product_id = ${productId}`;
          if (existing.length === 0) {
            const id = crypto.randomUUID();
            await sql`INSERT INTO favorites (id, user_id, product_id) VALUES (${id}, ${MOCK_USER_ID}, ${productId})`;
          }
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка добавления в избранное:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
      
      DELETE: async ({ request }) => {
        try {
          const { searchParams } = new URL(request.url);
          const id = searchParams.get("id");
          if (!id) return new Response(JSON.stringify({ error: "id не указан" }), { status: 400 });
          
          const sql = await getSql();
          await sql`DELETE FROM favorites WHERE id = ${id} AND user_id = ${MOCK_USER_ID}`;
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка удаления из избранного:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});