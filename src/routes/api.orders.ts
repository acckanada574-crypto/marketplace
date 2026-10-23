import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

const MOCK_USER_ID = "dev-user";

export const Route = createFileRoute("/api/orders")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const orders = await sql`
            SELECT * FROM orders 
            WHERE user_id = ${MOCK_USER_ID} 
            ORDER BY created_at DESC
          `;
          return new Response(JSON.stringify({ orders }), { status: 200 });
        } catch (error) {
          console.error("Ошибка получения заказов:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});