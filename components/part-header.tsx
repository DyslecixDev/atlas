import { type Entry, entryLabel } from "@/lib/sections";

export function PartHeader({ entry }: { entry: Entry }) {
  return (
    <header>
      <span className="washi washi-kraft block h-5 w-40 -rotate-1" />
      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.2em]">
          {entryLabel(entry)}
        </span>
        <h1 className="font-bold font-title text-5xl text-ink leading-none sm:text-6xl">
          {entry.title}
        </h1>
      </div>
      {entry.summary && (
        <p className="mt-4 max-w-3xl text-[15px] text-ink-soft leading-snug">
          {entry.summary}
        </p>
      )}
    </header>
  );
}
