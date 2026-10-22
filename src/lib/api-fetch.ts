import { createServerOnlyFn } from "@tanstack/react-start";

const SSR_BASE = "http://localhost:8080";

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
  const isServer = typeof window === "undefined";
  const url = isServer ? `${SSR_BASE}${path}` : path;
  
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