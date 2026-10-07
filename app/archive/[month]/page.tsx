import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

const monthArchive: Record<string, { label: string; items: typeof articles }> = {
  "october-2026": { label: "October 2026", items: articles.slice(0, 6) },
  "september-2026": { label: "September 2026", items: articles.slice(2, 8) },
  "august-2026": { label: "August 2026", items: articles.slice(0, 8) },
};

export function generateStaticParams() {
  return Object.keys(monthArchive).map((month) => ({ month }));
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ month: string }>;
}) {
  const { month } = await params;
  const archive = monthArchive[month];
  if (!archive) return notFound();

  return (
    <div className="mx-auto max-w-[1360px] px-5 lg:px-10 pt-8 lg:pt-12 pb-16">
      <h1 className="mb-10 font-serif text-[40px] lg:text-[56px] leading-[1.02] tracking-tight text-ink">
        {archive.label}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {archive.items.map((a, i) => (
          <ArticleCard key={`${month}-${a.id}-${i}`} article={a} />
        ))}
      </div>
    </div>
  );
}
