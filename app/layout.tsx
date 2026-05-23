import type { Metadata } from "next";
import { Caveat, JetBrains_Mono, Patrick_Hand } from "next/font/google";

import { dailyPaletteStyle } from "@/lib/daily-palette";

import "./globals.css";

// Regenerate daily so the decorative palette in dailyPaletteStyle() reshuffles.
export const revalidate = 86400;

const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Atlas — an opinionated map of web dev",
  description:
    "A field manual for becoming a solo, full-stack web developer: 320 entries across 19 Parts, free to read with no paywall and no sign-up wall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${patrickHand.variable} ${caveat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className="flex h-dvh flex-col overflow-hidden p-1.5"
        style={dailyPaletteStyle()}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
