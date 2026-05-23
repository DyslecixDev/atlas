import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EntryPage } from "@/components/entry-page";
import { entryLabel, getEntry, isAppendix, parts } from "@/lib/sections";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return parts.map((entry) => ({ id: entry.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getEntry(id);
  if (!entry || isAppendix(entry)) {
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
  if (!entry || isAppendix(entry)) {
    notFound();
  }

  return <EntryPage entry={entry} />;
}
