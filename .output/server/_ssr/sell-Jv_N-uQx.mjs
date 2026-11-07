import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PageHeading, p as Section, x as authClient } from "./router-Cp6kMUjl.mjs";
// node_modules/.nitro/vite/services/ssr/assets/sell-Jv_N-uQx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SellPage() {
	const { data: session } = authClient.useSession();
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setError("");
		const formData = new FormData(e.currentTarget);
		formData.append("artisan_id", "glass-master");
		try {
			const res = await fetch("/api/products", {
				method: "POST",
				body: formData
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Ошибка");
			alert("Товар отправлен! ИИ уже обрабатывает карточку.");
			navigate({ to: "/" });
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}
	if (!session?.user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			kicker: "Мастерская",
			title: "Выставить товар"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "Чтобы выставить товар, нужно войти в аккаунт."
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Мастерская",
				title: "Выставить товар"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Загрузите фото и краткое описание. ИИ сам напишет красивую карточку."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-8 max-w-lg space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						children: "Фото товара *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						name: "image",
						accept: "image/*",
						required: true,
						className: "mt-1 block w-full rounded border p-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						children: "Название *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "title",
						required: true,
						placeholder: "Кружка «Туман»",
						className: "mt-1 block w-full rounded border p-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						children: "Цена, ₽ *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						name: "price",
						required: true,
						min: 1,
						placeholder: "3200",
						className: "mt-1 block w-full rounded border p-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						children: "Пара слов о товаре"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "description",
						rows: 3,
						placeholder: "Керамика, ручная лепка, 300 мл",
						className: "mt-1 block w-full rounded border p-2"
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-600",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "rounded-lg bg-primary px-6 py-3 text-primary-foreground disabled:opacity-50",
						children: loading ? "Отправка..." : "Отправить на ИИ"
					})
				]
			})
		]
	}) });
}
export { SellPage as component };
