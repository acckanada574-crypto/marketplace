import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { ProductGrid } from "@/components/product-card";
import { getArtisanById, getProductsByArtisanId } from "@/lib/products.server";

export const Route = createFileRoute("/artisan/$id")({
  loader: async ({ params }) => {
    const artisan = await getArtisanById(params.id);
    if (!artisan) throw notFound();
    const works = await getProductsByArtisanId(artisan.id);
    return { artisan, works };
  },
  component: ArtisanPage,
});

function ArtisanPage() {
  const { artisan, works } = Route.useLoaderData();

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
        <ProductGrid products={works} />
      </Section>
    </main>
  );
}