import type { BiasBreakdown } from "@/lib/articles";

export function BiasBar({
  bias,
  showLabels = false,
  size = "md",
}: {
  bias: BiasBreakdown;
  showLabels?: boolean;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? "h-[5px]" : "h-[6px]";
  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-ink-faint mb-1.5">
          <span>Left {bias.left}%</span>
          <span>Center {bias.center}%</span>
          <span>Right {bias.right}%</span>
        </div>
      )}
      <div className={`flex w-full gap-[2px] ${h}`}>
        <div
          className="bg-left rounded-l-[2px]"
          style={{ width: `${bias.left}%` }}
          aria-label={`Left ${bias.left}%`}
        />
        <div
          className="bg-center"
          style={{ width: `${bias.center}%` }}
          aria-label={`Center ${bias.center}%`}
        />
        <div
          className="bg-right rounded-r-[2px]"
          style={{ width: `${bias.right}%` }}
          aria-label={`Right ${bias.right}%`}
        />
      </div>
    </div>
  );
}
