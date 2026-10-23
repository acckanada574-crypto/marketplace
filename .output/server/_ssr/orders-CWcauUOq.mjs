import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, p as Section, s as Route$19, v as formatPrice } from "./router-Dpfr_c1k.mjs";
import { t as Button } from "./button-BSn4vtXw.mjs";
// node_modules/.nitro/vite/services/ssr/assets/orders-CWcauUOq.js
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage() {
	const orders = Route$19.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Покупатель",
				title: "Мои заказы",
				description: "Здесь хранится история ваших покупок."
			}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16 bg-card rounded-2xl shadow-border mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "У вас пока нет заказов."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "На витрину"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 mt-8",
				children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/order/$id",
					params: { id: order.id },
					className: "block rounded-2xl bg-card p-6 shadow-border hover:-translate-y-0.5 transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-medium",
							children: ["Заказ ", order.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: new Date(order.created_at).toLocaleDateString("ru-RU")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground line-clamp-1",
							children: order.items.map((i) => `${i.title} (${i.qty} шт.)`).join(", ")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium tabular-nums",
							children: formatPrice(order.total)
						})]
					})]
				}, order.id))
			})]
		})
	});
}
export { OrdersPage as component };
