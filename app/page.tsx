import { Hero } from "@/components/hero";
import { ProgressAside } from "@/components/progress-aside";
import { SiteSidebar } from "@/components/site-sidebar";
import { StatsStrip } from "@/components/stats-strip";
import { TableOfContents } from "@/components/table-of-contents";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <div className="flex h-full min-h-0 flex-1 overflow-hidden border border-ink bg-paper">
      <SiteSidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <TopBar />
        <main className="flex flex-1 flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8">
          <Hero />
          <StatsStrip />
          <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
            <TableOfContents />
            <ProgressAside />
          </div>
        </main>
      </div>
    </div>
  );
}
