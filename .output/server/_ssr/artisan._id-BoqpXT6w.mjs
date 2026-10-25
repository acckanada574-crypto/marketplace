import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, o as Route$13, p as Section } from "./router-D5lWvhFy.mjs";
import { n as ProductGrid } from "./product-card-B2cMAisM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/artisan._id-BoqpXT6w.js
var import_jsx_runtime = require_jsx_runtime();
function ArtisanPage() {
	const { artisan, products } = Route$13.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex size-16 items-center justify-center rounded-full border border-border font-display text-lg text-primary",
				children: artisan.mark
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: `${artisan.craft} · ${artisan.city} · с ${artisan.since}`,
				title: artisan.name,
				description: artisan.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
		] })
	});
}
export { ArtisanPage as component };
