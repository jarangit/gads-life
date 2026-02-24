/* ──────── News Meta Tag Atom ──────── */

import { FiClock } from "react-icons/fi";
import { cn } from "@/utils/cn";

export interface NewsMetaTagProps {
  relativeTime: string;
  readingMinutes?: number;
  className?: string;
}

export function NewsMetaTag({ relativeTime, readingMinutes, className }: NewsMetaTagProps) {
  return (
    <span className={cn("text-[11px] text-gray-400 flex items-center gap-1", className)}>
      {relativeTime}
      {readingMinutes !== undefined && (
        <>
          <span className="text-gray-300">•</span>
          <FiClock className="text-[10px]" />
          {readingMinutes} นาที
        </>
      )}
    </span>
  );
}
