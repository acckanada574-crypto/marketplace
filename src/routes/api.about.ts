import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/about")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const artisans = await sql`SELECT * FROM artisans LIMIT 6`; // Получаем мастеров
          
          return new Response(JSON.stringify({
            text: "Двор независимых мастеров. Физические вещи с теплом рук и цифровые издания.",
            artisans: artisans // <--- ВАЖНО: отдаем массив мастеров
          }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});