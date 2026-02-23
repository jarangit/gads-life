/* ──────── News Article Hero Organism ──────── */

import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";
import { NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { radius, typography } from "@/components/ui";
import { CategoryBadge } from "@/components/news/atoms";

export interface NewsArticleHeroProps {
  item: NewsItem;
  className?: string;
}

export function NewsArticleHero({
  item,
  className,
}: NewsArticleHeroProps) {
  const readingMinutes = Math.max(1, Math.round(item.readingTimeSeconds / 60));

  return (
    <>
      {/* Hero header */}
      <div className={cn("bg-white border-b border-gray-100", className)}>
        <div className="mx-auto max-w-3xl px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand transition-colors duration-150">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-brand transition-colors duration-150">
              ข่าวสินค้า
            </Link>
            <span>/</span>
            <span className="max-w-50 truncate text-gray-500">{item.title}</span>
          </nav>

          {/* Content - category, title, summary, meta */}
          <div className="space-y-4">
            <CategoryBadge category={item.category} />

            <h1 className={cn(typography.size.xl, "font-bold leading-snug text-foreground")}>
              {item.title}
            </h1>

            {item.summary && (
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {item.summary}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-gray-400" />
                {formatRelativeTime(item.publishedAt)}
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                แหล่งข่าว
                <span className="font-medium text-foreground">{item.source}</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <FiClock className="text-gray-400" />
                {readingMinutes} นาทีอ่าน
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {(item.heroImage || true) && (
        <div className="mx-auto max-w-3xl px-4">
          <div
            className={cn(
              "my-6 flex h-48 items-center justify-center bg-gray-50 border border-dashed border-gray-200 sm:h-64 overflow-hidden",
              radius["2xl"]
            )}
          >
            {item.heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.heroImage}
                alt={item.heroImageAlt ?? item.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-4xl opacity-20">📰</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
