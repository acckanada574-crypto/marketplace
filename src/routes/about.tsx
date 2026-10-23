import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/about")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const artisans = await sql`SELECT * FROM artisans LIMIT 6`;
          
          // Возвращаем объект, где есть массив artisans (как ждет фронтенд)
          return new Response(JSON.stringify({
            text: "Двор независимых мастеров. Физические вещи с теплом рук и цифровые издания.",
            artisans: artisans // <-- вот это главное
          }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});