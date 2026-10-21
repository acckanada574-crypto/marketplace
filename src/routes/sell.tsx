import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { CATEGORIES, type CategoryId, type ProductKind } from "@/lib/types";

export const Route = createFileRoute("/sell")({ component: SellPage });

async function fileToDataUrl(file: File) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = url;
    });
    const canvas = document.createElement("canvas");
    const max = 800;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("canvas");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.75);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function SellPage() {
  const { user, isPending } = useCurrentUserState();
  const [busy, setBusy] = useState(false);
  const [kind, setKind] = useState<ProductKind>("physical");

  if (isPending) return null;
  if (!user) return <RedirectToSignIn />;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const price = Number(data.get("price"));

    if (!title || !description || !Number.isFinite(price) || price <= 0) {
      toast.error("Нужны название, описание и цена");
      return;
    }

    setBusy(true);
    try {
      const file = (data.get("image") as File | null) ?? null;
      let image = "/products/digital-north.svg";
      if (file && file.size > 0) {
        image = await fileToDataUrl(file);
      }

      const payload = {
        title,
        subtitle: String(data.get("subtitle") ?? "").trim() || "Ручная работа",
        description,
        price: Math.round(price),
        kind,
        category: (String(data.get("category")) as CategoryId) || "home",
        image,
        materials: String(data.get("materials") ?? "").trim() || null,
        stock: kind === "digital" ? 999 : Math.max(1, Number(data.get("stock")) || 1),
        digitalFormat: kind === "digital" ? String(data.get("format") ?? "").trim() || "Файл" : null,
        digitalPages: null,
        license: kind === "digital" ? "Личное использование" : null,
        fileSize: null,
      };

      const res = await fetch("/api/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "same-origin",
      });

      if (!res.ok) {
        const errBody = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(errBody.error ?? "Не удалось сохранить товар");
      }

      const result = (await res.json()) as { id: string };
      toast.success("Работа на витрине");
      form.reset();
      
      // Принудительный переход на страницу товара
      window.location.href = `/product/${result.id}`;
      
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="py-10 pb-20">
      <Section>
        <PageHeading
          kicker="Мастерская"
          title="Выставить работу"
          description="Добавьте физическую вещь или цифровой файл. Карточка сразу появится на витрине."
        />
        <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Название</Label>
              <Input id="title" name="title" required placeholder="Миска «Утро»" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subtitle">Коротко</Label>
              <Input id="subtitle" name="subtitle" placeholder="Шамот, молочная глазурь" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Рассказ</Label>
              <Textarea id="description" name="description" required rows={5} placeholder="Как сделано, из чего, для кого" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="price">Цена, ₽</Label>
                <Input id="price" name="price" type="number" min={1} step={1} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Категория</Label>
                <select id="category" name="category" className="h-11 rounded-md border border-input bg-card px-3 text-sm">
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <fieldset className="grid gap-2">
              <legend className="text-sm font-medium">Тип</legend>
              <div className="flex gap-2">
                <Button type="button" variant={kind === "physical" ? "default" : "outline"} onClick={() => setKind("physical")}>Физический</Button>
                <Button type="button" variant={kind === "digital" ? "default" : "outline"} onClick={() => setKind("digital")}>Цифровой</Button>
              </div>
            </fieldset>
            {kind === "physical" ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="materials">Материалы</Label>
                  <Input id="materials" name="materials" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stock">Сколько штук</Label>
                  <Input id="stock" name="stock" type="number" min={1} defaultValue={1} />
                </div>
              </div>
            ) : (
              <div className="grid gap-2">
                <Label htmlFor="format">Формат файла</Label>
                <Input id="format" name="format" placeholder="PDF, PNG, SVG" />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="image">Фото</Label>
              <Input id="image" name="image" type="file" accept="image/*" />
              <p className="text-xs text-muted-foreground">Необязательно. Без фото поставим спокойную обложку.</p>
            </div>
            <Button type="submit" size="lg" disabled={busy}>
              {busy ? "Секунду…" : "Выставить на витрину"}
            </Button>
          </div>
        </form>
      </Section>
    </main>
  );
}