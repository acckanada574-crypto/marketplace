import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Heart, o as ShoppingBag } from "../_libs/lucide-react.mjs";
import { O as apiFetch, v as formatPrice } from "./router-CE3wJeh9.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product-card-DGdhEfNp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const [isAdding, setIsAdding] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const handleAddToCart = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsAdding(true);
		setMessage("");
		try {
			await apiFetch("/api/cart", {
				method: "POST",
				body: JSON.stringify({
					productId: product.id,
					quantity: 1
				}),
				headers: { "Content-Type": "application/json" }
			});
			setMessage("Добавлено!");
			setTimeout(() => setMessage(""), 2e3);
		} catch (err) {
			if (err.status === 401) setMessage("Войдите, чтобы добавить");
			else setMessage("Ошибка");
		} finally {
			setIsAdding(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$id",
			params: { id: product.id },
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-xl bg-muted aspect-[4/5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.title,
					className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: product.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: product.subtitle
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: formatPrice(product.price)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleAddToCart,
				disabled: isAdding,
				className: "flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors disabled:opacity-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), isAdding ? "..." : "В корзину"]
			}), message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: message
			})]
		})]
	});
}
function ProductGrid({ products }) {
	if (!products || products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-12 text-center text-muted-foreground",
		children: "Товаров пока нет."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
		children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
	});
}
export { ProductGrid as n, ProductCard as t };
