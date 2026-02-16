/**
 * VerdictTag - Small rounded tag for quick verdict labels
 *
 * @token radius: rounded-full
 * @token spacing: px-3 py-1.5
 */

import { cn } from "@/utils/cn";

export interface VerdictTagProps {
  label: string;
  className?: string;
}

export function VerdictTag({ label, className }: VerdictTagProps) {
  return (
    <span
      className={cn(
        "bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full",
        className
      )}
    >
      {label}
    </span>
  );
}
