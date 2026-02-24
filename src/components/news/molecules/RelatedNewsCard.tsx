/* ──────── Related News Card Molecule ──────── */

import Link from "next/link";
import { NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { radius, transitions } from "@/components/ui";
import { CategoryBadge } from "@/components/news/atoms";

export interface RelatedNewsCardProps {
  item: NewsItem;
  className?: string;
}

export function RelatedNewsCard({ item, className }: RelatedNewsCardProps) {
  const primaryTag = item.tags?.[0]?.value ?? item.category ?? "ข่าว";

  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group flex flex-col gap-2 bg-white border border-gray-100 p-4",
        radius.xl,
        `hover:shadow-md ${transitions.allNormal}`,
        className,
      )}
    >
      <CategoryBadge label={primaryTag} />
      <p className="text-sm font-medium leading-snug text-foreground group-hover:text-brand-dark line-clamp-2 transition-colors duration-150">
        {item.title}
      </p>
      <span className="text-xs text-gray-400">
        {formatRelativeTime(item.publishedAt)}
      </span>
    </Link>
  );
}
