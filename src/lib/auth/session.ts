import { auth } from "@/lib/auth/server";
import { getRequestHeaders } from "@tanstack/react-start/server";

/**
 * Возвращает ID текущего аутентифицированного пользователя.
 * Если сессии нет, возвращает null.
 */
export async function getCurrentUserId(): Promise<string | null> {
  try {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    return session?.user?.id ?? null;
  } catch (error) {
    console.error("Ошибка при получении сессии:", error);
    return null;
  }
}