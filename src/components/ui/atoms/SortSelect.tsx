/* ──────────────────────────────────────────────
 *  SortSelect — dropdown for sort options
 * ──────────────────────────────────────────────*/

import { cn } from "@/utils/cn";

export interface SortOption<T extends string = string> {
  value: T;
  label: string;
}

export interface SortSelectProps<T extends string = string> {
  options: SortOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SortSelect<T extends string = string>({
  options,
  value,
  onChange,
  className,
}: SortSelectProps<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={cn(
        "px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium",
        "text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
        "cursor-pointer transition-colors",
        className,
      )}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
