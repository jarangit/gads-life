/**
 * QuickVerdictCard - Quick verdict section with quote and tags
 *
 * @token radius: rounded-4xl
 * @token color: white, gray
 */

import { cn } from "@/utils/cn";
import { VerdictTag } from "../atoms";

export interface QuickVerdictTagData {
  id: string;
  tag: string;
}

export interface QuickVerdictData {
  quote: string;
  description: string;
}

export interface QuickVerdictCardProps {
  /** Quick verdict data */
  quickVerdict: QuickVerdictData;
  /** Verdict tags */
  tags?: QuickVerdictTagData[];
  /** Container className */
  className?: string;
}

export function QuickVerdictCard({
  quickVerdict,
  tags = [],
  className,
}: QuickVerdictCardProps) {
  return (
    <div
      className={cn("bg-white rounded-4xl p-8 min-h-75", className)}
    >
      <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
        QUICK VERDICT
      </span>
      <h2 className="text-2xl font-bold text-gray-900 mt-4 whitespace-pre-line">
        &ldquo;{quickVerdict.quote}&rdquo;
      </h2>
      <p className="text-gray-600 mt-4 leading-relaxed">
        {quickVerdict.description}
      </p>
      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <VerdictTag key={tag.id} label={tag.tag} />
          ))}
        </div>
      )}
    </div>
  );
}
