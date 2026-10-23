import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

const MOCK_USER_ID = "dev-user";

export const Route = createFileRoute("/api/order/$id")({
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
          // ВАЖНО: Возвращаем МАССИВ сразу
          return new Response(JSON.stringify(orders), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify([]), { status: 200 });
        }
      },
    },
  },
});