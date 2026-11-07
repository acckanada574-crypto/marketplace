import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";
import path from "node:path";
import fs from "node:fs/promises";

const MAX_SIZE = 10 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

export const Route = createFileRoute("/api/products")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const userId = await getCurrentUserId();
        if (!userId) {
          return new Response(JSON.stringify({ error: "Необходима авторизация" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const formData = await request.formData();
          const title = (formData.get("title") as string)?.trim();
          const price = Number(formData.get("price"));
          const rawDescription = (formData.get("description") as string)?.trim();
          const artisanId = (formData.get("artisan_id") as string) || null;
          const imageFile = formData.get("image") as File | null;

          if (!title || !price || !imageFile) {
            return new Response(
              JSON.stringify({ error: "Заполните название, цену и загрузите фото" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const buffer = Buffer.from(await imageFile.arrayBuffer());
          const ext = imageFile.name.split(".").pop()?.toLowerCase() || "jpg";
          const fileName = `master-${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
          const uploadDir = path.join(process.cwd(), "public", "products");

          await fs.mkdir(uploadDir, { recursive: true });
          await fs.writeFile(path.join(uploadDir, fileName), buffer);

          const imagePath = `/products/${fileName}`;
          const sql = await getSql();
          const id = crypto.randomUUID();
          const slug =
            title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") +
            "-" + id.slice(0, 6);

          await sql`
            INSERT INTO products (
              id, slug, title, subtitle, description, price, kind, category, artisan_id,
              image, images, materials, size, stock, rating, review_count,
              featured, is_new, custom, status, source_data
            ) VALUES (
              ${id}, ${slug}, ${title}, 'На модерации', ${rawDescription || ""},
              ${price}, 'physical', 'ceramics', ${artisanId},
              ${imagePath}, '[]', '', '', 5, 0, 0,
              false, true, false, 'pending',
              ${JSON.stringify({ raw_description: rawDescription, uploaded_by: userId })}
            )
          `;

          return new Response(
            JSON.stringify({ success: true, productId: id, image: imagePath }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          console.error("Ошибка загрузки товара:", error);
          return new Response(JSON.stringify({ error: "Ошибка сервера" }), {
            status: 500, headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});