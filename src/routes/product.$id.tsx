import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Download, Heart, Minus, Plus, Share2, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { downloadProductFile } from "@/lib/downloads";
import { formatPrice, kindLabel } from "@/lib/format";
import { useMarket } from "@/lib/store";
import { apiFetch, ApiError } from "@/lib/api-fetch";
import type { Artisan, Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  loader: async ({ params }) => {
    try {
      return await apiFetch<{ product: Product; artisan: Artisan; related: Product[] }>(
        `/api/product/${params.id}`,
      );
    } catch (err) {
      if (err instanceof ApiError && err.status === 404) throw notFound();
      throw err;
    }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { product, artisan } = loaderData;
    const title = `${product.title} — ${product.subtitle} | Живица`;
    const description = product.description.slice(0, 160);
    const url = `https://zhivitsa.ru/product/${product.id}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: product.image },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: product.image },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            image: product.image,
            description: product.description,
            brand: { "@type": "Brand", name: "Живица" },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "RUB",
              availability: product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
            aggregateRating: product.reviewCount > 0 ? {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
            } : undefined,
            seller: { "@type": "Person", name: artisan.name },
          },
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, artisan, related } = Route.useLoaderData();
  const addToCart = useMarket((s) => s.addToCart);
  const addListing = useMarket((s) => s.addListing);
  const favorites = useMarket((s) => s.favorites);
  const toggleFavorite = useMarket((s) => s.toggleFavorite);
  const loved = favorites.includes(product.id);
  const [qty, setQty] = useState(1);

  function add() {
    addListing(product);
    addToCart(product.id, qty);
    toast.success("В корзине", { description: product.title });
  }

  async function handleShare() {
    const baseUrl = `${window.location.origin}/product/${product.id}`;
    const utmUrl = `${baseUrl}?utm_source=share&utm_medium=product&utm_campaign=zhivitsa`;

    const shareData = {
      title: product.title,
      text: `${product.title} — ${product.subtitle}. На Живице.`,
      url: utmUrl,
    };

    if (navigator.share) {
      try { await navigator.share(shareData); return; } catch (e) { /* отменил */ }
    }
    try {
      await navigator.clipboard.writeText(utmUrl);
      toast.success("Ссылка скопирована", { description: "Отправьте её другу" });
    } catch {
      toast.error("Не удалось скопировать");
    }
  }

  return (
    <main className="py-10 pb-20">
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-photo w-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={product.kind === "digital" ? "digital" : "muted"}>
                {kindLabel(product.kind)}
              </Badge>
              {product.isNew ? <Badge variant="default">Новое</Badge> : null}
              {product.custom ? <Badge>Ваша работа</Badge> : null}
            </div>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-2 text-muted-foreground">{product.subtitle}</p>
            {artisan ? (
              <Link
                to="/artisan/$id"
                params={{ id: artisan.id }}
                className="mt-4 inline-flex items-center gap-2 text-sm hover:text-primary"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-border font-display text-xs">
                  {artisan.mark}
                </span>
                {artisan.name} · {artisan.city}
              </Link>
            ) : null}
            <p className="mt-6 font-display text-3xl tabular-nums">{formatPrice(product.price)}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.rating.toFixed(1)} · {product.reviewCount} оценок
            </p>
            <p className="mt-6 max-w-prose leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {product.kind === "physical" ? (
                <div className="flex h-11 items-center rounded-md border border-border">
                  <button
                    type="button"
                    className="size-11"
                    aria-label="Меньше"
                    onClick={() => setQty((n) => Math.max(1, n - 1))}
                  >
                    <Minus className="mx-auto size-4" />
                  </button>
                  <span className="w-8 text-center tabular-nums">{qty}</span>
                  <button
                    type="button"
                    className="size-11"
                    aria-label="Больше"
                    onClick={() => setQty((n) => Math.min(product.stock, n + 1))}
                  >
                    <Plus className="mx-auto size-4" />
                  </button>
                </div>
              ) : null}
              <Button size="lg" onClick={add} disabled={product.stock <= 0}>
                {product.stock <= 0 ? "Нет в наличии" : "В корзину"}
              </Button>
              <Button
                size="lg"
                variant={loved ? "secondary" : "outline"}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart className={cn("size-4", loved && "fill-primary text-primary")} />
                {loved ? "В избранном" : "Избранное"}
              </Button>
              <Button size="lg" variant="ghost" onClick={handleShare}>
                <Share2 className="size-4" />
                Поделиться
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm">
              {product.kind === "digital" ? (
                <p className="flex items-start gap-2 text-muted-foreground">
                  <Download className="mt-0.5 size-4 shrink-0 text-primary" />
                  Мгновенная загрузка после оплаты. {product.digitalFormat}
                  {product.fileSize ? ` · ${product.fileSize}` : ""}
                </p>
              ) : (
                <p className="flex items-start gap-2 text-muted-foreground">
                  <Truck className="mt-0.5 size-4 shrink-0 text-primary" />
                  Отправка через {product.shipsInDays ?? 5} дн. Осталось {product.stock} шт.
                </p>
              )}
              <p className="flex items-start gap-2 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {product.kind === "digital"
                  ? product.license
                  : "Упаковка мастера, страховка на пересылку"}
              </p>
            </div>

            <Separator className="my-8" />
            <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              {product.materials ? (
                <div>
                  <dt className="text-muted-foreground">Материалы</dt>
                  <dd className="mt-1">{product.materials}</dd>
                </div>
              ) : null}
              {product.size ? (
                <div>
                  <dt className="text-muted-foreground">Размер</dt>
                  <dd className="mt-1">{product.size}</dd>
                </div>
              ) : null}
              {product.care ? (
                <div>
                  <dt className="text-muted-foreground">Уход</dt>
                  <dd className="mt-1">{product.care}</dd>
                </div>
              ) : null}
              {product.digitalPages ? (
                <div>
                  <dt className="text-muted-foreground">Состав файла</dt>
                  <dd className="mt-1">{product.digitalPages}</dd>
                </div>
              ) : null}
            </dl>
            {product.kind === "digital" ? (
              <p className="mt-6 text-xs text-muted-foreground">
                На этой странице можно посмотреть образец. Полный файл выдаётся в заказе. Для
                знакомства с форматом —{" "}
                <button
                  type="button"
                  className="underline underline-offset-4"
                  onClick={() => downloadProductFile(product)}
                >
                  скачать демо-фрагмент
                </button>
                .
              </p>
            ) : null}
          </div>
        </div>

        {product.reviews.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-medium">Отзывы</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {product.reviews.map((review) => (
                <figure key={review.id} className="rounded-2xl bg-card p-5 shadow-border">
                  <p className="text-sm text-muted-foreground">
                    {review.author} · {review.rating.toFixed(1)}
                  </p>
                  <blockquote className="mt-2 leading-relaxed">{review.text}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-display mb-6 text-2xl font-medium">Рядом на витрине</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ) : null}
      </Section>
    </main>
  );
}