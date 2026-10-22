import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/orders")({
  loader: () => apiFetch<any[]>("/api/orders"),
  component: OrdersPage,
});

function OrdersPage() {
  const orders = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading 
          kicker="Покупатель" 
          title="Мои заказы" 
          description="Здесь хранится история ваших покупок." 
        />

        {orders.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl shadow-border mt-8">
            <p className="text-muted-foreground">У вас пока нет заказов.</p>
            <Button asChild className="mt-4">
              <Link to="/catalog">На витрину</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4 mt-8">
            {orders.map((order) => (
              <Link
                key={order.id}
                to="/order/$id"
                params={{ id: order.id }}
                className="block rounded-2xl bg-card p-6 shadow-border hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display text-lg font-medium">Заказ {order.id}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString("ru-RU")}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {order.items.map((i: any) => `${i.title} (${i.qty} шт.)`).join(", ")}
                  </div>
                  <div className="font-medium tabular-nums">{formatPrice(order.total)}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}