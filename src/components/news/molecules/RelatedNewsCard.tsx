/* ──────── Related News Card Molecule ──────── */

import Link from "next/link";
import { FiClock } from "react-icons/fi";
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
  const relativeTime = formatRelativeTime(item.publishedAt);
  const imageUrl = item.heroImage ?? "/images/placeholder-news.jpg";

  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "relative isolate block overflow-hidden bg-gray-900",
        radius["2xl"],
        "min-h-[260px]",
        "shadow-sm border border-gray-100/80",
        `hover:shadow-lg hover:-translate-y-[1px] ${transitions.allSlow}`,
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

      {/* Badge */}
      <div className="absolute top-3 left-3">
        <CategoryBadge label={primaryTag} className="bg-white/90 backdrop-blur text-gray-800" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <div className="space-y-1">
          <p className="text-[13px] text-white/80 line-clamp-1">{item.summary || item.excerpt}</p>
          <h3 className="text-lg font-semibold leading-snug line-clamp-2">{item.title}</h3>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
          <span className="font-semibold text-white">{item.source ?? "ข่าว"}</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="inline-flex items-center gap-1">
            <FiClock className="text-[11px]" />
            {relativeTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
