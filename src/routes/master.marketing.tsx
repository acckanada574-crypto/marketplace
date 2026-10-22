import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, Copy } from "lucide-react";
import { PageHeading, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/master/marketing")({
  loader: () => apiFetch<any[]>("/api/my-products"),
  component: MarketingPage,
});

const TYPES = [
  { id: "telegram", label: "Пост в Telegram" },
  { id: "vk", label: "Пост в VK" },
  { id: "reels", label: "Идея для Reels" },
  { id: "hashtags", label: "Хэштеги" },
  { id: "image-prompt", label: "Промпт для фото" },
];

function MarketingPage() {
  const products = Route.useLoaderData();
  const [selectedId, setSelectedId] = useState<string>(products[0]?.id ?? "");
  const [busy, setBusy] = useState<string | null>(null);
  const [result, setResult] = useState<{ type: string; text: string } | null>(null);

  async function generate(type: string) {
    if (!selectedId) { toast.error("Выберите товар"); return; }
    setBusy(type);
    setResult(null);
    try {
      const res = await fetch("/api/generate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: selectedId, type }),
      });
      if (!res.ok) throw new Error("ИИ не ответил");
      const data = await res.json();
      setResult({ type, text: data.text });
    } catch (err) {
      toast.error("Ошибка ИИ. Проверьте, запущена ли Ollama.");
    } finally {
      setBusy(null);
    }
  }

  async function copyToClipboard() {
    if (!result) return;
    await navigator.clipboard.writeText(result.text);
    toast.success("Скопировано");
  }

  return (
    <main className="py-10 pb-20">
      <Section className="mx-auto max-w-3xl">
        <PageHeading
          kicker="Маркетинг"
          title="ИИ-маркетолог"
          description="Сгенерируйте посты и идеи для соцсетей на основе ваших товаров. Всё работает локально, без интернета."
        />

        {products.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl shadow-border mt-8">
            <p className="text-muted-foreground">Сначала добавьте хотя бы один товар.</p>
          </div>
        ) : (
          <>
            <div className="rounded-2xl bg-card p-6 shadow-border mt-8">
              <label className="text-sm font-medium">Выберите товар</label>
              <select
                className="mt-2 w-full h-11 rounded-md border border-input bg-background px-3 text-sm"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
              >
                {products.map((p: any) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {formatPrice(p.price)}
                  </option>
                ))}
              </select>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {TYPES.map((t) => (
                  <Button
                    key={t.id}
                    type="button"
                    variant="outline"
                    onClick={() => generate(t.id)}
                    disabled={busy !== null}
                    className="justify-start"
                  >
                    <Sparkles className="size-4 mr-2" />
                    {busy === t.id ? "Пишем..." : t.label}
                  </Button>
                ))}
              </div>
            </div>

            {result && (
              <div className="rounded-2xl bg-card p-6 shadow-border mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-medium">
                    {TYPES.find((t) => t.id === result.type)?.label}
                  </h3>
                  <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                    <Copy className="size-4 mr-1" />
                    Копировать
                  </Button>
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">
                  {result.text}
                </pre>
              </div>
            )}
          </>
        )}
      </Section>
    </main>
  );
}