import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";

export type BecomeArtisanInput = {
  name: string;
  city: string;
  craft: string;
  bio: string;
  mark: string;
};

export const becomeArtisan = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: BecomeArtisanInput) => input)
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();

    const existing = await sql<{ id: string }>`
      select id from artisans where user_id = ${context.userId} limit 1
    `;
    if (existing.length > 0) {
      return { id: existing[0].id, created: false };
    }

    const id = `art-${context.userId.slice(0, 10)}`;
    const year = new Date().getFullYear();

    await sql`
      insert into artisans (id, name, city, craft, bio, since, mark, user_id, status, subscription_tier)
      values (
        ${id}, ${data.name}, ${data.city}, ${data.craft},
        ${data.bio}, ${year}, ${data.mark},
        ${context.userId}, 'approved', 'free'
      )
    `;

    return { id, created: true };
  });

export const getMyArtisan = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{
      id: string;
      name: string;
      city: string;
      craft: string;
      mark: string;
    }>`
      select id, name, city, craft, mark
      from artisans
      where user_id = ${context.userId}
      limit 1
    `;
    return rows[0] ?? null;
  });