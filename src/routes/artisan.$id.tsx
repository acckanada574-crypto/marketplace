import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { ProductGrid } from "@/components/product-card";
import type { Artisan, Product } from "@/lib/types";

export const Route = createFileRoute("/artisan/$id")({
  loader: async ({ params }) => {
    const res = await fetch(`/api/artisan/${params.id}`);
    if (res.status === 404) throw notFound();
    if (!res.ok) throw new Error("Не удалось загрузить мастера");
    const data = (await res.json()) as { artisan: Artisan; products: Product[] };
    return data;
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