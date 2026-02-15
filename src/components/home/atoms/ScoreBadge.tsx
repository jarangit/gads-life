import React from "react";

interface ScoreBadgeProps {
  score: string | number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  return (
    <span className="inline-block text-[11px] text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
      {score}/10
    </span>
  );
}
