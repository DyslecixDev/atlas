import { cn } from "@/lib/utils";

/**
 * Hand-drawn wavy underline. Color comes from `currentColor` (set a text
 * color), width/rotation/offset from `className` so it can sit askew under
 * just part of a heading.
 */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M1 5 Q8 1 15 5 T29 5 T43 5 T57 5 T71 5 T85 5 T99 5 T119 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
