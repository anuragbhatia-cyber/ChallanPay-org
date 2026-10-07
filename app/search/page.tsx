import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const lower = query.toLowerCase();

  const results = query
    ? articles.filter((a) => {
        const haystack = [
          a.headline,
          a.summary,
          a.category,
          ...a.tags,
          ...a.body,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(lower);
      })
    : [];

  return (
    <div className="mx-auto max-w-[1360px] px-5 lg:px-10 pt-8 lg:pt-12 pb-16">
      <h1 className="mb-2 font-serif text-[40px] lg:text-[56px] leading-[1.02] tracking-tight text-ink">
        {query ? `Results for “${query}”` : "Search"}
      </h1>
      {query && (
        <p className="mb-10 text-[14px] text-ink-muted">
          {results.length} {results.length === 1 ? "story" : "stories"} found
        </p>
      )}

      {query && results.length === 0 && (
        <p className="mt-6 text-[16px] text-ink-muted">
          No stories match your search. Try a different keyword.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
