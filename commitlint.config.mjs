/**
 * Conventional Commits, enforced locally by the commit message hook (via Lefthook)
 * and on PR titles in CI. Squash only merges mean the PR title becomes the commit
 * that lands on main, so keep the two rule sets in sync.
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Allowed types. Keep this list and .github/workflows/pr-title.yml aligned.
    "type-enum": [
      2,
      "always",
      [
        "build", // build system or dependencies
        "chore", // tooling or maintenance, no source change
        "ci", // CI configuration
        "docs", // content, prose, or documentation only
        "feat", // a new capability visible to users
        "fix", // a bug fix
        "perf", // performance improvement
        "refactor", // neither a fix nor a feature
        "revert", // reverts a previous commit
        "style", // formatting only, no change in behavior
        "test", // adding or fixing tests
      ],
    ],
  },
};
