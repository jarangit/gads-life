import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  Card – flexible container surface
 *
 *  Design Tokens:
 *    - Token-based border-radius (radius prop)
 *    - Consistent padding scale
 *    - Shadow tokens for elevation
 *    - Brand colors for highlight states
 *
 *  Variants:
 *    default   – white surface
 *    highlight – brand-accented border
 *    muted     – subtle gray background
 *    dark      – inverted colors
 *    glass     – frosted glass effect
 *    gradient  – warm gradient background
 * ───────────────────────────────────────────── */

const variantStyles = {
  default: "bg-white",
  highlight: "bg-brand/5 border-2 border-brand",
  muted: "bg-gray-50/80",
  dark: "bg-black text-white",
  glass: "bg-white/90 backdrop-blur-sm",
  gradient:
    "bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80",
} as const;

export type CardVariant = keyof typeof variantStyles;

export interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  /** Any Tailwind border-radius class, e.g. "rounded-2xl rounded-tl-3xl" */
  radius?: string;
  padding?: string;
  className?: string;
  /** Forward hover behaviour */
  hoverable?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  variant = "default",
  radius = "rounded-2xl",
  padding = "p-6",
  className,
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        radius,
        padding,
        variantStyles[variant],
        hoverable &&
          "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}
