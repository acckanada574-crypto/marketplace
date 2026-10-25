import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { k as apiFetch, n as Route$8, v as formatPrice, x as authClient } from "./router-D5lWvhFy.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product._id-DtXEia1h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product, artisan, reviews } = Route$8.useLoaderData();
	const { data: session } = authClient.useSession();
	const navigate = useNavigate();
	const [cartStatus, setCartStatus] = (0, import_react.useState)("idle");
	const [cartError, setCartError] = (0, import_react.useState)("");
	const [reviewForm, setReviewForm] = (0, import_react.useState)({
		rating: 5,
		text: ""
	});
	const [reviewStatus, setReviewStatus] = (0, import_react.useState)("idle");
	const isLoggedIn = !!session?.user;
	const rating = Number(product.rating) || 0;
	const reviewCount = Number(product.review_count) || 0;
	const images = Array.isArray(product.images) ? product.images : [];
	const allImages = [product.image, ...images].filter(Boolean);
	async function handleAddToCart() {
		if (!isLoggedIn) {
			navigate({ to: "/login" });
			return;
		}
		setCartStatus("loading");
		setCartError("");
		try {
			await apiFetch("/api/cart", {
				method: "POST",
				body: JSON.stringify({
					productId: product.id,
					quantity: 1
				})
			});
			setCartStatus("success");
			setTimeout(() => setCartStatus("idle"), 2500);
		} catch (err) {
			setCartStatus("error");
			setCartError(err.message || "Не удалось добавить в корзину");
		}
	}
	async function handleSubmitReview(e) {
		e.preventDefault();
		if (!isLoggedIn) {
			navigate({ to: "/login" });
			return;
		}
		if (!reviewForm.text.trim()) return;
		setReviewStatus("loading");
		try {
			await apiFetch("/api/reviews", {
				method: "POST",
				body: JSON.stringify({
					productId: product.id,
					rating: reviewForm.rating,
					text: reviewForm.text
				})
			});
			setReviewStatus("success");
			setReviewForm({
				rating: 5,
				text: ""
			});
			setTimeout(() => window.location.reload(), 800);
		} catch (err) {
			setReviewStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "py-10 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.title,
						className: "w-full h-auto object-cover aspect-square"
					})
				}), allImages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-2",
					children: allImages.slice(1, 5).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: "",
						className: "rounded-lg object-cover aspect-square"
					}, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: [
							product.kind === "digital" ? "Цифровое" : "Физическое",
							" · ",
							product.category
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-medium",
						children: product.title
					}),
					product.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: product.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold",
							children: formatPrice(product.price)
						}), rating > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted-foreground",
							children: [
								"★ ",
								rating.toFixed(1),
								" (",
								reviewCount,
								" отзывов)"
							]
						})]
					}),
					artisan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/artisan/$id",
						params: { id: artisan.id },
						className: "mt-6 flex items-center gap-3 rounded-xl border p-4 transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-12 items-center justify-center rounded-full bg-muted font-medium",
							children: artisan.mark || artisan.name?.[0] || "?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: artisan.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								artisan.craft,
								" · ",
								artisan.city
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleAddToCart,
								disabled: cartStatus === "loading",
								className: "rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50",
								children: cartStatus === "loading" ? "Добавляем..." : cartStatus === "success" ? "✓ Добавлено в корзину" : product.kind === "digital" ? "Купить и скачать" : "Добавить в корзину"
							}),
							!isLoggedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: [
									"Для покупки необходимо ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/login",
										className: "underline",
										children: "войти"
									}),
									"."
								]
							}),
							cartStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-red-600",
								children: cartError
							})
						]
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Отзывы"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-xl border p-5",
						children: !isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Чтобы оставить отзыв, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "underline",
									children: "войдите в аккаунт"
								}),
								"."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmitReview,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm",
										children: "Оценка:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: reviewForm.rating,
										onChange: (e) => setReviewForm({
											...reviewForm,
											rating: Number(e.target.value)
										}),
										className: "rounded border px-2 py-1",
										children: [
											5,
											4,
											3,
											2,
											1
										].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: n,
											children: "★".repeat(n)
										}, n))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									placeholder: "Поделитесь впечатлением...",
									value: reviewForm.text,
									onChange: (e) => setReviewForm({
										...reviewForm,
										text: e.target.value
									}),
									className: "w-full rounded border px-3 py-2",
									rows: 3
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: reviewStatus === "loading",
									className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50",
									children: reviewStatus === "loading" ? "Отправка..." : reviewStatus === "success" ? "✓ Отправлено" : "Оставить отзыв"
								}),
								reviewStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-red-600",
									children: "Не удалось отправить отзыв"
								})
							]
						})
					}),
					reviews && reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: r.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["★ ", Number(r.rating).toFixed(1)]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: r.text
							})]
						}, r.id))
					})
				]
			})]
		})
	});
}
export { ProductPage as component };
