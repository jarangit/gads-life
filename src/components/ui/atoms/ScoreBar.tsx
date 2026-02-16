/**
 * ScoreBar - Visual rating bar with filled/empty segments
 *
 * @token spacing: gap-1
 * @token radius: rounded-full
 */

import { cn } from "@/utils/cn";

export interface ScoreBarProps {
  /** Current score (1-5) */
  score: number;
  /** Maximum score (default 5) */
  maxScore?: number;
  /** Filled segment color */
  activeClass?: string;
  /** Empty segment color */
  inactiveClass?: string;
  className?: string;
}

export function ScoreBar({
  score,
  maxScore = 5,
  activeClass = "bg-brand",
  inactiveClass = "bg-gray-700",
  className,
}: ScoreBarProps) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: maxScore }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-6 h-2 rounded-full",
            i < score ? activeClass : inactiveClass
          )}
        />
      ))}
    </div>
  );
}
