import { ChevronRight, Paperclip, Search, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { parts, totalEntries } from "@/lib/sections";
import { cn } from "@/lib/utils";

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="border border-ink/40 bg-paper px-1.5 py-0.5 font-mono text-[10px] text-ink-soft">
      {children}
    </kbd>
  );
}

const tabs = [
  { label: "Home", tone: "active" },
  { label: "All entries", tone: "blue" },
  { label: "Settings", tone: "green" },
] as const;

export function SiteSidebar() {
  return (
    <aside className="ruled hidden h-full w-67.5 shrink-0 flex-col gap-4 overflow-hidden border-ink border-r bg-paper-2 px-4 py-4 lg:flex">
      <div className="relative shrink-0">
        <span className="washi washi-blue absolute -top-2 left-1 h-4 w-16 -rotate-6" />
        <div className="flex items-baseline gap-2">
          <span className="font-bold font-title text-3xl text-ink leading-none">
            Atlas
          </span>
          <span className="font-mono text-[10px] text-ink-soft uppercase tracking-wide">
            public docs
          </span>
        </div>
        <p className="mt-1.5 font-mono text-[10px] text-ink-soft uppercase tracking-[0.18em]">
          Field Manual · v3
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 border border-ink/40 border-dashed bg-paper/70 px-2.5 py-2">
        <Search className="size-3.5 text-ink-soft" />
        <span className="flex-1 truncate text-[12px] text-ink-soft">
          search {totalEntries} entries...
        </span>
        <Kbd>⌘K</Kbd>
      </div>

      <div className="flex shrink-0 gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={cn(
              "cursor-pointer border px-2.5 py-1 text-[12px] text-ink outline-none transition-all focus-visible:ring-3 focus-visible:ring-ring/50 not-disabled:active:brightness-90 disabled:not-aria-busy:cursor-not-allowed disabled:opacity-50 aria-busy:cursor-progress",
              tab.tone === "active"
                ? "border-ink bg-post-blue"
                : tab.tone === "green"
                  ? "border-ink/30 bg-post-green/60 not-disabled:hover:border-ink not-disabled:hover:bg-post-green"
                  : "border-ink/30 bg-paper not-disabled:hover:border-ink not-disabled:hover:bg-paper-2",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex shrink-0 items-center justify-between px-0.5">
        <span className="font-mono text-[10px] text-ink-soft uppercase tracking-[0.18em]">
          Parts
        </span>
        <span className="font-mono text-[10px] text-ink-soft">
          {totalEntries} entries total
        </span>
      </div>

      <nav className="-mt-1.5 flex min-h-0 flex-1 flex-col overflow-y-auto">
        {parts.map((part) => (
          <Link
            key={part.id}
            href={`/parts/${part.id}`}
            className="group flex items-center gap-2.5 px-2 py-1.5 hover:bg-paper"
          >
            <span className="font-mono text-[10px] text-ink-soft">
              {part.id}
            </span>
            <span className="flex-1 truncate text-[13px] text-ink">
              {part.title}
            </span>
            <span className="font-mono text-[10px] text-ink-soft">
              {part.chapters}
            </span>
            <ChevronRight className="size-3.5 text-ink-soft transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2 border border-ink/40 border-dashed px-2.5 py-2">
        <Search className="size-3.5 text-ink-soft" />
        <span className="flex-1 text-[12px] text-ink-soft">
          glossary search
        </span>
        <Kbd>⌘K</Kbd>
      </div>

      <div className="flex shrink-0 items-center gap-2 border border-ink/40 border-dashed px-2.5 py-2">
        <Star className="size-3.5 text-ink-soft" />
        <span className="flex-1 text-[12px] text-ink-soft">
          stickers preview
        </span>
        <span className="font-mono text-[10px] text-ink-soft">0 / 36</span>
      </div>

      <div className="relative shrink-0 border border-ink border-dashed bg-paper/60 p-3">
        <Paperclip className="absolute -top-3 right-4 size-6 rotate-[-28deg] text-ink/70" />
        <p className="font-mono text-[10px] text-ink-soft uppercase tracking-[0.16em]">
          Not signed in
        </p>
        <p className="mt-1.5 text-[12.5px] text-ink-soft leading-snug">
          signing up saves your progress + streak.
        </p>
        <div className="mt-2.5 flex gap-2">
          <Button className="h-7 flex-1 px-2 text-[12px]">sign up</Button>
          <Button variant="outline" className="h-7 flex-1 px-2 text-[12px]">
            sign in
          </Button>
        </div>
      </div>
    </aside>
  );
}
