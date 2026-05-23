import type { CSSProperties } from "react";

/**
 * Decorative colors reshuffle once a day, identically for every visitor, by
 * seeding from the UTC day number. Card accent bars are randomized independently
 * per card via accentColor(); washi tapes share a daily palette exposed as CSS
 * custom properties in the root layout (revalidated every 24h). It is computed
 * server-side, so there is no client work, no flash, and no hydration mismatch.
 */

const ACCENT_POOL = [
  "var(--pen-blue)",
  "var(--gold)",
  "var(--tape-pink)",
  "var(--pen-red)",
] as const;

const WASHI_POOL = [
  "var(--tape-blue)",
  "var(--tape-pink)",
  "var(--tape-kraft)",
] as const;

/** Small deterministic PRNG (mulberry32) so the same day yields the same shuffle. */
function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher-Yates shuffle driven by `rand`, returning a new array. */
function shuffle<T>(items: readonly T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i] as T;
    out[i] = out[j] as T;
    out[j] = tmp;
  }
  return out;
}

/**
 * Seed for the shuffle. Normally the UTC day number, so the palette changes once
 * a day. Set PALETTE_ROTATE=reload (e.g. in .env.local, then restart the dev
 * server) to reseed on every render instead: in development pages re-render per
 * request, so the colors reshuffle on each page reload for quick visual testing.
 */
function paletteSeed(): number {
  if (process.env.PALETTE_ROTATE === "reload") {
    return Math.floor(Math.random() * 0x7fffffff);
  }
  return Math.floor(Date.now() / 86_400_000);
}

/** FNV-1a hash so each card key seeds the PRNG to its own value. */
function hashKey(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h = Math.imul(h ^ key.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

/**
 * Accent color for a single card, randomized independently of every other card:
 * each `key` varies on its own and the whole set reshuffles daily (or per render
 * with PALETTE_ROTATE=reload). Two cards are never locked to the same color.
 */
export function accentColor(key: string): string {
  const rand = mulberry32((paletteSeed() ^ hashKey(key)) >>> 0);
  return ACCENT_POOL[Math.floor(rand() * ACCENT_POOL.length)] as string;
}

/** CSS custom properties for today's shared washi tape palette. */
export function dailyPaletteStyle(): CSSProperties {
  const washis = shuffle(WASHI_POOL, mulberry32(paletteSeed() + 0x9e3779b9));

  return {
    "--washi-0": washis[0],
    "--washi-1": washis[1],
    "--washi-2": washis[2],
  } as CSSProperties;
}
