import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHeading, Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { downloadProductFile } from "@/lib/downloads";
import { formatDate, formatPrice, kindLabel } from "@/lib/format";
import { findProduct, useMarket } from "@/lib/store";

export const Route = createFileRoute("/order/$id")({ component: OrderPage });

const STATUS: Record<string, string> = {
  paid: "Оплачен, собираем коробку",
  shipped: "В пути",
  delivered: "Выполнен",
};

function OrderPage() {
  const { id } = Route.useParams();
  const orders = useMarket((s) => s.orders);
  const listings = useMarket((s) => s.listings);
  const order = orders.find((o) => o.id === id);
  if (!order) throw notFound();

  return (
    <main className="py-10 pb-20">
      <Section className="max-w-3xl">
        <PageHeading
          kicker={order.id}
          title="Заказ принят"
          description={`${formatDate(order.createdAt)}. ${STATUS[order.status]}.`}
        />
        <ul className="flex flex-col gap-4">
          {order.items.map((item) => {
            const live = findProduct(listings, item.productId);
            return (
              <li key={item.productId} className="flex gap-4 rounded-2xl bg-card p-4 shadow-border">
                <img src={item.image} alt="" className="size-20 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {kindLabel(item.kind)} · {item.qty} × {formatPrice(item.price)}
                  </p>
                  {item.kind === "digital" && live ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-3"
                      onClick={() => downloadProductFile(live)}
                    >
                      <Download className="size-4" />
                      Скачать файл
                    </Button>
                  ) : item.kind === "digital" ? (
                    <p className="mt-2 text-xs text-muted-foreground">Файл больше не на витрине.</p>
                  ) : (
                    <Badge className="mt-3" variant="muted">
                      {STATUS[order.status]}
                    </Badge>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <dl className="mt-8 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Доставка</dt>
            <dd className="tabular-nums">{order.shipping === 0 ? "Бесплатно" : formatPrice(order.shipping)}</dd>
          </div>
          <div className="flex justify-between font-medium">
            <dt>Итого</dt>
            <dd className="tabular-nums">{formatPrice(order.total)}</dd>
          </div>
        </dl>
        <div className="mt-8 rounded-2xl bg-card p-5 text-sm text-muted-foreground shadow-border">
          <p>
            {order.customer.name}, {order.customer.email}
            {order.customer.phone ? ` · ${order.customer.phone}` : ""}
          </p>
          {order.customer.address ? (
            <p className="mt-1">
              {order.customer.city}, {order.customer.address}
              {order.customer.postal ? `, ${order.customer.postal}` : ""}
            </p>
          ) : null}
        </div>
        <Button asChild variant="ghost" className="mt-6">
          <Link to="/orders">Все заказы</Link>
        </Button>
      </Section>
    </main>
  );
}
