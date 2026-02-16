/**
 * ScoreCard - Overall score card with ratings
 *
 * @token color: black, brand
 * @token radius: rounded-4xl
 */

import { cn } from "@/utils/cn";
import { ScoreBar } from "../atoms";

export interface RatingData {
  id: string;
  subCategory: string;
  score: number;
}

export interface ScoreCardProps {
  /** Overall score value */
  overallScore: number;
  /** Rating items */
  ratings?: RatingData[];
  /** Whether to show recommended badge */
  isRecommended?: boolean;
  /** Container className */
  className?: string;
}

export function ScoreCard({
  overallScore,
  ratings = [],
  isRecommended = false,
  className,
}: ScoreCardProps) {
  return (
    <div
      className={cn(
        "bg-black rounded-4xl p-8 text-white relative overflow-hidden min-h-75",
        className
      )}
    >
      <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
        OVERALL SCORE
      </span>
      <div className="mt-4">
        <span className="text-8xl font-bold text-brand">{overallScore}</span>
        <span className="text-2xl text-gray-400">/10</span>
      </div>
      <div className="mt-6 space-y-2">
        {ratings.map((rating) => (
          <div
            key={rating.id}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-400">{rating.subCategory}</span>
            <ScoreBar
              score={rating.score}
              maxScore={5}
              activeClass="bg-brand"
              inactiveClass="bg-gray-700"
            />
          </div>
        ))}
      </div>
      {isRecommended && (
        <div className="absolute bottom-6 right-6">
          <span className="bg-brand text-black text-xs font-bold px-3 py-1 rounded-full">
            RECOMMENDED
          </span>
        </div>
      )}
    </div>
  );
}
