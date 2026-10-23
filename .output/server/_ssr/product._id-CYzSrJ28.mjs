import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Share2, f as Minus, g as Check, h as Download, m as Heart, n as Truck, s as ShieldCheck, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as cn, g as useMarket, n as Route$7, p as Section, v as formatPrice, y as kindLabel } from "./router-g4gzfk62.mjs";
import { t as Button } from "./button-DRUSYOGI.mjs";
import { n as ProductCard, t as Badge } from "./product-card-B83HHw-i.mjs";
import { t as Separator$1 } from "../_libs/radix-ui__react-separator.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product._id-CYzSrJ28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Separator$1.displayName;
function wrapHtml(title, body) {
	return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8"/>
  <title>${title} — Живица</title>
  <style>
    body { font-family: Georgia, serif; background: #F3EEE6; color: #241C16; margin: 0; }
    main { max-width: 720px; margin: 0 auto; padding: 48px 24px 80px; }
    h1 { font-size: 32px; font-weight: 600; letter-spacing: -0.03em; }
    h2 { font-size: 20px; margin-top: 32px; }
    p, li { line-height: 1.6; }
    .meta { color: #6F655C; font-size: 14px; }
    hr { border: 0; border-top: 1px solid #DDD4C6; margin: 28px 0; }
    .mark { width: 36px; height: 36px; border: 1px solid #3E4F45; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #3E4F45; }
  </style>
</head>
<body>
  <main>
    <div class="mark">Ж</div>
    <p class="meta">Живица · цифровое издание · сразу после оплаты</p>
    ${body}
    <hr/>
    <p class="meta">Файл выдан как часть заказа на маркетплейсе Живица. Перепродажа исходника запрещена условиями конкретной лицензии.</p>
  </main>
</body>
</html>`;
}
var FILES = {
	"pattern-lace": {
		filename: "zhivitsa-kruzhevo-tumana.html",
		mime: "text/html;charset=utf-8",
		body: wrapHtml("Кружево тумана", `<h1>Салфетка «Кружево тумана»</h1>
      <p class="meta">Крючок 1.75 мм · хлопок 50 г · диаметр после блокировки ~42 см</p>
      <h2>Условные обозначения</h2>
      <ul>
        <li>вп — воздушная петля</li>
        <li>сс — соединительный столбик</li>
        <li>сбн — столбик без накида</li>
        <li>ссн — столбик с накидом</li>
        <li>пико — 3 вп, сс в первую</li>
      </ul>
      <h2>Ход работы</h2>
      <p>Набрать 8 вп, замкнуть в кольцо.</p>
      <p><strong>1 ряд.</strong> 3 вп подъёма, 15 ссн в кольцо, сс в третью вп. (16)</p>
      <p><strong>2 ряд.</strong> 3 вп, ссн в ту же петлю, 2 ссн в каждую петлю круга, сс. (32)</p>
      <p><strong>3 ряд.</strong> 3 вп, *2 вп, пропустить 1, ссн* — повторять, сс.</p>
      <p><strong>4–8 ряды.</strong> Арки из 3–5 вп, в каждую арку предыдущего ряда — 1 ссн, 1 пико, 1 ссн. Следить, чтобы пико смотрели наружу.</p>
      <p><strong>9–14 ряды.</strong> Чередовать пышный столбик из 3 накидов и арку из 4 вп. В каждом шестом секторе прибавлять одну арку, чтобы полотно не чашело.</p>
      <p><strong>15–18 ряды.</strong> Кайма: в арку — 5 ссн, пико, 5 ссн. Между каймами — 2 вп.</p>
      <h2>Блокировка</h2>
      <p>Замочить в тёплой воде 15 минут, отжать в полотенце, растянуть на пенной доске булавками за каждое пико. Сушить сутки. Крахмалить не обязательно — хлопок сам держит рисунок.</p>`)
	},
	"knit-taiga": {
		filename: "zhivitsa-sviter-taiga.html",
		mime: "text/html;charset=utf-8",
		body: wrapHtml("Свитер Тайга", `<h1>Свитер «Тайга»</h1>
      <p class="meta">Спицы 4.5 мм · плотность 18 п. × 24 р. = 10 см лицевой гладью</p>
      <h2>Размеры</h2>
      <p>XS 86 / S 92 / M 98 / L 106 / XL 114 см по груди готового изделия. Свобода облегания около 10 см.</p>
      <h2>Пряжа</h2>
      <p>Шерсть 100–120 м / 50 г. Расход: 450 / 500 / 550 / 620 / 700 г. Образец обязателен — северная шерсть садится иначе, чем акрил.</p>
      <h2>Спинка</h2>
      <p>Набрать 86/92/98/106/114 п., вязать резинкой 2×2 — 6 см. Перейти на гладь. Вязать прямо 38/39/40/41/42 см от резинки. Плечи закрывать с каждой стороны в каждом 2-м ряду: 6-6-6-7 / 6-7-7-7 / 7-7-7-8 / 8-8-8-8 / 8-8-9-9. Горловину закрыть оставшимися петлями, средние 22/24/24/26/28 п. закрыть сразу.</p>
      <h2>Перед</h2>
      <p>Как спинка, но горловину начать на 7 см раньше плеч: закрыть средние 12 п., далее в каждом 2-м ряду 2-2-1-1. Плечи — как на спинке.</p>
      <h2>Рукав</h2>
      <p>Набрать 42/44/46/48/50 п., резинка 8 см. Прибавлять по 1 п. с каждой стороны в каждом 6-м ряду, пока не станет 68/72/76/80/86 п. Длина рукава до проймы 44/45/46/47/48 см. Закрыть в 4 приёма.</p>
      <h2>Горло</h2>
      <p>Поднять петли, резинка 2×2 по кругу 12 см, закрыть свободно иглой. Отворот не натягивать — иначе «съест» шею.</p>
      <h2>Сборка</h2>
      <p>Плечевые швы матрацным швом. Рукав втачать, совместив верх с плечевым швом, не растягивая окат. Боковые швы и рукава — один шов от манжеты до низа. Замочить, разложить, сушить горизонтально.</p>`)
	},
	"prints-fern": {
		filename: "zhivitsa-paporotnik.svg",
		mime: "image/svg+xml",
		body: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2480 3508">
      <rect width="2480" height="3508" fill="#F3EEE6"/>
      <rect x="160" y="160" width="2160" height="3188" fill="none" stroke="#3E4F45" stroke-width="2"/>
      <circle cx="1240" cy="1280" r="420" fill="#3E4F45"/>
      <circle cx="1240" cy="1280" r="220" fill="#F3EEE6"/>
      <rect x="1080" y="1760" width="320" height="720" fill="#241C16" opacity="0.12"/>
      <text x="1240" y="2720" text-anchor="middle" fill="#241C16" font-family="Georgia, serif" font-size="72">Папоротник I</text>
      <text x="1240" y="2820" text-anchor="middle" fill="#6F655C" font-family="Georgia, serif" font-size="32">Живица · лист для печати A3</text>
    </svg>`
	},
	"brushes-clay": {
		filename: "zhivitsa-brushes-glina.json",
		mime: "application/json",
		body: JSON.stringify({
			name: "Глина и сажа",
			studio: "Север / Живица",
			brushes: [
				{
					id: "chamotte",
					name: "Шамот",
					grain: .42,
					opacity: .8,
					spacing: 12
				},
				{
					id: "soot",
					name: "Сажа",
					grain: .18,
					opacity: .55,
					spacing: 8
				},
				{
					id: "linen-dry",
					name: "Сухой лён",
					grain: .3,
					opacity: .4,
					spacing: 16
				},
				{
					id: "ash-wash",
					name: "Зольный смыв",
					grain: .08,
					opacity: .28,
					spacing: 4
				}
			],
			note: "Демо-пресеты набора. В полном файле — 24 кисти brushset/ABR."
		}, null, 2)
	},
	"patterns-berry": {
		filename: "zhivitsa-yagodnik.svg",
		mime: "image/svg+xml",
		body: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="#F3EEE6"/>
          <circle cx="18" cy="18" r="7" fill="#3E4F45"/>
          <circle cx="58" cy="58" r="4" fill="#241C16" opacity="0.45"/>
          <rect x="38" y="10" width="6" height="22" rx="3" fill="#3E4F45" opacity="0.35"/>
        </pattern>
      </defs>
      <rect width="800" height="800" fill="url(#p)"/>
    </svg>`
	},
	"pack-north": {
		filename: "zhivitsa-severnaya-tetrad.svg",
		mime: "image/svg+xml",
		body: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
      <rect width="1200" height="1200" fill="#FAF7F1"/>
      <circle cx="860" cy="340" r="180" fill="#3E4F45"/>
      <rect x="180" y="180" width="8" height="840" fill="#241C16"/>
      <circle cx="320" cy="900" r="70" fill="none" stroke="#3E4F45" stroke-width="8"/>
      <rect x="420" y="820" width="220" height="220" fill="#241C16" opacity="0.08"/>
      <text x="180" y="160" fill="#6F655C" font-family="Georgia, serif" font-size="28">Северная тетрадь · мотив 01</text>
    </svg>`
	}
};
function digitalFileFor(product) {
	const preset = FILES[product.id];
	if (preset) return preset;
	const body = wrapHtml(product.title, `<h1>${product.title}</h1><p>${product.description}</p><p class="meta">${product.digitalFormat ?? "Файл"} · ${product.license ?? ""}</p>`);
	return {
		filename: `zhivitsa-${product.id}.html`,
		mime: "text/html;charset=utf-8",
		body
	};
}
function downloadProductFile(product) {
	const file = digitalFileFor(product);
	const blob = new Blob([file.body], { type: file.mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = file.filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
function ProductPage() {
	const { product, artisan, related } = Route$7.useLoaderData();
	const addToCart = useMarket((s) => s.addToCart);
	const addListing = useMarket((s) => s.addListing);
	const favorites = useMarket((s) => s.favorites);
	const toggleFavorite = useMarket((s) => s.toggleFavorite);
	const loved = favorites.includes(product.id);
	const [qty, setQty] = (0, import_react.useState)(1);
	function add() {
		addListing(product);
		addToCart(product.id, qty);
		toast.success("В корзине", { description: product.title });
	}
	async function handleShare() {
		const utmUrl = `${`${window.location.origin}/product/${product.id}`}?utm_source=share&utm_medium=product&utm_campaign=zhivitsa`;
		const shareData = {
			title: product.title,
			text: `${product.title} — ${product.subtitle}. На Живице.`,
			url: utmUrl
		};
		if (navigator.share) try {
			await navigator.share(shareData);
			return;
		} catch (e) {}
		try {
			await navigator.clipboard.writeText(utmUrl);
			toast.success("Ссылка скопирована", { description: "Отправьте её другу" });
		} catch {
			toast.error("Не удалось скопировать");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.title,
						className: "aspect-photo w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: product.kind === "digital" ? "digital" : "muted",
								children: kindLabel(product.kind)
							}),
							product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "default",
								children: "Новое"
							}) : null,
							product.custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Ваша работа" }) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: product.subtitle
					}),
					artisan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/artisan/$id",
						params: { id: artisan.id },
						className: "mt-4 inline-flex items-center gap-2 text-sm hover:text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 items-center justify-center rounded-full border border-border font-display text-xs",
								children: artisan.mark
							}),
							artisan.name,
							" · ",
							artisan.city
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-3xl tabular-nums",
						children: formatPrice(product.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							product.rating.toFixed(1),
							" · ",
							product.reviewCount,
							" оценок"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-prose leading-relaxed",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							product.kind === "physical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-11 items-center rounded-md border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "size-11",
										"aria-label": "Меньше",
										onClick: () => setQty((n) => Math.max(1, n - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mx-auto size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "size-11",
										"aria-label": "Больше",
										onClick: () => setQty((n) => Math.min(product.stock, n + 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mx-auto size-4" })
									})
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: add,
								disabled: product.stock <= 0,
								children: product.stock <= 0 ? "Нет в наличии" : "В корзину"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: loved ? "secondary" : "outline",
								onClick: () => toggleFavorite(product.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", loved && "fill-primary text-primary") }), loved ? "В избранном" : "Избранное"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "ghost",
								onClick: handleShare,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Поделиться"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 text-sm",
						children: [product.kind === "digital" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-2 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
								"Мгновенная загрузка после оплаты. ",
								product.digitalFormat,
								product.fileSize ? ` · ${product.fileSize}` : ""
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-2 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
								"Отправка через ",
								product.shipsInDays ?? 5,
								" дн. Осталось ",
								product.stock,
								" шт."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-2 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), product.kind === "digital" ? product.license : "Упаковка мастера, страховка на пересылку"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-1 gap-4 text-sm sm:grid-cols-2",
						children: [
							product.materials ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Материалы"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: product.materials
							})] }) : null,
							product.size ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Размер"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: product.size
							})] }) : null,
							product.care ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Уход"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: product.care
							})] }) : null,
							product.digitalPages ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Состав файла"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: product.digitalPages
							})] }) : null
						]
					}),
					product.kind === "digital" && product.fileHash ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), "Файл защищён технической подписью (SHA-256)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 break-all font-mono text-xs text-muted-foreground",
								children: product.fileHash
							}),
							product.signedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: ["Подписано: ", new Date(product.signedAt).toLocaleString("ru-RU")]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Если хеш изменится — значит, описание или файл были изменены после подписи."
							})
						]
					}) : null,
					product.kind === "digital" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-xs text-muted-foreground",
						children: [
							"На этой странице можно посмотреть образец. Полный файл выдаётся в заказе. Для знакомства с форматом —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "underline underline-offset-4",
								onClick: () => downloadProductFile(product),
								children: "скачать демо-фрагмент"
							}),
							"."
						]
					}) : null
				] })]
			}),
			product.reviews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Отзывы"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: product.reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-2xl bg-card p-5 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								review.author,
								" · ",
								review.rating.toFixed(1)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-2 leading-relaxed",
							children: review.text
						})]
					}, review.id))
				})]
			}) : null,
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mb-6 text-2xl font-medium",
					children: "Рядом на витрине"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-8 sm:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.id))
				})]
			}) : null
		] })
	});
}
export { ProductPage as component };
