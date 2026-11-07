import { Client } from 'pg';
import fs from 'node:fs/promises';
import path from 'node:path';

function splitSQL(sql) {
  const queries = [];
  let current = '';
  let inDollarQuote = false;

  for (let i = 0; i < sql.length; i++) {
    const char = sql[i];
    const nextChar = sql[i + 1];

    if (char === '$' && nextChar === '$') {
      inDollarQuote = !inDollarQuote;
      current += '$$';
      i++;
      continue;
    }

    if (char === ';' && !inDollarQuote) {
      if (current.trim()) {
        queries.push(current.trim() + ';');
      }
      current = '';
    } else {
      current += char;
    }
  }

  if (current.trim()) {
    queries.push(current.trim());
  }

  return queries;
}

async function migrate() {
  const connectionString = process.env.DATABASE_URL;

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
    // Отключаем кэш подготовленных выражений для совместимости с PgBouncer
    statement_cache_size: 0,
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000,
  });

  await client.connect();
  console.log('[migrate] Connected to Supabase (pgbouncer compatible mode)');

  try {
    const dir = path.join(process.cwd(), 'migrations');
    const files = (await fs.readdir(dir)).filter(f => f.endsWith('.sql')).sort();

    for (const file of files) {
      const sql = await fs.readFile(path.join(dir, file), 'utf8');
      const queries = splitSQL(sql);

      console.log(`[migrate] Processing ${file} (${queries.length} queries)`);

      for (const query of queries) {
        try {
          await client.query(query);
          // Небольшая пауза, чтобы пулер не закрыл соединение
          await new Promise(r => setTimeout(r, 100));
        } catch (err) {
          if (err.code === '42P07' || err.message.includes('already exists')) {
            console.log(`[migrate] skipped (already exists): ${file}`);
          } else {
            throw err;
          }
        }
      }
      console.log(`[migrate] applied ${file}`);
    }
    console.log('[migrate] up to date.');
  } catch (err) {
    console.error('[migrate] failed:', err.message);
    process.exit(1);
  } finally {
    await client.end();
    console.log('[migrate] Connection closed safely.');
  }
}

migrate();