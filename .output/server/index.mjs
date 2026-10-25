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
	"/assets/about-Cs0gguvE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"519-iBcJdobEW/ci8LDaXHKu4ZuhCkI\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1305,
		"path": "../public/assets/about-Cs0gguvE.js"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e77-8nh8fqrArXnNY+jy9Z9RihLh06U\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 36471,
		"path": "../public/og.jpg"
	},
	"/assets/artisan._id-DqI1Rzcp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259-+7JOx5Q2QLub5JhJvf6D84U2ymc\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 601,
		"path": "../public/assets/artisan._id-DqI1Rzcp.js"
	},
	"/assets/button-s2vWomDG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51d-2f7VsLUWOoLX4BGhBI4Ivsew1Vw\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1309,
		"path": "../public/assets/button-s2vWomDG.js"
	},
	"/assets/cart-D8ONCHMF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1091-kk6QSF34pzjN9bqzhQwafXcpqA8\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 4241,
		"path": "../public/assets/cart-D8ONCHMF.js"
	},
	"/assets/checkout-DsUfXdJS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127c-qlulRXL/ju5aqaWt/jSZrlQ1TDc\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 4732,
		"path": "../public/assets/checkout-DsUfXdJS.js"
	},
	"/assets/catalog-hZ02_HTp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130d-qFkhEGzDobpMOmTsueeE1SbepMg\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 4877,
		"path": "../public/assets/catalog-hZ02_HTp.js"
	},
	"/assets/esm-DS2_DsMI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1443c-kjNiqx6z9rS+owuZ+Mp80RAlq1s\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 83004,
		"path": "../public/assets/esm-DS2_DsMI.js"
	},
	"/assets/dist-xIwPqSFT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281-9Iw7ddrTD38zuFqwYvFgIglP47U\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 641,
		"path": "../public/assets/dist-xIwPqSFT.js"
	},
	"/assets/faq-BxQ196T9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a-K5J2nZ/5sX2rl1iR+B3W33C79qE\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1114,
		"path": "../public/assets/faq-BxQ196T9.js"
	},
	"/assets/format-DkQaJhnG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12326-twNKwRqLtYIX7vj27Oqfi894eRI\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 74534,
		"path": "../public/assets/format-DkQaJhnG.js"
	},
	"/assets/favorites-BM5tVrbW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36b-dyf25H8LkgwgOZLIuwEfhuAaDP8\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 875,
		"path": "../public/assets/favorites-BM5tVrbW.js"
	},
	"/assets/label-DxNSpi6L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26d-YVNbG8uvZBEyBUyxwNsUFx9JZrY\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 621,
		"path": "../public/assets/label-DxNSpi6L.js"
	},
	"/assets/login-CiJ1qq9X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ebd-i1jdmc+PfD5cO+qEGjHwNzHsCXM\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 3773,
		"path": "../public/assets/login-CiJ1qq9X.js"
	},
	"/assets/mascot-CrS2bS_a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49c-JZ7I2go4tArbOUMKGWlQp/h3X0g\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1180,
		"path": "../public/assets/mascot-CrS2bS_a.js"
	},
	"/assets/master.marketing-SsZGn4l1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7bc-WMnbyaY69OKgYljOGcanI9rsfqE\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1980,
		"path": "../public/assets/master.marketing-SsZGn4l1.js"
	},
	"/assets/master.onboarding-DHNMo4zO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bcc-LYhJH2pgQ91rIhiPKfyy6NpeZPQ\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 3020,
		"path": "../public/assets/master.onboarding-DHNMo4zO.js"
	},
	"/assets/nodefs-CDR9dJTt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"220-+n0bWxyzkvJcXCMjYDbjFiLgWUA\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 544,
		"path": "../public/assets/nodefs-CDR9dJTt.js"
	},
	"/assets/master.orders-B41TFlUv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5af-dTSmVnk1Yi01VxW2CwLD9DWCMDc\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1455,
		"path": "../public/assets/master.orders-B41TFlUv.js"
	},
	"/assets/opfs-ahp-DVFKsvc1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c4-ar+7cTSDepcyZ0cOQw/T8VcYGU4\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 9924,
		"path": "../public/assets/opfs-ahp-DVFKsvc1.js"
	},
	"/assets/initdb-D3nwUMsW.wasm": {
		"type": "application/wasm",
		"etag": "\"607ea-OaK6hE/21jY+LavzmICKG3R1p40\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 395242,
		"path": "../public/assets/initdb-D3nwUMsW.wasm"
	},
	"/assets/dist-DclphF9H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97292-EBoLy4RFTpc9STIAuxmXdxzyS6U\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 619154,
		"path": "../public/assets/dist-DclphF9H.js"
	},
	"/assets/index-DlVai0Oz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b7be-LcMjZ3Tu5J6b6U0DwJbmR/xNElY\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 571326,
		"path": "../public/assets/index-DlVai0Oz.js"
	},
	"/mascot.png": {
		"type": "image/png",
		"etag": "\"cbc70-qrvtL9gz6TTBpro9zQS5mifkAK4\"",
		"mtime": "2026-10-22T19:06:04.903Z",
		"size": 834672,
		"path": "../public/mascot.png"
	},
	"/assets/order._id-jnGQfVVb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1188-Q5FM7l6TKqa2meZe6YE/N++GZt0\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 4488,
		"path": "../public/assets/order._id-jnGQfVVb.js"
	},
	"/assets/orders-ClBMJzrR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"665-rsClzz5IMKnselw/hNnv9ua8A5A\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 1637,
		"path": "../public/assets/orders-ClBMJzrR.js"
	},
	"/assets/product-card-A_Jsm07Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a41-utpOjnzsZa+68NSbu+Kz70hoStY\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 2625,
		"path": "../public/assets/product-card-A_Jsm07Q.js"
	},
	"/assets/product._id-BaiQ6IXR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"133a-2Y9hiRovJZvLcGQ2wJs1SqQD4gU\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 4922,
		"path": "../public/assets/product._id-BaiQ6IXR.js"
	},
	"/assets/rolldown-runtime-BWaJ3C7D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-8yiUtcGFA57A27925j8wamv82VA\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 911,
		"path": "../public/assets/rolldown-runtime-BWaJ3C7D.js"
	},
	"/assets/routes-CmhsWSHK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"239e-qtqtwBAPFYPgYdsjDZfDAYCZhes\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 9118,
		"path": "../public/assets/routes-CmhsWSHK.js"
	},
	"/assets/sell-BG0GhYEG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d7-q56UKUpJmAZ4YGl5RAIM/kzokAw\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 5591,
		"path": "../public/assets/sell-BG0GhYEG.js"
	},
	"/assets/styles-cD2w6J-H.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9c85-rUCaIHIBo9zxWYp7qC5Q/0oxUxU\"",
		"mtime": "2026-10-25T10:53:36.359Z",
		"size": 40069,
		"path": "../public/assets/styles-cD2w6J-H.css"
	},
	"/assets/textarea-BZRIEH6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-azVDrWC4UkYaB6KnPnp3q9NxIQM\"",
		"mtime": "2026-10-25T10:53:36.334Z",
		"size": 540,
		"path": "../public/assets/textarea-BZRIEH6J.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"142-YMqMEjX7x00eD3YjUNTQ8qzGu1E\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 322,
		"path": "../public/favicon.svg"
	},
	"/assets/__vite-browser-external-NkSIBfMg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e-SykoIddOGOkpiI7Wvw5ueNtx/NM\"",
		"mtime": "2026-10-25T10:53:36.334Z",
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
	"/products/digital-brushes.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-t3N/uuEcprz/xyNjnFHATXXLumA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1314,
		"path": "../public/products/digital-brushes.svg"
	},
	"/products/digital-lace.svg": {
		"type": "image/svg+xml",
		"etag": "\"6ff-2/XUL4Ky1LX84c/cTApoGOi1Icc\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1791,
		"path": "../public/products/digital-lace.svg"
	},
	"/products/digital-knit.svg": {
		"type": "image/svg+xml",
		"etag": "\"59a-/FY4Jow92Cjyh1I5iU+Uh2q/x44\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1434,
		"path": "../public/products/digital-knit.svg"
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
	"/products/mug.jpg": {
		"type": "image/jpeg",
		"etag": "\"760bb-JXH8Ti/DwDZZ+F5V9Xz73tJyBNs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 483515,
		"path": "../public/products/mug.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/products/vase.jpg": {
		"type": "image/jpeg",
		"etag": "\"67ec4-C+4K8YV1KiB8YFRQawlu8gLcPlI\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 425668,
		"path": "../public/products/vase.jpg"
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
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
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
	"/products/pillow.jpg": {
		"type": "image/jpeg",
		"etag": "\"c998b-inDNAj2euUY4FD4cjgVbCzEdZIs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 825739,
		"path": "../public/products/pillow.jpg"
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
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/assets/pglite-k6Y9avCD.data": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5ffe38-3FhfnnplK778fxvOIeai4Uwa8Jc\"",
		"mtime": "2026-10-25T10:53:36.359Z",
		"size": 6291e3,
		"path": "../public/assets/pglite-k6Y9avCD.data"
	},
	"/assets/pglite-CKQGo6A1.wasm": {
		"type": "application/wasm",
		"etag": "\"9a77ff-SFPLt/MseNWcRj29JOOOtgdlCZ4\"",
		"mtime": "2026-10-25T10:53:36.358Z",
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
