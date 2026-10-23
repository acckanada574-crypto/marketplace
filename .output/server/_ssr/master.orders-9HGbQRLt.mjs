import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, i as Route$7, p as Section, v as formatPrice } from "./router-Dpfr_c1k.mjs";
import { t as Button } from "./button-BSn4vtXw.mjs";
// node_modules/.nitro/vite/services/ssr/assets/master.orders-9HGbQRLt.js
var import_jsx_runtime = require_jsx_runtime();
function MasterOrdersPage() {
	const sales = Route$7.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Мастерская",
				title: "Заказы на мои работы",
				description: "Здесь вы видите, что у вас купили и сколько вам нужно отправить."
			}), sales.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16 bg-card rounded-2xl shadow-border mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "У вас пока нет продаж."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sell",
						children: "Выставить работу"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 mt-8",
				children: sales.map((sale) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-medium",
								children: sale.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm px-2 py-1 bg-primary/10 text-primary rounded-md",
								children: sale.status === "pending" ? "Ожидает оплаты" : sale.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: "Заказ:"
									}),
									" ",
									sale.order_id,
									" от ",
									new Date(sale.created_at).toLocaleDateString("ru-RU")
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: "Количество:"
									}),
									" ",
									sale.qty,
									" шт."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: "К отправке:"
									}),
									" ",
									sale.customer_city,
									", ",
									sale.customer_address
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: "Получатель:"
									}),
									" ",
									sale.customer_name,
									", ",
									sale.customer_phone
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 pt-4 border-t border-border flex justify-between items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Комиссия маркетплейса удержана"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "К выплате вам"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl tabular-nums",
									children: formatPrice(sale.payout_amount)
								})]
							})]
						})
					]
				}, sale.item_id))
			})]
		})
	});
}
export { MasterOrdersPage as component };
