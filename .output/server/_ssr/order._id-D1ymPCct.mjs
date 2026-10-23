import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, p as Section, r as Route$2, v as formatPrice } from "./router-BdcXIK4Z.mjs";
import { t as Button } from "./button-B2bThswQ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/order._id-D1ymPCct.js
var import_jsx_runtime = require_jsx_runtime();
function OrderPage() {
	const { order, items } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
					kicker: `Заказ ${order.id}`,
					title: "Спасибо за заказ!",
					description: "Мы отправили детали на вашу почту. Ниже — информация о заказе."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 shadow-border mb-6 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Статус"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium",
							children: {
								pending: "Ожидает оплаты",
								first_paid: "Оплачен на 50%",
								fully_paid: "Оплачен полностью",
								shipped: "Отправлен",
								delivered: "Доставлен",
								cancelled: "Отменён"
							}[order.status] || order.status
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Дата:"
								}),
								" ",
								new Date(order.created_at).toLocaleDateString("ru-RU")
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Получатель:"
								}),
								" ",
								order.customer_name
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Телефон:"
								}),
								" ",
								order.customer_phone
							] }),
							order.customer_city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Адрес:"
								}),
								" ",
								order.customer_city,
								", ",
								order.customer_address
							] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 shadow-border mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl mb-4",
						children: "Состав заказа"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 items-center",
							children: [
								item.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									className: "size-16 rounded-md object-cover bg-muted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [item.qty, " шт."]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular-nums font-medium",
									children: formatPrice(item.line_total)
								})
							]
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 shadow-border mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl mb-4",
							children: "Оплата"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Товары:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(order.subtotal) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Доставка:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.shipping === 0 ? "Бесплатно" : formatPrice(order.shipping) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-medium text-base pt-2 border-t border-border mt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Итого:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: formatPrice(order.total)
										})
									]
								})
							]
						}),
						order.payment_plan === "split_50_50" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 p-4 bg-muted rounded-lg text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium mb-2",
									children: "Оплата частями (50/50)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-green-700 font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Оплачено сейчас:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(order.paid_amount) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "К оплате при получении:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(order.due_amount) })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 p-4 bg-muted rounded-lg text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground mb-1",
									children: "Для мастера:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Комиссия маркетплейса (10%): ", formatPrice(order.commission_amount)] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["К выплате мастеру: ", formatPrice(order.payout_total)] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full sm:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "Вернуться в каталог"
					})
				})
			]
		})
	});
}
export { OrderPage as component };
