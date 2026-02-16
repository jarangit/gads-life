/**
 * RatingItem - A single rating row with label and score bar
 *
 * @token spacing: justify-between
 */

import { cn } from "@/utils/cn";
import { ScoreBar, type ScoreBarProps } from "@/components/ui/atoms/ScoreBar";

export interface RatingItemProps extends Omit<ScoreBarProps, "score"> {
  /** Rating label (e.g. "Performance") */
  label: string;
  /** Score value */
  score: number;
  /** Label text color */
  labelClass?: string;
}

export function RatingItem({
  label,
  score,
  labelClass = "text-gray-400",
  className,
  ...scoreBarProps
}: RatingItemProps) {
  return (
    <div className={cn("flex items-center justify-between text-sm", className)}>
      <span className={labelClass}>{label}</span>
      <ScoreBar score={score} {...scoreBarProps} />
    </div>
  );
}
