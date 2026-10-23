import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/master/orders")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          
          // В будущем здесь можно добавить фильтрацию: WHERE artisan_id = '...'
          // Пока просто достаем все заказы из базы
          const orders = await sql`
            SELECT * FROM orders 
            ORDER BY created_at DESC
          `;

          // ВАЖНО: Возвращаем МАССИВ, а не объект { orders }
          return new Response(JSON.stringify(orders), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Ошибка получения заказов мастера:", error);
          // В случае ошибки отдаем пустой массив, чтобы страница не падала
          return new Response(JSON.stringify([]), { 
            status: 200,
            headers: { "Content-Type": "application/json" } 
          });
        }
      },
    },
  },
});