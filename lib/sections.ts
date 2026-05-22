/** Top-edge accent color on a chapter card. */
export type ChapterAccent = "blue" | "gold" | "pink" | "red";

export type Chapter = {
  /** Section number like "1.1", shown after the "§". */
  number: string;
  title: string;
  /** One-line card description. */
  blurb: string;
  /** How essential the chapter is, 1 to 5 stars. */
  rating: number;
  /** Top-edge accent color. Defaults to gold when omitted. */
  accent?: ChapterAccent;
  /** Optional margin note rendered as a post-it beside the card. */
  note?: string;
};

export type Entry = {
  /** Zero-padded ordinal for parts ("01"), letter for appendices ("A"). */
  id: string;
  title: string;
  /** Total chapters in this entry, surfaced as the "N ch" count. */
  chapters: number;
  /** First chapter names, for the truncated preview line. */
  topics: string[];
  /** Lede shown under the title on the entry's own page. */
  summary?: string;
  /** Full chapter cards, when this entry's content has been authored. */
  chapterList?: Chapter[];
};

export const parts: Entry[] = [
  {
    id: "01",
    title: "Foundations",
    chapters: 12,
    topics: [
      "How to use this guide",
      "Dev environment",
      "The command line",
      "Git & GitHub",
      "How the web works",
      "JavaScript fundamentals",
    ],
    summary:
      "12 chapters. The bedrock layer: a Unix shell, an editor, git, the language, the runtime, and the first end-to-end build. Every chapter is open without an account.",
    chapterList: [
      {
        number: "1.1",
        title: "How to use this guide",
        blurb:
          "the guide's conventions · the Pick pattern · ~5 min, no entries.",
        rating: 5,
        accent: "blue",
      },
      {
        number: "1.2",
        title: "Dev environment & WSL2",
        blurb: "WSL2 on Windows, Homebrew on macOS, VS Code as default.",
        rating: 5,
        accent: "pink",
      },
      {
        number: "1.3",
        title: "Command line basics",
        blurb: "cd, ls, pipes, find, grep — the 90% you need.",
        rating: 5,
        accent: "gold",
      },
      {
        number: "1.4",
        title: "Git & GitHub",
        blurb: "init, commit, branch, rebase · GitHub flow.",
        rating: 5,
        accent: "red",
      },
      {
        number: "1.5",
        title: "How the web works",
        blurb: "request → response · DNS · ports · HTTP basics.",
        rating: 5,
        accent: "gold",
      },
      {
        number: "1.6",
        title: "JavaScript fundamentals",
        blurb: "values, control flow, functions, closures, modules.",
        rating: 5,
        accent: "gold",
        note: "signed-in users see a % cleared meter per card, plus a Foundations seal sticker.",
      },
      {
        number: "1.7",
        title: "TypeScript fundamentals",
        blurb: "gradual types · tsconfig that won't fight you.",
        rating: 5,
        accent: "blue",
      },
      {
        number: "1.8",
        title: "Node.js runtime",
        blurb: "one runtime, two ways to think about it.",
        rating: 5,
        accent: "gold",
      },
      {
        number: "1.9",
        title: "Package mgmt (pnpm)",
        blurb: "pnpm as default · lockfiles, workspaces.",
        rating: 4,
        accent: "gold",
      },
      {
        number: "1.10",
        title: "Build tooling (Vite)",
        blurb: "dev server + bundler, in one tool.",
        rating: 5,
        accent: "gold",
      },
      {
        number: "1.11",
        title: "Linters (Biome)",
        blurb: "Biome · one config, lint + format.",
        rating: 4,
        accent: "blue",
      },
      {
        number: "1.12",
        title: "Section project · personal site",
        blurb: "a one-page personal site · no styling.",
        rating: 5,
        accent: "gold",
      },
    ],
  },
  {
    id: "02",
    title: "Frontend Fundamentals",
    chapters: 9,
    topics: [
      "HTML & semantic markup",
      "CSS — model, cascade, box",
      "Modern CSS",
      "Styling (Tailwind)",
      "The DOM & events",
      "Async JavaScript",
    ],
  },
  {
    id: "03",
    title: "UX & UI for Developers",
    chapters: 10,
    topics: [
      "Design vocabulary",
      "Hierarchy, type, spacing, color",
      "Common UI patterns",
      "Design systems",
      "Reading designs & Figma",
      "Wireframing",
    ],
  },
  {
    id: "04",
    title: "React",
    chapters: 15,
    topics: [
      "Why React — mental model",
      "Frontend framework",
      "JSX, components, props",
      "State, effects, refs",
      "Composition patterns",
      "Component libraries",
    ],
  },
  {
    id: "05",
    title: "Rendering & Meta-Frameworks",
    chapters: 9,
    topics: [
      "CSR / SSR / SSG / ISR / PPR",
      "Meta-framework (Next.js 16)",
      "Next.js fundamentals",
      "Caching in Next.js",
      "The Vite + React alternative",
      "The Astro alternative",
    ],
  },
  {
    id: "06",
    title: "Backend Development",
    chapters: 20,
    topics: [
      "Server fundamentals (Hono)",
      "Server framework",
      "Backend in Next.js",
      "Relational databases",
      "Database (Neon)",
      "ORM (Drizzle)",
    ],
  },
  {
    id: "07",
    title: "Putting It Together",
    chapters: 6,
    topics: [
      "End-to-end type safety",
      "Env & secrets management",
      "Error handling",
      "Logging conventions",
      "The Twelve-Factor App",
      "Section project",
    ],
  },
  {
    id: "08",
    title: "Testing",
    chapters: 11,
    topics: [
      "Testing pyramid",
      "Unit testing (Vitest)",
      "Component testing (RTL)",
      "API / integration testing",
      "End-to-end (Playwright)",
      "Visual regression",
    ],
  },
  {
    id: "09",
    title: "Security",
    chapters: 13,
    topics: [
      "OWASP basics",
      "Threat modeling (STRIDE)",
      "Auth pitfalls revisited",
      "Input validation",
      "SQLi, XSS, CSRF",
      "CORS, CSP, headers",
    ],
  },
  {
    id: "10",
    title: "Accessibility, Deeper",
    chapters: 6,
    topics: [
      "WCAG without the jargon",
      "Keyboard navigation",
      "Screen readers",
      "ARIA",
      "Accessibility testing tools",
      "Section project",
    ],
  },
  {
    id: "11",
    title: "Performance",
    chapters: 12,
    topics: [
      "Core Web Vitals",
      "Bundle size & splitting",
      "Image & font optimization",
      "React in the Compiler era",
      "Database query performance",
      "Caching layers",
    ],
  },
  {
    id: "12",
    title: "PWA & Offline",
    chapters: 5,
    topics: [
      "What a PWA actually is",
      "Service Workers",
      "Web App Manifest",
      "Offline strategies & storage",
      "Section project",
    ],
  },
  {
    id: "13",
    title: "Internationalization",
    chapters: 6,
    topics: [
      "i18n vs l10n",
      "i18n in Next.js (next-intl)",
      "i18n in Vite + React",
      "i18n in Astro",
      "RTL & bidirectional text",
      "Section project",
    ],
  },
  {
    id: "14",
    title: "DevOps & Operations",
    chapters: 12,
    topics: [
      "Hosting & deployment",
      "Hosting (Vercel)",
      "CI/CD (GitHub Actions)",
      "Environments",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
    ],
  },
  {
    id: "15",
    title: "Cloud Platforms",
    chapters: 9,
    topics: [
      "When PaaS isn't enough",
      "Cloud provider (AWS)",
      "AWS as the working example",
      "Networking deeper",
      "Infrastructure as Code",
      "Container security",
    ],
  },
  {
    id: "16",
    title: "System Design",
    chapters: 17,
    topics: [
      "Approaching a design question",
      "Monolith → microservices",
      "Strangler Fig",
      "Scaling reads vs writes",
      "CAP theorem",
      "Queues & async patterns",
    ],
  },
  {
    id: "17",
    title: "Documentation",
    chapters: 7,
    topics: [
      "READMEs that don't suck",
      "API docs (OpenAPI)",
      "Architecture decision records",
      "Doc-site generators",
      "Documenting for future you",
      "Section project",
    ],
  },
  {
    id: "18",
    title: "Code Review & Engineering",
    chapters: 9,
    topics: [
      "What code review is for",
      "Review best practices",
      "Reviewing your own code",
      "Giving feedback that lands",
      "PR templates & CODEOWNERS",
      "Section project",
    ],
  },
  {
    id: "19",
    title: "AI-Augmented Development",
    chapters: 18,
    topics: [
      "Why this section is last",
      "Installing Claude Code",
      "CLAUDE.md project memory",
      "Research → plan → execute → review",
      "Skills & slash commands",
      "MCP servers",
    ],
  },
];

const appendices: Entry[] = [
  {
    id: "A",
    title: "DSA & CS Reference",
    chapters: 5,
    topics: [
      "Big-O notation",
      "Basic data structures",
      "Basic algorithms",
      "OS concepts",
      "Where CS topics appear",
    ],
  },
  {
    id: "B",
    title: "Mobile / Desktop from Web",
    chapters: 3,
    topics: [
      "Mobile (React Native + Expo)",
      "Desktop (Tauri)",
      "What transfers from web",
    ],
  },
  {
    id: "C",
    title: "External Resources",
    chapters: 3,
    topics: [
      "LeetCode for DSA practice",
      "Recommended books & courses",
      "Communities & newsletters",
    ],
  },
];

/** Parts followed by appendices: the full table of contents. */
export const tableOfContents: Entry[] = [...parts, ...appendices];

export const partsCount = parts.length;
export const appendicesCount = appendices.length;

/** Editorial headline count of readable entries across the whole guide. */
export const totalEntries = 320;

/** Chapter names joined for the preview line (CSS truncates the overflow). */
export function chapterPreview(entry: Entry): string {
  return entry.topics.join(" · ");
}

/**
 * The reader's current chapter, as a chapter number ("1.1"). This is reader
 * state, not content: it is hardcoded to the first chapter for now, and a
 * future login feature will source it from the signed-in user's saved
 * progress. Kept module-private so the rest of the app reads progress only
 * through the predicates below: the highlighted table-of-contents row on "/"
 * and the askew chapter card on a part page both derive from this one value,
 * so moving the reader updates both.
 */
const currentChapterId = "1.1";

/** Whether `chapter` is the reader's current chapter. */
export function isCurrentChapter(chapter: Chapter): boolean {
  return chapter.number === currentChapterId;
}

/** Whether `entry` is the part or appendix that holds the current chapter. */
export function isCurrentEntry(entry: Entry): boolean {
  const [prefix] = currentChapterId.split(".");
  // Parts use zero-padded numeric ids ("01") while chapter prefixes are not
  // padded ("1"), so match numerically; fall back to a string match so lettered
  // appendix ids ("A") still work.
  return Number(entry.id) === Number(prefix) || entry.id === prefix;
}

/** Look up any entry (part or appendix) by its id. */
export function getEntry(id: string): Entry | undefined {
  return tableOfContents.find((entry) => entry.id === id);
}

/**
 * Header label for an entry: "Part 1" for numbered parts, "Appendix A" for
 * lettered appendices.
 */
export function entryLabel(entry: Entry): string {
  return /^\d+$/.test(entry.id)
    ? `Part ${Number(entry.id)}`
    : `Appendix ${entry.id}`;
}
