import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  Bone – the building block for all skeletons
 *
 *  Design Tokens:
 *    - Uses gray-200 for skeleton color
 *    - Token-based radius (rounded-2xl = radius-2xl)
 *    - Consistent animation timing
 * ───────────────────────────────────────────── */

export interface BoneProps {
  className?: string;
  /** Border radius token */
  radius?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const radiusStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

export function Bone({ className, radius = "2xl" }: BoneProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200",
        radiusStyles[radius],
        className,
      )}
      aria-hidden
    />
  );
}
