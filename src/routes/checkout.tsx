import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartDetails, useMarket } from "@/lib/store";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const { lines, subtotal, shipping, total, hasPhysical } = useCartDetails();
  const clearCart = useMarket((s) => s.clearCart);
  const [busy, setBusy] = useState(false);

  if (isPending) return null;
  if (!user) return <RedirectToSignIn />;

  if (lines.length === 0) {
    return (
      <main className="py-20 text-center">
        <h1 className="font-display text-3xl">Корзина пуста</h1>
        <Button className="mt-6" onClick={() => navigate({ to: "/catalog" })}>
          В каталог
        </Button>
      </main>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const customer = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      city: String(data.get("city") ?? "").trim(),
      address: String(data.get("address") ?? "").trim(),
    };

    if (!customer.name || !customer.email || !customer.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }

    setBusy(true);
    try {
      const payload = {
        customer,
        items: lines.map((l) => ({
          productId: l.product.id,
          artisanId: l.product.artisanId,
          title: l.product.title,
          price: l.product.price,
          qty: l.qty,
          kind: l.product.kind,
          image: l.product.image,
        })),
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "same-origin",
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Ошибка при оформлении");
      }

      const result = await res.json();
      toast.success("Заказ оформлен!");
      clearCart();
      
      window.location.href = `/order/${result.orderId}`;
      
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
      setBusy(false);
    }
  }

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-2xl">
        <PageHeading
          kicker="Оформление"
          title="Подтверждение заказа"
          description="Проверьте данные и заполните информацию для доставки."
        />
        
        <div className="mb-8 rounded-2xl bg-card p-6 shadow-border">
          <h2 className="font-display text-xl mb-4">Ваш заказ</h2>
          <ul className="space-y-3">
            {lines.map((l) => (
              <li key={l.product.id} className="flex justify-between text-sm">
                <span>{l.product.title} × {l.qty}</span>
                <span className="tabular-nums">{formatPrice(l.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Товары:</span> <span>{formatPrice(subtotal)}</span></div>
            {hasPhysical && (
              <div className="flex justify-between"><span>Доставка:</span> <span>{shipping === 0 ? "Бесплатно" : formatPrice(shipping)}</span></div>
            )}
            <div className="flex justify-between font-medium text-base mt-2 pt-2 border-t border-border">
              <span>Итого:</span> <span className="tabular-nums">{formatPrice(total)}</span>
            </div>
            {hasPhysical && (
              <div className="text-xs text-muted-foreground mt-2">
                Оплата частями: сейчас {formatPrice(Math.round(total / 2))}, остаток при получении.
              </div>
            )}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-2">
            <Label htmlFor="name">Имя и фамилия *</Label>
            <Input id="name" name="name" required placeholder="Иван Иванов" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input id="phone" name="phone" required placeholder="+7 (999) 000-00-00" />
            </div>
          </div>
          {hasPhysical && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="city">Город</Label>
                <Input id="city" name="city" placeholder="Москва" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Адрес доставки</Label>
                <Input id="address" name="address" placeholder="Улица, дом, квартира" />
              </div>
            </>
          )}
          <Button type="submit" size="lg" disabled={busy} className="w-full mt-4">
            {busy ? "Оформляем…" : "Подтвердить заказ"}
          </Button>
        </form>
      </Section>
    </main>
  );
}