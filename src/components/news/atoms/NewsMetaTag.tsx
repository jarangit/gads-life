/* ──────── News Meta Tag Atom ──────── */

import { FiClock } from "react-icons/fi";
import { cn } from "@/utils/cn";

export interface NewsMetaTagProps {
  source: string;
  relativeTime: string;
  readingMinutes: number;
  className?: string;
}

export function NewsMetaTag({
  source,
  relativeTime,
  readingMinutes,
  className,
}: NewsMetaTagProps) {
  return (
    <span className={cn("text-[11px] text-gray-400 flex items-center gap-1", className)}>
      {source} · {relativeTime} ·{" "}
      <FiClock className="text-[10px]" /> {readingMinutes} นาที
    </span>
  );
}
