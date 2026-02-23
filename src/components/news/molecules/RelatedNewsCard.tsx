/* ──────── Related News Card Molecule ──────── */

import Link from "next/link";
import { mockNews } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { radius, transitions } from "@/components/ui";
import { CategoryBadge } from "@/components/news/atoms";

export interface RelatedNewsCardProps {
  slug: string;
  className?: string;
}

export function RelatedNewsCard({ slug, className }: RelatedNewsCardProps) {
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) return null;

  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group flex flex-col gap-2 bg-white border border-gray-100 p-4",
        radius.xl,
        `hover:shadow-md ${transitions.allNormal}`,
        className
      )}
    >
      <CategoryBadge category={item.category} />
      <p className="text-sm font-medium leading-snug text-foreground group-hover:text-brand-dark line-clamp-2 transition-colors duration-150">
        {item.title}
      </p>
      <span className="text-xs text-gray-400">
        {formatRelativeTime(item.publishedAt)}
      </span>
    </Link>
  );
}
