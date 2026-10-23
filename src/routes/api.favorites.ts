import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";

export const Route = createFileRoute("/api/favorites")({
  server: {
    handlers: {
      GET: async () => {
        const userId = await getCurrentUserId();
        if (!userId) return new Response(JSON.stringify([]), { status: 200 });

        try {
          const sql = await getSql();
          const items = await sql`
            SELECT f.id, p.id as product_id, p.title, p.price, p.image, p.kind
            FROM favorites f 
            JOIN products p ON p.id = f.product_id
            WHERE f.user_id = ${userId}
          `;
          return new Response(JSON.stringify(items), { status: 200 });
        } catch (error) {
          console.error("Ошибка получения избранного:", error);
          return new Response(JSON.stringify([]), { status: 200 });
        }
      },
      
      POST: async ({ request }) => {
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация" }), { status: 401 });
        }

        try {
          const { productId } = await request.json();
          const sql = await getSql();
          
          const existing = await sql`SELECT * FROM favorites WHERE user_id = ${userId} AND product_id = ${productId}`;
          if (existing.length === 0) {
            const id = crypto.randomUUID();
            await sql`INSERT INTO favorites (id, user_id, product_id) VALUES (${id}, ${userId}, ${productId})`;
          }
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка добавления в избранное:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
      
      DELETE: async ({ request }) => {
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация" }), { status: 401 });
        }

        try {
          const { searchParams } = new URL(request.url);
          const id = searchParams.get("id");
          if (!id) return new Response(JSON.stringify({ error: "id не указан" }), { status: 400 });
          
          const sql = await getSql();
          await sql`DELETE FROM favorites WHERE id = ${id} AND user_id = ${userId}`;
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        } catch (error) {
          console.error("Ошибка удаления из избранного:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});