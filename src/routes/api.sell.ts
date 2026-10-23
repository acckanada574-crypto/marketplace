import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/sell")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          // Пока просто принимаем данные, но не сохраняем (заглушка)
          const body = await request.json();
          return new Response(JSON.stringify({ success: true, message: "Товар принят (заглушка)" }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ error: "Ошибка" }), { status: 500 });
        }
      },
    },
  },
});