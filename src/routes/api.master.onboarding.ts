import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/master/onboarding")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify({ steps: [] }), { status: 200 });
      },
    },
  },
});