import { Card } from "../atoms/Card";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { CategoryTag } from "../atoms/CategoryTag";
import { DaysCountdownBadge } from "../atoms/DaysCountdownBadge";
import { formatThaiDate } from "../utils";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  CountdownCard – compact card showing an
 *  upcoming event with countdown badge
 * ───────────────────────────────────────────── */

export interface CountdownCardProps {
  activity: Activity;
}

export function CountdownCard({ activity }: CountdownCardProps) {
  return (
    <Card
      variant="gradient"
      radius="rounded-2xl"
      padding="p-5"
      className="flex flex-col justify-between"
      hoverable
    >
      <div>
        <CategoryTag category={activity.category} className="mb-3" />
        <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
          {activity.title}
        </h3>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <FiCalendar className="text-gray-400 shrink-0" />
          <span>{formatThaiDate(activity.date)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 flex items-center gap-1.5">
            <FiMapPin className="text-gray-400 shrink-0" />
            <span className="truncate max-w-30">{activity.location}</span>
          </span>
          <DaysCountdownBadge date={activity.date} />
        </div>
      </div>
    </Card>
  );
}
