import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { getAllArtisans } from "@/lib/products.server";

export const Route = createFileRoute("/about")({
  loader: () => getAllArtisans(),
  component: AboutPage,
});

function AboutPage() {
  const artisans = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section className="max-w-3xl">
        <PageHeading
          kicker="О дворе"
          title="Живица — место, где ручная работа не делится на «настоящую» и «файл»"
        />
        <div className="space-y-5 text-base leading-relaxed">
          <p>
            Живица — это смола, которая заживляет дерево. Название двора про вещи, которые делают
            руками и отдают дальше: кружку, плед, кольцо — или схему, по которой кто-то свяжет
            своё.
          </p>
          <p>
            Физические работы едут почтой из мастерских Пскова, Костромы, Вологды, Петербурга и
            Казани. Цифровые издания студии «Север» открываются сразу после оплаты: PDF, кисти,
            раппорты, постеры к печати.
          </p>
          <p>
            Оплата на этой витрине демонстрационная. Заказ и избранное хранятся в вашем браузере,
            файлы можно скачать повторно из раздела заказов.
          </p>
        </div>
        <h2 className="font-display mt-12 text-2xl font-medium">Мастерские</h2>
        <ul className="mt-6 space-y-5">
          {artisans.map((a) => (
            <li key={a.id}>
              <Link to="/artisan/$id" params={{ id: a.id }} className="hover:text-primary">
                <span className="font-medium">{a.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {a.craft}, {a.city}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-10">
          <Link to="/catalog">На витрину</Link>
        </Button>
      </Section>
    </main>
  );
}