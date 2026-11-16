-- 0009_product_files.sql
-- Метаданные локальных файлов товаров. Сами файлы хранятся вне Git.

create table if not exists product_files (
  id            text primary key,
  product_id    text not null references products(id) on delete cascade,
  uploaded_by   text references "user"("id") on delete set null,
  kind          text not null check (kind in ('image', 'digital')),
  original_name text not null,
  storage_key   text not null unique,
  mime_type     text not null,
  size_bytes    integer not null check (size_bytes > 0),
  sha256        text not null,
  created_at    timestamptz not null default now()
);

create index if not exists idx_product_files_product on product_files(product_id);
create index if not exists idx_product_files_uploaded_by on product_files(uploaded_by);
