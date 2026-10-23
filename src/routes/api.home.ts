import { createFileRoute } from "@tanstack/react-router";
// ВАЖНО: Проверь путь к твоему Prisma клиенту. 
// Обычно это "@/lib/db" или "@/lib/prisma". Если не уверен, напиши мне.
import { prisma } from "@/lib/db";

export const Route = createFileRoute("/api/home")({
  server: {
    handlers: {
      GET: async () => {
        try {
          // 1. Считаем общее количество товаров
          const totalProducts = await prisma.product.count();

          // 2. Берем 6 товаров для витрины (featured)
          const featured = await prisma.product.findMany({ take: 6 });

          // 3. Берем цифровые товары (предполагаем, что поле называется kind или type)
          // Если у тебя в базе поле называется иначе (например, isDigital), поправь здесь.
          const digital = await prisma.product.findMany({ 
            where: { kind: "digital" }, 
            take: 5 
          });

          // 4. Берем физические товары
          const physical = await prisma.product.findMany({ 
            where: { kind: "physical" }, 
            take: 3 
          });

          // 5. Берем мастеров (artisans)
          const artisans = await prisma.artisan.findMany({ take: 6 });

          return new Response(JSON.stringify({
            featured,
            digital,
            physical,
            artisans,
            totalProducts
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
          
        } catch (error) {
          console.error("Ошибка при загрузке данных из БД:", error);
          return new Response(JSON.stringify({ error: "Ошибка базы данных" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
