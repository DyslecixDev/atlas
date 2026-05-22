import { ArrowRight, Check } from "lucide-react";

import { Squiggle } from "@/components/squiggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const perks = [
  { label: "read every entry", tier: "free", included: true },
  { label: "search & glossary (⌘K)", tier: "free", included: true },
  { label: "try every quiz", tier: "free", included: true },
  { label: "mark known / mastered", tier: "account", included: false },
  { label: "streak + sticker collection", tier: "account", included: false },
];

export function ProgressAside() {
  return (
    <aside className="flex flex-col gap-5 self-start lg:sticky lg:top-18">
      <div className="lift border border-ink bg-post-yellow p-5 text-ink">
        <p className="font-mono text-[10px] text-ink/60 uppercase tracking-[0.18em]">
          Optional · Free
        </p>
        <h3 className="mt-1 font-bold font-title text-3xl leading-none">
          save your progress
        </h3>
        <p className="mt-2.5 text-[13.5px] text-ink/80 leading-snug">
          everything in atlas is free to read — signing up just remembers what
          you've covered, your streak, and the stickers you earn.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Button className="h-9 flex-1 gap-1.5 px-3 text-[13px]">
            create a free account
            <ArrowRight className="size-3.5" />
          </Button>
          <Button variant="outline" className="h-9 px-3 text-[13px]">
            sign in
          </Button>
        </div>
        <p className="mt-2.5 font-mono text-[10px] text-ink/60">
          no email required · oauth or magic link
        </p>
      </div>

      <div className="border border-ink bg-paper-2 p-5">
        <h3 className="relative inline-block pb-2 font-bold font-title text-2xl text-ink leading-none">
          what an account adds
          <Squiggle className="absolute bottom-0 left-2 h-2 w-7/12 rotate-[-1.5deg] text-gold-deep" />
        </h3>
        <ul className="mt-4 flex flex-col gap-2.5">
          {perks.map((perk) => (
            <li key={perk.label} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex size-4 shrink-0 items-center justify-center border border-ink",
                  perk.included
                    ? "bg-navy-deep text-paper"
                    : "bg-paper text-transparent",
                )}
              >
                <Check className="size-3" />
              </span>
              <span className="flex-1 text-[13px] text-ink">{perk.label}</span>
              <span
                className={cn(
                  "font-mono text-[10px]",
                  perk.tier === "free" ? "text-ink-soft" : "text-ink-soft/60",
                )}
              >
                {perk.tier}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
