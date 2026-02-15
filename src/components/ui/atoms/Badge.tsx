import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  Badge – unified badge for the entire app
 *
 *  Variants:
 *    default   – neutral gray
 *    success   – green/brand
 *    info      – blue-ish brand
 *    warning   – yellow
 *    recommended – brand accent (แนะนำ)
 *    score     – gray with score display
 *    status    – configurable status badge
 * ───────────────────────────────────────────── */

const variantStyles = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-brand/10 text-brand-dark",
  info: "bg-brand/10 text-brand-dark",
  warning: "bg-yellow-100 text-yellow-800",
  recommended: "bg-brand/10 text-brand",
  score: "bg-gray-100 text-gray-500",
  status: "",
} as const;

const sizeStyles = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
} as const;

export type BadgeVariant = keyof typeof variantStyles;
export type BadgeSize = keyof typeof sizeStyles;

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ── Convenience wrappers ────────────────────── */

export function RecommendedBadge({ className }: { className?: string }) {
  return (
    <Badge variant="recommended" size="xs" className={className}>
      แนะนำ
    </Badge>
  );
}

export interface ScoreBadgeProps {
  score: string | number;
  max?: number;
  className?: string;
}

export function ScoreBadge({ score, max = 10, className }: ScoreBadgeProps) {
  return (
    <Badge variant="score" size="xs" className={className}>
      {score}/{max}
    </Badge>
  );
}
