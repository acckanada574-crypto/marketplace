import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Route$8, v as formatPrice } from "./router-DnZ37u7Q.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product._id-Dc_EcpeT.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product, artisan, reviews } = Route$8.useLoaderData();
	const rating = Number(product.rating) || 0;
	const reviewCount = Number(product.review_count) || 0;
	const images = Array.isArray(product.images) ? product.images : [];
	const allImages = [product.image, ...images].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.title,
						className: "w-full h-auto object-cover aspect-square lg:aspect-auto"
					})
				}), allImages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-2",
					children: allImages.slice(1, 5).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: "",
						className: "rounded-lg object-cover aspect-square"
					}, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: [
							product.kind === "digital" ? "Цифровое" : "Физическое",
							" · ",
							product.category
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-medium",
						children: product.title
					}),
					product.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: product.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold",
							children: formatPrice(product.price)
						}), rating > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted-foreground",
							children: [
								"★ ",
								rating.toFixed(1),
								" (",
								reviewCount,
								" отзывов)"
							]
						})]
					}),
					artisan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/artisan/$id",
						params: { id: artisan.id },
						className: "mt-6 flex items-center gap-3 rounded-xl border p-4 transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-12 items-center justify-center rounded-full bg-muted font-medium",
							children: artisan.mark || artisan.name?.[0] || "?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: artisan.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								artisan.craft,
								" · ",
								artisan.city
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed",
						children: product.description
					}),
					product.kind === "physical" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-2 text-sm",
						children: [
							product.materials && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Материалы: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.materials
							})] }),
							product.size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Размер: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.size
							})] }),
							product.care && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Уход: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.care
							})] }),
							product.ships_in_days && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Отправка: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "inline",
								children: [
									"в течение ",
									product.ships_in_days,
									" дней"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "В наличии: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "inline",
								children: [product.stock, " шт."]
							})] })
						]
					}),
					product.kind === "digital" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-2 text-sm",
						children: [
							product.digital_format && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Формат: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.digital_format
							})] }),
							product.digital_pages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Объём: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.digital_pages
							})] }),
							product.license && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Лицензия: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.license
							})] }),
							product.file_size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "inline text-muted-foreground",
								children: "Размер файла: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: product.file_size
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors",
							children: product.kind === "digital" ? "Купить и скачать" : "Добавить в корзину"
						})
					})
				] })]
			}), reviews && reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Отзывы"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: r.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted-foreground",
								children: ["★ ", Number(r.rating).toFixed(1)]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: r.text
						})]
					}, r.id))
				})]
			})]
		})
	});
}
export { ProductPage as component };
