import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as PageHeading, f as Section, h as useMarket, p as findProduct } from "./router-ClqpZo3t.mjs";
import { r as ProductGrid } from "./product-card-BBA085PN.mjs";
import { t as Button } from "./button-DwD50u6R.mjs";
// node_modules/.nitro/vite/services/ssr/assets/favorites-DkSB30zn.js
var import_jsx_runtime = require_jsx_runtime();
function FavoritesPage() {
	const favorites = useMarket((s) => s.favorites);
	const listings = useMarket((s) => s.listings);
	const products = favorites.map((id) => findProduct(listings, id)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			kicker: "Витрина",
			title: "Избранное"
		}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card px-6 py-12 text-center shadow-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Пока пусто — отметьте работы сердцем на карточке."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalog",
					children: "К работам"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })] })
	});
}
export { FavoritesPage as component };
