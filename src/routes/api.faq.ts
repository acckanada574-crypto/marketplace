import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/faq")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const sql = await getSql();
          const items = await sql`SELECT * FROM faq WHERE published = true ORDER BY position ASC`;
          return new Response(JSON.stringify({ items }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка БД" }), { status: 500 });
        }
      },
    },
  },
});