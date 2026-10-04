import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Package, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout";
import { CATEGORIES } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { getHomeData } from "@/lib/products.server";

export const Route = createFileRoute("/")({
  loader: () => getHomeData(),
  component: Home,
});

function Home() {
  const { featured, digital, physical, artisans } = Route.useLoaderData();
  const heroProduct = featured[0];
  const heroArtisan = heroProduct
    ? artisans.find((a) => a.id === heroProduct.artisanId)
    : undefined;

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 pb-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16 lg:pb-16">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Маркетплейс ручной работы
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[1.08] font-medium tracking-tight sm:text-6xl">
              Вещи с теплом рук — и файлы, которые можно забрать сразу
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Керамика, лён, дерево, серебро — и рядом схемы, кисти, постеры. Один двор, два склада:
              почта для физического, мгновенная загрузка для цифрового.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/catalog">Открыть витрину</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/catalog" search={{ kind: "digital" }}>
                  Цифровые издания
                </Link>
              </Button>
            </div>
          </div>
          {heroProduct ? (
            <Link
              to="/product/$id"
              params={{ id: heroProduct.id }}
              className="relative overflow-hidden rounded-2xl bg-muted"
            >
              <img
                src={heroProduct.image}
                alt={heroProduct.title}
                className="aspect-photo w-full object-cover lg:aspect-auto lg:h-96"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-foreground/55 to-transparent p-5 text-primary-foreground">
                <div>
                  <p className="font-display text-xl">{heroProduct.title}</p>
                  <p className="text-sm text-primary-foreground/80">
                    {heroArtisan ? `${heroArtisan.name} · ${heroArtisan.city}` : ""}
                  </p>
                </div>
                <p className="tabular-nums">{formatPrice(heroProduct.price)}</p>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <Section className="grid grid-cols-3 gap-4 py-8 text-center md:text-left">
        <div>
          <p className="font-display text-3xl tabular-nums">16</p>
          <p className="mt-1 text-sm text-muted-foreground">работ на витрине</p>
        </div>
        <div>
          <p className="font-display text-3xl tabular-nums">{artisans.length}</p>
          <p className="mt-1 text-sm text-muted-foreground">мастерских</p>
        </div>
        <div>
          <p className="font-display text-3xl">2 склада</p>
          <p className="mt-1 text-sm text-muted-foreground">коробка и файл</p>
        </div>
      </Section>

      <Section className="pb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to="/catalog"
              search={{ category: cat.id }}
              className="flex h-11 shrink-0 items-center rounded-full border border-border bg-card px-4 text-sm hover:border-primary hover:text-primary"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Выбор двора</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight">Сейчас на виду</h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/catalog">
              Все работы <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <section className="mt-6 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Цифровое
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Схемы, кисти и принты — без ожидания почты
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Оплатили — скачали. Описания для вязания, бесшовные раппорты, постеры к печати.
              Лицензия указана в карточке.
            </p>
            <Button asChild className="mt-8 bg-background text-foreground hover:bg-background/90">
              <Link to="/catalog" search={{ kind: "digital" }}>
                К цифровым изданиям
              </Link>
            </Button>
          </div>
          <div className="grid gap-3">
            {digital.map((product) => (
              <Link
                key={product.id}
                to="/product/$id"
                params={{ id: product.id }}
                className="flex items-center gap-4 rounded-xl bg-primary-foreground/8 p-3 hover:bg-primary-foreground/12"
              >
                <img
                  src={product.image}
                  alt=""
                  className="size-16 rounded-md object-cover outline-primary-foreground/10"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{product.title}</p>
                  <p className="truncate text-sm text-primary-foreground/70">{product.subtitle}</p>
                </div>
                <p className="text-sm tabular-nums">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-medium tracking-tight">С полки мастерской</h2>
          <Button asChild variant="ghost">
            <Link to="/catalog" search={{ kind: "physical" }}>
              Физические <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
          {physical.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <h2 className="font-display mb-8 text-3xl font-medium tracking-tight">Мастерские</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artisans.map((artisan) => (
            <Link
              key={artisan.id}
              to="/artisan/$id"
              params={{ id: artisan.id }}
              className="rounded-2xl bg-card p-5 shadow-border transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-border font-display text-sm text-primary">
                {artisan.mark}
              </div>
              <p className="mt-4 font-display text-xl font-medium tracking-tight">{artisan.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {artisan.craft} · {artisan.city}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 pb-20 md:grid-cols-3">
        {[
          {
            icon: Package,
            title: "Выбрали",
            text: "Физическое уходит коробкой, цифровое — файлом. В одной корзине можно смешать оба.",
          },
          {
            icon: Truck,
            title: "Доставили",
            text: "Почта по России, 3–8 дней. Бесплатно от 6 000 ₽. Цифровое не стоит доставки.",
          },
          {
            icon: Download,
            title: "Скачали",
            text: "После оплаты цифровые издания лежат в заказе. Открываются снова, когда нужны.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-card p-6 shadow-border">
            <item.icon className="size-5 text-primary" />
            <p className="mt-4 font-display text-xl font-medium">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </Section>
    </main>
  );
}