import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/home")({
  server: {
    handlers: {
      GET: async () => {
        // Временная заглушка, чтобы сайт запустился
        return new Response(JSON.stringify({
          featured: [],
          digital: [],
          physical: [],
          artisans: [],
          totalProducts: 0
        }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
