import { createFileRoute } from "@tanstack/react-router";
import { PageHeading, Section } from "@/components/layout";

export const Route = createFileRoute("/mascot")({ component: MascotPage });

function MascotPage() {
  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-2xl text-center">
        <PageHeading
          kicker="Талисман"
          title="Знакомься: Живчик"
          description="Дух леса, который живёт в каждой вещи, сделанной руками."
        />

        <img
          src="/mascot.png"
          alt="Живчик — талисман Живицы"
          className="mx-auto mt-8 w-full max-w-md rounded-2xl shadow-border"
        />

        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          Живчик — это капля смолы, которая заживляет дерево. Он любопытный, немного неуклюжий
          и очень любит трогать всё руками. Он живёт в каждой керамической чашке, в каждом
          льняном платье, в каждом кольце — и напоминает, что вещи с теплом рук не бывают
          одинаковыми.
        </p>
      </Section>
    </main>
  );
}