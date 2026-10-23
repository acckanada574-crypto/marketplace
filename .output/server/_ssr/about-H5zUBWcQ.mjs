import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, p as Section, u as Route$18 } from "./router-BdcXIK4Z.mjs";
import { t as Button } from "./button-B2bThswQ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/about-H5zUBWcQ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const artisans = Route$18.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
					kicker: "О дворе",
					title: "Живица — место, где ручная работа не делится на «настоящую» и «файл»"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Живица — это смола, которая заживляет дерево. Название двора про вещи, которые делают руками и отдают дальше: кружку, плед, кольцо — или схему, по которой кто-то свяжет своё." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Физические работы едут почтой из мастерских Пскова, Костромы, Вологды, Петербурга и Казани. Цифровые издания студии «Север» открываются сразу после оплаты: PDF, кисти, раппорты, постеры к печати." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Оплата на этой витрине демонстрационная. Заказ и избранное хранятся в вашем браузере, файлы можно скачать повторно из раздела заказов." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-12 text-2xl font-medium",
					children: "Мастерские"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-5",
					children: artisans.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/artisan/$id",
						params: { id: a.id },
						className: "hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: a.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								" ",
								"· ",
								a.craft,
								", ",
								a.city
							]
						})]
					}) }, a.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "На витрину"
					})
				})
			]
		})
	});
}
export { AboutPage as component };
