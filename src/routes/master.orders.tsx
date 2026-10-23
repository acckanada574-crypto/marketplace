import { createFileRoute } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/master/orders")({
  // ВАЖНО: Путь теперь точно совпадает с файлом API
  loader: () => apiFetch<any[]>("/api/master/orders"),
  component: MasterOrdersPage,
});

function MasterOrdersPage() {
  const orders = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading
          kicker="Мастерская"
          title="Заказы на мои работы"
        />
        
        {orders.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed p-10 text-center">
            <p className="text-muted-foreground">У вас пока нет заказов.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Как только кто-то купит вашу работу, заказ появится здесь.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {orders.map((order: any) => (
              <div key={order.id} className="rounded-xl border bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Заказ №{order.id.slice(0, 8)}</p>
                  <p className="text-sm font-medium">{formatPrice(order.total)}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Статус: {order.status === 'pending' ? 'Ожидает оплаты' : order.status}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Покупатель: {order.customer_name} ({order.customer_phone})
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}