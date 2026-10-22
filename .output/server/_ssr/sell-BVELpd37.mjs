import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as Input, O as CATEGORIES, b as RedirectToSignIn, f as PageHeading, p as Section, x as useCurrentUserState } from "./router-CzN3-mHq.mjs";
import { t as Button } from "./button-DVE536MF.mjs";
import { t as Label } from "./label-BtlE9fhg.mjs";
import { t as Textarea } from "./textarea-BB_SpP11.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sell-BVELpd37.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function fileToDataUrl(file) {
	const url = URL.createObjectURL(file);
	try {
		const img = await new Promise((resolve, reject) => {
			const el = new Image();
			el.onload = () => resolve(el);
			el.onerror = reject;
			el.src = url;
		});
		const canvas = document.createElement("canvas");
		const scale = Math.min(1, 800 / Math.max(img.width, img.height));
		canvas.width = Math.max(1, Math.round(img.width * scale));
		canvas.height = Math.max(1, Math.round(img.height * scale));
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("canvas");
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		return canvas.toDataURL("image/jpeg", .75);
	} finally {
		URL.revokeObjectURL(url);
	}
}
function SellPage() {
	const { user, isPending } = useCurrentUserState();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [kind, setKind] = (0, import_react.useState)("physical");
	if (isPending) return null;
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const title = String(data.get("title") ?? "").trim();
		const description = String(data.get("description") ?? "").trim();
		const price = Number(data.get("price"));
		if (!title || !description || !Number.isFinite(price) || price <= 0) {
			toast.error("Нужны название, описание и цена");
			return;
		}
		setBusy(true);
		try {
			const file = data.get("image") ?? null;
			let image = "/products/digital-north.svg";
			if (file && file.size > 0) image = await fileToDataUrl(file);
			const payload = {
				title,
				subtitle: String(data.get("subtitle") ?? "").trim() || "Ручная работа",
				description,
				price: Math.round(price),
				kind,
				category: String(data.get("category")) || "home",
				image,
				materials: String(data.get("materials") ?? "").trim() || null,
				stock: kind === "digital" ? 999 : Math.max(1, Number(data.get("stock")) || 1),
				digitalFormat: kind === "digital" ? String(data.get("format") ?? "").trim() || "Файл" : null,
				digitalPages: null,
				license: kind === "digital" ? "Личное использование" : null,
				fileSize: null
			};
			const res = await fetch("/api/sell", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
				credentials: "same-origin"
			});
			if (!res.ok) {
				const errBody = await res.json().catch(() => ({}));
				throw new Error(errBody.error ?? "Не удалось сохранить товар");
			}
			const result = await res.json();
			toast.success("Работа на витрине");
			form.reset();
			window.location.href = `/product/${result.id}`;
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			kicker: "Мастерская",
			title: "Выставить работу",
			description: "Добавьте физическую вещь или цифровой файл. Карточка сразу появится на витрине."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "title",
							children: "Название"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "title",
							name: "title",
							required: true,
							placeholder: "Миска «Утро»"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "subtitle",
							children: "Коротко"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "subtitle",
							name: "subtitle",
							placeholder: "Шамот, молочная глазурь"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "description",
							children: "Рассказ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "description",
							name: "description",
							required: true,
							rows: 5,
							placeholder: "Как сделано, из чего, для кого"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "price",
								children: "Цена, ₽"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "price",
								name: "price",
								type: "number",
								min: 1,
								step: 1,
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "category",
								children: "Категория"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "category",
								name: "category",
								className: "h-11 rounded-md border border-input bg-card px-3 text-sm",
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.label
								}, c.id))
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-medium",
							children: "Тип"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: kind === "physical" ? "default" : "outline",
								onClick: () => setKind("physical"),
								children: "Физический"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: kind === "digital" ? "default" : "outline",
								onClick: () => setKind("digital"),
								children: "Цифровой"
							})]
						})]
					}),
					kind === "physical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "materials",
								children: "Материалы"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "materials",
								name: "materials"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "stock",
								children: "Сколько штук"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "stock",
								name: "stock",
								type: "number",
								min: 1,
								defaultValue: 1
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "format",
							children: "Формат файла"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "format",
							name: "format",
							placeholder: "PDF, PNG, SVG"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "image",
								children: "Фото"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "image",
								name: "image",
								type: "file",
								accept: "image/*"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Необязательно. Без фото поставим спокойную обложку."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: busy,
						children: busy ? "Секунду…" : "Выставить на витрину"
					})
				]
			})]
		})] })
	});
}
//#endregion
export { SellPage as component };
