/**
 * Универсальный fetch для вызовов API.
 * На сервере (SSR) использует абсолютный URL, в браузере — относительный.
 */
const SSR_BASE = "http://localhost:8080";

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const isServer = typeof window === "undefined";
  const url = isServer ? `${SSR_BASE}${path}` : path;
  const res = await fetch(url, init);
  if (!res.ok) {
    const errBody = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(errBody.error ?? `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}