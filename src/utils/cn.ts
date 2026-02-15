import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS class names intelligently.
 * Combines clsx (conditional classes) with tailwind-merge (conflict resolution).
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-brand", className)
 * cn("rounded-lg", "rounded-2xl") // → "rounded-2xl"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
