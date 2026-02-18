/* ─────────────────────────────────────────────
 *  Design Tokens – TypeScript constants
 *
 *  These map to CSS custom properties in globals.css.
 *  Use these for consistent styling across components.
 *
 *  RULE: Every component must reference these tokens
 *  instead of sprinkling magic values inline.
 * ───────────────────────────────────────────── */

/* ═══════════════════════════════════════════════
 *  1. Primitive Tokens
 * ═══════════════════════════════════════════════ */

/** Spacing scale tokens */
export const spacing = {
  0: "0",
  "0.5": "var(--space-0-5)", // 2px
  1: "var(--space-1)",        // 4px
  "1.5": "var(--space-1-5)",  // 6px
  2: "var(--space-2)",        // 8px
  "2.5": "var(--space-2-5)",  // 10px
  3: "var(--space-3)",        // 12px
  4: "var(--space-4)",        // 16px
  5: "var(--space-5)",        // 20px
  6: "var(--space-6)",        // 24px
  8: "var(--space-8)",        // 32px
  10: "var(--space-10)",      // 40px
  12: "var(--space-12)",      // 48px
} as const;

/** Border radius tokens */
export const radius = {
  none: "rounded-none",
  sm: "rounded-sm",      // 6px
  md: "rounded-md",      // 8px
  lg: "rounded-lg",      // 12px
  xl: "rounded-xl",      // 16px
  "2xl": "rounded-2xl",  // 20px
  "3xl": "rounded-3xl",  // 24px
  "4xl": "rounded-[2rem]",   // 32px  – category cards
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
    "2xs": "text-[11px]",       // 11px – tiny labels
    xs: "text-xs",               // 12px
    caption: "text-[13px]",      // 13px – compact captions
    sm: "text-sm",               // 14px
    body: "text-[15px]",         // 15px – readable body
    base: "text-base",           // 16px
    lg: "text-lg",               // 18px
    xl: "text-xl",               // 20px
    "2xl": "text-2xl",           // 24px
    "3xl": "text-3xl",           // 30px
    "4xl": "text-4xl",           // 36px
    display: "text-[2.75rem]",   // 44px – hero headlines
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  leading: {
    none: "leading-none",
    tight: "leading-tight",      // 1.25
    snug: "leading-snug",        // 1.375
    normal: "leading-normal",    // 1.5
    relaxed: "leading-relaxed",  // 1.625
    hero: "leading-[1.15]",     // hero headline
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

/** Accent color palettes – used for variety in section icons / badges */
export const accentColors = {
  orange: { bg: "bg-orange-100", text: "text-orange-600", icon: "text-orange-500" },
  violet: { bg: "bg-violet-100", text: "text-violet-600" },
  sky:    { bg: "bg-sky-100",    text: "text-sky-600" },
  emerald:{ bg: "bg-emerald-100",text: "text-emerald-600" },
  amber:  { bg: "bg-amber-100",  text: "text-amber-500" },
  blue:   { bg: "bg-blue-100",   text: "text-blue-500" },
  purple: { bg: "bg-purple-100", text: "text-purple-500", dark: "text-purple-600" },
  green:  { bg: "bg-green-100",  text: "text-green-900" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-500" },
  red:    { bg: "bg-red-100",    text: "text-red-800" },
} as const;

/** Transition tokens */
export const transitions = {
  fast: "duration-150",
  normal: "duration-200",
  slow: "duration-300",
  ease: "ease-out",
  /** Shorthand combos – drop straight into className */
  allFast: "transition-all duration-150 ease-out",
  allNormal: "transition-all duration-200 ease-out",
  allSlow: "transition-all duration-300 ease-out",
  colorsFast: "transition-colors duration-150 ease-out",
  colorsNormal: "transition-colors duration-200 ease-out",
  colorsSlow: "transition-colors duration-300 ease-out",
} as const;

/* ═══════════════════════════════════════════════
 *  2. Component-level Token Presets
 * ═══════════════════════════════════════════════ */

/** Button size presets */
export const buttonSizes = {
  xs: { px: "px-2.5", py: "py-1", text: "text-xs", gap: "gap-1" },
  sm: { px: "px-3", py: "py-1.5", text: "text-sm", gap: "gap-1.5" },
  md: { px: "px-4", py: "py-2", text: "text-base", gap: "gap-2" },
  lg: { px: "px-6", py: "py-3", text: "text-lg", gap: "gap-2.5" },
  xl: { px: "px-8", py: "py-4", text: "text-lg", gap: "gap-3" },
} as const;

/** Badge size presets */
export const badgeSizes = {
  xs: { px: "px-2", py: "py-0.5", text: "text-[11px]" },
  sm: { px: "px-2.5", py: "py-0.5", text: "text-xs" },
  md: { px: "px-3", py: "py-1", text: "text-sm" },
} as const;

/** Icon box size presets */
export const iconBoxSizes = {
  xs: "w-8 h-8",
  sm: "w-9 h-9",
  md: "w-10 h-10 md:w-11 md:h-11",
  lg: "w-12 h-12",
  xl: "w-14 h-14",
} as const;

/* ═══════════════════════════════════════════════
 *  3. Bento / Layout Token Presets
 * ═══════════════════════════════════════════════ */

/**
 * Bento radius – asymmetric corner patterns used in the home-page
 * bento-grid sections. Change these to reshape the entire layout at once.
 */
export const bentoRadius = {
  /** Hero card – large with extra-round bottom-right */
  hero: "rounded-[2.5rem] rounded-br-[3.5rem]",
  /** Section card – top-left emphasis */
  sectionTL: "rounded-[1.75rem] rounded-tl-[2.5rem]",
  /** Section card – top-right emphasis */
  sectionTR: "rounded-[1.75rem] rounded-tr-[2.5rem]",
  /** Section card – bottom-left emphasis */
  sectionBL: "rounded-[1.75rem] rounded-bl-[2.5rem]",
  /** Section card – bottom-right emphasis */
  sectionBR: "rounded-[1.75rem] rounded-br-[2.5rem]",
  /** Trust card – top-right accent */
  trustTR: "rounded-[1.5rem] rounded-tr-[2.5rem]",
  /** Trust card – bottom-left accent */
  trustBL: "rounded-[1.5rem] rounded-bl-[2.5rem]",
  /** Categories grid item corners (per bento position) */
  catTL: "rounded-xl rounded-tl-2xl",
  catTR: "rounded-xl rounded-tr-2xl",
  catBL: "rounded-xl rounded-bl-2xl",
  catBR: "rounded-xl rounded-br-2xl",
  catDefault: "rounded-xl",
} as const;

/** Card height presets – centralised so skeletons stay in sync */
export const cardHeights = {
  sm: "min-h-[180px]",    // subcategory / link cards
  md: "min-h-[200px]",    // category cards
  lg: "min-h-[320px]",    // product detail cards
  hero: "min-h-[420px]",  // hero banner
} as const;

/** Section wrapper – common pattern for bento section panels */
export const sectionPanel = {
  padding: "p-6 md:p-7",
  gap: "gap-2.5 md:gap-3",
} as const;

/** Grid presets – responsive column configurations */
export const gridPresets = {
  "2col": "grid grid-cols-1 md:grid-cols-2",
  "3col": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  "4col": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

/* ═══════════════════════════════════════════════
 *  4. Type Exports
 * ═══════════════════════════════════════════════ */

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof radius;
export type ShadowKey = keyof typeof shadows;
export type TypographySizeKey = keyof typeof typography.size;
export type TypographyWeightKey = keyof typeof typography.weight;
export type ButtonSizeKey = keyof typeof buttonSizes;
export type BadgeSizeKey = keyof typeof badgeSizes;
export type IconBoxSizeKey = keyof typeof iconBoxSizes;
export type BentoRadiusKey = keyof typeof bentoRadius;
export type CardHeightKey = keyof typeof cardHeights;
export type AccentColorKey = keyof typeof accentColors;
export type GridPresetKey = keyof typeof gridPresets;
