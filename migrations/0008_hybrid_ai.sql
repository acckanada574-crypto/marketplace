-- 0008_hybrid_ai.sql
-- Добавляем поля для гибридной ИИ-автоматизации

-- Статусы: pending (ждет ИИ), ai_ready (обработан), published (на сайте), needs_review (нужна проверка)
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'published';

ALTER TABLE products 
ADD COLUMN IF NOT EXISTS source_data JSONB DEFAULT '{}'::jsonb;

ALTER TABLE products 
ADD COLUMN IF NOT EXISTS ai_data JSONB DEFAULT '{}'::jsonb;

-- Индекс для быстрого поиска тех, кого нужно обработать
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);