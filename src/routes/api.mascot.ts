import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/mascot")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify({
          name: "Живица",
          description: "Талисман маркетплейса — капля живицы."
        }), { status: 200 });
      },
    },
  },
});