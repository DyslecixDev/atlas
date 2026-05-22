import { ArrowRight, StickyNote } from "lucide-react";

import { Stars } from "@/components/stars";
import { Button } from "@/components/ui/button";
import type { Chapter, ChapterAccent } from "@/lib/sections";
import { cn } from "@/lib/utils";

const accentBar: Record<ChapterAccent, string> = {
  blue: "bg-pen-blue",
  gold: "bg-gold",
  pink: "bg-tape-pink",
  red: "bg-pen-red",
};

/**
 * Sticky-note marker pinned to the card's corner. The full note is revealed on
 * hover, keyboard focus, or tap (focus-within) so the card never resizes and no
 * content is covered until the reader asks for it. The note rides in the
 * button's label for assistive tech; the floating copy is purely visual.
 */
function NoteMarker({ note }: { note: string }) {
  return (
    <div className="group/note absolute -top-2.5 -right-2.5 z-30">
      <button
        type="button"
        aria-label={`Note: ${note}`}
        className="lift-sm flex size-6 rotate-3 cursor-help items-center justify-center border border-ink bg-post-yellow text-ink outline-none transition-all duration-300 ease-out hover:bg-gold-hi focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <StickyNote className="size-3.5" aria-hidden="true" />
      </button>
      <span
        aria-hidden="true"
        className="lift pointer-events-none invisible absolute top-8 right-0 w-48 -rotate-1 border border-ink bg-post-yellow p-2.5 text-[11px] text-ink leading-snug opacity-0 transition-all duration-300 ease-out group-focus-within/note:visible group-focus-within/note:opacity-100 group-hover/note:visible group-hover/note:opacity-100"
      >
        {note}
      </span>
    </div>
  );
}

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const accent = chapter.accent ?? "gold";

  return (
    <article
      className={cn(
        "relative border border-ink bg-paper p-4 text-ink transition-shadow duration-300 ease-out",
        // The "current" treatment (tilt, lift, washi, filled button) marks the
        // reader's active chapter and will later follow the logged-in user.
        chapter.current ? "lift rotate-[-0.8deg]" : "lift-sm",
      )}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${accentBar[accent]}`}
      />
      {chapter.current && (
        <span className="washi washi-pink absolute -top-2 right-4 h-4 w-16 rotate-3" />
      )}
      {chapter.note && <NoteMarker note={chapter.note} />}

      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[12px] text-ink-soft">
          § {chapter.number}
        </span>
        <Stars rating={chapter.rating} />
      </div>

      <h3 className="mt-2 font-bold font-title text-2xl text-ink leading-tight">
        {chapter.title}
      </h3>
      <p className="mt-1.5 text-[13px] text-ink-soft leading-snug">
        {chapter.blurb}
      </p>

      <div className="mt-3.5 flex items-center justify-between">
        {chapter.current ? (
          <Button className="h-7 gap-1.5 px-3 text-[12px]">
            open
            <ArrowRight className="size-3.5" />
          </Button>
        ) : (
          <Button variant="outline" className="h-7 px-3 text-[12px]">
            open
          </Button>
        )}
        <Button
          variant="link"
          aria-label={`Bookmark ${chapter.title}`}
          className="h-auto p-0 font-mono text-[11px] text-ink-soft no-underline hover:text-ink"
        >
          bookmark
        </Button>
      </div>
    </article>
  );
}
