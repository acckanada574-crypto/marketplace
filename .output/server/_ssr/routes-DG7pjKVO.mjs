import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Package, g as Download, n as Truck, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { D as CATEGORIES, _ as formatPrice, f as Section, u as Route$33 } from "./router-ClqpZo3t.mjs";
import { n as ProductCard, t as Badge } from "./product-card-BBA085PN.mjs";
import { t as Button } from "./button-DwD50u6R.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-DG7pjKVO.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { featured, digital, physical, artisans, totalProducts } = Route$33.useLoaderData();
	const heroProduct = featured[0];
	const heroArtisan = heroProduct ? artisans.find((a) => a.id === heroProduct.artisanId) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 pb-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16 lg:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-muted-foreground uppercase",
						children: "Маркетплейс ручной работы"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-4 max-w-xl text-4xl leading-[1.08] font-medium tracking-tight sm:text-6xl",
						children: "Вещи с теплом рук — и файлы, которые можно забрать сразу"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base leading-relaxed text-muted-foreground",
						children: "Керамика, лён, дерево, серебро — и рядом схемы, кисти, постеры. Один двор, два склада: почта для физического, мгновенная загрузка для цифрового."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalog",
								children: "Открыть витрину"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalog",
								search: { kind: "digital" },
								children: "Цифровые издания"
							})
						})]
					})
				] }), heroProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$id",
					params: { id: heroProduct.id },
					className: "relative overflow-hidden rounded-2xl bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroProduct.image,
						alt: heroProduct.title,
						className: "aspect-photo w-full object-cover lg:aspect-auto lg:h-96"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-foreground/55 to-transparent p-5 text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: heroProduct.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary-foreground/80",
							children: heroArtisan ? `${heroArtisan.name} · ${heroArtisan.city}` : ""
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tabular-nums",
							children: formatPrice(heroProduct.price)
						})]
					})]
				}) : null]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "grid grid-cols-3 gap-4 py-8 text-center md:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tabular-nums",
					children: totalProducts
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "работ на витрине"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tabular-nums",
					children: artisans.length
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "мастерских"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: "2 склада"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "коробка и файл"
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-2",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalog",
					search: { category: cat.id },
					className: "flex h-11 shrink-0 items-center rounded-full border border-border bg-card px-4 text-sm hover:border-primary hover:text-primary",
					children: cat.label
				}, cat.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.22em] text-muted-foreground uppercase",
					children: "Выбор двора"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-medium tracking-tight",
					children: "Сейчас на виду"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalog",
						children: ["Все работы ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.slice(0, 6).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-primary-foreground/30 text-primary-foreground",
						children: "Цифровое"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Схемы, кисти и принты — без ожидания почты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80",
						children: "Оплатили — скачали. Описания для вязания, бесшовные раппорты, постеры к печати. Лицензия указана в карточке."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8 bg-background text-foreground hover:bg-background/90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							search: { kind: "digital" },
							children: "К цифровым изданиям"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: digital.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$id",
						params: { id: product.id },
						className: "flex items-center gap-4 rounded-xl bg-primary-foreground/8 p-3 hover:bg-primary-foreground/12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "size-16 rounded-md object-cover outline-primary-foreground/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: product.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm text-primary-foreground/70",
									children: product.subtitle
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tabular-nums",
								children: formatPrice(product.price)
							})
						]
					}, product.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "С полки мастерской"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalog",
						search: { kind: "physical" },
						children: ["Физические ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3",
				children: physical.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mb-8 text-3xl font-medium tracking-tight",
				children: "Мастерские"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: artisans.map((artisan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/artisan/$id",
					params: { id: artisan.id },
					className: "rounded-2xl bg-card p-5 shadow-border transition-transform duration-200 hover:-translate-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-12 items-center justify-center rounded-full border border-border font-display text-sm text-primary",
							children: artisan.mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xl font-medium tracking-tight",
							children: artisan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								artisan.craft,
								" · ",
								artisan.city
							]
						})
					]
				}, artisan.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "grid gap-6 pb-20 md:grid-cols-3",
			children: [
				{
					icon: Package,
					title: "Выбрали",
					text: "Физическое уходит коробкой, цифровое — файлом. В одной корзине можно смешать оба."
				},
				{
					icon: Truck,
					title: "Доставили",
					text: "Почта по России, 3–8 дней. Бесплатно от 6 000 ₽. Цифровое не стоит доставки."
				},
				{
					icon: Download,
					title: "Скачали",
					text: "После оплаты цифровые издания лежат в заказе. Открываются снова, когда нужны."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl font-medium",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: item.text
					})
				]
			}, item.title))
		})
	] });
}
export { Home as component };
