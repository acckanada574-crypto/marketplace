import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { formatDate, formatPrice } from "@/lib/format";
import { useMarket } from "@/lib/store";

export const Route = createFileRoute("/orders")({ component: OrdersPage });

const STATUS: Record<string, string> = {
  paid: "Оплачен",
  shipped: "В пути",
  delivered: "Выполнен",
};

function OrdersPage() {
  const orders = useMarket((s) => s.orders);

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading
          kicker="Покупатель"
          title="Заказы"
          description="История хранится в этом браузере. Цифровые файлы можно скачать повторно."
        />
        {orders.length === 0 ? (
          <div className="rounded-2xl bg-card px-6 py-12 text-center shadow-border">
            <p className="text-muted-foreground">Заказов пока нет.</p>
            <Button asChild className="mt-6">
              <Link to="/catalog">На витрину</Link>
            </Button>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {orders.map((order) => (
              <li key={order.id}>
                <Link
                  to="/order/$id"
                  params={{ id: order.id }}
                  className="flex flex-col gap-2 rounded-2xl bg-card px-5 py-4 shadow-border sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(order.createdAt)} · {STATUS[order.status]}
                    </p>
                  </div>
                  <p className="tabular-nums">{formatPrice(order.total)}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </main>
  );
}
