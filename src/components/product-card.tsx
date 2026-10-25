import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { apiFetch } from "@/lib/api-fetch";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: any }) {
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    setMessage("");

    try {
      await apiFetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
        headers: { "Content-Type": "application/json" },
      });
      setMessage("Добавлено!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err: any) {
      if (err.status === 401) {
        setMessage("Войдите, чтобы добавить");
      } else {
        setMessage("Ошибка");
      }
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="group relative">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/5]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white transition-colors">
            <Heart className="size-4" />
          </button>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-sm text-muted-foreground">{product.subtitle}</p>
          </div>
          <p className="font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
      
      <div className="mt-2 flex items-center gap-2">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors disabled:opacity-50"
        >
          <ShoppingBag className="size-4" />
          {isAdding ? "..." : "В корзину"}
        </button>
        {message && <span className="text-xs text-muted-foreground">{message}</span>}
      </div>
    </div>
  );
}

export function ProductGrid({ products }: { products: any[] }) {
  if (!products || products.length === 0) {
    return <div className="py-12 text-center text-muted-foreground">Товаров пока нет.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}