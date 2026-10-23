import { createServerOnlyFn } from "@tanstack/react-start";

// Динамически определяем порт: на сервере берем из переменных окружения, локально — 8080
const getSSRBase = () => {
  const port = process.env.PORT || process.env.NITRO_PORT || 8080;
  return `http://127.0.0.1:${port}`;
};

const getServerCookie = createServerOnlyFn(async () => {
  const { getRequestHeaders } = await import("@tanstack/react-start/server");
  return getRequestHeaders().get("cookie");
});

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  // Убеждаемся, что путь всегда начинается с / (это критично для браузера)
  const safePath = path.startsWith("/") ? path : `/${path}`;
  
  const isServer = typeof window === "undefined";
  const url = isServer ? `${getSSRBase()}${safePath}` : safePath;
  
  const headers = new Headers(init?.headers);

  if (isServer) {
    try {
      const cookie = await getServerCookie();
      if (cookie) headers.set("cookie", cookie);
    } catch (e) {
      // Игнорируем
    }
  }

  const res = await fetch(url, { ...init, headers });
  
  if (!res.ok) {
    const errBody = (await res.json().catch(() => ({}))) as { error?: string };
    throw new ApiError(errBody.error ?? `API error ${res.status}`, res.status);
  }
  return res.json() as Promise<T>;
}
