-- 0004_subscription_tier.sql
-- Уровень подписки мастера. Free по умолчанию.

alter table artisans
  add column if not exists subscription_tier text not null default 'free'
  check (subscription_tier in ('free', 'pro', 'studio'));