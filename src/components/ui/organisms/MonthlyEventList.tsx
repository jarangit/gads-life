import { MonthDivider } from "../atoms/MonthDivider";
import { EventListItem } from "../molecules/EventListItem";
import { groupByMonth } from "../utils";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  MonthlyEventList – groups events by month
 *  with divider headers and 2-column grid.
 *  Optionally filters to a single month.
 * ───────────────────────────────────────────── */

export interface MonthlyEventListProps {
  activities: Activity[];
  /** If set, only show events from this month key ("2026-03") */
  selectedMonth?: string | null;
}

export function MonthlyEventList({
  activities,
  selectedMonth,
}: MonthlyEventListProps) {
  const monthGroups = groupByMonth(activities);

  if (activities.length === 0) return null;

  const entries = selectedMonth
    ? [...monthGroups.entries()].filter(([key]) => key === selectedMonth)
    : [...monthGroups.entries()];

  if (entries.length === 0) return null;

  return (
    <>
      {entries.map(([monthKey, items]) => (
        <div key={monthKey}>
          <MonthDivider date={items[0].date} count={items.length} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((a) => (
              <EventListItem key={a.id} activity={a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
