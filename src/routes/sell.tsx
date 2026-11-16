import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeading, Section } from "@/components/layout";
import { authClient } from "@/lib/auth/client";

export const Route = createFileRoute("/sell")({ component: SellPage });

function SellPage() {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/products", { method: "POST", body: new FormData(e.currentTarget) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка");
      alert("Товар отправлен на проверку. Публикация произойдёт после модерации.");
      navigate({ to: "/" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    } finally {
      setLoading(false);
    }
  }

  if (!session?.user) {
    return <main><Section className="py-10"><PageHeading kicker="Мастерская" title="Выставить товар" /><p className="mt-4 text-muted-foreground">Чтобы выставить товар, нужно войти в аккаунт.</p></Section></main>;
  }

  return (
    <main><Section className="py-10">
      <PageHeading kicker="Мастерская" title="Выставить товар" />
      <p className="mt-3 text-muted-foreground">Загрузите до 8 фото и описание. ИИ подготовит карточку для проверки.</p>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg space-y-4">
        <div><label className="block text-sm font-medium">Фото товара *</label><input type="file" name="images" accept="image/jpeg,image/png,image/webp" multiple required className="mt-1 block w-full rounded border p-2" /><p className="mt-1 text-xs text-muted-foreground">JPG, PNG или WebP; до 8 файлов, каждый не более 10 МБ.</p></div>
        <div><label className="block text-sm font-medium">Название *</label><input type="text" name="title" required maxLength={160} placeholder="Кружка «Туман»" className="mt-1 block w-full rounded border p-2" /></div>
        <div><label className="block text-sm font-medium">Цена, ₽ *</label><input type="number" name="price" required min={1} step={1} placeholder="3200" className="mt-1 block w-full rounded border p-2" /></div>
        <div><label className="block text-sm font-medium">Пара слов о товаре</label><textarea name="description" rows={3} maxLength={5000} placeholder="Керамика, ручная лепка, 300 мл" className="mt-1 block w-full rounded border p-2" /></div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="rounded-lg bg-primary px-6 py-3 text-primary-foreground disabled:opacity-50">{loading ? "Отправка..." : "Отправить на проверку"}</button>
      </form>
    </Section></main>
  );
}