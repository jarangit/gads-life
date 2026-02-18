import { Card } from "../atoms/Card";
import { Badge } from "../atoms/Badge";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { CategoryTag } from "../atoms/CategoryTag";
import { EventMeta } from "../atoms/EventMeta";
import { daysUntil, getDaysLabel } from "../utils";
import { transitions, typography, radius } from "../tokens";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  FeaturedEventCard – large hero card for
 *  the most important upcoming event
 * ───────────────────────────────────────────── */

export interface FeaturedEventCardProps {
  activity: Activity;
}

export function FeaturedEventCard({ activity }: FeaturedEventCardProps) {
  const days = daysUntil(activity.date);

  return (
    <Card
      variant="dark"
      radius="rounded-3xl"
      padding="p-0"
      className="col-span-1 md:col-span-2 row-span-2 overflow-hidden relative group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-brand/30" />

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-90">
        {/* Top: badges + title + description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge
              variant="recommended"
              size="sm"
              className="bg-brand/20 text-brand"
            >
              <FiStar className="mr-1" />
              กิจกรรมเด่น
            </Badge>
            <CategoryTag category={activity.category} size="sm" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {activity.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
            {activity.description}
          </p>
        </div>

        {/* Bottom: meta + CTA */}
        <div className="space-y-4">
          <EventMeta
            date={activity.date}
            time={activity.time}
            location={activity.location}
            variant="light"
            className="text-sm"
          />

          <div className="flex items-center justify-between">
            <span className="text-brand font-semibold text-lg">
              {getDaysLabel(days)}
            </span>
            <button className={`flex items-center gap-2 bg-brand text-black ${typography.weight.semibold} px-5 py-2.5 ${radius.full} hover:bg-brand-hover ${transitions.colorsNormal} ${typography.size.sm}`}>
              ดูรายละเอียด
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
