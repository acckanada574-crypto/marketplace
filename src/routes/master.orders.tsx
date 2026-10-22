import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/master/orders")({
  loader: () => apiFetch<any[]>("/api/artisan-orders"),
  component: MasterOrdersPage,
});

function MasterOrdersPage() {
  const sales = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading
          kicker="Мастерская"
          title="Заказы на мои работы"
          description="Здесь вы видите, что у вас купили и сколько вам нужно отправить."
        />

        {sales.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl shadow-border mt-8">
            <p className="text-muted-foreground">У вас пока нет продаж.</p>
            <Button asChild className="mt-4">
              <Link to="/sell">Выставить работу</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4 mt-8">
            {sales.map((sale) => (
              <div key={sale.item_id} className="rounded-2xl bg-card p-6 shadow-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display text-lg font-medium">{sale.title}</span>
                  <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {sale.status === "pending" ? "Ожидает оплаты" : sale.status}
                  </span>
                </div>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <p><span className="text-foreground font-medium">Заказ:</span> {sale.order_id} от {new Date(sale.created_at).toLocaleDateString("ru-RU")}</p>
                  <p><span className="text-foreground font-medium">Количество:</span> {sale.qty} шт.</p>
                  <p><span className="text-foreground font-medium">К отправке:</span> {sale.customer_city}, {sale.customer_address}</p>
                  <p><span className="text-foreground font-medium">Получатель:</span> {sale.customer_name}, {sale.customer_phone}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex justify-between items-end">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Комиссия маркетплейса удержана</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">К выплате вам</p>
                    <p className="font-display text-xl tabular-nums">{formatPrice(sale.payout_amount)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}