/* ──────── Category Badge Atom ──────── */

import { cn } from "@/utils/cn";
import { getCategoryTone } from "@/app/news/categoryStyles";

export interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const tone = getCategoryTone(category);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border",
        tone.bg,
        tone.text,
        tone.border,
        className
      )}
    >
      {category}
    </span>
  );
}
