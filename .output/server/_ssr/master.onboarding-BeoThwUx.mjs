import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as Input, b as useCurrentUserState, f as PageHeading, p as Section, y as RedirectToSignIn } from "./router-D5lWvhFy.mjs";
import { t as Button } from "./button-BOai9ycl.mjs";
import { t as Label } from "./label-BnhWz5lt.mjs";
import { t as Textarea } from "./textarea-CTd0mIiu.mjs";
// node_modules/.nitro/vite/services/ssr/assets/master.onboarding-BeoThwUx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OnboardingPage() {
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (isPending) return null;
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	async function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const city = String(data.get("city") ?? "").trim();
		const craft = String(data.get("craft") ?? "").trim();
		const bio = String(data.get("bio") ?? "").trim();
		const mark = String(data.get("mark") ?? "").trim();
		if (!name || !city || !craft || !bio || !mark) {
			toast.error("Заполните все поля");
			return;
		}
		setBusy(true);
		try {
			const res = await fetch("/api/become-artisan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					city,
					craft,
					bio,
					mark
				}),
				credentials: "same-origin"
			});
			if (!res.ok) {
				const errBody = await res.json().catch(() => ({}));
				throw new Error(errBody.error ?? "Не удалось создать мастерскую");
			}
			const result = await res.json();
			toast.success(result.created ? "Мастерская создана!" : "Добро пожаловать обратно!");
			navigate({
				to: "/artisan/$id",
				params: { id: result.id }
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-16 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				kicker: "Мастерская",
				title: "Станьте мастером",
				description: "Заполните профиль. После этого вы сможете выставлять работы на витрину."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Название мастерской"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							placeholder: "Алёна Корельская"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "city",
								children: "Город"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "city",
								name: "city",
								required: true,
								placeholder: "Псков"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "craft",
								children: "Ремесло"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "craft",
								name: "craft",
								required: true,
								placeholder: "Керамика"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "bio",
							children: "О себе"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "bio",
							name: "bio",
							required: true,
							rows: 5,
							placeholder: "Что делаете, из чего, для кого"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mark",
							children: "Инициалы (для аватарки)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "mark",
							name: "mark",
							required: true,
							maxLength: 3,
							placeholder: "АК"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: busy,
						children: busy ? "Секунду…" : "Создать мастерскую"
					})
				]
			})]
		})
	});
}
export { OnboardingPage as component };
