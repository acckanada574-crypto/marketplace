-- 0007_young_artisans.sql
-- Флаг "молодой мастер" для продвижения начинающих.

alter table artisans
  add column if not exists is_young boolean not null default false;

create index if not exists idx_artisans_is_young
  on artisans(is_young) where is_young = true;