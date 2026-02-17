import { FeaturedEventCard } from "../molecules/FeaturedEventCard";
import { CountdownCard } from "../molecules/CountdownCard";
import type { Activity } from "../constants/activities";

/* ─────────────────────────────────────────────
 *  FeaturedBentoGrid – Bento-style grid with
 *  one large featured card + 2 countdown cards
 * ───────────────────────────────────────────── */

export interface FeaturedBentoGridProps {
  featured: Activity;
  upcoming: Activity[];
}

export function FeaturedBentoGrid({
  featured,
  upcoming,
}: FeaturedBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
      <FeaturedEventCard activity={featured} />
      {upcoming.map((a) => (
        <CountdownCard key={a.id} activity={a} />
      ))}
    </div>
  );
}
