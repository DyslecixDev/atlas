# Contributing to Atlas

Thanks for helping improve Atlas. Whether you're fixing a typo, correcting an
outdated entry, or adding a feature, this guide explains the workflow.

## Ways to contribute

- **Content corrections** — an entry is wrong, outdated, or unclear. Open a
  _content correction_ issue (or a PR if you have the fix).
- **Bugs** — something in the app is broken. Open a _bug report_.
- **Features** — a new capability or improvement. Open a _feature request_ first
  so we can agree on scope before you build.

## Local setup

Requires **Node 22** (see `.nvmrc`) and **pnpm**.

```bash
nvm use            # match the pinned Node version
pnpm install       # installs deps + git hooks (via the prepare script)
pnpm dev           # http://localhost:3000
```

Before opening a PR, make sure these pass locally (CI runs them too):

```bash
pnpm exec biome ci .       # lint + format
pnpm exec tsc --noEmit     # typecheck
pnpm build                 # production build
```

## Branching model — trunk-based

`main` is the single source of truth and is always deployable.

1. Branch off `main` for every change. Use a descriptive, prefixed name:
   - `feat/...`, `fix/...`, `docs/...`, `chore/...`, `refactor/...`
   - e.g. `feat/toolpicks-component`, `docs/part-2-css-cascade`
2. Keep branches **short-lived** — open a PR within a day or two.
3. Open a PR against `main`. The preview deployment is your staging/QA surface.
4. Once checks pass and the PR is approved, **squash-merge**. The branch is
   auto-deleted afterward.

> There is no long-lived `staging` branch. "Staging" is a deploy environment.

## Commits & PR titles — Conventional Commits

Commit messages **and PR titles** must follow
[Conventional Commits](https://www.conventionalcommits.org/):

```txt
<type>[optional scope]: <description>

[optional body]
[optional footer]
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, `revert`.

Examples:

```txt
feat: add ToolPicks component for default/alternative/legacy picks
fix: correct broken anchor links in Part 1
docs(part-2): rewrite the CSS cascade entry
```

This is enforced two ways:

- **Locally** — a `commit-msg` git hook runs commitlint (via Lefthook).
- **In CI** — because we **squash-merge**, the PR title becomes the commit on
  `main`, so a workflow lints the PR title against the same rules.

A `pre-commit` hook also runs Biome on your staged files and auto-fixes what it
can.

## Pull request checklist

- [ ] PR title follows Conventional Commits
- [ ] Branch is up to date with `main`
- [ ] `pnpm exec biome ci .` passes
- [ ] `pnpm exec tsc --noEmit` passes
- [ ] `pnpm build` passes
- [ ] You've self-reviewed the diff

## Content licensing note

Code contributions are accepted under the [MIT License](../LICENSE); written guide
content is accepted under [CC BY-SA 4.0](../LICENSE-CONTENT.md). By contributing,
you agree your contribution is licensed under the corresponding license.
