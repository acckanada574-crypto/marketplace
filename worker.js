import pkg from 'pg';
import fs from 'node:fs/promises';
import path from 'node:path';
const { Pool } = pkg;

const DB_URL = process.env.DATABASE_URL;
const OLLAMA_BASE_URL = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
const OLLAMA_URL = `${OLLAMA_BASE_URL}/api/generate`;
const TEXT_MODEL = process.env.OLLAMA_TEXT_MODEL || 'qwen2.5:7b';
const VISION_MODEL = process.env.OLLAMA_VISION_MODEL || 'qwen2.5vl:7b';
const POLL_INTERVAL_MS = Number(process.env.AI_POLL_INTERVAL_MS || 60_000);
const BATCH_SIZE = Number(process.env.AI_BATCH_SIZE || 5);
const STORAGE_ROOT = path.resolve(process.env.LOCAL_STORAGE_DIR?.trim() || path.join(process.cwd(), 'public', 'storage'));

if (!DB_URL) {
  console.error('❌ DATABASE_URL не задан.');
  process.exit(1);
}

const pool = new Pool({ connectionString: DB_URL, ssl: process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false } });
pool.on('error', (err) => console.error('❌ Ошибка пула БД:', err.message));

function log(msg) {
  const ts = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log(`[${ts}] ${msg}`);
}

function parseJsonResponse(response) {
  const match = response?.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Модель не вернула JSON');
  return JSON.parse(match[0]);
}

async function generate(prompt, model, options = {}) {
  const res = await fetch(OLLAMA_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model, prompt, stream: false, format: 'json', options }) });
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
  return res.json();
}

async function generateText(title, rawDescription) {
  const prompt = `Ты — копирайтер маркетплейса ручной работы.\nСделай карточку для товара "${title}".\nСырое описание: "${rawDescription || 'нет'}".\nВерни только JSON: {"title":"...","subtitle":"...","description":"..."}`;
  try {
    const data = await generate(prompt, TEXT_MODEL, { temperature: 0.6, num_predict: 400 });
    return parseJsonResponse(data.response);
  } catch (err) {
    log(`❌ Ошибка текста: ${err.message}`);
    return null;
  }
}

async function readImage(imagePath) {
  if (/^https?:\/\//i.test(imagePath)) {
    const response = await fetch(imagePath);
    if (!response.ok) throw new Error(`Не удалось скачать изображение: HTTP ${response.status}`);
    return Buffer.from(await response.arrayBuffer()).toString('base64');
  }
  const relative = imagePath.replace(/^\/+/, '').replace(/^storage\/+/, '');
  return (await fs.readFile(path.join(STORAGE_ROOT, relative))).toString('base64');
}

async function analyzeImage(imagePath, expectedTitle) {
  try {
    const prompt = `Проанализируй фото товара. Ожидается: "${expectedTitle}".\nПроверь совпадение, признаки ручной работы и стока/ИИ.\nВерни только JSON: {"matches":true,"looks_handmade":true,"is_stock_or_ai":false,"notes":"кратко"}`;
    const image = await readImage(imagePath);
    const res = await fetch(OLLAMA_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: VISION_MODEL, prompt, images: [image], stream: false, format: 'json', options: { temperature: 0.2, num_predict: 300 } }) });
    if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
    return parseJsonResponse((await res.json()).response);
  } catch (err) {
    log(`❌ Ошибка vision: ${err.message}`);
    return null;
  }
}

async function processProduct(product) {
  log(`→ Товар: "${product.title}" (${product.id})`);
  const source = product.source_data || {};
  const aiText = await generateText(product.title, source.raw_description);
  if (!aiText) return markForReview(product.id, 'text_failed');
  const vision = await analyzeImage(product.image, aiText.title);
  if (!vision) return markForReview(product.id, 'vision_failed');

  const status = vision.matches === true && vision.looks_handmade === true && vision.is_stock_or_ai === false ? 'ai_processed' : 'needs_review';
  await pool.query('UPDATE products SET title=$1, subtitle=$2, description=$3, status=$4, ai_data=$5 WHERE id=$6', [aiText.title, aiText.subtitle, aiText.description, status, JSON.stringify({ text: aiText, vision, reviewed_by_ai: true }), product.id]);
}

async function markForReview(id, reason) {
  await pool.query("UPDATE products SET status='needs_review', ai_data=$1 WHERE id=$2", [JSON.stringify({ error: reason }), id]);
}

async function tick() {
  try {
    const res = await pool.query('SELECT * FROM products WHERE status = $1 ORDER BY created_at ASC LIMIT $2', ['pending', BATCH_SIZE]);
    for (const product of res.rows) await processProduct(product);
  } catch (err) {
    log(`❌ Ошибка цикла: ${err.message}`);
  }
}

async function main() {
  log(`🚀 AI-воркер запущен: text=${TEXT_MODEL}, vision=${VISION_MODEL}`);
  await tick();
  setInterval(tick, POLL_INTERVAL_MS);
}

main().catch((err) => { console.error(err); process.exitCode = 1; });