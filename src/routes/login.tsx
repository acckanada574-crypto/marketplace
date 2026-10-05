import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({ component: LoginPage });

type Mode = "sign-in" | "sign-up";

async function authFetch(path: string, body: Record<string, unknown>) {
  const res = await fetch(`/api/auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "same-origin",
  });
  const data = (await res.json().catch(() => ({}))) as {
    error?: { message?: string };
    message?: string;
  };
  if (!res.ok) {
    throw new Error(data.error?.message ?? data.message ?? "Что-то пошло не так");
  }
  return data;
}

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("sign-in");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
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
          name: name || email.split("@")[0],
        });
        toast.success("Добро пожаловать!");
      } else {
        await authFetch("sign-in/email", { email, password });
        toast.success("С возвращением!");
      }
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Что-то пошло не так");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="py-16 pb-24">
      <Section className="mx-auto max-w-md">
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Живица</p>
        <h1 className="font-display mt-3 text-4xl font-medium tracking-tight">
          {mode === "sign-in" ? "Вход" : "Регистрация"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {mode === "sign-in"
            ? "Войдите, чтобы управлять мастерской и заказами."
            : "Создайте аккаунт, чтобы выставлять работы и получать заказы."}
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {mode === "sign-up" ? (
            <div className="grid gap-2">
              <Label htmlFor="name">Как вас зовут</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Алёна Корельская"
                autoComplete="name"
              />
            </div>
          ) : null}

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={mode === "sign-up" ? 8 : undefined}
              placeholder={mode === "sign-up" ? "Минимум 8 символов" : "••••••••"}
              autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={busy}>
            {busy ? "Секунду…" : mode === "sign-in" ? "Войти" : "Создать аккаунт"}
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {mode === "sign-in" ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"}
          </span>
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            onClick={() => setMode(mode === "sign-in" ? "sign-up" : "sign-in")}
          >
            {mode === "sign-in" ? "Зарегистрироваться" : "Войти"}
          </button>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          <Link to="/" className="underline-offset-4 hover:underline">
            ← На главную
          </Link>
        </p>
      </Section>
    </main>
  );
}