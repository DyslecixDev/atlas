import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export type Crumb = { label: string; href?: string };

function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
      {crumbs.map((crumb, index) => {
        const last = index === crumbs.length - 1;
        return (
          <span key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-ink-soft">
                ›
              </span>
            )}
            {crumb.href && !last ? (
              <Link
                href={crumb.href}
                className="font-mono text-[12px] text-ink-soft tracking-wide transition-colors duration-300 ease-out hover:text-ink"
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                aria-current={last ? "page" : undefined}
                className="font-mono text-[12px] text-ink tracking-wide"
              >
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function TopBar({ crumbs }: { crumbs?: Crumb[] }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-ink border-b bg-paper px-5 py-3 sm:px-8">
      {crumbs ? (
        <Breadcrumbs crumbs={crumbs} />
      ) : (
        <span className="font-mono text-[12px] text-ink tracking-wide">
          Atlas
        </span>
      )}
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
