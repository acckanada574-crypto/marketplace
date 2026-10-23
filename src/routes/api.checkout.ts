import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";

export const Route = createFileRoute("/api/checkout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // 1. Проверяем, авторизован ли пользователь
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация для оформления заказа" }), { 
            status: 401,
            headers: { "Content-Type": "application/json" }
          });
        }

        try {
          const body = await request.json();
          const { 
            customer_name, customer_email, customer_phone, 
            customer_city, customer_address, customer_postal, 
            items, total 
          } = body;

          const sql = await getSql();
          const orderId = crypto.randomUUID();
          
          // Высчитываем комиссию (10%)
          const commission = Math.round(total * 0.10);
          const payout = total - commission;

          // 2. Создаем запись о заказе с реальным user_id
          await sql`
            INSERT INTO orders (
              id, user_id, customer_name, customer_email, customer_phone, 
              customer_city, customer_address, customer_postal, 
              subtotal, total, commission_amount, payout_total, status
            ) VALUES (
              ${orderId}, ${userId}, ${customer_name}, ${customer_email}, ${customer_phone}, 
              ${customer_city}, ${customer_address}, ${customer_postal}, 
              ${total}, ${total}, ${commission}, ${payout}, 'pending'
            )
          `;

          // 3. Сохраняем каждый товар из корзины в order_items
          for (const item of items) {
            const itemId = crypto.randomUUID();
            const itemCommission = Math.round(item.price * item.quantity * 0.10);
            const itemPayout = (item.price * item.quantity) - itemCommission;

            await sql`
              INSERT INTO order_items (
                id, order_id, product_id, artisan_id, title, price, qty, kind, image, 
                line_total, commission_amount, payout_amount
              ) VALUES (
                ${itemId}, ${orderId}, ${item.product_id}, ${item.artisan_id || 'unknown'}, 
                ${item.title}, ${item.price}, ${item.quantity}, ${item.kind || 'physical'}, 
                ${item.image || null}, ${item.price * item.quantity}, ${itemCommission}, ${itemPayout}
              )
            `;
          }

          // 4. Очищаем корзину ТОЛЬКО этого пользователя
          await sql`DELETE FROM cart WHERE user_id = ${userId}`;

          return new Response(JSON.stringify({ success: true, orderId }), { status: 200 });
        } catch (error) {
          console.error("Ошибка оформления заказа:", error);
          return new Response(JSON.stringify({ error: "Ошибка БД при оформлении" }), { status: 500 });
        }
      },
    },
  },
});