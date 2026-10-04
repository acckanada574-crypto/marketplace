import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PageShell } from "@/components/layout";
import appCss from "../styles.css?url";

const APP_NAME = "Живица";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Маркетплейс вещей ручной работы — керамика, текстиль, дерево и цифровые схемы. Живица.",
      },
      { name: "theme-color", content: "#3E4F45" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="ru" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <PageShell>
            <Outlet />
          </PageShell>
          <Toaster
            position="top-center"
            toastOptions={{
              className: "font-sans",
              style: {
                background: "#FAF7F1",
                color: "#241C16",
                border: "1px solid #DDD4C6",
              },
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">404</p>
      <h1 className="font-display mt-3 text-3xl font-medium tracking-tight">Такой страницы нет</h1>
      <p className="mt-3 text-muted-foreground">Вернитесь на витрину — там все работы на месте.</p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
      >
        На главную
      </Link>
    </main>
  );
}
