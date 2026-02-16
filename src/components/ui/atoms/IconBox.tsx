import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  IconBox – icon container with size/bg variants
 *
 *  Design Tokens:
 *    - Token-based size scale (sm/md/lg/xl)
 *    - Token-based radius options
 *    - Uses gray-100 as default background
 *
 *  Used for category icons, feature icons, etc.
 * ───────────────────────────────────────────── */

// Token-based size presets
const sizeStyles = {
  sm: "w-9 h-9",                      // 36px
  md: "w-10 h-10 md:w-11 md:h-11",    // 40px / 44px
  lg: "w-12 h-12",                    // 48px
  xl: "w-14 h-14",                    // 56px
} as const;

// Token-based radius presets
const radiusStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

export type IconBoxSize = keyof typeof sizeStyles;
export type IconBoxRadius = keyof typeof radiusStyles;

export interface IconBoxProps {
  children: React.ReactNode;
  size?: IconBoxSize;
  bgClass?: string;
  radius?: IconBoxRadius;
  className?: string;
}

export function IconBox({
  children,
  size = "md",
  bgClass = "bg-gray-100",
  radius = "lg",
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        sizeStyles[size],
        bgClass,
        radiusStyles[radius],
        "flex items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
