import { createFileRoute } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/master/marketing")({
  // ВАЖНО: Путь теперь совпадает с нашим API-файлом
  loader: () => apiFetch<any>("/api/master/marketing"),
  component: MasterMarketingPage,
});

function MasterMarketingPage() {
  // Защита от пустых данных
  const stats = Route.useLoaderData() || { totalSales: 0, totalRevenue: 0, totalViews: 0, conversionRate: 0 };

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-4xl">
        <PageHeading
          kicker="Мастерская"
          title="ИИ-маркетолог"
        />
        <p className="mt-2 text-muted-foreground">
          Аналитика ваших продаж и рекомендации по продвижению.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Всего продаж</p>
            <p className="mt-2 text-2xl font-semibold">{stats.totalSales}</p>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Выручка</p>
            <p className="mt-2 text-2xl font-semibold">{formatPrice(stats.totalRevenue)}</p>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Просмотры</p>
            <p className="mt-2 text-2xl font-semibold">{stats.totalViews}</p>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Конверсия</p>
            <p className="mt-2 text-2xl font-semibold">{stats.conversionRate}%</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-dashed p-10 text-center">
          <p className="text-muted-foreground">
            Скоро здесь появятся графики и ИИ-рекомендации по вашим товарам.
          </p>
        </div>
      </Section>
    </main>
  );
}