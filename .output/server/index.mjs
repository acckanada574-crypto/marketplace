globalThis.__nitro_main__ = import.meta.url;
import { n as serve, t as NodeResponse } from "./_libs/srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
// node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
// #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-F2xrN79S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"519-3tgP7QEdhBFaRmFqBDGtR99pD6c\"",
		"mtime": "2026-10-23T21:18:32.327Z",
		"size": 1305,
		"path": "../public/assets/about-F2xrN79S.js"
	},
	"/assets/artisan._id-CFiW9BJ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259-xvHC2jawrdiBBqPamHRGj+E2cxo\"",
		"mtime": "2026-10-23T21:18:32.327Z",
		"size": 601,
		"path": "../public/assets/artisan._id-CFiW9BJ_.js"
	},
	"/assets/button-CWFOyh55.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4fd-SYwfFOYReUJgXlDhEBpQj3uPdl4\"",
		"mtime": "2026-10-23T21:18:32.327Z",
		"size": 1277,
		"path": "../public/assets/button-CWFOyh55.js"
	},
	"/assets/catalog-Cl1SCYvg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1313-jsYUfFiPnPOZosp2Nq4Qv/5aFpM\"",
		"mtime": "2026-10-23T21:18:32.328Z",
		"size": 4883,
		"path": "../public/assets/catalog-Cl1SCYvg.js"
	},
	"/assets/cart-C6RYZjP4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1012-o8guxefbyzLylymkcg5/bHtRZlI\"",
		"mtime": "2026-10-23T21:18:32.328Z",
		"size": 4114,
		"path": "../public/assets/cart-C6RYZjP4.js"
	},
	"/assets/checkout-BzWEq9oL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127d-Dad6JFeY0jYVbpPb8heMKQvj9Jc\"",
		"mtime": "2026-10-23T21:18:32.328Z",
		"size": 4733,
		"path": "../public/assets/checkout-BzWEq9oL.js"
	},
	"/assets/dist-DJWiqJjL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"282-AVn4Ni+vMG+R3Q4rplyBuDDR+qI\"",
		"mtime": "2026-10-23T21:18:32.329Z",
		"size": 642,
		"path": "../public/assets/dist-DJWiqJjL.js"
	},
	"/assets/esm-DS2_DsMI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1443c-kjNiqx6z9rS+owuZ+Mp80RAlq1s\"",
		"mtime": "2026-10-23T21:18:32.329Z",
		"size": 83004,
		"path": "../public/assets/esm-DS2_DsMI.js"
	},
	"/assets/faq-BOuKE6ou.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a-cmSNc/M4ANe2NFp4Y4kZsLhvsc8\"",
		"mtime": "2026-10-23T21:18:32.329Z",
		"size": 1114,
		"path": "../public/assets/faq-BOuKE6ou.js"
	},
	"/assets/favorites-ChhDMDHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-nq928NZhwU+0HXqqMdpjhNPaxNI\"",
		"mtime": "2026-10-23T21:18:32.329Z",
		"size": 842,
		"path": "../public/assets/favorites-ChhDMDHh.js"
	},
	"/assets/label-7FEPZnOF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d-k8KcRoZ64ovy1ByjtMUWNTBK91w\"",
		"mtime": "2026-10-23T21:18:32.330Z",
		"size": 589,
		"path": "../public/assets/label-7FEPZnOF.js"
	},
	"/assets/index-mtPEUlKq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69e37-Qq2l9qh5nKhFwFFqLJmc8O/MhIE\"",
		"mtime": "2026-10-23T21:18:32.327Z",
		"size": 433719,
		"path": "../public/assets/index-mtPEUlKq.js"
	},
	"/assets/login-DFJL6Mmz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb9-qc1iGjznym1abNo7Z6F8K8tE9lk\"",
		"mtime": "2026-10-23T21:18:32.330Z",
		"size": 3769,
		"path": "../public/assets/login-DFJL6Mmz.js"
	},
	"/assets/mascot-BhIr0X28.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47b-jkJ68hNdBMKHfYhTa5A632qJVdg\"",
		"mtime": "2026-10-23T21:18:32.330Z",
		"size": 1147,
		"path": "../public/assets/mascot-BhIr0X28.js"
	},
	"/assets/initdb-D3nwUMsW.wasm": {
		"type": "application/wasm",
		"etag": "\"607ea-OaK6hE/21jY+LavzmICKG3R1p40\"",
		"mtime": "2026-10-23T21:18:32.336Z",
		"size": 395242,
		"path": "../public/assets/initdb-D3nwUMsW.wasm"
	},
	"/assets/master.marketing-lIUH5XuP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b7-3m7BG0X551B7gNm/OG62ZRK/4po\"",
		"mtime": "2026-10-23T21:18:32.331Z",
		"size": 1975,
		"path": "../public/assets/master.marketing-lIUH5XuP.js"
	},
	"/assets/master.onboarding-CfEE7cP7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc8-5TGPGnX4+ERCQw0R5EvAQPDwTPQ\"",
		"mtime": "2026-10-23T21:18:32.331Z",
		"size": 3016,
		"path": "../public/assets/master.onboarding-CfEE7cP7.js"
	},
	"/assets/master.orders-D7M6zfER.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5af-v69HDN4Cg8sLE03AkcE1/KQYzNA\"",
		"mtime": "2026-10-23T21:18:32.331Z",
		"size": 1455,
		"path": "../public/assets/master.orders-D7M6zfER.js"
	},
	"/assets/layout-CJSkQ2M0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3408a-LTl1MOZJXiqey/rLSW47hQ1clGU\"",
		"mtime": "2026-10-23T21:18:32.330Z",
		"size": 213130,
		"path": "../public/assets/layout-CJSkQ2M0.js"
	},
	"/assets/nodefs-CxJUPWIH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"220-EyMXcgZ+6tdcYpusrPug3gtatyw\"",
		"mtime": "2026-10-23T21:18:32.331Z",
		"size": 544,
		"path": "../public/assets/nodefs-CxJUPWIH.js"
	},
	"/assets/opfs-ahp-CRfvI8Rb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c4-Nvse3zvr4wajBUucaTSRAhri2ww\"",
		"mtime": "2026-10-23T21:18:32.331Z",
		"size": 9924,
		"path": "../public/assets/opfs-ahp-CRfvI8Rb.js"
	},
	"/assets/dist-BiYeRRe-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97292-RyhDdrQAO6q4Y4ZvUSCWizMFfVM\"",
		"mtime": "2026-10-23T21:18:32.329Z",
		"size": 619154,
		"path": "../public/assets/dist-BiYeRRe-.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"142-YMqMEjX7x00eD3YjUNTQ8qzGu1E\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 322,
		"path": "../public/favicon.svg"
	},
	"/mascot.png": {
		"type": "image/png",
		"etag": "\"cbc70-qrvtL9gz6TTBpro9zQS5mifkAK4\"",
		"mtime": "2026-10-22T19:06:04.903Z",
		"size": 834672,
		"path": "../public/mascot.png"
	},
	"/assets/order._id-Bl0EQkjH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1188-LieGqUxntenjypxuNjnIpXnvdCU\"",
		"mtime": "2026-10-23T21:18:32.332Z",
		"size": 4488,
		"path": "../public/assets/order._id-Bl0EQkjH.js"
	},
	"/assets/orders-Oe6WVo6g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"665-gGmGlbA+LDGR/DNtwBhkWsi4zGY\"",
		"mtime": "2026-10-23T21:18:32.332Z",
		"size": 1637,
		"path": "../public/assets/orders-Oe6WVo6g.js"
	},
	"/assets/plus-BxNtmoOi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-7Q8+9XGDy+3EJPPG0Nk7luLaGro\"",
		"mtime": "2026-10-23T21:18:32.332Z",
		"size": 207,
		"path": "../public/assets/plus-BxNtmoOi.js"
	},
	"/assets/product-card-BC_pF9j5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2a-WTSRgJwYHUuu3Kc1V8ASTenx7N8\"",
		"mtime": "2026-10-23T21:18:32.332Z",
		"size": 2602,
		"path": "../public/assets/product-card-BC_pF9j5.js"
	},
	"/assets/product._id-DvljMdb-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4547-T+4Rfp7auzGMTubQJyKRtGXFACU\"",
		"mtime": "2026-10-23T21:18:32.332Z",
		"size": 17735,
		"path": "../public/assets/product._id-DvljMdb-.js"
	},
	"/assets/rolldown-runtime-BWaJ3C7D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-8yiUtcGFA57A27925j8wamv82VA\"",
		"mtime": "2026-10-23T21:18:32.333Z",
		"size": 911,
		"path": "../public/assets/rolldown-runtime-BWaJ3C7D.js"
	},
	"/assets/sell-84f2ihCl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d3-B82ve0MVjL53YXx9U0wYtOIRRe8\"",
		"mtime": "2026-10-23T21:18:32.333Z",
		"size": 5587,
		"path": "../public/assets/sell-84f2ihCl.js"
	},
	"/assets/routes-Ra7HRfnr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21b8-MoWOm8QAja/BOlbI8XvdBlM+oLs\"",
		"mtime": "2026-10-23T21:18:32.333Z",
		"size": 8632,
		"path": "../public/assets/routes-Ra7HRfnr.js"
	},
	"/assets/textarea-BC66S0BM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fc-ImBnffLAMCyZ/GC4C0EjrZzDXio\"",
		"mtime": "2026-10-23T21:18:32.333Z",
		"size": 508,
		"path": "../public/assets/textarea-BC66S0BM.js"
	},
	"/assets/styles-fzur68Tz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9cca-Vg/S9nHTzuA6qETskb993m1V/+A\"",
		"mtime": "2026-10-23T21:18:32.348Z",
		"size": 40138,
		"path": "../public/assets/styles-fzur68Tz.css"
	},
	"/assets/truck-BMWCK5lb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d-mNz5VM/7NYxbZKVEX218sDe2284\"",
		"mtime": "2026-10-23T21:18:32.333Z",
		"size": 605,
		"path": "../public/assets/truck-BMWCK5lb.js"
	},
	"/assets/__vite-browser-external-NkSIBfMg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e-SykoIddOGOkpiI7Wvw5ueNtx/NM\"",
		"mtime": "2026-10-23T21:18:32.327Z",
		"size": 94,
		"path": "../public/assets/__vite-browser-external-NkSIBfMg.js"
	},
	"/products/digital-berry.svg": {
		"type": "image/svg+xml",
		"etag": "\"561-55TGtDmao3Pxwm3GG1kmX4PDwKo\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1377,
		"path": "../public/products/digital-berry.svg"
	},
	"/products/digital-brushes.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-t3N/uuEcprz/xyNjnFHATXXLumA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1314,
		"path": "../public/products/digital-brushes.svg"
	},
	"/products/digital-knit.svg": {
		"type": "image/svg+xml",
		"etag": "\"59a-/FY4Jow92Cjyh1I5iU+Uh2q/x44\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1434,
		"path": "../public/products/digital-knit.svg"
	},
	"/products/digital-lace.svg": {
		"type": "image/svg+xml",
		"etag": "\"6ff-2/XUL4Ky1LX84c/cTApoGOi1Icc\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1791,
		"path": "../public/products/digital-lace.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e77-8nh8fqrArXnNY+jy9Z9RihLh06U\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 36471,
		"path": "../public/og.jpg"
	},
	"/products/digital-north.svg": {
		"type": "image/svg+xml",
		"etag": "\"477-OmG8e7QWE9WUBfgySxjbr0sBK0Y\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1143,
		"path": "../public/products/digital-north.svg"
	},
	"/products/digital-prints.svg": {
		"type": "image/svg+xml",
		"etag": "\"482-b9cDlXTU9C/fpxVVp01md9SvDI4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1154,
		"path": "../public/products/digital-prints.svg"
	},
	"/products/board.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3fc8-GO6CeHL0qXqOQb2piuMOYMcBSgk\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 671688,
		"path": "../public/products/board.jpg"
	},
	"/products/candles.jpg": {
		"type": "image/jpeg",
		"etag": "\"8af83-Wai0wSXiudDdqSGKueYZa23cQ4I\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 569219,
		"path": "../public/products/candles.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/products/mug.jpg": {
		"type": "image/jpeg",
		"etag": "\"760bb-JXH8Ti/DwDZZ+F5V9Xz73tJyBNs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 483515,
		"path": "../public/products/mug.jpg"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/products/vase.jpg": {
		"type": "image/jpeg",
		"etag": "\"67ec4-C+4K8YV1KiB8YFRQawlu8gLcPlI\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 425668,
		"path": "../public/products/vase.jpg"
	},
	"/products/linen.jpg": {
		"type": "image/jpeg",
		"etag": "\"c1f2d-R9SgNiwh6PbR5ZacgMONAkQVGv4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 794413,
		"path": "../public/products/linen.jpg"
	},
	"/products/journal.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6799-zvrl+daZnxLUl7DTs5M48ydo1TM\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 812953,
		"path": "../public/products/journal.jpg"
	},
	"/products/spoons.jpg": {
		"type": "image/jpeg",
		"etag": "\"e8f5a-K6EfKDqzduYpEhrfLOzS4YO42i4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 954202,
		"path": "../public/products/spoons.jpg"
	},
	"/products/ring.jpg": {
		"type": "image/jpeg",
		"etag": "\"93ed4-gjXz7BYA57L3/D9r3AV9wlmVa9k\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 605908,
		"path": "../public/products/ring.jpg"
	},
	"/products/pillow.jpg": {
		"type": "image/jpeg",
		"etag": "\"c998b-inDNAj2euUY4FD4cjgVbCzEdZIs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 825739,
		"path": "../public/products/pillow.jpg"
	},
	"/products/throw.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa797-hrJbGsOGlamMBrIUpUc/nBTJ1bQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 698263,
		"path": "../public/products/throw.jpg"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/assets/pglite-k6Y9avCD.data": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5ffe38-3FhfnnplK778fxvOIeai4Uwa8Jc\"",
		"mtime": "2026-10-23T21:18:32.348Z",
		"size": 6291e3,
		"path": "../public/assets/pglite-k6Y9avCD.data"
	},
	"/assets/pglite-CKQGo6A1.wasm": {
		"type": "application/wasm",
		"etag": "\"9a77ff-SFPLt/MseNWcRj29JOOOtgdlCZ4\"",
		"mtime": "2026-10-23T21:18:32.345Z",
		"size": 10123263,
		"path": "../public/assets/pglite-CKQGo6A1.wasm"
	}
};
// #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
// #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
// node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
// #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_wo8b10 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wo8b10
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
// node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
// #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
// #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
// node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
// node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
// #nitro/virtual/tracing
var tracingSrvxPlugins = [];
// node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
export { node_server_default as default };
