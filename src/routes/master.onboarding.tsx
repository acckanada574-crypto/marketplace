import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { becomeArtisan } from "@/lib/artisans";

export const Route = createFileRoute("/master/onboarding")({
  component: OnboardingPage,
});

function OnboardingPage() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const [busy, setBusy] = useState(false);

  if (isPending) return null;
  if (!user) return <RedirectToSignIn />;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const craft = String(data.get("craft") ?? "").trim();
    const bio = String(data.get("bio") ?? "").trim();
    const mark = String(data.get("mark") ?? "").trim();

    if (!name || !city || !craft || !bio || !mark) {
      toast.error("Заполните все поля");
      return;
    }
    if (mark.length > 3) {
      toast.error("Инициалы: не больше 3 символов");
      return;
    }

    setBusy(true);
    try {
      const result = await becomeArtisan({ data: { name, city, craft, bio, mark } });
      toast.success(result.created ? "Мастерская создана!" : "Добро пожаловать обратно!");
      void navigate({ to: "/artisan/$id", params: { id: result.id } });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
      setBusy(false);
    }
  }

  return (
    <main className="py-16 pb-24">
      <Section className="mx-auto max-w-2xl">
        <PageHeading
          kicker="Мастерская"
          title="Станьте мастером"
          description="Заполните профиль. После этого вы сможете выставлять работы на витрину."
        />
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-2">
            <Label htmlFor="name">Название мастерской</Label>
            <Input id="name" name="name" required placeholder="Алёна Корельская" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="city">Город</Label>
              <Input id="city" name="city" required placeholder="Псков" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="craft">Ремесло</Label>
              <Input id="craft" name="craft" required placeholder="Керамика" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">О себе</Label>
            <Textarea
              id="bio"
              name="bio"
              required
              rows={5}
              placeholder="Что делаете, из чего, для кого"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mark">Инициалы (для аватарки)</Label>
            <Input id="mark" name="mark" required maxLength={3} placeholder="АК" />
          </div>
          <Button type="submit" size="lg" disabled={busy}>
            {busy ? "Секунду…" : "Создать мастерскую"}
          </Button>
        </form>
      </Section>
    </main>
  );
}