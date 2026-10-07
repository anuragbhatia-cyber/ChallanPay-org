type Video = {
  id: string;
  title: string;
  publishedAt: string;
};

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

async function fetchPlaylist(playlistId: string): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    return entries
      .map((m) => {
        const block = m[1];
        const id = block.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
        const title = decodeEntities(
          block.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "",
        );
        const publishedAt =
          block.match(/<published>(.*?)<\/published>/)?.[1] ?? "";
        return { id, title, publishedAt };
      })
      .filter((v) => v.id);
  } catch {
    return [];
  }
}

export async function YouTubePlaylist({
  playlistId,
}: {
  playlistId: string;
}) {
  const videos = await fetchPlaylist(playlistId);

  if (videos.length === 0) {
    return (
      <div className="surface-flat overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0`}
            title="YouTube playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((v) => (
        <a
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.id}&list=${playlistId}`}
          target="_blank"
          rel="noreferrer"
          className="group block surface-flat overflow-hidden card-hover"
        >
          <div className="relative aspect-video overflow-hidden bg-tag">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt={v.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/75 shadow-lg transition-transform duration-200 group-hover:scale-110">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-[14px] font-medium leading-snug text-ink line-clamp-2">
              {v.title}
            </h3>
            <p className="mt-2 text-[12px] text-ink-muted">
              {new Date(v.publishedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
