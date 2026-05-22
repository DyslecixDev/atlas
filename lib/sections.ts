export type Entry = {
  /** Zero-padded ordinal for parts ("01"), letter for appendices ("A"). */
  id: string;
  title: string;
  /** Total chapters in this entry, surfaced as the "N ch" count. */
  chapters: number;
  /** First chapter names, for the truncated preview line. */
  topics: string[];
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
