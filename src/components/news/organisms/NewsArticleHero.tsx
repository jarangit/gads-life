/* ──────── News Article Hero Organism ──────── */

import { HiOutlineNewspaper } from "react-icons/hi";
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
  const primaryTag = item.tags?.[0]?.value ?? item.category ?? "ข่าว";

  return (
    <div className={cn("mx-auto max-w-3xl px-4 pt-10 pb-2", className)}>
      {/* Category / tag badge */}
      <CategoryBadge label={primaryTag} className="mb-3" />

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
          "relative mt-6 overflow-hidden bg-gray-100",
          radius["2xl"],
          "w-full",
          "flex items-center justify-center",
          "min-h-[220px] sm:min-h-[280px]",
        )}
      >
        {item.heroImage ? (
          <>
            <div
              className="absolute inset-0 scale-110 blur-3xl"
              style={{
                backgroundImage: `url(${item.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(28px)",
                transform: "scale(1.12)",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/15" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.heroImage}
              alt={item.heroImageAlt ?? item.title}
              className="relative z-10 max-h-[420px] w-full object-contain"
            />
          </>
        ) : (
          <HiOutlineNewspaper className="text-7xl text-gray-300" />
        )}
      </div>
    </div>
  );
}
