-- 0002_marketplace_schema.sql
-- Схема маркетплейса «Живица»: мастерские, товары, отзывы, FAQ.
-- Совместимо с Better Auth (см. 0001_auth.sql).
-- Правила: snake_case для колонок, user_id TEXT для связи с "user".

-- ═══════════════════════════════════════════════════════════════════
-- Мастерские (включая платформу для новых мастеров)
-- ═══════════════════════════════════════════════════════════════════
create table if not exists artisans (
  id          text primary key,
  name        text not null,
  city        text not null,
  craft       text not null,
  bio         text not null,
  since       integer not null,
  mark        text not null,

  -- Связь с аккаунтом (для новых мастеров, которые регистрируются сами).
  -- NULL для уже одобренных "сид"-мастеров без аккаунта.
  user_id     text references "user"("id") on delete set null,
  status      text not null default 'approved'
              check (status in ('pending', 'approved', 'rejected')),
  email       text,
  phone       text,
  avatar_url  text,

  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists idx_artisans_status  on artisans(status);
create index if not exists idx_artisans_user_id on artisans(user_id);

-- ═══════════════════════════════════════════════════════════════════
-- Товары (физические + цифровые)
-- ═══════════════════════════════════════════════════════════════════
create table if not exists products (
  id              text primary key,
  slug            text not null unique,
  title           text not null,
  subtitle        text not null,
  description     text not null,
  price           integer not null check (price >= 0),
  kind            text not null check (kind in ('physical', 'digital')),
  category        text not null,
  artisan_id      text not null references artisans(id) on delete restrict,

  image           text not null,
  images          jsonb not null default '[]'::jsonb,

  materials       text,
  size            text,
  care            text,
  ships_in_days   integer,

  stock           integer not null default 0 check (stock >= 0),
  rating          numeric(2,1) not null default 0,
  review_count    integer not null default 0,

  featured        boolean not null default false,
  is_new          boolean not null default false,

  -- Только для цифровых
  digital_format  text,
  digital_pages   text,
  license         text,
  file_size       text,

  custom          boolean not null default false,

  -- Техническая подпись файла (защита от плагиата; заполняется агентом позже)
  file_hash       text,
  signed_at       timestamptz,
  signed_by       text,

  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists idx_products_artisan  on products(artisan_id);
create index if not exists idx_products_kind     on products(kind);
create index if not exists idx_products_category on products(category);
create index if not exists idx_products_featured on products(featured) where featured = true;

-- ═══════════════════════════════════════════════════════════════════
-- Отзывы
-- ═══════════════════════════════════════════════════════════════════
create table if not exists reviews (
  id          text primary key,
  product_id  text not null references products(id) on delete cascade,
  author      text not null,
  rating      integer not null check (rating between 1 and 5),
  text        text not null,
  date        date not null,
  created_at  timestamptz not null default now()
);

create index if not exists idx_reviews_product on reviews(product_id);

-- ═══════════════════════════════════════════════════════════════════
-- FAQ — частые вопросы
-- ═══════════════════════════════════════════════════════════════════
create table if not exists faq (
  id          text primary key,
  question    text not null,
  answer      text not null,
  category    text,
  position    integer not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

create index if not exists idx_faq_category on faq(category) where published = true;