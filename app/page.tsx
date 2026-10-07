import Link from "next/link";
import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

const YOUTUBE_PLAYLIST_ID = "PLMdV59IYMLTo";

const monthGroups = [
  { label: "October 2026", slug: "october-2026", items: articles.slice(0, 3) },
  { label: "September 2026", slug: "september-2026", items: articles.slice(3, 6) },
  { label: "August 2026", slug: "august-2026", items: articles.slice(5, 8) },
];

export default function Home() {
  const lead = articles[0];
  const sideStories = articles.slice(1, 5);
  const blindspots = articles.filter((a) => a.blindspot).slice(0, 3);

  return (
    <div className="mx-auto max-w-[1360px] px-5 lg:px-10">
      <section className="pt-8 lg:pt-12 pb-10 border-b rule">
        <div className="mb-6">
          <h1 className="font-serif text-[36px] lg:text-[52px] leading-[1.02] tracking-tight">
            Latest News
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ArticleCard article={lead} variant="lead" />
          </div>
          <div className="flex flex-col gap-4">
            {sideStories.map((a) => (
              <ArticleCard key={a.id} article={a} variant="side" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 border-b rule">
        <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-serif text-[28px] tracking-tight text-ink">
              Watch · ChallanPay on YouTube
            </h2>
            <p className="mt-1 text-[13px] text-ink-muted">
              Explainers, road-safety reports, and challan how-tos.
            </p>
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full border rule bg-bg-elev text-[13px] font-medium text-ink hover:bg-tag transition-colors"
          >
            Open playlist
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
        <div className="surface-flat overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}&rel=0`}
              title="ChallanPay YouTube playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-5">
          <h2 className="font-serif text-[24px] text-ink">
            This Week
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blindspots.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>

      {monthGroups.map((group) => (
        <section key={group.label} className="py-10">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-serif text-[28px] tracking-tight text-ink shrink-0">
              {group.label}
            </h2>
            <span className="flex-1 h-px bg-ink-faint/40" />
            <Link
              href={`/archive/${group.slug}`}
              className="shrink-0 inline-flex items-center gap-2 h-9 px-4 rounded-full border rule bg-bg-elev text-[13px] font-medium text-ink hover:bg-tag transition-colors"
            >
              View all
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((a) => (
              <ArticleCard key={`${group.label}-${a.id}`} article={a} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
