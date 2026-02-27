/* ──────── News Card Molecule ──────── */
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { radius, transitions } from "@/components/ui";
import { CategoryBadge } from "@/components/news/atoms";

export interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
  className?: string;
}

export function NewsCard({ item, featured = false, className }: NewsCardProps) {
  const primaryTag = item.tags?.[0]?.value ?? item.category ?? "ข่าว";
  const relativeTime = formatRelativeTime(item.publishedAt);
  const summaryText = item.summary || item.excerpt;
  const imageUrl = item.heroImage ?? "/images/placeholder-news.jpg";
  const readingMinutes = summaryText
    ? Math.max(1, Math.round(summaryText.split(/\s+/).length / 200))
    : undefined;

  const cardBody = (
    <div
      className={cn(
        "relative isolate block overflow-hidden bg-gray-900",
        radius["2xl"],
        featured ? "min-h-[320px]" : "min-h-[260px]",
        "shadow-sm border border-gray-100/80",
        `hover:shadow-lg hover:-translate-y-[1px] ${transitions.allSlow} `,
        className,
      )}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/90 " />

      {/* Badge */}
      <div className="absolute top-3 left-3">
        <CategoryBadge
          label={primaryTag}
          className="bg-white/90 backdrop-blur text-gray-800"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white hover:backdrop-blur-lg transition-[backdrop-filter] duration-1000">
        <div className="space-y-1">
          <p className="text-[13px] text-white/85 line-clamp-1">
            {summaryText}
          </p>
          <h3 className={cn("text-lg font-semibold leading-snug line-clamp-2")}>
            {item.title}
          </h3>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
          <span className="font-semibold text-white">
            {item.source ?? "ข่าว"}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="inline-flex items-center gap-1">
            <FiClock className="text-[11px]" />
            {readingMinutes !== undefined
              ? `${readingMinutes} นาทีอ่าน`
              : relativeTime}
          </span>
          {readingMinutes !== undefined && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>{relativeTime}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (item.externalUrl) {
    return (
      <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
        {cardBody}
      </a>
    );
  }

  return <Link href={`/news/${item.slug}`}>{cardBody}</Link>;
}
