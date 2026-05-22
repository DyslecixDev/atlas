import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Gold star rating out of five. The label is read by assistive tech so the
 * "rating = how essential" legend still makes sense without sight.
 */
export function Stars({
  rating,
  total = 5,
  className,
}: {
  rating: number;
  total?: number;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`essential rating: ${rating} of ${total}`}
      className={cn("flex items-center gap-0.5", className)}
    >
      {Array.from({ length: total }, (_, i) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length static list
          key={i}
          aria-hidden="true"
          className={cn(
            "size-3.5",
            i < rating
              ? "fill-gold-hi text-gold-deep"
              : "fill-transparent text-ink-soft/45",
          )}
        />
      ))}
    </span>
  );
}
