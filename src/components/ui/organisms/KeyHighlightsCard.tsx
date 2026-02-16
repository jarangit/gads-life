/**
 * KeyHighlightsCard - Key highlights (จุดเด่น) section
 *
 * @token radius: rounded-4xl, rounded-2xl
 * @token color: brand
 */

import { cn } from "@/utils/cn";

export interface HighlightData {
  id: string;
  content: string;
}

export interface KeyHighlightsCardProps {
  /** Highlight items */
  highlights: HighlightData[];
  /** Container className */
  className?: string;
}

export function KeyHighlightsCard({
  highlights,
  className,
}: KeyHighlightsCardProps) {
  return (
    <div className={cn("bg-brand rounded-4xl p-8 min-h-70", className)}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-900 text-xs font-semibold tracking-wider uppercase">
          จุดเด่น
        </span>
        <span className="text-green-900 text-xs">KEY HIGHLIGHTS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-white/50 backdrop-blur rounded-2xl p-4"
          >
            <div className="text-3xl mb-2">✨</div>
            <p className="font-bold text-black">{highlight.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
