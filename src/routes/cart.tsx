import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { formatPrice, FREE_SHIPPING_FROM } from "@/lib/format";
import { useCartDetails, useMarket } from "@/lib/store";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const { lines, subtotal, shipping, total, hasPhysical } = useCartDetails();
  const setQty = useMarket((s) => s.setQty);
  const removeFromCart = useMarket((s) => s.removeFromCart);

  if (lines.length === 0) {
    return (
      <main className="py-16 pb-24">
        <Section className="max-w-lg text-center">
          <PageHeading title="Корзина пуста" description="На витрине есть и коробки, и файлы." />
          <Button asChild>
            <Link to="/catalog">К работам</Link>
          </Button>
        </Section>
      </main>
    );
  }

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading kicker="Заказ" title="Корзина" />
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ul className="flex flex-col gap-4">
            {lines.map((line) => (
              <li
                key={line.productId}
                className="flex gap-4 rounded-2xl bg-card p-4 shadow-border"
              >
                <Link to="/product/$id" params={{ id: line.product.id }} className="shrink-0">
                  <img
                    src={line.product.image}
                    alt=""
                    className="size-24 rounded-lg object-cover sm:size-28"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    to="/product/$id"
                    params={{ id: line.product.id }}
                    className="font-display text-lg font-medium tracking-tight hover:text-primary"
                  >
                    {line.product.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{line.product.subtitle}</p>
                  <p className="mt-2 font-medium tabular-nums">{formatPrice(line.product.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    {line.product.kind === "physical" ? (
                      <div className="flex h-10 items-center rounded-md border border-border">
                        <button
                          type="button"
                          className="size-10"
                          aria-label="Меньше"
                          onClick={() => setQty(line.productId, line.qty - 1)}
                        >
                          <Minus className="mx-auto size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          className="size-10"
                          aria-label="Больше"
                          onClick={() => setQty(line.productId, line.qty + 1)}
                        >
                          <Plus className="mx-auto size-3.5" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">Цифровой файл · 1 шт.</p>
                    )}
                    <button
                      type="button"
                      className="ml-auto flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                      aria-label="Убрать"
                      onClick={() => removeFromCart(line.productId)}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-2xl bg-card p-6 shadow-border">
            <p className="font-display text-xl font-medium">Итого</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Работы</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Доставка</dt>
                <dd className="tabular-nums">{shipping === 0 ? "Бесплатно" : formatPrice(shipping)}</dd>
              </div>
            </dl>
            {hasPhysical && shipping > 0 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Ещё {formatPrice(FREE_SHIPPING_FROM - subtotal)} до бесплатной доставки.
              </p>
            ) : null}
            <p className="mt-4 flex justify-between border-t border-border pt-4 text-base font-medium">
              <span>К оплате</span>
              <span className="tabular-nums">{formatPrice(total)}</span>
            </p>
            <Button asChild className="mt-6 w-full" size="lg">
              <Link to="/checkout">Оформить</Link>
            </Button>
          </aside>
        </div>
      </Section>
    </main>
  );
}
