globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { existsSync, promises, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-t2JwTAr2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"855-704ylr2vT/1cyluJqBD7K2a3rGQ\"",
		"mtime": "2026-10-22T20:08:24.424Z",
		"size": 2133,
		"path": "../public/assets/about-t2JwTAr2.js"
	},
	"/assets/artisan._id-KC1kSPQ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259-X9Ru+iUj8yVRKN8jVYpX07k2ASY\"",
		"mtime": "2026-10-22T20:08:24.424Z",
		"size": 601,
		"path": "../public/assets/artisan._id-KC1kSPQ0.js"
	},
	"/assets/button-DbYWstxl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ff-9ej3gKIHxVdWcaFPyw49nBGPbvk\"",
		"mtime": "2026-10-22T20:08:24.424Z",
		"size": 1279,
		"path": "../public/assets/button-DbYWstxl.js"
	},
	"/assets/cart-K7TBHqvH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1012-D5Vxx4UbT9ytY0KvksmVi/C6PGw\"",
		"mtime": "2026-10-22T20:08:24.425Z",
		"size": 4114,
		"path": "../public/assets/cart-K7TBHqvH.js"
	},
	"/assets/catalog-CvBK4D7k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1313-3UfD4OWp3d15ALKfAY/8yvc488k\"",
		"mtime": "2026-10-22T20:08:24.425Z",
		"size": 4883,
		"path": "../public/assets/catalog-CvBK4D7k.js"
	},
	"/assets/checkout-ZRjD90ea.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127f-sp93y+0iLdU6JiptotyIIhKaaYk\"",
		"mtime": "2026-10-22T20:08:24.425Z",
		"size": 4735,
		"path": "../public/assets/checkout-ZRjD90ea.js"
	},
	"/assets/dist-B63Vis7T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"282-TAquYXU0kRKigrhs7DqvjGZq3EA\"",
		"mtime": "2026-10-22T20:08:24.426Z",
		"size": 642,
		"path": "../public/assets/dist-B63Vis7T.js"
	},
	"/assets/esm-UiaSkTsE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14496-5ry7iJqk+FDpSh8s5KXZg0vNh28\"",
		"mtime": "2026-10-22T20:08:24.426Z",
		"size": 83094,
		"path": "../public/assets/esm-UiaSkTsE.js"
	},
	"/assets/faq-sp01_8F5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a-vIoDBZO2uOtoh2vrTlNElmVhyK8\"",
		"mtime": "2026-10-22T20:08:24.426Z",
		"size": 1114,
		"path": "../public/assets/faq-sp01_8F5.js"
	},
	"/assets/favorites-BGj2sPYK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-fGcTg+IXKwmQnrLAVxWwoFt9rAM\"",
		"mtime": "2026-10-22T20:08:24.427Z",
		"size": 842,
		"path": "../public/assets/favorites-BGj2sPYK.js"
	},
	"/assets/index-BiyC-TqN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76bc1-kVkEugiAneClVpy58tpaQUmhVwo\"",
		"mtime": "2026-10-22T20:08:24.370Z",
		"size": 486337,
		"path": "../public/assets/index-BiyC-TqN.js"
	},
	"/assets/initdb-DwLcS450.wasm": {
		"type": "application/wasm",
		"etag": "\"607ea-EA0LyIiqMneEA5ghLUd5KcTorTk\"",
		"mtime": "2026-10-22T20:08:24.450Z",
		"size": 395242,
		"path": "../public/assets/initdb-DwLcS450.wasm"
	},
	"/assets/label-D_XnIpDd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d-GbB+l02GzljlCeleIPa/aYvkr4E\"",
		"mtime": "2026-10-22T20:08:24.427Z",
		"size": 589,
		"path": "../public/assets/label-D_XnIpDd.js"
	},
	"/assets/layout-DSVyvDPW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2686a-f+9OXdu63k+8d4TQl5AD1wT29WE\"",
		"mtime": "2026-10-22T20:08:24.427Z",
		"size": 157802,
		"path": "../public/assets/layout-DSVyvDPW.js"
	},
	"/assets/login-BPl-Hckp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ebe-qtqhT36Hpd+naLEUgoZt/RtwG/0\"",
		"mtime": "2026-10-22T20:08:24.427Z",
		"size": 3774,
		"path": "../public/assets/login-BPl-Hckp.js"
	},
	"/assets/mascot-Chvh-1kQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47b-YPWI3S3+b9gdDDy5TkHKxqO1tOE\"",
		"mtime": "2026-10-22T20:08:24.428Z",
		"size": 1147,
		"path": "../public/assets/mascot-Chvh-1kQ.js"
	},
	"/assets/master.marketing-BmJtE74-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e34-zasZWPixSbQPfh09cgi4jlhYVQo\"",
		"mtime": "2026-10-22T20:08:24.428Z",
		"size": 3636,
		"path": "../public/assets/master.marketing-BmJtE74-.js"
	},
	"/assets/master.onboarding-CtSQWmso.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bca-nkbNkh26Jyd7TPnrzpjHgMK9O7M\"",
		"mtime": "2026-10-22T20:08:24.428Z",
		"size": 3018,
		"path": "../public/assets/master.onboarding-CtSQWmso.js"
	},
	"/assets/master.orders-Lo-JaGr1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3e-pNFl92BJa7+IjdtqN+9wjmgvUFI\"",
		"mtime": "2026-10-22T20:08:24.429Z",
		"size": 2622,
		"path": "../public/assets/master.orders-Lo-JaGr1.js"
	},
	"/assets/nodefs-Doh7emOz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-udGTtPJ1opyAnlpmaQWCfIZQZSo\"",
		"mtime": "2026-10-22T20:08:24.430Z",
		"size": 540,
		"path": "../public/assets/nodefs-Doh7emOz.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-22T20:08:24.431Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/dist-DKmpfhzf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"931f2-2CFZovfpLftf9D5g7prcCErlyK0\"",
		"mtime": "2026-10-22T20:08:24.426Z",
		"size": 602610,
		"path": "../public/assets/dist-DKmpfhzf.js"
	},
	"/assets/opfs-ahp-9LmiXYVe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2713-gExJPlHDM4dGQ2bfjBzLx3OK76g\"",
		"mtime": "2026-10-22T20:08:24.436Z",
		"size": 10003,
		"path": "../public/assets/opfs-ahp-9LmiXYVe.js"
	},
	"/assets/order._id-o1GIQ1sc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1188-EgtnYJAtGcI5hTooH2I18/xjcQ4\"",
		"mtime": "2026-10-22T20:08:24.446Z",
		"size": 4488,
		"path": "../public/assets/order._id-o1GIQ1sc.js"
	},
	"/assets/orders-D2v6l9pW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"665-yalYNWHup2obqNDFo27r901ct20\"",
		"mtime": "2026-10-22T20:08:24.446Z",
		"size": 1637,
		"path": "../public/assets/orders-D2v6l9pW.js"
	},
	"/assets/plus-BS5zE0TY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-Hyut4iGAuY4tMVPBxgm3pct4wcg\"",
		"mtime": "2026-10-22T20:08:24.447Z",
		"size": 207,
		"path": "../public/assets/plus-BS5zE0TY.js"
	},
	"/assets/product-card-DLBGtqBl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2a-YW8a3Rtg/CGjFun5usAXqXMz1Ig\"",
		"mtime": "2026-10-22T20:08:24.447Z",
		"size": 2602,
		"path": "../public/assets/product-card-DLBGtqBl.js"
	},
	"/assets/product._id-FM8D4cG5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4520-iQrQ8O8lT6cfZuN0TizMW9btvAI\"",
		"mtime": "2026-10-22T20:08:24.447Z",
		"size": 17696,
		"path": "../public/assets/product._id-FM8D4cG5.js"
	},
	"/assets/rolldown-runtime-B0Z9INg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-vn6fLblvytQt1hv6CJ89eGYvXrc\"",
		"mtime": "2026-10-22T20:08:24.447Z",
		"size": 901,
		"path": "../public/assets/rolldown-runtime-B0Z9INg1.js"
	},
	"/assets/routes-BhIUVKEp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21b8-o7GSGwGhbmE0nIFJ528DPj3G5YU\"",
		"mtime": "2026-10-22T20:08:24.448Z",
		"size": 8632,
		"path": "../public/assets/routes-BhIUVKEp.js"
	},
	"/assets/sell-BcqMgyVc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d5-7S8imYb6Iogevzc5f2sQQI/Egls\"",
		"mtime": "2026-10-22T20:08:24.449Z",
		"size": 5589,
		"path": "../public/assets/sell-BcqMgyVc.js"
	},
	"/assets/styles-CqtaJyKO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9bd8-Pf6AG3CuUZq+r9JS+nUJJpRMth8\"",
		"mtime": "2026-10-22T20:08:24.467Z",
		"size": 39896,
		"path": "../public/assets/styles-CqtaJyKO.css"
	},
	"/assets/textarea-DNzn-iT-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe-cUvMs9YDcSaeU8Fk13/HQNEJUeU\"",
		"mtime": "2026-10-22T20:08:24.449Z",
		"size": 510,
		"path": "../public/assets/textarea-DNzn-iT-.js"
	},
	"/assets/truck-BtnebPWq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d-zq0sXgl1Aop4vXUnX7CAMl2KdFw\"",
		"mtime": "2026-10-22T20:08:24.450Z",
		"size": 605,
		"path": "../public/assets/truck-BtnebPWq.js"
	},
	"/assets/__vite-browser-external-CV6URZNE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e-vxv9vt+Cx0Bz1KhXTg6lqN/o35E\"",
		"mtime": "2026-10-22T20:08:24.370Z",
		"size": 94,
		"path": "../public/assets/__vite-browser-external-CV6URZNE.js"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e77-8nh8fqrArXnNY+jy9Z9RihLh06U\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 36471,
		"path": "../public/og.jpg"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"142-YMqMEjX7x00eD3YjUNTQ8qzGu1E\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 322,
		"path": "../public/favicon.svg"
	},
	"/products/digital-knit.svg": {
		"type": "image/svg+xml",
		"etag": "\"59a-/FY4Jow92Cjyh1I5iU+Uh2q/x44\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1434,
		"path": "../public/products/digital-knit.svg"
	},
	"/products/candles.jpg": {
		"type": "image/jpeg",
		"etag": "\"8af83-Wai0wSXiudDdqSGKueYZa23cQ4I\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 569219,
		"path": "../public/products/candles.jpg"
	},
	"/mascot.png": {
		"type": "image/png",
		"etag": "\"cbc70-qrvtL9gz6TTBpro9zQS5mifkAK4\"",
		"mtime": "2026-10-22T19:06:04.903Z",
		"size": 834672,
		"path": "../public/mascot.png"
	},
	"/products/board.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3fc8-GO6CeHL0qXqOQb2piuMOYMcBSgk\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 671688,
		"path": "../public/products/board.jpg"
	},
	"/products/digital-brushes.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-t3N/uuEcprz/xyNjnFHATXXLumA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1314,
		"path": "../public/products/digital-brushes.svg"
	},
	"/products/digital-berry.svg": {
		"type": "image/svg+xml",
		"etag": "\"561-55TGtDmao3Pxwm3GG1kmX4PDwKo\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1377,
		"path": "../public/products/digital-berry.svg"
	},
	"/products/digital-lace.svg": {
		"type": "image/svg+xml",
		"etag": "\"6ff-2/XUL4Ky1LX84c/cTApoGOi1Icc\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1791,
		"path": "../public/products/digital-lace.svg"
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
	"/products/vase.jpg": {
		"type": "image/jpeg",
		"etag": "\"67ec4-C+4K8YV1KiB8YFRQawlu8gLcPlI\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 425668,
		"path": "../public/products/vase.jpg"
	},
	"/products/mug.jpg": {
		"type": "image/jpeg",
		"etag": "\"760bb-JXH8Ti/DwDZZ+F5V9Xz73tJyBNs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 483515,
		"path": "../public/products/mug.jpg"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/products/journal.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6799-zvrl+daZnxLUl7DTs5M48ydo1TM\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 812953,
		"path": "../public/products/journal.jpg"
	},
	"/products/ring.jpg": {
		"type": "image/jpeg",
		"etag": "\"93ed4-gjXz7BYA57L3/D9r3AV9wlmVa9k\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 605908,
		"path": "../public/products/ring.jpg"
	},
	"/products/linen.jpg": {
		"type": "image/jpeg",
		"etag": "\"c1f2d-R9SgNiwh6PbR5ZacgMONAkQVGv4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 794413,
		"path": "../public/products/linen.jpg"
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
	"/products/pillow.jpg": {
		"type": "image/jpeg",
		"etag": "\"c998b-inDNAj2euUY4FD4cjgVbCzEdZIs\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 825739,
		"path": "../public/products/pillow.jpg"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-10-04T16:14:20.000Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/assets/pglite-n8RDJ3Sw.data": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"600f14-BV9gfLeLeOIFIDDQJPm3R61FxmA\"",
		"mtime": "2026-10-22T20:08:24.467Z",
		"size": 6295316,
		"path": "../public/assets/pglite-n8RDJ3Sw.data"
	},
	"/assets/pglite-DgipwPsY.wasm": {
		"type": "application/wasm",
		"etag": "\"99eee1-4pv/gUUkNdWvrOIIrM5n9xHzeE0\"",
		"mtime": "2026-10-22T20:08:24.450Z",
		"size": 10088161,
		"path": "../public/assets/pglite-DgipwPsY.wasm"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
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
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "Живица",
	"card": "custom",
	"color": "3E4F45",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readGrokExtensionsEnabled() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_GROK_EXTENSIONS : "";
	return String(fromProcess ?? "").trim() !== "0";
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	if (!readGrokExtensionsEnabled()) return tags;
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripGrokExtensionsScript(html) {
	return String(html).replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*\/grok-app-builder\/extensions\.js[^"']*["'][^>]*>\s*<\/script>/gi, "");
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	if (!readGrokExtensionsEnabled()) next = stripGrokExtensionsScript(next);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (readGrokExtensionsEnabled() && !next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
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
var globalMiddleware = [toEventHandler(static_default), toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
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
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
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
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
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
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
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
//#endregion
export { node_server_default as default };
