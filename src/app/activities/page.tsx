"use client";

import { useState } from "react";
import {
  activities,
  FeaturedBentoGrid,
  MonthFilterBar,
  MonthlyEventList,
} from "@/components/ui";

/* ─────────────────────────────────────────────
 *  Activities Page – composes organisms only
 * ───────────────────────────────────────────── */

export default function ActivitiesPage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // Sort by date – soonest first
  const sorted = [...activities].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const featured = sorted.find((a) => a.isFeatured) || sorted[0];
  const upcoming = sorted.filter((a) => a.id !== featured.id).slice(0, 2);
  const rest = sorted.filter(
    (a) => a.id !== featured.id && !upcoming.some((u) => u.id === a.id)
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Page header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          กิจกรรม & อีเว้นท์
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          รวมอีเว้นท์และกิจกรรมที่น่าสนใจที่กำลังจะมาถึง
        </p>
      </div>

      {/* Bento Grid: Featured + Upcoming */}
      <FeaturedBentoGrid featured={featured} upcoming={upcoming} />

      {/* Month filter bar */}
      <MonthFilterBar
        activities={rest}
        selected={selectedMonth}
        onChange={setSelectedMonth}
      />

      {/* Monthly grouped event list */}
      <MonthlyEventList activities={rest} selectedMonth={selectedMonth} />
    </div>
  );
}

