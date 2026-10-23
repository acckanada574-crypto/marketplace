import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { C as SheetContent, D as cn, E as Input, O as CATEGORIES, S as Sheet, T as SheetTitle, f as PageHeading, l as Route$20, p as Section, w as SheetHeader } from "./router-LH2AA8pD.mjs";
import { t as Button } from "./button-C6QwpHK3.mjs";
import { r as ProductGrid } from "./product-card-EjbYVR9Y.mjs";
// node_modules/.nitro/vite/services/ssr/assets/catalog-DrAD4feG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Filters({ search, counts }) {
	const navigate = Route$20.useNavigate();
	function patch(partial) {
		navigate({
			to: "/catalog",
			search: (prev) => ({
				...prev,
				...partial
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "Тип"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-col gap-1",
			children: [
				{
					id: void 0,
					label: "Все",
					n: counts.all
				},
				{
					id: "physical",
					label: "Физические",
					n: counts.physical
				},
				{
					id: "digital",
					label: "Цифровые",
					n: counts.digital
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => patch({ kind: item.id }),
				className: cn("flex h-10 items-center justify-between rounded-md px-3 text-sm", search.kind === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums opacity-70",
					children: item.n
				})]
			}, item.label))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "Категория"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => patch({ category: void 0 }),
				className: cn("flex h-10 items-center rounded-md px-3 text-left text-sm", !search.category ? "bg-muted" : "hover:bg-muted"),
				children: "Все категории"
			}), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => patch({ category: cat.id }),
				className: cn("flex h-10 items-center rounded-md px-3 text-left text-sm", search.category === cat.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"),
				children: cat.label
			}, cat.id))]
		})] })]
	});
}
function CatalogPage() {
	const search = Route$20.useSearch();
	const navigate = Route$20.useNavigate();
	const filtered = Route$20.useLoaderData();
	const [open, setOpen] = (0, import_react.useState)(false);
	const counts = {
		all: filtered.length,
		physical: filtered.filter((p) => p.kind === "physical").length,
		digital: filtered.filter((p) => p.kind === "digital").length
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "py-10 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Витрина",
				title: search.kind === "digital" ? "Цифровые издания" : search.kind === "physical" ? "Физические работы" : "Все работы двора",
				description: "Фильтруйте по типу и ремеслу. Цифровое скачивается после оплаты, физическое едет почтой."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					defaultValue: search.q ?? "",
					placeholder: "Название, материал, мастер",
					className: "max-w-md",
					onChange: (e) => {
						const value = e.target.value;
						navigate({
							to: "/catalog",
							search: (prev) => ({
								...prev,
								q: value || void 0
							}),
							replace: true
						});
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-11 rounded-md border border-input bg-card px-3 text-sm",
							value: search.sort ?? "popular",
							onChange: (e) => void navigate({
								to: "/catalog",
								search: (prev) => ({
									...prev,
									sort: e.target.value
								})
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "popular",
									children: "Сначала любимые"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "new",
									children: "Новое"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "price-asc",
									children: "Цена: по возрастанию"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "price-desc",
									children: "Цена: по убыванию"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "lg:hidden",
							onClick: () => setOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }), "Фильтры"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "ml-auto hidden text-sm text-muted-foreground sm:block",
							children: [filtered.length, " работ"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-catalog",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
						search,
						counts
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: filtered }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: [
						"Своё изделие можно",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sell",
							className: "text-primary underline-offset-4 hover:underline",
							children: "выставить в мастерскую"
						}),
						"."
					]
				})] })]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				side: "left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Фильтры" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 pb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
						search,
						counts
					})
				})]
			})
		})]
	});
}
export { CatalogPage as component };
