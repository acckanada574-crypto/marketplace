import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice, kindLabel } from "@/lib/format";
import { useMarket } from "@/lib/store";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const favorites = useMarket((s) => s.favorites);
  const toggleFavorite = useMarket((s) => s.toggleFavorite);
  const loved = favorites.includes(product.id);

  return (
    <article className="group flex flex-col">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative overflow-hidden rounded-xl bg-muted"
      >
        <img
          src={product.image}
          alt={product.title}
          className="aspect-photo w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant={product.kind === "digital" ? "digital" : "muted"}>
            {kindLabel(product.kind)}
          </Badge>
          {product.isNew ? <Badge variant="default">Новое</Badge> : null}
        </div>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="font-display text-lg leading-snug font-medium tracking-tight text-foreground hover:text-primary"
          >
            {product.title}
          </Link>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{product.subtitle}</p>
        </div>
        <button
          type="button"
          aria-label={loved ? "Убрать из избранного" : "В избранное"}
          onClick={() => toggleFavorite(product.id)}
          className={cn(
            "relative size-11 shrink-0 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            loved && "text-primary",
          )}
        >
          <Heart className={cn("mx-auto size-4", loved && "fill-primary")} />
        </button>
      </div>
      <p className="mt-2 font-medium tabular-nums">{formatPrice(product.price)}</p>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl bg-card px-5 py-12 text-center text-muted-foreground shadow-border">
        Ничего не нашлось. Снимите фильтр или попробуйте другое слово.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
