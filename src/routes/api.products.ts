import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";
import { getCurrentUserId } from "@/lib/auth/session";
import { MAX_PRODUCT_IMAGES, saveProductImage, removeUpload } from "@/lib/uploads.server";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const Route = createFileRoute("/api/products")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const userId = await getCurrentUserId();
        if (!userId) return json({ error: "Необходима авторизация" }, 401);
        const saved = [];
        try {
          const formData = await request.formData();
          const title = String(formData.get("title") ?? "").trim();
          const rawDescription = String(formData.get("description") ?? "").trim();
          const price = Number(formData.get("price"));
          const kind = formData.get("kind") === "digital" ? "digital" : "physical";
          const files = formData.getAll("images").filter((value): value is File => value instanceof File && value.size > 0);
          const legacyImage = formData.get("image");
          if (legacyImage instanceof File && legacyImage.size > 0) files.unshift(legacyImage);
          if (!title || !Number.isInteger(price) || price <= 0 || files.length === 0) return json({ error: "Заполните название, целую цену и загрузите хотя бы одно фото" }, 400);
          if (files.length > MAX_PRODUCT_IMAGES) return json({ error: `Можно загрузить не более ${MAX_PRODUCT_IMAGES} изображений` }, 400);
          for (const file of files) saved.push(await saveProductImage(file));
          const id = crypto.randomUUID();
          const image = saved[0].publicPath;
          const images = saved.map((file) => file.publicPath);
          const slug = `${title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zа-яё0-9-]/gi, "") || "product"}-${id.slice(0, 6)}`;
          const sql = await getSql();
          await sql`INSERT INTO products (id, slug, title, subtitle, description, price, kind, category, artisan_id, image, images, materials, size, stock, rating, review_count, featured, is_new, custom, status, source_data) VALUES (${id}, ${slug}, ${title}, 'На модерации', ${rawDescription}, ${price}, ${kind}, 'other', ${userId}, ${image}, ${JSON.stringify(images)}, '', '', ${kind === "digital" ? 0 : 5}, 0, 0, false, true, false, 'pending', ${JSON.stringify({ raw_description: rawDescription, uploaded_by: userId, local_storage: true })})`;
          for (const file of saved) await sql`INSERT INTO product_files (id, product_id, uploaded_by, kind, original_name, storage_key, mime_type, size_bytes, sha256) VALUES (${file.id}, ${id}, ${userId}, 'image', ${file.originalName}, ${file.storageKey}, ${file.mimeType}, ${file.sizeBytes}, ${file.sha256})`;
          return json({ success: true, productId: id, image, images });
        } catch (error) {
          await Promise.all(saved.map(removeUpload));
          console.error("Ошибка загрузки товара:", error);
          return json({ error: error instanceof Error ? error.message : "Ошибка сервера" }, 500);
        }
      },
    },
  },
});
