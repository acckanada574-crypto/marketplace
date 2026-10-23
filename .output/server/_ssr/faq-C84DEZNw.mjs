import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Route$28, f as PageHeading, p as Section } from "./router-g4gzfk62.mjs";
// node_modules/.nitro/vite/services/ssr/assets/faq-C84DEZNw.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const items = Route$28.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Помощь",
				title: "Частые вопросы",
				description: "Как заказать, как получить цифровой товар, как стать мастером."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl divide-y divide-border",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium",
						children: [item.question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground transition-transform group-open:rotate-45",
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: item.answer
					})]
				}, item.id))
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-muted-foreground",
				children: "Пока вопросов нет. Загляните позже."
			}) : null
		] })
	});
}
export { FaqPage as component };
