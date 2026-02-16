/* ──────────────────────────────────────────────
 *  FilterChip — selectable pill for filter options
 *
 *  Design Tokens:
 *    - Token-based spacing (px-4, py-2 = space-4, space-2)
 *    - Token-based radius (rounded-full)
 *    - Brand colors for selected state
 *    - Token-based transitions (duration-200)
 * ──────────────────────────────────────────────*/

import { cn } from "@/utils/cn";

export interface FilterChipProps {
  label: string;
  selected?: boolean;
  count?: number;
  onClick?: () => void;
  className?: string;
}

export function FilterChip({
  label,
  selected = false,
  count,
  onClick,
  className,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        // Base styles with token-based values
        "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium",
        "border transition-all duration-200 whitespace-nowrap cursor-pointer",
        // State-based styles
        selected
          ? "bg-brand text-white border-brand shadow-sm"
          : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50",
        className,
      )}
    >
      {label}
      {count !== undefined && (
        <span
          className={cn(
            "text-xs rounded-full px-1.5 min-w-[1.25rem] text-center",
            selected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
