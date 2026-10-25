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
	"/assets/artisan._id-CaF7Hzlv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259-7HYjf7pQ8zdKKSoXguIcIMw/sV4\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 601,
		"path": "../public/assets/artisan._id-CaF7Hzlv.js"
	},
	"/assets/about-T5RoTo61.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"519-tR0sZoqKbZekXlrJ9EwXXtSTrbc\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1305,
		"path": "../public/assets/about-T5RoTo61.js"
	},
	"/assets/button-CGN968e5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74a-KMKmpNWZtjfdffVFhRFecSgZUAE\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1866,
		"path": "../public/assets/button-CGN968e5.js"
	},
	"/assets/cart-BhnsXVXX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1096-n9MAC/fj7fsq/Ef+73Zo7SuMlAo\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 4246,
		"path": "../public/assets/cart-BhnsXVXX.js"
	},
	"/assets/catalog-o-H2-Amo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1312-98lGskiSmlGWGCydHRrc2vvN9JM\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 4882,
		"path": "../public/assets/catalog-o-H2-Amo.js"
	},
	"/assets/checkout-Cw34Ml7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1277-YjhCp2vKADIzCkdBOGSghhCJuv4\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 4727,
		"path": "../public/assets/checkout-Cw34Ml7y.js"
	},
	"/assets/esm-DS2_DsMI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1443c-kjNiqx6z9rS+owuZ+Mp80RAlq1s\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 83004,
		"path": "../public/assets/esm-DS2_DsMI.js"
	},
	"/assets/favorites-DRhL1f6T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36b-zMgeCYA/8gmXdfD37zP6dEE9rM4\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 875,
		"path": "../public/assets/favorites-DRhL1f6T.js"
	},
	"/assets/faq-ycctYV3c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a-QnkpKB2PZAUjkUhSR7Hl9H9NMI4\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1114,
		"path": "../public/assets/faq-ycctYV3c.js"
	},
	"/assets/format-DypwdrLI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122d0-J41E2XniQmX61a2hFo/O3VwLTi0\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 74448,
		"path": "../public/assets/format-DypwdrLI.js"
	},
	"/assets/label-ChJZyL7v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26d-9Y/Tqy8pVobN16SGLPcc2nidB8c\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 621,
		"path": "../public/assets/label-ChJZyL7v.js"
	},
	"/assets/login-D57_w4EP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ebd-VPLHtLB/2yC9UUOuqTzpYKHq6Ys\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 3773,
		"path": "../public/assets/login-D57_w4EP.js"
	},
	"/assets/mascot-rKIKj2u6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49c-dBmvfB6WQ6Jq4CeLJi3seN9UQBY\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1180,
		"path": "../public/assets/mascot-rKIKj2u6.js"
	},
	"/assets/master.marketing-D4Ta-Tn_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7bc-XyQ0NvZPZ+G8ErRFmKJNaUnMLaU\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1980,
		"path": "../public/assets/master.marketing-D4Ta-Tn_.js"
	},
	"/assets/master.onboarding-C432fDY8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bcc-gwoslHFg49J/thWjD1S8tiikSDo\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 3020,
		"path": "../public/assets/master.onboarding-C432fDY8.js"
	},
	"/assets/master.orders-D26GbcwC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5af-vk4ak4l5RAMTi9/vdQbsp/4/7Vw\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1455,
		"path": "../public/assets/master.orders-D26GbcwC.js"
	},
	"/assets/opfs-ahp-BAmOIpBc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c4-T+nmwpc1l+6M1D0CCLQHEHI0Vgo\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 9924,
		"path": "../public/assets/opfs-ahp-BAmOIpBc.js"
	},
	"/assets/nodefs-CQCml7RP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"220-oK8B9n30aR5MPmhV2+jmZkZycxs\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 544,
		"path": "../public/assets/nodefs-CQCml7RP.js"
	},
	"/assets/order._id-BDVYfuQ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118d-feMcwTDL7MDxAFKZXslvwmMOOTs\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 4493,
		"path": "../public/assets/order._id-BDVYfuQ6.js"
	},
	"/assets/initdb-D3nwUMsW.wasm": {
		"type": "application/wasm",
		"etag": "\"607ea-OaK6hE/21jY+LavzmICKG3R1p40\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 395242,
		"path": "../public/assets/initdb-D3nwUMsW.wasm"
	},
	"/assets/dist-8nmdcGsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97292-TC/o+/xEIrhzFZVkKQvZE57j/Gg\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 619154,
		"path": "../public/assets/dist-8nmdcGsg.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"142-YMqMEjX7x00eD3YjUNTQ8qzGu1E\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 322,
		"path": "../public/favicon.svg"
	},
	"/assets/index-BHMRfXP8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b795-8GBVW6wIQTsIO2UDb6YBZKT89QQ\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 571285,
		"path": "../public/assets/index-BHMRfXP8.js"
	},
	"/mascot.png": {
		"type": "image/png",
		"etag": "\"cbc70-qrvtL9gz6TTBpro9zQS5mifkAK4\"",
		"mtime": "2026-10-22T19:06:04.903Z",
		"size": 834672,
		"path": "../public/mascot.png"
	},
	"/assets/orders-BK0nENsk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-FrHiwnxusk6Nh/DLkKF0qwMk4os\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 1642,
		"path": "../public/assets/orders-BK0nENsk.js"
	},
	"/assets/product-card-kB_f57Ck.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b5-014WA5esEkfCWLiS6qvkFsx2Bfc\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 2229,
		"path": "../public/assets/product-card-kB_f57Ck.js"
	},
	"/assets/product._id-CryEZvVD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"133f-WQGAiJ20EsI/eRJZhpOLuUjc824\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 4927,
		"path": "../public/assets/product._id-CryEZvVD.js"
	},
	"/assets/rolldown-runtime-BWaJ3C7D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-8yiUtcGFA57A27925j8wamv82VA\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 911,
		"path": "../public/assets/rolldown-runtime-BWaJ3C7D.js"
	},
	"/assets/routes-Ca7sTzZ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2586-gsBOY3j/KKcPskNe/BSnm6atfng\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 9606,
		"path": "../public/assets/routes-Ca7sTzZ9.js"
	},
	"/assets/sell-Bhk87Cee.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d7-SiJeqDxgCYsfMQ92Zk1sIWeFjVo\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 5591,
		"path": "../public/assets/sell-Bhk87Cee.js"
	},
	"/assets/styles-CxdmgSgg.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"a144-DJNVeAF38wNwHO96GBlXCGeaMuw\"",
		"mtime": "2026-10-25T11:04:05.784Z",
		"size": 41284,
		"path": "../public/assets/styles-CxdmgSgg.css"
	},
	"/assets/textarea-DfERLQOy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-TUIwycvAb49OwrrQoLm0kd6L4fw\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 540,
		"path": "../public/assets/textarea-DfERLQOy.js"
	},
	"/assets/__vite-browser-external-NkSIBfMg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e-SykoIddOGOkpiI7Wvw5ueNtx/NM\"",
		"mtime": "2026-10-25T11:04:05.570Z",
		"size": 94,
		"path": "../public/assets/__vite-browser-external-NkSIBfMg.js"
	},
	"/products/digital-brushes.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-t3N/uuEcprz/xyNjnFHATXXLumA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1314,
		"path": "../public/products/digital-brushes.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e77-8nh8fqrArXnNY+jy9Z9RihLh06U\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 36471,
		"path": "../public/og.jpg"
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
	"/products/digital-prints.svg": {
		"type": "image/svg+xml",
		"etag": "\"482-b9cDlXTU9C/fpxVVp01md9SvDI4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1154,
		"path": "../public/products/digital-prints.svg"
	},
	"/products/digital-north.svg": {
		"type": "image/svg+xml",
		"etag": "\"477-OmG8e7QWE9WUBfgySxjbr0sBK0Y\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1143,
		"path": "../public/products/digital-north.svg"
	},
	"/products/digital-berry.svg": {
		"type": "image/svg+xml",
		"etag": "\"561-55TGtDmao3Pxwm3GG1kmX4PDwKo\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1377,
		"path": "../public/products/digital-berry.svg"
	},
	"/products/mug.jpg": {
		"type": "image/jpeg",
		"etag": "\"760bb-JXH8Ti/DwDZZ+F5V9Xz73tJyBNs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 483515,
		"path": "../public/products/mug.jpg"
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
	"/products/journal.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6799-zvrl+daZnxLUl7DTs5M48ydo1TM\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 812953,
		"path": "../public/products/journal.jpg"
	},
	"/products/linen.jpg": {
		"type": "image/jpeg",
		"etag": "\"c1f2d-R9SgNiwh6PbR5ZacgMONAkQVGv4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 794413,
		"path": "../public/products/linen.jpg"
	},
	"/products/pillow.jpg": {
		"type": "image/jpeg",
		"etag": "\"c998b-inDNAj2euUY4FD4cjgVbCzEdZIs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 825739,
		"path": "../public/products/pillow.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
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
	"/products/vase.jpg": {
		"type": "image/jpeg",
		"etag": "\"67ec4-C+4K8YV1KiB8YFRQawlu8gLcPlI\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 425668,
		"path": "../public/products/vase.jpg"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/products/ring.jpg": {
		"type": "image/jpeg",
		"etag": "\"93ed4-gjXz7BYA57L3/D9r3AV9wlmVa9k\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 605908,
		"path": "../public/products/ring.jpg"
	},
	"/products/throw.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa797-hrJbGsOGlamMBrIUpUc/nBTJ1bQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 698263,
		"path": "../public/products/throw.jpg"
	},
	"/products/spoons.jpg": {
		"type": "image/jpeg",
		"etag": "\"e8f5a-K6EfKDqzduYpEhrfLOzS4YO42i4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 954202,
		"path": "../public/products/spoons.jpg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/assets/pglite-k6Y9avCD.data": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5ffe38-3FhfnnplK778fxvOIeai4Uwa8Jc\"",
		"mtime": "2026-10-25T11:04:05.784Z",
		"size": 6291e3,
		"path": "../public/assets/pglite-k6Y9avCD.data"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/assets/pglite-CKQGo6A1.wasm": {
		"type": "application/wasm",
		"etag": "\"9a77ff-SFPLt/MseNWcRj29JOOOtgdlCZ4\"",
		"mtime": "2026-10-25T11:04:05.586Z",
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
