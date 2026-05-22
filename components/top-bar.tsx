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
          className="flex items-center gap-0.5 font-mono text-[11px] text-ink-soft transition-colors duration-300 ease-out hover:text-ink"
        >
          github
          <ArrowUpRight className="size-3" />
        </a>
        <Button variant="quiet" className="h-7 px-3 font-mono text-[11px]">
          sign in
        </Button>
        <Button className="h-7 px-3 text-[12px]">sign up — free</Button>
      </nav>
    </header>
  );
}
