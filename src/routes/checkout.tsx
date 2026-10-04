import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/format";
import { useCartDetails, useMarket } from "@/lib/store";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const { lines, subtotal, shipping, total, hasPhysical } = useCartDetails();
  const placeOrder = useMarket((s) => s.placeOrder);
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  if (lines.length === 0) {
    return (
      <main className="py-16">
        <Section className="max-w-lg text-center">
          <PageHeading title="Сначала соберите корзину" />
          <Button asChild>
            <Link to="/catalog">К витрине</Link>
          </Button>
        </Section>
      </main>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !email) {
      toast.error("Нужны имя и почта");
      return;
    }
    if (hasPhysical && !String(data.get("address") ?? "").trim()) {
      toast.error("Для физических вещей нужен адрес");
      return;
    }
    setBusy(true);
    const order = placeOrder({
      name,
      email,
      phone,
      city: String(data.get("city") ?? "").trim() || undefined,
      address: String(data.get("address") ?? "").trim() || undefined,
      postal: String(data.get("postal") ?? "").trim() || undefined,
    });
    if (!order) {
      setBusy(false);
      toast.error("Не получилось оформить");
      return;
    }
    toast.success("Заказ принят", { description: order.id });
    void navigate({ to: "/order/$id", params: { id: order.id } });
  }

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading
          kicker="Оплата"
          title="Оформление"
          description="Демонстрационная оплата: деньги не списываются, заказ остаётся в этом браузере. Цифровые файлы можно скачать сразу."
        />
        <form onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Имя" required autoComplete="name" />
              <Field name="email" label="Почта" type="email" required autoComplete="email" />
              <Field name="phone" label="Телефон" type="tel" autoComplete="tel" />
            </div>
            {hasPhysical ? (
              <div className="rounded-2xl bg-card p-5 shadow-border">
                <p className="font-medium">Доставка коробки</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field name="city" label="Город" required autoComplete="address-level2" />
                  <Field name="postal" label="Индекс" autoComplete="postal-code" />
                  <div className="sm:col-span-2">
                    <Field name="address" label="Адрес" required autoComplete="street-address" />
                  </div>
                </div>
              </div>
            ) : (
              <p className="rounded-2xl bg-card p-5 text-sm text-muted-foreground shadow-border">
                В заказе только цифровые издания — адрес не нужен. Файлы откроются на следующей
                странице.
              </p>
            )}
          </div>
          <aside className="h-fit rounded-2xl bg-card p-6 shadow-border">
            <ul className="space-y-3 text-sm">
              {lines.map((line) => (
                <li key={line.productId} className="flex justify-between gap-3">
                  <span className="min-w-0 truncate">
                    {line.product.title}
                    {line.qty > 1 ? ` × ${line.qty}` : ""}
                  </span>
                  <span className="tabular-nums">{formatPrice(line.lineTotal)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex justify-between text-sm text-muted-foreground">
              <span>Доставка</span>
              <span className="tabular-nums">{shipping === 0 ? "0 ₽" : formatPrice(shipping)}</span>
            </p>
            <p className="mt-2 flex justify-between border-t border-border pt-3 font-medium">
              <span>Итого</span>
              <span className="tabular-nums">{formatPrice(total)}</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Товары: {formatPrice(subtotal)}</p>
            <Button type="submit" className="mt-6 w-full" size="lg" disabled={busy}>
              Оплатить
            </Button>
          </aside>
        </form>
      </Section>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} autoComplete={autoComplete} />
    </div>
  );
}
