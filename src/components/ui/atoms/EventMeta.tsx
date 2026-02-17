import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { formatThaiDate } from "../utils";

/* ─────────────────────────────────────────────
 *  EventMeta – icon + text row for date/time/location
 * ───────────────────────────────────────────── */

export type EventMetaVariant = "light" | "muted";

export interface EventMetaProps {
  date?: string;
  time?: string;
  location?: string;
  variant?: EventMetaVariant;
  className?: string;
}

const variantStyles: Record<EventMetaVariant, { text: string; icon: string }> =
  {
    light: { text: "text-gray-300", icon: "text-brand" },
    muted: { text: "text-gray-400", icon: "text-gray-400" },
  };

export function EventMeta({
  date,
  time,
  location,
  variant = "muted",
  className,
}: EventMetaProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`flex flex-wrap items-center gap-4 text-xs ${styles.text} ${className ?? ""}`}
    >
      {date && (
        <span className="flex items-center gap-1.5">
          <FiCalendar className={`${styles.icon} shrink-0`} />
          {formatThaiDate(date)}
        </span>
      )}
      {time && (
        <span className="flex items-center gap-1.5">
          <FiClock className={`${styles.icon} shrink-0`} />
          {time}
        </span>
      )}
      {location && (
        <span className="flex items-center gap-1.5">
          <FiMapPin className={`${styles.icon} shrink-0`} />
          {location}
        </span>
      )}
    </div>
  );
}
