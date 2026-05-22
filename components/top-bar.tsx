import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-ink border-b bg-paper px-5 py-3 sm:px-8">
      <span className="font-mono text-[12px] text-ink tracking-wide">
        Atlas
      </span>
      <nav className="flex items-center gap-4">
        <a
          href="https://github.com/DyslecixDev/atlas"
          className="flex items-center gap-0.5 font-mono text-[11px] text-ink-soft transition-colors hover:text-ink"
        >
          github
          <ArrowUpRight className="size-3" />
        </a>
        <button
          type="button"
          className="border border-ink/30 px-2 py-1 font-mono text-[11px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
        >
          sign in
        </button>
        <Button className="h-7 bg-navy-deep px-3 text-[12px] text-paper hover:bg-navy">
          sign up — free
        </Button>
      </nav>
    </header>
  );
}
