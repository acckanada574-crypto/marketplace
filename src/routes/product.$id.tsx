import { createFileRoute, Link } from "@tanstack/react-router";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => apiFetch<any>(`/api/product/${params.id}`),
  component: ProductPage,
});

function ProductPage() {
  const { product, artisan, reviews } = Route.useLoaderData();

  // Дополнительная защита: даже если сервер вдруг вернет строку, мы приведем к числу
  const rating = Number(product.rating) || 0;
  const reviewCount = Number(product.review_count) || 0;
  const images = Array.isArray(product.images) ? product.images : [];
  const allImages = [product.image, ...images].filter(Boolean);

  return (
    <main className="py-10 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Галерея */}
          <div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover aspect-square lg:aspect-auto" 
              />
            </div>
            {allImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {allImages.slice(1, 5).map((img: string, i: number) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt="" 
                    className="rounded-lg object-cover aspect-square" 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Информация */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {product.kind === "digital" ? "Цифровое" : "Физическое"} · {product.category}
            </p>
            <h1 className="mt-2 font-display text-4xl font-medium">{product.title}</h1>
            {product.subtitle && (
              <p className="mt-2 text-muted-foreground">{product.subtitle}</p>
            )}

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

            {/* Характеристики для физических товаров */}
            {product.kind === "physical" && (
              <dl className="mt-6 space-y-2 text-sm">
                {product.materials && <div><dt className="inline text-muted-foreground">Материалы: </dt><dd className="inline">{product.materials}</dd></div>}
                {product.size && <div><dt className="inline text-muted-foreground">Размер: </dt><dd className="inline">{product.size}</dd></div>}
                {product.care && <div><dt className="inline text-muted-foreground">Уход: </dt><dd className="inline">{product.care}</dd></div>}
                {product.ships_in_days && <div><dt className="inline text-muted-foreground">Отправка: </dt><dd className="inline">в течение {product.ships_in_days} дней</dd></div>}
                <div><dt className="inline text-muted-foreground">В наличии: </dt><dd className="inline">{product.stock} шт.</dd></div>
              </dl>
            )}

            {/* Характеристики для цифровых товаров */}
            {product.kind === "digital" && (
              <dl className="mt-6 space-y-2 text-sm">
                {product.digital_format && <div><dt className="inline text-muted-foreground">Формат: </dt><dd className="inline">{product.digital_format}</dd></div>}
                {product.digital_pages && <div><dt className="inline text-muted-foreground">Объём: </dt><dd className="inline">{product.digital_pages}</dd></div>}
                {product.license && <div><dt className="inline text-muted-foreground">Лицензия: </dt><dd className="inline">{product.license}</dd></div>}
                {product.file_size && <div><dt className="inline text-muted-foreground">Размер файла: </dt><dd className="inline">{product.file_size}</dd></div>}
              </dl>
            )}

            <div className="mt-8 flex gap-3">
              <button className="rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors">
                {product.kind === "digital" ? "Купить и скачать" : "Добавить в корзину"}
              </button>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        {reviews && reviews.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-medium">Отзывы</h2>
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
          </section>
        )}
      </div>
    </main>
  );
}