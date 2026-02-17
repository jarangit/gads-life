import { Card } from "../atoms/Card";
import { FiClock, FiMapPin } from "react-icons/fi";
import { DateBox } from "../atoms/DateBox";
import { DaysCountdownBadge } from "../atoms/DaysCountdownBadge";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  EventListItem – horizontal card for the
 *  monthly event list with date box on the left
 * ───────────────────────────────────────────── */

export interface EventListItemProps {
  activity: Activity;
}

export function EventListItem({ activity }: EventListItemProps) {
  return (
    <Card
      variant="default"
      radius="rounded-2xl"
      padding="p-5"
      hoverable
      className="flex gap-4 items-start"
    >
      <DateBox date={activity.date} />

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-1">
            {activity.title}
          </h3>
          <DaysCountdownBadge date={activity.date} className="shrink-0" />
        </div>
        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
          {activity.description}
        </p>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FiClock className="shrink-0" />
            {activity.time}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin className="shrink-0" />
            <span className="truncate max-w-40">{activity.location}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
