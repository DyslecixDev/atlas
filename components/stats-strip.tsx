import { totalEntries } from "@/lib/sections";
import { cn } from "@/lib/utils";

const stats = [
  { value: String(totalEntries), label: "entries · all readable" },
  { value: "19 + 3", label: "Parts + Appendices" },
  { value: "~6 mo", label: "at 1-2 hr / day" },
  { value: "$0", label: "account optional · no ads" },
];

export function StatsStrip() {
  return (
    <section className="grid grid-cols-2 gap-y-4 border border-ink bg-paper-2 px-5 py-4 sm:grid-cols-4 sm:gap-y-0">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col gap-0.5",
            index % 2 === 1 &&
              "border-ink/25 border-l pl-5 sm:border-l-0 sm:pl-0",
            index > 0 && "sm:border-ink/25 sm:border-l sm:pl-5",
          )}
        >
          <span className="font-bold font-title text-3xl text-ink leading-none">
            {stat.value}
          </span>
          <span className="font-mono text-[10px] text-ink-soft">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
}
