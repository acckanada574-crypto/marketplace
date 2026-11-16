-- 0010_normalize_product_status.sql
-- Keep the public moderation workflow limited to pending, needs_review and published.

update products
set status = 'needs_review'
where status in ('ai_processed', 'ai_ready');

create index if not exists idx_products_public_status on products(status) where status = 'published';
