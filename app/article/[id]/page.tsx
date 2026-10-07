import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.round(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.round(h / 24);
  return `${d}d ago`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return notFound();

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="pb-16">
      <header className="mx-auto max-w-[880px] px-5 lg:px-10 pt-6 lg:pt-10">
        <Link
          href="/"
          aria-label="Back to feed"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-accent transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M11 18l-6-6 6-6" />
          </svg>
          Back
        </Link>
        <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
          <span className="text-ink-faint">
            {article.readMinutes} min read
          </span>
          <span className="text-ink-faint">·</span>
          <span className="text-ink-faint">
            {timeAgo(article.publishedAt)}
          </span>
        </div>

        <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-tight mt-5">
          {article.headline}
        </h1>
        <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted">
          {article.summary}
        </p>

      </header>

      <figure className="mx-auto max-w-[1120px] px-5 lg:px-10 mt-8">
        <div className="relative aspect-[16/9] bg-rule overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </figure>

      <div className="mx-auto max-w-[880px] px-5 lg:px-10 mt-10">
        <div>
          <div className="font-serif text-[18px] md:text-[20px] leading-[1.7] text-ink space-y-6">
            <p className="first-letter:font-serif first-letter:text-[64px] first-letter:leading-[0.9] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-semibold">
              {article.body[0]}
            </p>
            {article.body.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        </div>
      </div>

      <section className="mx-auto max-w-[1360px] px-5 lg:px-10 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>
    </article>
  );
}
