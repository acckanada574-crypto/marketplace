import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api-fetch";

export const Route = createFileRoute("/about")({
  loader: () => apiFetch<any>("/api/about"),
  component: AboutPage,
});

function AboutPage() {
  const { text, artisans } = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading kicker="Двор" title="О нас" />
        
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {text}
        </p>

        <h2 className="mt-12 font-display text-2xl font-medium">Наши мастера</h2>
        
        {artisans && artisans.length > 0 ? (
          <ul className="mt-6 space-y-4">
            {artisans.map((a: any) => (
              <li key={a.id} className="flex items-center gap-4 rounded-xl border bg-card p-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-muted font-medium">
                  {a.name[0]}
                </div>
                <div>
                  <p className="font-medium">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.craft}, {a.city}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-muted-foreground">Мастера пока не добавлены.</p>
        )}

        <Button asChild className="mt-10">
          <Link to="/catalog">На витрину</Link>
        </Button>
      </Section>
    </main>
  );
}