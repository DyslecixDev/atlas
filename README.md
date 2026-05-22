# Atlas — Field Manual

> An opinionated, single-path guide to becoming a solo, freelance, full-stack web
> developer — and a concept reference for experienced developers.

Atlas serves two readers from one body of content:

1. **The beginner path** — a linear, opinionated route from zero to full-stack.
   Each topic commits to **one default tool**, with up to two alternatives (at
   least one suited to an enterprise/legacy environment).
2. **The reference** — every entry stands alone, so experienced developers can
   deep-link to a concept (e.g. an auth provider or a caching strategy) and leave.

The guide is built around three tiers of practice: in-chapter micro-exercises,
end-of-section project briefs (written as requirements, not prescriptions), and a
final AI-augmented capstone.

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 16 (App Router, React Compiler) |
| UI             | React 19                                |
| Styling        | Tailwind CSS v4                         |
| Language       | TypeScript 6                            |
| Runtime        | Node 22 LTS                             |
| Package manager| pnpm                                    |
| Lint / format  | Biome                                   |
| Git hooks      | Lefthook                                |

> The stack deliberately mirrors the guide's own recommendations — Atlas eats its
> own dog food.

## Getting started

```bash
# Use the pinned Node version (see .nvmrc)
nvm use

# Install dependencies (also installs git hooks via the prepare script)
pnpm install

# Run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Script           | What it does                          |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start the dev server                  |
| `pnpm build`     | Production build                      |
| `pnpm start`     | Serve the production build            |
| `pnpm lint`      | Biome check (lint + format diff)      |
| `pnpm check`     | Biome autofix, including unsafe fixes |
| `pnpm format`    | Biome format, writing changes         |
| `pnpm typecheck` | TypeScript typecheck (`tsc --noEmit`) |
| `pnpm knip`      | Find unused files, deps, and exports  |

## Quality & CI

- **Biome** lints and formats all JS/TS/JSON/CSS, **commitlint** checks commit
  messages, and **Lefthook** wires both into git hooks: a `pre-commit` hook runs
  Biome on staged files and a `commit-msg` hook runs commitlint.
- **knip** flags unused files, dependencies, and exports.
- **GitHub Actions** run on every PR: Biome, typecheck, build, and knip
  (`ci.yml`), plus **CodeQL** security scanning. A weekly job checks links with
  **lychee**, a PR-title workflow enforces Conventional Commits on the squash
  title, and **Dependabot** keeps dependencies current.

## Contributing

Read [CONTRIBUTING.md](.github/CONTRIBUTING.md) first. In short: trunk-based flow off
`main`, short-lived feature branches, **Conventional Commits**, and squash merges.
Found an error or outdated entry? Open a **content correction** issue.

## License

This project is **dual-licensed**:

- **Code** (application source, config, tooling) — [MIT](./LICENSE).
- **Content** (the guide's prose, exercises, and project briefs) —
  [CC BY-SA 4.0](./LICENSE-CONTENT.md).
