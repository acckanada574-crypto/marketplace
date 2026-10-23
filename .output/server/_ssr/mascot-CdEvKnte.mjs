import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as PageHeading, f as Section } from "./router-ClqpZo3t.mjs";
// node_modules/.nitro/vite/services/ssr/assets/mascot-CdEvKnte.js
var import_jsx_runtime = require_jsx_runtime();
function MascotPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
					kicker: "Талисман",
					title: "Знакомься: Живчик",
					description: "Дух леса, который живёт в каждой вещи, сделанной руками."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/mascot.png",
					alt: "Живчик — талисман Живицы",
					className: "mx-auto mt-8 w-full max-w-md rounded-2xl shadow-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-base leading-relaxed text-muted-foreground",
					children: "Живчик — это капля смолы, которая заживляет дерево. Он любопытный, немного неуклюжий и очень любит трогать всё руками. Он живёт в каждой керамической чашке, в каждом льняном платье, в каждом кольце — и напоминает, что вещи с теплом рук не бывают одинаковыми."
				})
			]
		})
	});
}
export { MascotPage as component };
