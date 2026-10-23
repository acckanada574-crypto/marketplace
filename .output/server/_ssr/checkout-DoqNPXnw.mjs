import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { T as Input, _ as formatPrice, b as useCurrentUserState, d as PageHeading, f as Section, h as useMarket, m as useCartDetails, y as RedirectToSignIn } from "./router-BAOM3BO_.mjs";
import { t as Button } from "./button-DwddLL8j.mjs";
import { t as Label } from "./label-C6q2ctrw.mjs";
// node_modules/.nitro/vite/services/ssr/assets/checkout-DoqNPXnw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const { lines, subtotal, shipping, total, hasPhysical } = useCartDetails();
	const clearCart = useMarket((s) => s.clearCart);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (isPending) return null;
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Корзина пуста"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: () => navigate({ to: "/catalog" }),
			children: "В каталог"
		})]
	});
	async function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const customer = {
			name: String(data.get("name") ?? "").trim(),
			email: String(data.get("email") ?? "").trim(),
			phone: String(data.get("phone") ?? "").trim(),
			city: String(data.get("city") ?? "").trim(),
			address: String(data.get("address") ?? "").trim()
		};
		if (!customer.name || !customer.email || !customer.phone) {
			toast.error("Заполните обязательные поля");
			return;
		}
		setBusy(true);
		try {
			const payload = {
				customer,
				items: lines.map((l) => ({
					productId: l.product.id,
					artisanId: l.product.artisanId,
					title: l.product.title,
					price: l.product.price,
					qty: l.qty,
					kind: l.product.kind,
					image: l.product.image
				}))
			};
			const res = await fetch("/api/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
				credentials: "same-origin"
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				throw new Error(err.error ?? "Ошибка при оформлении");
			}
			const result = await res.json();
			toast.success("Заказ оформлен!");
			clearCart();
			window.location.href = `/order/${result.orderId}`;
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
					kicker: "Оформление",
					title: "Подтверждение заказа",
					description: "Проверьте данные и заполните информацию для доставки."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 rounded-2xl bg-card p-6 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl mb-4",
							children: "Ваш заказ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									l.product.title,
									" × ",
									l.qty
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatPrice(l.lineTotal)
								})]
							}, l.product.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 border-t border-border pt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Товары:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(subtotal) })
									]
								}),
								hasPhysical && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Доставка:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "Бесплатно" : formatPrice(shipping) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-medium text-base mt-2 pt-2 border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Итого:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: formatPrice(total)
										})
									]
								}),
								hasPhysical && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground mt-2",
									children: [
										"Оплата частями: сейчас ",
										formatPrice(Math.round(total / 2)),
										", остаток при получении."
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Имя и фамилия *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								required: true,
								placeholder: "Иван Иванов"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									placeholder: "you@example.com"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Телефон *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									required: true,
									placeholder: "+7 (999) 000-00-00"
								})]
							})]
						}),
						hasPhysical && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "city",
								children: "Город"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "city",
								name: "city",
								placeholder: "Москва"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "address",
								children: "Адрес доставки"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "address",
								name: "address",
								placeholder: "Улица, дом, квартира"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							disabled: busy,
							className: "w-full mt-4",
							children: busy ? "Оформляем…" : "Подтвердить заказ"
						})
					]
				})
			]
		})
	});
}
export { CheckoutPage as component };
