import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/order/$id")({
  loader: async ({ params }) => {
    return await apiFetch<{ order: any; items: any[] }>(`/api/order/${params.id}`);
  },
  component: OrderPage,
});

function OrderPage() {
  const { order, items } = Route.useLoaderData();

  const statusLabel: Record<string, string> = {
    pending: "Ожидает оплаты",
    first_paid: "Оплачен на 50%",
    fully_paid: "Оплачен полностью",
    shipped: "Отправлен",
    delivered: "Доставлен",
    cancelled: "Отменён",
  };

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading
          kicker={`Заказ ${order.id}`}
          title="Спасибо за заказ!"
          description="Мы отправили детали на вашу почту. Ниже — информация о заказе."
        />

        <div className="rounded-2xl bg-card p-6 shadow-border mb-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-xl">Статус</h2>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {statusLabel[order.status] || order.status}
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="text-foreground font-medium">Дата:</span> {new Date(order.created_at).toLocaleDateString("ru-RU")}</p>
            <p><span className="text-foreground font-medium">Получатель:</span> {order.customer_name}</p>
            <p><span className="text-foreground font-medium">Телефон:</span> {order.customer_phone}</p>
            {order.customer_city && (
              <p><span className="text-foreground font-medium">Адрес:</span> {order.customer_city}, {order.customer_address}</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-border mb-6">
          <h2 className="font-display text-xl mb-4">Состав заказа</h2>
          <ul className="space-y-4">
            {items.map((item: any) => (
              <li key={item.id} className="flex gap-4 items-center">
                {item.image && (
                  <img src={item.image} alt="" className="size-16 rounded-md object-cover bg-muted" />
                )}
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.qty} шт.</p>
                </div>
                <p className="tabular-nums font-medium">{formatPrice(item.line_total)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-border mb-8">
          <h2 className="font-display text-xl mb-4">Оплата</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Товары:</span> <span>{formatPrice(order.subtotal)}</span></div>
            <div className="flex justify-between"><span>Доставка:</span> <span>{order.shipping === 0 ? "Бесплатно" : formatPrice(order.shipping)}</span></div>
            <div className="flex justify-between font-medium text-base pt-2 border-t border-border mt-2">
              <span>Итого:</span> <span className="tabular-nums">{formatPrice(order.total)}</span>
            </div>
          </div>

          {order.payment_plan === "split_50_50" && (
            <div className="mt-4 p-4 bg-muted rounded-lg text-sm">
              <p className="font-medium mb-2">Оплата частями (50/50)</p>
              <div className="flex justify-between text-green-700 font-medium">
                <span>Оплачено сейчас:</span> <span>{formatPrice(order.paid_amount)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground mt-1">
                <span>К оплате при получении:</span> <span>{formatPrice(order.due_amount)}</span>
              </div>
            </div>
          )}
          
          <div className="mt-4 p-4 bg-muted rounded-lg text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Для мастера:</p>
            <p>Комиссия маркетплейса (10%): {formatPrice(order.commission_amount)}</p>
            <p>К выплате мастеру: {formatPrice(order.payout_total)}</p>
          </div>
        </div>

        <Button asChild className="w-full sm:w-auto">
          <Link to="/catalog">Вернуться в каталог</Link>
        </Button>
      </Section>
    </main>
  );
}