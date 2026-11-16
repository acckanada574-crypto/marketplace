# Marketplace local control agent

This agent is intentionally **not included yet**. The production-safe integration uses a separate local process on the PC, reachable only through Tailscale, with an allowlist and explicit approval for writes.

## Recommended control path from a phone

```text
Phone -> Tailscale -> PC agent -> allowlisted local commands
```

Do not expose the agent, Ollama, PostgreSQL, or MinIO directly to the public internet. Do not put tokens or `.env` files in Git.

## First PC setup

1. Install Git, Node.js 22.12+, Docker Desktop, Ollama and Tailscale.
2. Clone the repository and switch to `feature/local-file-storage`.
3. Copy `.env.example` to `.env` and replace every `change-this`/`replace-with` value locally.
4. Start services: `docker compose up -d postgres minio`.
5. Pull models: `ollama pull qwen2.5:7b` and `ollama pull qwen2.5vl:7b`.
6. Run checks before exposing any local control interface: `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`.

## Control policy

Allowed read/check operations may include status, logs, typecheck, lint, tests and build. Require a local confirmation for `git push`, migrations, service restart, file deletion, environment changes and deployment. Never implement an endpoint that executes arbitrary shell text from a phone.

The assistant can prepare code and commits in GitHub. Execution on the PC requires the local agent and your confirmation.
