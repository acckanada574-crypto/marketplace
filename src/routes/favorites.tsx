import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { ProductGrid } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { findProduct, useMarket } from "@/lib/store";

export const Route = createFileRoute("/favorites")({ component: FavoritesPage });

function FavoritesPage() {
  const favorites = useMarket((s) => s.favorites);
  const listings = useMarket((s) => s.listings);
  const products = favorites
    .map((id) => findProduct(listings, id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading kicker="Витрина" title="Избранное" />
        {products.length === 0 ? (
          <div className="rounded-2xl bg-card px-6 py-12 text-center shadow-border">
            <p className="text-muted-foreground">Пока пусто — отметьте работы сердцем на карточке.</p>
            <Button asChild className="mt-6">
              <Link to="/catalog">К работам</Link>
            </Button>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </Section>
    </main>
  );
}
