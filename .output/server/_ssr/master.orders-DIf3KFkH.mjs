import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, i as Route$9, p as Section, v as formatPrice } from "./router-g4gzfk62.mjs";
// node_modules/.nitro/vite/services/ssr/assets/master.orders-DIf3KFkH.js
var import_jsx_runtime = require_jsx_runtime();
function MasterOrdersPage() {
	const orders = Route$9.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Мастерская",
				title: "Заказы на мои работы"
			}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-dashed p-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "У вас пока нет заказов."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Как только кто-то купит вашу работу, заказ появится здесь."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-5 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: ["Заказ №", order.id.slice(0, 8)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: formatPrice(order.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: ["Статус: ", order.status === "pending" ? "Ожидает оплаты" : order.status]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"Покупатель: ",
								order.customer_name,
								" (",
								order.customer_phone,
								")"
							]
						})
					]
				}, order.id))
			})]
		})
	});
}
export { MasterOrdersPage as component };
