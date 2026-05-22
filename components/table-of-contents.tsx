import { ArrowRight, Paperclip } from "lucide-react";

import { Squiggle } from "@/components/squiggle";
import { Button } from "@/components/ui/button";
import {
  appendicesCount,
  chapterPreview,
  type Entry,
  partsCount,
  tableOfContents,
} from "@/lib/sections";
import { cn } from "@/lib/utils";

function TocRow({ entry, active }: { entry: Entry; active: boolean }) {
  return (
    <li
      className={cn(
        "relative border border-ink px-3.5 py-3 transition-colors",
        active
          ? "lift-sm rotate-[-0.8deg] bg-post-yellow"
          : "bg-paper-2 hover:bg-paper",
      )}
    >
      {active && (
        <Paperclip className="absolute -top-3 -left-1 size-6 rotate-[-18deg] text-ink/70" />
      )}
      <div className="flex items-center gap-3.5">
        <span className="w-7 shrink-0 font-mono text-ink-soft text-lg">
          {entry.id}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold font-title text-ink text-xl leading-tight">
            {entry.title}
          </p>
          <p className="mt-0.5 truncate font-mono text-[10.5px] text-ink-soft">
            {chapterPreview(entry)}
          </p>
        </div>
        <span className="hidden whitespace-nowrap font-mono text-[10px] text-ink-soft sm:block">
          {entry.chapters} ch
        </span>
        {active ? (
          <Button className="h-7 gap-1 px-3 text-[12px]">
            start
            <ArrowRight className="size-3.5" />
          </Button>
        ) : (
          <Button variant="outline" className="h-7 px-3 text-[12px]">
            open
          </Button>
        )}
      </div>
    </li>
  );
}

export function TableOfContents() {
  return (
    <section>
      <div className="flex items-end justify-between gap-3">
        <h2 className="relative inline-block pb-2 font-bold font-title text-3xl text-ink leading-none">
          table of contents
          <Squiggle className="absolute bottom-0 left-2 h-2 w-3/5 rotate-[-1.5deg] text-pen-red" />
        </h2>
        <span className="whitespace-nowrap font-mono text-[11px] text-ink-soft">
          {tableOfContents.length} entries · {partsCount} Parts +{" "}
          {appendicesCount} Appendices
        </span>
      </div>
      <ul className="mt-5 flex flex-col gap-2.5">
        {tableOfContents.map((entry, index) => (
          <TocRow key={entry.id} entry={entry} active={index === 0} />
        ))}
      </ul>
    </section>
  );
}
