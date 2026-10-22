import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as Input, p as Section } from "./router-CzN3-mHq.mjs";
import { t as Button } from "./button-DVE536MF.mjs";
import { t as Label } from "./label-BtlE9fhg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CLbBPXr6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function authFetch(path, body) {
	const res = await fetch(`/api/auth/${path}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
		credentials: "same-origin"
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error?.message ?? data.message ?? "Что-то пошло не так");
	return data;
}
function LoginPage() {
	useNavigate();
	const [mode, setMode] = (0, import_react.useState)("sign-in");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const email = String(data.get("email") ?? "").trim();
		const password = String(data.get("password") ?? "");
		const name = String(data.get("name") ?? "").trim();
		if (!email || !password) {
			toast.error("Введите email и пароль");
			return;
		}
		if (mode === "sign-up" && password.length < 8) {
			toast.error("Пароль должен быть не короче 8 символов");
			return;
		}
		setBusy(true);
		try {
			if (mode === "sign-up") {
				await authFetch("sign-up/email", {
					email,
					password,
					name: name || email.split("@")[0]
				});
				toast.success("Добро пожаловать!");
			} else {
				await authFetch("sign-in/email", {
					email,
					password
				});
				toast.success("С возвращением!");
			}
			if (typeof window !== "undefined") window.location.href = "/";
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-16 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.22em] text-muted-foreground uppercase",
					children: "Живица"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-3 text-4xl font-medium tracking-tight",
					children: mode === "sign-in" ? "Вход" : "Регистрация"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: mode === "sign-in" ? "Войдите, чтобы управлять мастерской и заказами." : "Создайте аккаунт, чтобы выставлять работы и получать заказы."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-8 space-y-4",
					children: [
						mode === "sign-up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Как вас зовут"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								type: "text",
								placeholder: "Алёна Корельская",
								autoComplete: "name"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								required: true,
								placeholder: "you@example.com",
								autoComplete: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								name: "password",
								type: "password",
								required: true,
								minLength: mode === "sign-up" ? 8 : void 0,
								placeholder: mode === "sign-up" ? "Минимум 8 символов" : "••••••••",
								autoComplete: mode === "sign-up" ? "new-password" : "current-password"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							disabled: busy,
							children: busy ? "Секунду…" : mode === "sign-in" ? "Войти" : "Создать аккаунт"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: mode === "sign-in" ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-primary underline-offset-4 hover:underline",
						onClick: () => setMode(mode === "sign-in" ? "sign-up" : "sign-in"),
						children: mode === "sign-in" ? "Зарегистрироваться" : "Войти"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline-offset-4 hover:underline",
						children: "← На главную"
					})
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
