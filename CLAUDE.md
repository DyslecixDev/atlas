# CLAUDE.md

Project memory and standing instructions for Claude Code working in this repo.

## What Atlas is

An opinionated, single-path guide to becoming a solo, freelance, full-stack web
developer, doubling as a concept reference for experienced developers. One body of
content serves two reading modes: a linear **beginner path** and a deep-linkable
**reference**. See `README.md` for the full premise.

## Hard rules

- **NEVER stage, add, or commit changes.** Do not run `git add`, `git stage`, or
  `git commit` under any circumstances. Create and edit files only; leave all
  staging and committing to the user. If a commit is the natural next step, tell
  the user the command to run.
- **Conventional Commits** everywhere (see below) — relevant when you _suggest_
  commit messages or PR titles, never when committing.

## Stack & versions

- Next.js 16 (App Router, React Compiler enabled in `next.config.ts`)
- React 19 · TypeScript 5 · Tailwind CSS v4
- Node 22 LTS (`.nvmrc`) · pnpm (see `packageManager` in `package.json`)
- Biome for lint + format · Lefthook for git hooks
- knip for unused files/deps/exports · commitlint for commit + PR-title linting

## Commands

```bash
pnpm dev                 # dev server
pnpm build               # production build
pnpm exec biome ci .     # lint + format check (what CI runs); `pnpm lint` runs `biome check`
pnpm check               # auto-fix lint/format, incl. unsafe fixes (`biome check --write --unsafe`)
pnpm typecheck           # `tsc --noEmit`
pnpm knip                # unused files, dependencies, and exports
```

Always verify changes with `pnpm exec biome ci .`, `pnpm typecheck`, `pnpm build`,
and `pnpm knip` (the four checks CI runs) before considering work done.

## Conventions

- **Branching:** trunk-based. Branch off `main` (`feat/…`, `fix/…`, `docs/…`),
  short-lived, PR → squash-merge → auto-delete. No long-lived `staging` branch;
  staging is a deploy environment.
- **Commits & PR titles:** Conventional Commits, enforced by commitlint
  (`commitlint.config.mjs`) via a `commit-msg` hook and a PR-title CI workflow.
- **Formatting:** Biome owns it. Don't hand-format; run Biome.
- **Comments:** prefer self-documenting code. When a comment is needed, avoid
  semicolons and dashes, and use colons sparingly.
- **Sorting:** sort arbitrary lists alphabetically (for example the
  `.vscode/extensions.json` recommendations). Never reorder lists whose order is
  significant.
- **Licensing:** code is MIT, written guide content is CC BY-SA 4.0. Keep that
  split in mind when adding files.

## Project status

Early scaffolding. Repo tooling (CI, hooks, Dependabot, community-health files) is
in place. The content platform — content schema, MDX/rendering, the field-manual
UI, and the Parts 1–3 entries — is **not built yet** and is the next major effort.
The user already has the Parts 1–3 prose written; the task is to build the
platform and ingest it (don't rewrite the prose).

## Design direction

The UI targets a tactile "field manual" aesthetic: manila/cream paper, navy header
blocks, handwritten display type, monospace labels, washi-tape and sticker
accents, highlighter marks. Match the provided prototypes when building UI.
