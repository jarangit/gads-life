import { FilterChip } from "../atoms/FilterChip";
import { groupByMonth, formatShortThaiMonth } from "../utils";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  MonthFilterBar – horizontally-scrollable
 *  row of FilterChips for each available month.
 *  "ทั้งหมด" is selected by default (null).
 * ───────────────────────────────────────────── */

export interface MonthFilterBarProps {
  /** All activities (used to derive month list + counts) */
  activities: Activity[];
  /** Currently selected month key ("2026-03") or null = all */
  selected: string | null;
  onChange: (monthKey: string | null) => void;
}

export function MonthFilterBar({
  activities,
  selected,
  onChange,
}: MonthFilterBarProps) {
  const monthGroups = groupByMonth(activities);
  const months = [...monthGroups.entries()]; // already in insertion-order (sorted)

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
      {/* "All" chip */}
      <FilterChip
        label="ทั้งหมด"
        count={activities.length}
        selected={selected === null}
        onClick={() => onChange(null)}
      />

      {months.map(([key, items]) => (
        <FilterChip
          key={key}
          label={formatShortThaiMonth(items[0].date)}
          count={items.length}
          selected={selected === key}
          onClick={() => onChange(key)}
        />
      ))}
    </div>
  );
}
