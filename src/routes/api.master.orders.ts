import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/master/orders")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify({ orders: [] }), { status: 200 });
      },
    },
  },
});