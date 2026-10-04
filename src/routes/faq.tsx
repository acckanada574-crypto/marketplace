import { createFileRoute } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";
import { getSql } from "@/lib/db";

type FaqRow = {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  position: number;
};

async function getFaq() {
  const sql = await getSql();
  return sql<FaqRow>`
    select id, question, answer, category, position
    from faq
    where published = true
    order by position asc
  `;
}

export const Route = createFileRoute("/faq")({
  loader: () => getFaq(),
  component: FaqPage,
});

function FaqPage() {
  const items = Route.useLoaderData();

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading
          kicker="Помощь"
          title="Частые вопросы"
          description="Как заказать, как получить цифровой товар, как стать мастером."
        />
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {items.map((item) => (
            <details key={item.id} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium">
                {item.question}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            Пока вопросов нет. Загляните позже.
          </p>
        ) : null}
      </Section>
    </main>
  );
}