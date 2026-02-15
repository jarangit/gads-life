import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  Button – flexible button / link element
 *
 *  Supports rendering as `<button>`, `<a>`, or Next `<Link>`.
 *  Pass `href` to render a link automatically.
 * ───────────────────────────────────────────── */

const variantStyles = {
  primary: "bg-brand text-black hover:bg-brand-hover font-semibold",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  ghost: "bg-transparent text-brand hover:bg-brand/10",
  dark: "bg-black text-white hover:bg-gray-800",
  outline: "border border-gray-200 text-gray-700 hover:bg-gray-50",
} as const;

const sizeStyles = {
  xs: "px-2.5 py-1 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2",
} as const;

const radiusStyles = {
  default: "rounded-lg",
  full: "rounded-full",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;
export type ButtonRadius = keyof typeof radiusStyles;

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  radius = "default",
  href,
  onClick,
  className,
  disabled,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all",
    variantStyles[variant],
    sizeStyles[size],
    radiusStyles[radius],
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
