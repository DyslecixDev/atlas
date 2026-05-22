"use client";

import {
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Paperclip,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  type Entry,
  entryHref,
  tableOfContents,
  totalEntries,
} from "@/lib/sections";
import { cn } from "@/lib/utils";

function NavRow({ entry, active }: { entry: Entry; active: boolean }) {
  return (
    <Link
      href={entryHref(entry)}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center gap-2.5 border-l-2 px-2 py-1.5 transition-colors duration-300 ease-out",
        active
          ? "border-navy bg-post-blue/60"
          : "border-transparent hover:bg-paper",
      )}
    >
      <span className="w-4 shrink-0 font-mono text-[10px] text-ink-soft">
        {entry.id}
      </span>
      <span
        className={cn(
          "flex-1 truncate text-[13px] text-ink",
          active && "font-medium",
        )}
      >
        {entry.title}
      </span>
      <span className="font-mono text-[10px] text-ink-soft">
        {entry.chapters}
      </span>
      <ChevronRight className="size-3.5 text-ink-soft transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
    </Link>
  );
}

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
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  if (collapsed) {
    return (
      <aside className="ruled hidden h-full w-12 shrink-0 flex-col items-center overflow-hidden border-ink border-r bg-paper-2 py-4 transition-all duration-300 ease-out lg:flex">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => setCollapsed(false)}
          aria-label="Expand sidebar"
        >
          <PanelLeftOpen />
        </Button>
      </aside>
    );
  }

  return (
    <aside className="ruled hidden h-full w-67.5 shrink-0 flex-col gap-4 overflow-hidden border-ink border-r bg-paper-2 px-4 py-4 transition-all duration-300 ease-out lg:flex">
      <div className="relative shrink-0">
        <span className="washi washi-blue absolute -top-2 left-1 h-4 w-16 -rotate-6" />
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-bold font-title text-3xl text-ink leading-none">
                Atlas
              </span>
              <span className="font-mono text-[10px] text-ink-soft uppercase tracking-wide">
                public docs
              </span>
            </Link>
            <p className="mt-1.5 font-mono text-[10px] text-ink-soft uppercase tracking-[0.18em]">
              Field Manual · v0
            </p>
          </div>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setCollapsed(true)}
            aria-label="Collapse sidebar"
          >
            <PanelLeftClose />
          </Button>
        </div>
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
              "cursor-pointer border px-2.5 py-1 text-[12px] text-ink outline-none transition-all duration-300 ease-out focus-visible:ring-3 focus-visible:ring-ring/50 not-disabled:active:brightness-90 disabled:not-aria-busy:cursor-not-allowed disabled:opacity-50 aria-busy:cursor-progress",
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

      <div className="flex shrink-0 items-center px-0.5">
        <span className="font-mono text-[10px] text-ink-soft uppercase tracking-[0.18em]">
          Parts + Appendices
        </span>
      </div>

      <nav className="field-scroll -mt-1.5 flex min-h-0 flex-1 flex-col overflow-y-auto">
        {tableOfContents.map((entry) => (
          <NavRow
            key={entry.id}
            entry={entry}
            active={pathname === entryHref(entry)}
          />
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
