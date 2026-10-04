import { createFileRoute, Link } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { PageHeading, Section } from "@/components/layout";
import { ProductGrid } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CATEGORIES, type CategoryId, type ProductKind } from "@/lib/types";
import { getFilteredProducts, type ProductFilter } from "@/lib/products.server";
import { cn } from "@/lib/utils";

export type CatalogSearch = {
  q?: string;
  kind?: ProductKind;
  category?: CategoryId;
  sort?: "popular" | "new" | "price-asc" | "price-desc";
};

function parseSearch(search: Record<string, unknown>): CatalogSearch {
  const kind = search.kind === "physical" || search.kind === "digital" ? search.kind : undefined;
  const category = CATEGORIES.some((c) => c.id === search.category)
    ? (search.category as CategoryId)
    : undefined;
  const sort =
    search.sort === "new" || search.sort === "price-asc" || search.sort === "price-desc"
      ? search.sort
      : "popular";
  return {
    q: typeof search.q === "string" ? search.q : undefined,
    kind,
    category,
    sort,
  };
}

export const Route = createFileRoute("/catalog")({
  validateSearch: parseSearch,
  loaderDeps: ({ search }) => ({ search }),
  loader: ({ deps }) => getFilteredProducts(deps.search as ProductFilter),
  component: CatalogPage,
});

function Filters({
  search,
  counts,
}: {
  search: CatalogSearch;
  counts: { all: number; physical: number; digital: number };
}) {
  const navigate = Route.useNavigate();
  function patch(partial: Partial<CatalogSearch>) {
    void navigate({
      to: "/catalog",
      search: (prev) => ({ ...prev, ...partial }),
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium">Тип</p>
        <div className="mt-3 flex flex-col gap-1">
          {(
            [
              { id: undefined, label: "Все", n: counts.all },
              { id: "physical" as const, label: "Физические", n: counts.physical },
              { id: "digital" as const, label: "Цифровые", n: counts.digital },
            ] as const
          ).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => patch({ kind: item.id })}
              className={cn(
                "flex h-10 items-center justify-between rounded-md px-3 text-sm",
                search.kind === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              <span>{item.label}</span>
              <span className="tabular-nums opacity-70">{item.n}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium">Категория</p>
        <div className="mt-3 flex flex-col gap-1">
          <button
            type="button"
            onClick={() => patch({ category: undefined })}
            className={cn(
              "flex h-10 items-center rounded-md px-3 text-left text-sm",
              !search.category ? "bg-muted" : "hover:bg-muted",
            )}
          >
            Все категории
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => patch({ category: cat.id })}
              className={cn(
                "flex h-10 items-center rounded-md px-3 text-left text-sm",
                search.category === cat.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filtered = Route.useLoaderData();
  const [open, setOpen] = useState(false);

  const counts = {
    all: filtered.length,
    physical: filtered.filter((p) => p.kind === "physical").length,
    digital: filtered.filter((p) => p.kind === "digital").length,
  };

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading
          kicker="Витрина"
          title={
            search.kind === "digital"
              ? "Цифровые издания"
              : search.kind === "physical"
                ? "Физические работы"
                : "Все работы двора"
          }
          description="Фильтруйте по типу и ремеслу. Цифровое скачивается после оплаты, физическое едет почтой."
        />
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            defaultValue={search.q ?? ""}
            placeholder="Название, материал, мастер"
            className="max-w-md"
            onChange={(e) => {
              const value = e.target.value;
              void navigate({
                to: "/catalog",
                search: (prev) => ({ ...prev, q: value || undefined }),
                replace: true,
              });
            }}
          />
          <div className="flex flex-1 items-center gap-2">
            <select
              className="h-11 rounded-md border border-input bg-card px-3 text-sm"
              value={search.sort ?? "popular"}
              onChange={(e) =>
                void navigate({
                  to: "/catalog",
                  search: (prev) => ({
                    ...prev,
                    sort: e.target.value as CatalogSearch["sort"],
                  }),
                })
              }
            >
              <option value="popular">Сначала любимые</option>
              <option value="new">Новое</option>
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
            </select>
            <Button type="button" variant="outline" className="lg:hidden" onClick={() => setOpen(true)}>
              <SlidersHorizontal className="size-4" />
              Фильтры
            </Button>
            <p className="ml-auto hidden text-sm text-muted-foreground sm:block">
              {filtered.length} работ
            </p>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-catalog">
          <aside className="hidden lg:block">
            <Filters search={search} counts={counts} />
          </aside>
          <div>
            <ProductGrid products={filtered} />
            <p className="mt-10 text-sm text-muted-foreground">
              Своё изделие можно{" "}
              <Link to="/sell" className="text-primary underline-offset-4 hover:underline">
                выставить в мастерскую
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Фильтры</SheetTitle>
          </SheetHeader>
          <div className="px-6 pb-8">
            <Filters search={search} counts={counts} />
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
}