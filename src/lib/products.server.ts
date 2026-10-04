// src/lib/products.server.ts
// Серверные запросы к БД. НИКОГДА не импортировать из клиентского кода —
// getSql() бросает ошибку в браузере.

import { getSql } from "@/lib/db";
import type { Artisan, Product, Review, ProductKind, CategoryId } from "@/lib/types";

type ProductRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  kind: ProductKind;
  category: CategoryId;
  artisan_id: string;
  image: string;
  images: string[];
  materials: string | null;
  size: string | null;
  care: string | null;
  ships_in_days: number | null;
  stock: number;
  rating: string | number;
  review_count: number;
  featured: boolean;
  is_new: boolean;
  digital_format: string | null;
  digital_pages: string | null;
  license: string | null;
  file_size: string | null;
  custom: boolean;
};

type ArtisanRow = {
  id: string;
  name: string;
  city: string;
  craft: string;
  bio: string;
  since: number;
  mark: string;
};

type ReviewRow = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

function rowToProduct(row: ProductRow, reviews: Review[] = []): Product {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    price: row.price,
    kind: row.kind,
    category: row.category,
    artisanId: row.artisan_id,
    image: row.image,
    images: row.images,
    materials: row.materials ?? undefined,
    size: row.size ?? undefined,
    care: row.care ?? undefined,
    shipsInDays: row.ships_in_days ?? undefined,
    stock: row.stock,
    rating: typeof row.rating === "string" ? Number(row.rating) : row.rating,
    reviewCount: row.review_count,
    reviews,
    featured: row.featured,
    isNew: row.is_new,
    digitalFormat: row.digital_format ?? undefined,
    digitalPages: row.digital_pages ?? undefined,
    license: row.license ?? undefined,
    fileSize: row.file_size ?? undefined,
    custom: row.custom,
  };
}

function rowToArtisan(row: ArtisanRow): Artisan {
  return {
    id: row.id,
    name: row.name,
    city: row.city,
    craft: row.craft,
    bio: row.bio,
    since: row.since,
    mark: row.mark,
  };
}

export async function getAllArtisans(): Promise<Artisan[]> {
  const sql = await getSql();
  const rows = await sql<ArtisanRow>`
    select id, name, city, craft, bio, since, mark
    from artisans
    where status = 'approved'
    order by since asc, id asc
  `;
  return rows.map(rowToArtisan);
}

export async function getAllProducts(): Promise<Product[]> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`select * from products order by created_at asc`;
  return rows.map((row) => rowToProduct(row));
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`
    select * from products
    where featured = true
    order by created_at asc
    limit ${limit}
  `;
  return rows.map((row) => rowToProduct(row));
}

export async function getProductsByKind(kind: ProductKind, limit = 3): Promise<Product[]> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`
    select * from products
    where kind = ${kind}
    order by created_at asc
    limit ${limit}
  `;
  return rows.map((row) => rowToProduct(row));
}

export async function getProductById(id: string): Promise<Product | null> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`
    select * from products where id = ${id} limit 1
  `;
  if (rows.length === 0) return null;
  const reviewRows = await sql<ReviewRow>`
    select id, author, rating, text, date::text as date
    from reviews
    where product_id = ${id}
    order by date desc
  `;
  const reviews: Review[] = reviewRows.map((r) => ({
    id: r.id,
    author: r.author,
    rating: r.rating,
    text: r.text,
    date: r.date,
  }));
  return rowToProduct(rows[0], reviews);
}

export async function getHomeData() {
  const [featured, digital, physical, artisans] = await Promise.all([
    getFeaturedProducts(6),
    getProductsByKind("digital", 3),
    getProductsByKind("physical", 3),
    getAllArtisans(),
  ]);
  return { featured, digital, physical, artisans };
}
// ── Дополнение к products.server.ts ─────────────────────────────────


export type ProductFilter = {
  q?: string;
  kind?: ProductKind;
  category?: CategoryId;
  sort?: "popular" | "new" | "price-asc" | "price-desc";
};

export async function getFilteredProducts(filter: ProductFilter): Promise<Product[]> {
  const sql = await getSql();

  // Собираем условия динамически. Значения всегда через параметры.
  const conditions: string[] = [];
  const params: unknown[] = [];

  if (filter.kind) {
    params.push(filter.kind);
    conditions.push(`p.kind = $${params.length}`);
  }
  if (filter.category) {
    params.push(filter.category);
    conditions.push(`p.category = $${params.length}`);
  }
  if (filter.q && filter.q.trim()) {
    params.push(`%${filter.q.trim().toLowerCase()}%`);
    conditions.push(`(
      lower(p.title) like $${params.length}
      or lower(p.subtitle) like $${params.length}
      or lower(p.description) like $${params.length}
      or lower(a.name) like $${params.length}
    )`);
  }

  const where = conditions.length ? `where ${conditions.join(" and ")}` : "";

  let orderBy = "p.review_count * p.rating desc"; // popular
  if (filter.sort === "new") orderBy = "p.is_new desc, p.created_at desc";
  if (filter.sort === "price-asc") orderBy = "p.price asc";
  if (filter.sort === "price-desc") orderBy = "p.price desc";

  const text = `
    select p.*
    from products p
    join artisans a on a.id = p.artisan_id
    ${where}
    order by ${orderBy}
  `;
  const rows = await sql.query<ProductRow>(text, params);
  return rows.map((row) => rowToProduct(row));
}

export async function getProductWithArtisan(id: string) {
  const [product, artisans] = await Promise.all([
    getProductById(id),
    getAllArtisans(),
  ]);
  if (!product) return null;
  const artisan = artisans.find((a) => a.id === product.artisanId) ?? null;
  return { product, artisan };
}
// ── Похожие товары ────────────────────────────────────────────────
// Тот же вид ИЛИ тот же мастер, исключая сам товар.
export async function getRelatedProducts(
  currentId: string,
  kind: ProductKind,
  artisanId: string,
  limit = 3,
): Promise<Product[]> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`
    select * from products
    where id <> ${currentId}
      and (kind = ${kind} or artisan_id = ${artisanId})
    order by (artisan_id = ${artisanId}) desc, review_count * rating desc
    limit ${limit}
  `;
  return rows.map((row) => rowToProduct(row));
}
// ── Мастерская и её работы ────────────────────────────────────────
export async function getArtisanById(id: string): Promise<Artisan | null> {
  const sql = await getSql();
  const rows = await sql<ArtisanRow>`
    select id, name, city, craft, bio, since, mark
    from artisans
    where id = ${id} and status = 'approved'
    limit 1
  `;
  return rows.length ? rowToArtisan(rows[0]) : null;
}

export async function getProductsByArtisanId(artisanId: string): Promise<Product[]> {
  const sql = await getSql();
  const rows = await sql<ProductRow>`
    select * from products
    where artisan_id = ${artisanId}
    order by featured desc, created_at asc
  `;
  return rows.map((row) => rowToProduct(row));
}