import { cn } from "@/utils/cn";
import { Badge } from "./Badge";
import type { BadgeSize } from "./Badge";
import { activityCategoryColors } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  CategoryTag – colored pill badge per category
 *  Composes Badge atom for consistent sizing
 * ───────────────────────────────────────────── */

export type CategoryTagSize = "xs" | "sm";

export interface CategoryTagProps {
  category: string;
  size?: CategoryTagSize;
  className?: string;
}

export function CategoryTag({
  category,
  size = "xs",
  className,
}: CategoryTagProps) {
  return (
    <Badge
      variant="status"
      size={size as BadgeSize}
      className={cn(
        activityCategoryColors[category] || "bg-gray-100 text-gray-700",
        className,
      )}
    >
      {category}
    </Badge>
  );
}
