/**
 * KeyHighlightsCard - Key highlights (จุดเด่น) section
 *
 * @token radius: rounded-4xl, rounded-2xl
 * @token color: brand
 */

import { cn } from "@/utils/cn";
import { FiStar } from "react-icons/fi";
import { accentColors, iconBoxSizes, typography, radius } from "../tokens";

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
    <div className={cn("bg-brand-light rounded-4xl p-8 min-h-70", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} bg-brand/30 ${radius.xl} flex items-center justify-center`}>
          <FiStar className={`${typography.size.lg} text-brand-dark`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            KEY HIGHLIGHTS
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-gray-900`}>
            จุดเด่น
          </h2>
        </div>
      </div>
      <div className="space-y-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="flex items-start gap-3"
          >
            <FiStar className="text-brand-dark mt-1 shrink-0" />
            <p className={` text-gray-800`}>{highlight.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
