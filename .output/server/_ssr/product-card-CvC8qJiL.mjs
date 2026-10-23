import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as Heart } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { E as cn, _ as formatPrice, h as useMarket, v as kindLabel } from "./router-B3oI1Wg1.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product-card-CvC8qJiL.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border text-foreground",
		muted: "border-transparent bg-muted text-muted-foreground",
		digital: "border-primary/20 bg-primary/8 text-primary"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function ProductCard({ product }) {
	const favorites = useMarket((s) => s.favorites);
	const toggleFavorite = useMarket((s) => s.toggleFavorite);
	const loved = favorites.includes(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$id",
				params: { id: product.id },
				className: "relative overflow-hidden rounded-xl bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.title,
					className: "aspect-photo w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: product.kind === "digital" ? "digital" : "muted",
						children: kindLabel(product.kind)
					}), product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						children: "Новое"
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$id",
						params: { id: product.id },
						className: "font-display text-lg leading-snug font-medium tracking-tight text-foreground hover:text-primary",
						children: product.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate text-sm text-muted-foreground",
						children: product.subtitle
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": loved ? "Убрать из избранного" : "В избранное",
					onClick: () => toggleFavorite(product.id),
					className: cn("relative size-11 shrink-0 rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", loved && "text-primary"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("mx-auto size-4", loved && "fill-primary") })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-medium tabular-nums",
				children: formatPrice(product.price)
			})
		]
	});
}
function ProductGrid({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl bg-card px-5 py-12 text-center text-muted-foreground shadow-border",
		children: "Ничего не нашлось. Снимите фильтр или попробуйте другое слово."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
		children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
	});
}
export { ProductCard as n, ProductGrid as r, Badge as t };
