import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Copy, a as Sparkles } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Route$5, f as PageHeading, p as Section, v as formatPrice } from "./router-BdcXIK4Z.mjs";
import { t as Button } from "./button-B2bThswQ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/master.marketing-ChtfwOI5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPES = [
	{
		id: "telegram",
		label: "Пост в Telegram"
	},
	{
		id: "vk",
		label: "Пост в VK"
	},
	{
		id: "reels",
		label: "Идея для Reels"
	},
	{
		id: "hashtags",
		label: "Хэштеги"
	},
	{
		id: "image-prompt",
		label: "Промпт для фото"
	}
];
function MarketingPage() {
	const products = Route$5.useLoaderData();
	const [selectedId, setSelectedId] = (0, import_react.useState)(products[0]?.id ?? "");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)(null);
	async function generate(type) {
		if (!selectedId) {
			toast.error("Выберите товар");
			return;
		}
		setBusy(type);
		setResult(null);
		try {
			const res = await fetch("/api/generate-promo", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: selectedId,
					type
				})
			});
			if (!res.ok) throw new Error("ИИ не ответил");
			const data = await res.json();
			setResult({
				type,
				text: data.text
			});
		} catch (err) {
			toast.error("Ошибка ИИ. Проверьте, запущена ли Ollama.");
		} finally {
			setBusy(null);
		}
	}
	async function copyToClipboard() {
		if (!result) return;
		await navigator.clipboard.writeText(result.text);
		toast.success("Скопировано");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Маркетинг",
				title: "ИИ-маркетолог",
				description: "Сгенерируйте посты и идеи для соцсетей на основе ваших товаров. Всё работает локально, без интернета."
			}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center py-16 bg-card rounded-2xl shadow-border mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Сначала добавьте хотя бы один товар."
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-border mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Выберите товар"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "mt-2 w-full h-11 rounded-md border border-input bg-background px-3 text-sm",
						value: selectedId,
						onChange: (e) => setSelectedId(e.target.value),
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: p.id,
							children: [
								p.title,
								" — ",
								formatPrice(p.price)
							]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3",
						children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => generate(t.id),
							disabled: busy !== null,
							className: "justify-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 mr-2" }), busy === t.id ? "Пишем..." : t.label]
						}, t.id))
					})
				]
			}), result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-border mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-medium",
						children: TYPES.find((t) => t.id === result.type)?.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: copyToClipboard,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4 mr-1" }), "Копировать"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "whitespace-pre-wrap text-sm leading-relaxed font-sans",
					children: result.text
				})]
			})] })]
		})
	});
}
export { MarketingPage as component };
