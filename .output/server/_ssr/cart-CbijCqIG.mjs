import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Plus, i as Trash2, p as Minus } from "../_libs/lucide-react.mjs";
import { _ as FREE_SHIPPING_FROM, f as PageHeading, g as useMarket, h as useCartDetails, p as Section, v as formatPrice } from "./router-CzN3-mHq.mjs";
import { t as Button } from "./button-DVE536MF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CbijCqIG.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { lines, subtotal, shipping, total, hasPhysical } = useCartDetails();
	const setQty = useMarket((s) => s.setQty);
	const removeFromCart = useMarket((s) => s.removeFromCart);
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-16 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "max-w-lg text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				title: "Корзина пуста",
				description: "На витрине есть и коробки, и файлы."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalog",
					children: "К работам"
				})
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			kicker: "Заказ",
			title: "Корзина"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-2xl bg-card p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$id",
						params: { id: line.product.id },
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.product.image,
							alt: "",
							className: "size-24 rounded-lg object-cover sm:size-28"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$id",
								params: { id: line.product.id },
								className: "font-display text-lg font-medium tracking-tight hover:text-primary",
								children: line.product.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: line.product.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium tabular-nums",
								children: formatPrice(line.product.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2",
								children: [line.product.kind === "physical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-10 items-center rounded-md border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "size-10",
											"aria-label": "Меньше",
											onClick: () => setQty(line.productId, line.qty - 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mx-auto size-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 text-center text-sm tabular-nums",
											children: line.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "size-10",
											"aria-label": "Больше",
											onClick: () => setQty(line.productId, line.qty + 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mx-auto size-3.5" })
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Цифровой файл · 1 шт."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "ml-auto flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
									"aria-label": "Убрать",
									onClick: () => removeFromCart(line.productId),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							})
						]
					})]
				}, line.productId))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-2xl bg-card p-6 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-medium",
						children: "Итого"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Работы"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: formatPrice(subtotal)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Доставка"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: shipping === 0 ? "Бесплатно" : formatPrice(shipping)
							})]
						})]
					}),
					hasPhysical && shipping > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							"Ещё ",
							formatPrice(FREE_SHIPPING_FROM - subtotal),
							" до бесплатной доставки."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex justify-between border-t border-border pt-4 text-base font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "К оплате" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatPrice(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6 w-full",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							children: "Оформить"
						})
					})
				]
			})]
		})] })
	});
}
//#endregion
export { CartPage as component };
