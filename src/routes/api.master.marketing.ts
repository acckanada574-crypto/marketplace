import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/master/marketing")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify({ stats: {} }), { status: 200 });
      },
    },
  },
});
