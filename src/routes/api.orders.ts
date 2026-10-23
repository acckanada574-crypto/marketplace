import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";

export const Route = createFileRoute("/api/orders")({
  server: {
    handlers: {
      GET: async () => {
        const userId = await getCurrentUserId();
        
        // Если пользователь не авторизован, возвращаем пустой массив
        if (!userId) {
          return new Response(JSON.stringify([]), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }

        try {
          const sql = await getSql();
          const orders = await sql`
            SELECT * FROM orders 
            WHERE user_id = ${userId} 
            ORDER BY created_at DESC
          `;
          
          return new Response(JSON.stringify(orders), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        } catch (error) {
          console.error("Ошибка получения заказов:", error);
          return new Response(JSON.stringify([]), { status: 200 });
        }
      },
    },
  },
});