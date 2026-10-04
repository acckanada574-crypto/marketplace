const rubFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatPrice(value: number) {
  return rubFormatter.format(value);
}

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

export function kindLabel(kind: "physical" | "digital") {
  return kind === "digital" ? "Цифровой" : "Физический";
}

export const FREE_SHIPPING_FROM = 6000;
export const SHIPPING_COST = 390;

export function shippingFor(subtotal: number, hasPhysical: boolean) {
  if (!hasPhysical) return 0;
  if (subtotal >= FREE_SHIPPING_FROM) return 0;
  return SHIPPING_COST;
}
