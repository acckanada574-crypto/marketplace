-- 0005_orders.sql
-- Заказы и позиции заказов. Комиссия маркетплейса — 10%.
-- Поддержка оплаты частями: full / split_50_50.

create table if not exists orders (
  id                    text primary key,
  user_id               text not null,
  customer_name         text not null,
  customer_email        text not null,
  customer_phone        text not null,
  customer_city         text,
  customer_address      text,
  customer_postal       text,

  subtotal              integer not null default 0,
  shipping              integer not null default 0,
  total                 integer not null default 0,

  commission_amount     integer not null default 0,
  payout_total          integer not null default 0,

  payment_plan          text not null default 'full'
                        check (payment_plan in ('full', 'split_50_50')),
  paid_amount           integer not null default 0,
  due_amount            integer not null default 0,

  status                text not null default 'pending'
                        check (status in ('pending', 'first_paid', 'fully_paid', 'shipped', 'delivered', 'cancelled')),

  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  first_payment_at      timestamptz,
  second_payment_at     timestamptz
);

create index if not exists idx_orders_user on orders(user_id);
create index if not exists idx_orders_status on orders(status);

create table if not exists order_items (
  id                text primary key,
  order_id          text not null references orders(id) on delete cascade,
  product_id        text not null,
  artisan_id        text not null,
  title             text not null,
  price             integer not null,
  qty               integer not null,
  kind              text not null check (kind in ('physical', 'digital')),
  image             text,

  line_total        integer not null,
  commission_amount integer not null default 0,
  payout_amount     integer not null default 0,

  created_at        timestamptz not null default now()
);

create index if not exists idx_order_items_order on order_items(order_id);
create index if not exists idx_order_items_artisan on order_items(artisan_id);