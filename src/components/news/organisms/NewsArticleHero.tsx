/* ──────── News Article Hero Organism ──────── */

import { NewsItem } from "@/data/news";
import { cn } from "@/utils/cn";
import { radius } from "@/components/ui";
import { CategoryBadge } from "@/components/news/atoms";

export interface NewsArticleHeroProps {
  item: NewsItem;
  className?: string;
}

function formatDisplayDate(iso: string) {
  return new Date(iso).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsArticleHero({ item, className }: NewsArticleHeroProps) {
  return (
    <div className={cn("mx-auto max-w-3xl px-4 pt-10 pb-2", className)}>
      {/* Category badge */}
      <CategoryBadge category={item.category} className="mb-3" />

      {/* Date */}
      <p className="mb-4 text-sm text-gray-400">
        {formatDisplayDate(item.publishedAt)}
      </p>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-snug text-foreground sm:text-4xl">
        {item.title}
      </h1>

      {/* Hero image */}
      <div
        className={cn(
          "mt-6 overflow-hidden bg-gray-100",
          radius["2xl"],
          "w-full aspect-16/7",
          "flex items-center justify-center"
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
          <span className="text-5xl opacity-10">📰</span>
        )}
      </div>
    </div>
  );
}
