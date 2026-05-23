"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "atlas:optional-banner-dismissed";

/**
 * Slim "reading without an account" notice. Free to read is the whole pitch, so
 * the banner is dismissible and the choice sticks via localStorage. It renders
 * by default so first-time readers see no layout shift.
 */
export function OptionalBanner() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setDismissed(true);
    }
  }, []);

  if (dismissed) {
    return null;
  }

  function dismiss() {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  return (
    <div className="flex items-center gap-3 border border-ink bg-post-blue px-4 py-2.5 text-ink">
      <span className="shrink-0 bg-navy-deep px-2 py-1 font-mono text-[10px] text-paper uppercase tracking-[0.16em]">
        Optional
      </span>
      <p className="flex-1 text-[13px] leading-snug">
        reading without an account.{" "}
        <span className="font-medium underline underline-offset-2">
          sign up
        </span>{" "}
        (free) to save what you've covered, keep a streak, and earn stickers.
      </p>
      <Button
        variant="ghost"
        onClick={dismiss}
        aria-label="Dismiss notice"
        className="h-7 shrink-0 gap-1 px-2 font-mono text-[11px] text-ink-soft hover:text-ink"
      >
        <X className="size-3.5" />
        dismiss
      </Button>
    </div>
  );
}
