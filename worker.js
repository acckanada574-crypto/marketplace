import pkg from 'pg';
const { Pool } = pkg;
import fs from 'node:fs';
import path from 'node:path';

const DB_URL = process.env.DATABASE_URL;
const OLLAMA_URL = 'http://127.0.0.1:11434/api/generate';
const TEXT_MODEL = 'qwen2.5:7b';
const VISION_MODEL = 'qwen2.5vl:7b';
const POLL_INTERVAL_MS = 60_000;
const SITE_URL = 'https://marketplace.de2.netrun.io'; // Боевой сайт

if (!DB_URL) {
  console.error('❌ DATABASE_URL не задан.');
  process.exit(1);
}

const pool = new Pool({ 
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false }
});

pool.on('error', (err) => {
  console.error('❌ Ошибка пула БД:', err.message);
});

function log(msg) {
  const ts = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log(`[${ts}] ${msg}`);
}

// --- Ветка 1: Генерация текста (Qwen 2.5 7B) ---
async function generateText(title, rawDescription) {
  const prompt = `Ты — копирайтер маркетплейса ручной работы.
Сделай красивую карточку для товара "${title}".
Сырое описание от мастера: "${rawDescription || 'нет'}".
Верни ТОЛЬКО валидный JSON: {"title": "...", "subtitle": "...", "description": "..."}`;

  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: TEXT_MODEL,
        prompt,
        stream: false,
        format: 'json',
        options: { temperature: 0.6, num_predict: 400 },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return JSON.parse(data.response.match(/\{[\s\S]*\}/)[0]);
  } catch (err) {
    log(`❌ Ошибка текста: ${err.message}`);
    return null;
  }
}

// --- Ветка 2: Анализ картинки (ИСПРАВЛЕНО) ---
async function analyzeImage(imagePath, expectedTitle) {
  try {
    let b64;
    
    // Если картинка в облаке (начинается с http) или лежит на сайте
    if (imagePath.startsWith('http')) {
      const response = await fetch(imagePath);
      const arrayBuffer = await response.arrayBuffer();
      b64 = Buffer.from(arrayBuffer).toString('base64');
    } else {
      // Формируем полную ссылку на картинку на твоем сайте
      const fullUrl = `${SITE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
      console.log(`   Скачиваю картинку с сайта: ${fullUrl}`);
      
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error(`Не удалось скачать картинку: HTTP ${response.status}`);
      
      const arrayBuffer = await response.arrayBuffer();
      b64 = Buffer.from(arrayBuffer).toString('base64');
    }

    const prompt = `Проанализируй фото товара. Ожидается: "${expectedTitle}".
1. На фото действительно этот товар?
2. Похоже на ручную работу?
3. Есть признаки стока, фабрики или ИИ-генерации?
Верни ТОЛЬКО валидный JSON: {"matches": true/false, "looks_handmade": true/false, "is_stock_or_ai": true/false, "notes": "кратко"}`;

    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: VISION_MODEL,
        prompt,
        images: [b64],
        stream: false,
        format: 'json',
        options: { temperature: 0.2, num_predict: 300 },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return JSON.parse(data.response.match(/\{[\s\S]*\}/)[0]);
  } catch (err) {
    log(`❌ Ошибка vision: ${err.message}`);
    return null;
  }
}

// --- Ветка 3: Текстовый редактор (Qwen 2.5 7B) ---
async function checkApproval(text) {
  const prompt = `Проверь текст карточки: "${text}". Если мат, бред, выдуманные факты — REJECT. Иначе — APPROVE. Только одно слово.`;
  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      body: JSON.stringify({
        model: TEXT_MODEL,
        prompt,
        stream: false,
        options: { temperature: 0.1, num_predict: 10 },
      }),
    });
    const data = await res.json();
    return data.response.trim().toUpperCase().includes('APPROVE') ? 'APPROVE' : 'REJECT';
  } catch {
    return 'REJECT';
  }
}

// --- Обработка одного товара ---
async function processProduct(product) {
  log(`→ Товар: "${product.title}" (${product.id})`);

  const aiText = await generateText(product.title, product.source_data?.raw_description);
  if (!aiText) return await markForReview(product.id, 'text_failed');

  const vision = await analyzeImage(product.image, aiText.title);
  if (!vision) return await markForReview(product.id, 'vision_failed');

  const textVerdict = await checkApproval(aiText.description);

  const isApproved =
    textVerdict === 'APPROVE' &&
    vision.matches === true &&
    vision.looks_handmade === true &&
    vision.is_stock_or_ai === false;

  const finalStatus = isApproved ? 'published' : 'needs_review';
  log(`   Вердикт: текст=${textVerdict}, vision=${JSON.stringify(vision)} → ${finalStatus}`);

  try {
    await pool.query(
      `UPDATE products SET title=$1, subtitle=$2, description=$3, status=$4, ai_data=$5 WHERE id=$6`,
      [
        aiText.title,
        aiText.subtitle,
        aiText.description,
        finalStatus,
        JSON.stringify({ text: aiText, vision, textVerdict }),
        product.id,
      ]
    );
  } catch (err) {
    log(`❌ Ошибка БД: ${err.message}`);
  }
}

async function markForReview(id, reason) {
  await pool.query(`UPDATE products SET status='needs_review', ai_data=$1 WHERE id=$2`, [
    JSON.stringify({ error: reason }),
    id,
  ]);
}

async function tick() {
  try {
    const res = await pool.query("SELECT * FROM products WHERE status = 'pending' LIMIT 5");
    if (res.rows.length === 0) return;

    log(`📦 В очереди: ${res.rows.length}`);
    for (const product of res.rows) {
      await processProduct(product);
    }
  } catch (err) {
    log(`❌ Ошибка цикла: ${err.message}`);
  }
}

async function main() {
  log('🚀 Воркер запущен с Vision (qwen2.5vl:7b)');
  await tick();
  setInterval(tick, POLL_INTERVAL_MS);
}

main().catch(console.error);