/* ─────────────────────────────────────────────
 *  Design Tokens – TypeScript constants
 *
 *  These map to CSS custom properties in globals.css.
 *  Use these for consistent styling across components.
 * ───────────────────────────────────────────── */

/** Spacing scale tokens */
export const spacing = {
  0: "0",
  "0.5": "var(--space-0-5)", // 2px
  1: "var(--space-1)",       // 4px
  "1.5": "var(--space-1-5)", // 6px
  2: "var(--space-2)",       // 8px
  "2.5": "var(--space-2-5)", // 10px
  3: "var(--space-3)",       // 12px
  4: "var(--space-4)",       // 16px
  5: "var(--space-5)",       // 20px
  6: "var(--space-6)",       // 24px
  8: "var(--space-8)",       // 32px
  10: "var(--space-10)",     // 40px
  12: "var(--space-12)",     // 48px
} as const;

/** Border radius tokens */
export const radius = {
  none: "rounded-none",
  sm: "rounded-sm",     // 6px
  md: "rounded-md",     // 8px
  lg: "rounded-lg",     // 12px
  xl: "rounded-xl",     // 16px
  "2xl": "rounded-2xl", // 20px
  "3xl": "rounded-3xl", // 24px
  full: "rounded-full",
} as const;

/** Shadow tokens (Tailwind classes) */
export const shadows = {
  none: "shadow-none",
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  card: "shadow-card",
  hover: "shadow-hover",
} as const;

/** Typography tokens */
export const typography = {
  size: {
    xs: "text-xs",     // 12px
    sm: "text-sm",     // 14px
    base: "text-base", // 16px
    lg: "text-lg",     // 18px
    xl: "text-xl",     // 20px
    "2xl": "text-2xl", // 24px
    "3xl": "text-3xl", // 30px
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  leading: {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
  },
} as const;

/** Color tokens (semantic) */
export const colors = {
  brand: {
    DEFAULT: "brand",
    dark: "brand-dark",
    light: "brand-light",
    hover: "brand-hover",
  },
  gray: {
    50: "gray-50",
    100: "gray-100",
    200: "gray-200",
    300: "gray-300",
    400: "gray-400",
    500: "gray-500",
    600: "gray-600",
    700: "gray-700",
    800: "gray-800",
    900: "gray-900",
  },
  surface: {
    background: "background",
    foreground: "foreground",
  },
} as const;

/** Transition tokens */
export const transitions = {
  fast: "duration-150",
  normal: "duration-200",
  slow: "duration-300",
  ease: "ease-out",
} as const;

/* ─────────────────────────────────────────────
 *  Component-level token presets
 * ───────────────────────────────────────────── */

/** Button size presets */
export const buttonSizes = {
  xs: { px: "px-2.5", py: "py-1", text: "text-xs", gap: "gap-1" },
  sm: { px: "px-3", py: "py-1.5", text: "text-sm", gap: "gap-1.5" },
  md: { px: "px-4", py: "py-2", text: "text-base", gap: "gap-2" },
  lg: { px: "px-6", py: "py-3", text: "text-lg", gap: "gap-2.5" },
} as const;

/** Badge size presets */
export const badgeSizes = {
  xs: { px: "px-2", py: "py-0.5", text: "text-[11px]" },
  sm: { px: "px-2.5", py: "py-0.5", text: "text-xs" },
  md: { px: "px-3", py: "py-1", text: "text-sm" },
} as const;

/** Icon box size presets */
export const iconBoxSizes = {
  sm: "w-9 h-9",
  md: "w-10 h-10 md:w-11 md:h-11",
  lg: "w-12 h-12",
  xl: "w-14 h-14",
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof radius;
export type ShadowKey = keyof typeof shadows;
export type TypographySizeKey = keyof typeof typography.size;
export type TypographyWeightKey = keyof typeof typography.weight;
export type ButtonSizeKey = keyof typeof buttonSizes;
export type BadgeSizeKey = keyof typeof badgeSizes;
export type IconBoxSizeKey = keyof typeof iconBoxSizes;
