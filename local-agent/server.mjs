import http from 'node:http';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = Number(process.env.AGENT_PORT || 8787);
const HOST = process.env.AGENT_HOST || '127.0.0.1';
const TOKEN = process.env.AGENT_TOKEN;
const WORKSPACE = path.resolve(process.env.MARKETPLACE_DIR || process.cwd());
const jobs = new Map();

const commands = {
  status: { command: process.platform === 'win32' ? 'git.exe' : 'git', args: ['status', '--short'], mutating: false },
  typecheck: { command: process.platform === 'win32' ? 'npm.cmd' : 'npm', args: ['run', 'typecheck'], mutating: false },
  lint: { command: process.platform === 'win32' ? 'npm.cmd' : 'npm', args: ['run', 'lint'], mutating: false },
  test: { command: process.platform === 'win32' ? 'npm.cmd' : 'npm', args: ['test'], mutating: false },
  build: { command: process.platform === 'win32' ? 'npm.cmd' : 'npm', args: ['run', 'build'], mutating: false },
  composeUp: { command: 'docker', args: ['compose', 'up', '-d', 'postgres', 'minio'], mutating: true },
  composeDown: { command: 'docker', args: ['compose', 'down'], mutating: true },
};

if (!TOKEN || TOKEN.length < 32) {
  throw new Error('Set AGENT_TOKEN to a random value of at least 32 characters.');
}

function json(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function authorized(req) {
  return req.headers.authorization === `Bearer ${TOKEN}`;
}

function run(name) {
  const spec = commands[name];
  const id = crypto.randomUUID();
  const job = { id, name, status: 'running', output: '', startedAt: new Date().toISOString() };
  jobs.set(id, job);
  const child = spawn(spec.command, spec.args, { cwd: WORKSPACE, shell: false, env: process.env });
  child.stdout.on('data', (chunk) => { job.output += chunk.toString(); });
  child.stderr.on('data', (chunk) => { job.output += chunk.toString(); });
  child.on('close', (code) => { job.status = code === 0 ? 'completed' : 'failed'; job.exitCode = code; job.finishedAt = new Date().toISOString(); });
  return job;
}

const page = `<!doctype html><meta charset="utf-8"><title>Marketplace PC Agent</title><style>body{font:16px system-ui;max-width:720px;margin:40px auto;padding:0 16px}button{margin:4px;padding:10px 14px}pre{white-space:pre-wrap;background:#f4f4f4;padding:12px}</style><h1>Marketplace PC Agent</h1><p>Выполняются только заранее разрешённые операции.</p><div id="buttons"></div><pre id="out">Готово</pre><script>const token=prompt('AGENT_TOKEN');const names=['status','typecheck','lint','test','build','composeUp','composeDown'];const box=document.querySelector('#buttons');for(const name of names){const b=document.createElement('button');b.textContent=name;b.onclick=async()=>{const r=await fetch('/v1/jobs',{method:'POST',headers:{'authorization':'Bearer '+token,'content-type':'application/json'},body:JSON.stringify({name})});document.querySelector('#out').textContent=JSON.stringify(await r.json(),null,2)};box.append(b)}</script>`;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(page); return; }
  if (!authorized(req)) { json(res, 401, { error: 'Unauthorized' }); return; }
  if (req.method === 'GET' && req.url === '/v1/jobs') { json(res, 200, [...jobs.values()].slice(-20)); return; }
  if (req.method === 'POST' && req.url === '/v1/jobs') {
    let body = ''; for await (const chunk of req) body += chunk;
    let input; try { input = JSON.parse(body || '{}'); } catch { json(res, 400, { error: 'Invalid JSON' }); return; }
    const spec = commands[input.name];
    if (!spec) { json(res, 400, { error: 'Unknown allowlisted job' }); return; }
    if (spec.mutating && input.confirm !== true) { json(res, 409, { error: 'Explicit confirmation required', name: input.name }); return; }
    json(res, 202, run(input.name)); return;
  }
  json(res, 404, { error: 'Not found' });
});
server.listen(PORT, HOST, () => console.log(`PC agent listening on http://${HOST}:${PORT}`));
