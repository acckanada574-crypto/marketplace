import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { ProductGrid } from "@/components/product-card";
import { apiFetch, ApiError } from "@/lib/api-fetch";
import type { Artisan, Product } from "@/lib/types";

export const Route = createFileRoute("/artisan/$id")({
  loader: async ({ params }) => {
    try {
      return await apiFetch<{ artisan: Artisan; products: Product[] }>(
        `/api/artisan/${params.id}`,
      );
    } catch (err) {
      if (err instanceof ApiError && err.status === 404) throw notFound();
      throw err;
    }
  },
  component: ArtisanPage,
});

function ArtisanPage() {
  const { artisan, products } = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section>
        <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-border font-display text-lg text-primary">
          {artisan.mark}
        </div>
        <PageHeading
          kicker={`${artisan.craft} · ${artisan.city} · с ${artisan.since}`}
          title={artisan.name}
          description={artisan.bio}
        />
        <ProductGrid products={products} />
      </Section>
    </main>
  );
}