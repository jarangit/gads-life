import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  SectionHeader – section title with optional
 *  "see more" link on the right
 *
 *  Design Tokens:
 *    - Token-based typography sizes (sm/md/lg)
 *    - Token-based spacing (gap-2, mb-5)
 *    - Brand color for hover states
 * ───────────────────────────────────────────── */

export interface SectionHeaderProps {
  /** Left icon (optional) */
  icon?: React.ReactNode;
  title: string;
  /** "See more" link destination */
  linkHref?: string;
  linkText?: string;
  /** Title size variant */
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Token-based typography sizes
const sizeStyles = {
  sm: "text-base",   // font-size-base (16px)
  md: "text-lg",     // font-size-lg (18px)
  lg: "text-2xl",    // font-size-2xl (24px)
} as const;

export function SectionHeader({
  icon,
  title,
  linkHref,
  linkText,
  size = "md",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-5", className)}>
      <div className="flex items-center gap-2">
        {icon}
        <h2 className={cn("font-bold text-gray-900", sizeStyles[size])}>
          {title}
        </h2>
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors"
        >
          {linkText} <FiArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}
