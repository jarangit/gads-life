import React from "react";
import { Badge } from "@/components/ui";

interface ScoreBadgeProps {
  score: string | number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  return (
    <Badge variant="score" size="xs">
      {score}/10
    </Badge>
  );
}
