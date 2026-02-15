import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  IconBox – icon container with size/bg variants
 *
 *  Used for category icons, feature icons, etc.
 * ───────────────────────────────────────────── */

const sizeStyles = {
  sm: "w-9 h-9",
  md: "w-10 h-10 md:w-11 md:h-11",
  lg: "w-12 h-12",
  xl: "w-14 h-14",
} as const;

export type IconBoxSize = keyof typeof sizeStyles;

export interface IconBoxProps {
  children: React.ReactNode;
  size?: IconBoxSize;
  bgClass?: string;
  radius?: string;
  className?: string;
}

export function IconBox({
  children,
  size = "md",
  bgClass = "bg-gray-100",
  radius = "rounded-lg",
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        sizeStyles[size],
        bgClass,
        radius,
        "flex items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
