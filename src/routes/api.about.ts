import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/about")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const artisansCount = await sql`SELECT count(*)::int as count FROM artisans`;
          return new Response(JSON.stringify({
            text: "Двор независимых мастеров. Физические вещи с теплом рук и цифровые издания.",
            artisansCount: artisansCount[0]?.count || 0,
          }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});