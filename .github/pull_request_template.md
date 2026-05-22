<!-- markdownlint-disable-file MD041 -->
<!-- This template opens with a comment and H2 sections, not an H1 title. -->
<!--
PR title must follow Conventional Commits (it becomes the squash commit on main):
  feat: …  fix: …  docs: …  refactor: …  chore: …  etc.
-->

## What & why

<!-- What does this change and why? Link any issue: Closes #123 -->

## How to verify

<!-- Steps for a reviewer (or future-you) to confirm this works. -->

## Checklist

- [ ] PR title follows Conventional Commits
- [ ] `pnpm exec biome ci .` passes
- [ ] `pnpm exec tsc --noEmit` passes
- [ ] `pnpm build` passes
- [ ] Self-reviewed the diff
