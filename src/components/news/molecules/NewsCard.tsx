/* ──────── News Card Molecule ──────── */

import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { typography, radius, transitions } from "@/components/ui";
import { Badge } from "@/components/ui/atoms/Badge";
import { CategoryBadge, NewsImagePlaceholder, NewsMetaTag } from "@/components/news/atoms";

export interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
  className?: string;
}

export function NewsCard({
  item,
  featured = false,
  className,
}: NewsCardProps) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  const summaryText = item.summary || item.excerpt;
  const primaryTag = item.tags?.[0]?.value ?? "ข่าว";
  const readingMinutes = summaryText
    ? Math.max(1, Math.round(summaryText.split(/\s+/).length / 200))
    : undefined;

  const content = (
    <div
      className={cn(
        "group flex gap-4 bg-white border border-gray-100",
        radius["2xl"],
        "p-4 sm:p-5",
        featured && "sm:flex-col",
        `hover:shadow-lg hover:border-gray-200 ${transitions.allSlow}`,
        className
      )}
    >
      {/* Image placeholder */}
      <NewsImagePlaceholder
        size={featured ? "lg" : "sm"}
        className={featured ? "w-full" : ""}
      />

      <div className="flex-1 min-w-0">
        {/* Category + meta */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <CategoryBadge label={primaryTag} />
          <NewsMetaTag relativeTime={relativeTime} readingMinutes={readingMinutes} />
        </div>

        {/* Title */}
        <h2
          className={cn(
            typography.weight.semibold,
            "text-gray-900",
            featured
              ? `${typography.size.base} leading-snug line-clamp-3`
              : `${typography.size.sm} leading-snug line-clamp-2`,
            `group-hover:text-brand ${transitions.colorsNormal}`
          )}
        >
          {item.title}
        </h2>

        {/* Summary */}
        <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
          {summaryText}
        </p>

        {/* Meta pills */}
        <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-gray-500">
          <Badge size="xs" variant="info" className="bg-gray-100 text-gray-700">
            {item.type}
          </Badge>
          {readingMinutes !== undefined && (
            <Badge size="xs" variant="score" className="bg-gray-50 text-gray-500">
              {readingMinutes} นาทีอ่าน
            </Badge>
          )}
          {item.tags?.length > 0 && (
            <Badge size="xs" variant="score" className="bg-brand/10 text-brand-dark">
              {item.tags.length} แท็ก
            </Badge>
          )}
        </div>

        {/* CTA */}
        <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-gray-400 group-hover:text-brand transition-colors duration-200">
          {item.externalUrl ? (
            <>
              อ่านต่อ <FiExternalLink className="text-[10px]" />
            </>
          ) : (
            <>
              อ่านรีวิว <FiArrowRight className="text-[10px]" />
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (item.externalUrl) {
    return (
      <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={`/news/${item.slug}`}>{content}</Link>;
}
