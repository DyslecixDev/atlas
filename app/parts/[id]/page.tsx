import { Star } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChapterCard } from "@/components/chapter-card";
import { OptionalBanner } from "@/components/optional-banner";
import { PartHeader } from "@/components/part-header";
import { SiteSidebar } from "@/components/site-sidebar";
import { TopBar } from "@/components/top-bar";
import {
  entryLabel,
  getEntry,
  isCurrentChapter,
  tableOfContents,
} from "@/lib/sections";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return tableOfContents.map((entry) => ({ id: entry.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getEntry(id);
  if (!entry) {
    return { title: "Not found — Atlas" };
  }
  return {
    title: `${entryLabel(entry)} · ${entry.title} — Atlas`,
    description: entry.summary,
  };
}

export default async function PartPage({ params }: PageProps) {
  const { id } = await params;
  const entry = getEntry(id);
  if (!entry) {
    notFound();
  }

  return (
    <div className="flex h-full min-h-0 flex-1 overflow-hidden border border-ink bg-paper">
      <SiteSidebar />
      <div className="field-scroll flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <TopBar
          crumbs={[
            { label: "Atlas", href: "/" },
            { label: `${entry.id} ${entry.title}` },
          ]}
        />
        <main className="flex flex-1 flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8">
          <OptionalBanner />
          <PartHeader entry={entry} />

          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border border-ink bg-paper-2 px-4 py-2.5">
              <span className="flex items-center gap-2 font-mono text-[11px] text-ink-soft">
                <span className="uppercase tracking-[0.16em]">Chapter</span>
                <Star className="size-3 fill-gold-hi text-gold-deep" />
                <span>rating = how essential</span>
              </span>
              <span className="font-mono text-[11px] text-ink-soft">
                sign in to see your % cleared per chapter
              </span>
            </div>

            {entry.chapterList ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {entry.chapterList.map((chapter) => (
                  <ChapterCard
                    key={chapter.number}
                    chapter={chapter}
                    current={isCurrentChapter(chapter)}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-ink border-dashed bg-paper-2 px-6 py-12 text-center">
                <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.18em]">
                  Chapters coming soon
                </p>
                <p className="mt-2 text-[14px] text-ink-soft">
                  The {entry.chapters} chapters of this entry are being written.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
