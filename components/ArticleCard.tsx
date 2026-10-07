import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

export function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "lead" | "compact" | "side";
}) {
  const baseId = article.id.split("-p")[0];
  const href = `/article/${baseId}`;

  if (variant === "lead") {
    return (
      <Link
        href={href}
        className="card-hover group block surface overflow-hidden lg:row-span-2"
      >
        <div className="relative aspect-[16/10] bg-rule overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority
          />
        </div>
        <div className="p-6 lg:p-7">
          <h2 className="font-serif text-[30px] lg:text-[36px] leading-[1.08] tracking-tight text-ink">
            {article.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            {article.summary}
          </p>
          <p className="mt-6 text-[15px] font-medium text-ink-faint">
            {formatDate(article.publishedAt)}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "side") {
    return (
      <Link
        href={href}
        className="card-hover group flex surface overflow-hidden"
      >
        <div className="relative shrink-0 w-[140px] sm:w-[170px] self-stretch bg-rule overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 640px) 170px, 140px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="min-w-0 flex-1 p-4 flex flex-col">
          <h3 className="font-serif text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-ink line-clamp-3">
            {article.headline}
          </h3>
          <p className="mt-auto pt-3 text-[13px] font-medium text-ink-faint">
            {formatDate(article.publishedAt)}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="card-hover group flex gap-4 surface p-4"
      >
        <div className="relative shrink-0 w-24 h-24 bg-rule overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-medium text-ink-muted">
            {formatDate(article.publishedAt)}
          </p>
          <h3 className="mt-1.5 font-serif text-[17px] leading-tight text-ink line-clamp-3">
            {article.headline}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="card-hover group block surface overflow-hidden"
    >
      <div className="relative aspect-[16/10] bg-rule overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-[22px] leading-[1.15] tracking-tight text-ink">
          {article.headline}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted line-clamp-3">
          {article.summary}
        </p>
        <p className="mt-4 text-[14px] font-medium text-ink-faint">
          {formatDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
