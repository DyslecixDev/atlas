import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partsCount, totalEntries } from "@/lib/sections";

function SampleEntry() {
  return (
    <div className="lift hidden w-52 rotate-[2.5deg] border border-ink bg-paper p-3.5 text-ink lg:absolute lg:top-8 lg:right-8 lg:block">
      <span className="washi washi-kraft absolute -top-2.5 left-1/2 h-4 w-20 -translate-x-1/2 -rotate-3" />
      <p className="font-mono text-[9px] text-ink-soft uppercase tracking-[0.18em]">
        Sample entry
      </p>
      <p className="mt-1 font-bold font-title text-2xl text-navy leading-none">
        TanStack Form
      </p>
      <div className="mt-1.5 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="size-3 fill-gold-hi text-gold-deep" />
        ))}
      </div>
      <p className="mt-2 text-[11px] text-ink-soft leading-snug">
        default forms library · headless · zod adapter. Lives in §4.7.
      </p>
      <button
        type="button"
        className="mt-2.5 inline-flex items-center gap-1 font-mono text-[10px] text-navy hover:underline"
      >
        open →
      </button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border border-ink bg-navy px-6 py-7 text-paper sm:px-9 sm:py-9">
      <span className="pointer-events-none absolute inset-2.5 border border-paper/20" />
      <p className="font-mono text-[10px] text-post-blue uppercase tracking-[0.22em]">
        Field Manual · v3 · Free to read
      </p>
      <h1 className="mt-3 max-w-xl font-bold font-title text-5xl leading-[0.95] sm:text-6xl">
        an opinionated map
        <br />
        of web dev.
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-paper/80 leading-snug">
        {totalEntries} entries across {partsCount} Parts — from{" "}
        <em className="text-paper italic">how to use this guide</em> through
        shipping a full-stack app with Claude Code. No paywall, no sign-up wall.
        Bookmark any page.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button className="h-9 gap-1.5 border border-ink bg-post-yellow px-4 text-[14px] text-ink hover:bg-gold-hi">
          start at 01
          <ArrowRight className="size-4" />
        </Button>
        <Button className="h-9 border border-paper/30 bg-navy-deep px-4 text-[14px] text-paper hover:bg-navy-deep/80">
          browse all {totalEntries}
        </Button>
        <span className="font-mono text-[11px] text-paper/55">
          or jump to a section ↓
        </span>
      </div>
      <SampleEntry />
    </section>
  );
}
