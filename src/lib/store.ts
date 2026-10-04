import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products as seedProducts } from "./catalog";
import { shippingFor } from "./format";
import type { CartLine, Order, OrderCustomer, Product } from "./types";

type MarketState = {
  cart: CartLine[];
  favorites: string[];
  orders: Order[];
  listings: Product[];
  addToCart: (productId: string, qty?: number) => void;
  setQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleFavorite: (productId: string) => void;
  placeOrder: (customer: OrderCustomer) => Order | null;
  addListing: (product: Product) => void;
  removeListing: (id: string) => void;
};

export function allProducts(listings: Product[]): Product[] {
  return [...listings, ...seedProducts];
}

export function findProduct(listings: Product[], id: string) {
  return listings.find((p) => p.id === id) ?? seedProducts.find((p) => p.id === id);
}

function nextOrderId() {
  const n = Math.floor(10000 + Math.random() * 90000);
  return `ZV-${n}`;
}

export const useMarket = create<MarketState>()(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      orders: [],
      listings: [],
      addToCart: (productId, qty = 1) => {
        const product = findProduct(get().listings, productId);
        if (!product || product.stock <= 0) return;
        set((state) => {
          const existing = state.cart.find((l) => l.productId === productId);
          if (existing) {
            const nextQty =
              product.kind === "digital"
                ? 1
                : Math.min(existing.qty + qty, product.stock);
            return {
              cart: state.cart.map((l) =>
                l.productId === productId ? { ...l, qty: nextQty } : l,
              ),
            };
          }
          return {
            cart: [
              ...state.cart,
              {
                productId,
                qty: product.kind === "digital" ? 1 : Math.min(qty, product.stock),
              },
            ],
          };
        });
      },
      setQty: (productId, qty) => {
        const product = findProduct(get().listings, productId);
        if (!product) return;
        set((state) => ({
          cart: state.cart
            .map((l) =>
              l.productId === productId
                ? { ...l, qty: Math.max(1, Math.min(qty, product.stock)) }
                : l,
            )
            .filter((l) => l.qty > 0),
        }));
      },
      removeFromCart: (productId) =>
        set((state) => ({ cart: state.cart.filter((l) => l.productId !== productId) })),
      clearCart: () => set({ cart: [] }),
      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        })),
      placeOrder: (customer) => {
        const { cart, listings } = get();
        if (cart.length === 0) return null;
        const items = cart
          .map((line) => {
            const product = findProduct(listings, line.productId);
            if (!product) return null;
            return {
              productId: product.id,
              title: product.title,
              price: product.price,
              qty: line.qty,
              kind: product.kind,
              image: product.image,
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null);
        if (items.length === 0) return null;
        const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
        const hasPhysical = items.some((item) => item.kind === "physical");
        const shipping = shippingFor(subtotal, hasPhysical);
        const order: Order = {
          id: nextOrderId(),
          createdAt: new Date().toISOString(),
          items,
          customer,
          shipping,
          total: subtotal + shipping,
          status: hasPhysical ? "paid" : "delivered",
        };
        set((state) => ({ orders: [order, ...state.orders], cart: [] }));
        return order;
      },
      addListing: (product) => set((state) => ({ listings: [product, ...state.listings] })),
      removeListing: (id) =>
        set((state) => ({
          listings: state.listings.filter((p) => p.id !== id),
          cart: state.cart.filter((l) => l.productId !== id),
          favorites: state.favorites.filter((fid) => fid !== id),
        })),
    }),
    { name: "zhivitsa-market" },
  ),
);

export function useCartCount() {
  return useMarket((s) => s.cart.reduce((n, l) => n + l.qty, 0));
}

export function useCartDetails() {
  const cart = useMarket((s) => s.cart);
  const listings = useMarket((s) => s.listings);
  const lines = cart
    .map((line) => {
      const product = findProduct(listings, line.productId);
      if (!product) return null;
      return { ...line, product, lineTotal: product.price * line.qty };
    })
    .filter((line): line is NonNullable<typeof line> => line !== null);
  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const hasPhysical = lines.some((l) => l.product.kind === "physical");
  const shipping = shippingFor(subtotal, hasPhysical);
  return { lines, subtotal, shipping, total: subtotal + shipping, hasPhysical };
}
