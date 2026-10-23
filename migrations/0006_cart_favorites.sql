-- 0006_cart_favorites.sql
-- Таблицы для корзины и избранного.

create table if not exists cart (
  id          text primary key,
  user_id     text not null,
  product_id  text not null references products(id) on delete cascade,
  quantity    integer not null default 1 check (quantity > 0),
  created_at  timestamptz not null default now()
);

create index if not exists idx_cart_user on cart(user_id);

create table if not exists favorites (
  id          text primary key,
  user_id     text not null,
  product_id  text not null references products(id) on delete cascade,
  created_at  timestamptz not null default now()
);

create index if not exists idx_favorites_user on favorites(user_id);