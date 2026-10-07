"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Article } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

type Props = {
  initial: Article[];
  initialCursor: number;
};

export function InfiniteFeed({ initial, initialCursor }: Props) {
  const [items, setItems] = useState<Article[]>(initial);
  const [cursor, setCursor] = useState<number>(initialCursor);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || done) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/feed?cursor=${cursor}`);
      const data: { items: Article[]; nextCursor: number } = await res.json();
      setItems((prev) => [...prev, ...data.items]);
      setCursor(data.nextCursor);
      if (data.nextCursor > 8) setDone(true);
    } finally {
      setLoading(false);
    }
  }, [cursor, loading, done]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "600px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadMore]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((a, i) => (
          <ArticleCard
            key={`${a.id}-${i}`}
            article={a}
            variant={i === 0 ? "default" : i % 11 === 10 ? "compact" : "default"}
          />
        ))}
      </div>
      <div
        ref={sentinelRef}
        className="h-24 flex items-center justify-center mt-10 text-[11px] uppercase tracking-[0.2em] text-ink-faint"
      >
        {done ? (
          <span>— End of feed —</span>
        ) : loading ? (
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
            Loading more stories
          </span>
        ) : (
          <span>Scroll for more</span>
        )}
      </div>
    </>
  );
}
