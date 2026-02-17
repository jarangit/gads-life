/* ─────────────────────────────────────────────
 *  MonthDivider – sticky-style month header
 * ───────────────────────────────────────────── */

import { formatThaiMonth } from "../utils";

export interface MonthDividerProps {
  /** Any date string within the month */
  date: string;
  count: number;
}

export function MonthDivider({ date, count }: MonthDividerProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 rounded-full bg-brand" />
        <h2 className="text-lg font-semibold text-gray-900">
          {formatThaiMonth(date)}
        </h2>
        <span className="text-xs text-gray-400 font-medium">
          {count} กิจกรรม
        </span>
      </div>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
