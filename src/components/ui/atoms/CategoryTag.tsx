import { cn } from "@/utils/cn";
import { activityCategoryColors } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  CategoryTag – colored pill badge per category
 * ───────────────────────────────────────────── */

export interface CategoryTagProps {
  category: string;
  size?: "xs" | "sm";
  className?: string;
}

export function CategoryTag({
  category,
  size = "xs",
  className,
}: CategoryTagProps) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[11px]",
    sm: "px-2.5 py-0.5 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        sizeStyles[size],
        activityCategoryColors[category] || "bg-gray-100 text-gray-700",
        className
      )}
    >
      {category}
    </span>
  );
}
