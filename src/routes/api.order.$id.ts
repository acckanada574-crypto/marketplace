import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/order/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        try {
          const sql = await getSql();
          const orders = await sql`SELECT * FROM orders WHERE id = ${params.id}`;
          if (orders.length === 0) return new Response(JSON.stringify({ error: "Не найден" }), { status: 404 });
          
          const items = await sql`SELECT * FROM order_items WHERE order_id = ${params.id}`;
          return new Response(JSON.stringify({ order: orders[0], items }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});