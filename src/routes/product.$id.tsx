import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";
import { authClient } from "@/lib/auth/client";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => apiFetch<any>(`/api/product/${params.id}`),
  component: ProductPage,
});

function ProductPage() {
  const { product, artisan, reviews } = Route.useLoaderData();
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();

  const [cartStatus, setCartStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [cartError, setCartError] = useState("");
  const [reviewForm, setReviewForm] = useState({ rating: 5, text: "" });
  const [reviewStatus, setReviewStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isLoggedIn = !!session?.user;
  const rating = Number(product.rating) || 0;
  const reviewCount = Number(product.review_count) || 0;
  const images = Array.isArray(product.images) ? product.images : [];
  const allImages = [product.image, ...images].filter(Boolean);

  async function handleAddToCart() {
    if (!isLoggedIn) {
      navigate({ to: "/login" });
      return;
    }
    setCartStatus("loading");
    setCartError("");
    try {
      await apiFetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      setCartStatus("success");
      setTimeout(() => setCartStatus("idle"), 2500);
    } catch (err: any) {
      setCartStatus("error");
      setCartError(err.message || "Не удалось добавить в корзину");
    }
  }

  async function handleSubmitReview(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate({ to: "/login" });
      return;
    }
    if (!reviewForm.text.trim()) return;

    setReviewStatus("loading");
    try {
      await apiFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({
          productId: product.id,
          rating: reviewForm.rating,
          text: reviewForm.text,
        }),
      });
      setReviewStatus("success");
      setReviewForm({ rating: 5, text: "" });
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      setReviewStatus("error");
    }
  }

  return (
    <main className="py-10 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img src={product.image} alt={product.title} className="w-full h-auto object-cover aspect-square" />
            </div>
            {allImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {allImages.slice(1, 5).map((img: string, i: number) => (
                  <img key={i} src={img} alt="" className="rounded-lg object-cover aspect-square" />
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {product.kind === "digital" ? "Цифровое" : "Физическое"} · {product.category}
            </p>
            <h1 className="mt-2 font-display text-4xl font-medium">{product.title}</h1>
            {product.subtitle && <p className="mt-2 text-muted-foreground">{product.subtitle}</p>}

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
              {rating > 0 && (
                <span className="text-sm text-muted-foreground">
                  ★ {rating.toFixed(1)} ({reviewCount} отзывов)
                </span>
              )}
            </div>

            {artisan && (
              <Link
                to="/artisan/$id"
                params={{ id: artisan.id }}
                className="mt-6 flex items-center gap-3 rounded-xl border p-4 transition-colors hover:bg-muted"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-muted font-medium">
                  {artisan.mark || artisan.name?.[0] || "?"}
                </div>
                <div>
                  <p className="font-medium">{artisan.name}</p>
                  <p className="text-sm text-muted-foreground">{artisan.craft} · {artisan.city}</p>
                </div>
              </Link>
            )}

            <p className="mt-6 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                disabled={cartStatus === "loading"}
                className="rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {cartStatus === "loading"
                  ? "Добавляем..."
                  : cartStatus === "success"
                  ? "✓ Добавлено в корзину"
                  : product.kind === "digital"
                  ? "Купить и скачать"
                  : "Добавить в корзину"}
              </button>
              {!isLoggedIn && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Для покупки необходимо <Link to="/login" className="underline">войти</Link>.
                </p>
              )}
              {cartStatus === "error" && (
                <p className="mt-2 text-xs text-red-600">{cartError}</p>
              )}
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-medium">Отзывы</h2>

          {/* Форма */}
          <div className="mt-6 rounded-xl border p-5">
            {!isLoggedIn ? (
              <p className="text-sm text-muted-foreground">
                Чтобы оставить отзыв, <Link to="/login" className="underline">войдите в аккаунт</Link>.
              </p>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm">Оценка:</label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                    className="rounded border px-2 py-1"
                  >
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>{"★".repeat(n)}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Поделитесь впечатлением..."
                  value={reviewForm.text}
                  onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                  className="w-full rounded border px-3 py-2"
                  rows={3}
                />
                <button
                  type="submit"
                  disabled={reviewStatus === "loading"}
                  className="rounded-lg bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
                >
                  {reviewStatus === "loading" ? "Отправка..." : reviewStatus === "success" ? "✓ Отправлено" : "Оставить отзыв"}
                </button>
                {reviewStatus === "error" && <p className="text-xs text-red-600">Не удалось отправить отзыв</p>}
              </form>
            )}
          </div>

          {/* Список */}
          {reviews && reviews.length > 0 && (
            <div className="mt-6 space-y-4">
              {reviews.map((r: any) => (
                <div key={r.id} className="rounded-xl border p-4">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{r.author}</p>
                    <span className="text-sm text-muted-foreground">★ {Number(r.rating).toFixed(1)}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}