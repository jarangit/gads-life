import { Badge } from "./Badge";
import { daysUntil, getDaysLabel } from "../utils";

/* ─────────────────────────────────────────────
 *  DaysCountdownBadge – "อีก X วัน" badge
 * ───────────────────────────────────────────── */

export interface DaysCountdownBadgeProps {
  date: string;
  className?: string;
}

export function DaysCountdownBadge({
  date,
  className,
}: DaysCountdownBadgeProps) {
  const days = daysUntil(date);

  return (
    <Badge variant="success" size="xs" className={className}>
      {getDaysLabel(days)}
    </Badge>
  );
}
