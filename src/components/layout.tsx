import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCartCount, useMarket } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/catalog" as const, label: "Витрина", search: {} },
  { to: "/catalog" as const, label: "Физическое", search: { kind: "physical" as const } },
  { to: "/catalog" as const, label: "Цифровое", search: { kind: "digital" as const } },
  { to: "/sell" as const, label: "Выставить", search: undefined },
  { to: "/about" as const, label: "О дворе", search: undefined },
];

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsub = useMarket.persist.onFinishHydration(() => setHydrated(true));
    if (useMarket.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);
  return hydrated;
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <span className="flex size-8 items-center justify-center rounded-full border border-primary text-primary">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <path d="M12 2.4c0 0-6.2 7.2-6.2 11.2a6.2 6.2 0 1 0 12.4 0C18.2 9.6 12 2.4 12 2.4Z" />
        </svg>
      </span>
      <span className="font-display text-xl tracking-tight">Живица</span>
    </Link>
  );
}

function HeaderSearch({ onDone }: { onDone?: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/catalog", search: { q: q.trim() || undefined } });
    onDone?.();
  }
  return (
    <form className="relative w-full" onSubmit={onSubmit}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Найти работу"
        className="h-11 bg-background pl-10"
        aria-label="Поиск"
      />
    </form>
  );
}

export function SiteHeader() {
  const count = useCartCount();
  const hydrated = useHydrated();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const shown = hydrated ? count : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <button
          type="button"
          className="relative size-11 rounded-md lg:hidden"
          aria-label="Меню"
          onClick={() => setOpen(true)}
        >
          <Menu className="mx-auto size-5" />
        </button>
        <Logo />
        <nav className="ml-6 hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              search={item.search}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.to && item.label === "Витрина" && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden w-full max-w-xs md:block">
          <HeaderSearch />
        </div>
        <div className="ml-auto flex items-center gap-0.5 md:ml-2">
          <SignedOut>
            <Link
              to="/login"
              className="hidden h-11 items-center px-3 text-sm text-muted-foreground hover:text-foreground sm:flex"
            >
              Войти
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="hidden sm:block">
              <UserButton />
            </div>
          </SignedIn>
          <Link
            to="/favorites"
            aria-label="Избранное"
            className="flex size-11 items-center justify-center rounded-md text-foreground hover:bg-muted"
          >
            <Heart className="size-4" />
          </Link>
          <Link
            to="/orders"
            className="hidden h-11 items-center px-2 text-sm text-muted-foreground hover:text-foreground sm:flex"
          >
            Заказы
          </Link>
          <Link
            to="/master/orders"
            className="hidden h-11 items-center px-2 text-sm text-muted-foreground hover:text-foreground sm:flex"
          >
            Заказы мастера
          </Link>
          <Link
            to="/master/marketing"
            className="hidden h-11 items-center px-2 text-sm text-muted-foreground hover:text-foreground sm:flex"
          >
            ИИ-маркетолог
          </Link>
          <Link
            to="/cart"
            aria-label="Корзина"
            className="relative flex size-11 items-center justify-center rounded-md hover:bg-muted"
          >
            <ShoppingBag className="size-4" />
            {shown > 0 ? (
              <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground tabular-nums">
                {shown}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="bg-background">
          <SheetHeader>
            <SheetTitle>Живица</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 px-4">
            <HeaderSearch onDone={() => setOpen(false)} />
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                search={item.search}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center border-b border-border text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/orders" onClick={() => setOpen(false)} className="flex h-12 items-center">
              Заказы
            </Link>
            <Link to="/master/orders" onClick={() => setOpen(false)} className="flex h-12 items-center">
              Заказы мастера
            </Link>
            <Link to="/master/marketing" onClick={() => setOpen(false)} className="flex h-12 items-center">
              ИИ-маркетолог
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Двор независимых мастеров. Физические вещи с теплом рук и цифровые издания, которые
            можно забрать сразу.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Витрина</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/catalog" search={{ kind: "physical" }} className="hover:text-foreground">
              Физические работы
            </Link>
            <Link to="/catalog" search={{ kind: "digital" }} className="hover:text-foreground">
              Цифровые издания
            </Link>
            <Link to="/sell" className="hover:text-foreground">
              Выставить свою работу
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">Покупателю</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Доставка физических вещей по России, 3–8 дней.</p>
            <p>Цифровые файлы открываются сразу после оплаты.</p>
            <p>Оплата на витрине демонстрационная — заказ сохраняется в этом браузере.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</section>
  );
}

export function PageHeading({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {kicker ? (
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{kicker}</p>
      ) : null}
      <h1 className="font-display mt-2 text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  );
}