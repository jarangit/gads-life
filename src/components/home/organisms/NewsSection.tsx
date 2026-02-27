/* ──────── NewsSection ──────── */
import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { editorial, transitions, typography } from "@/components/ui";
import { FeaturedNewsItem } from "@/lib/api/home/type";
import { formatRelativeTime } from "@/components/ui/utils";

/* ─── Type badge styles ─── */
const typeStyles: Record<string, string> = {
  NEWS:     "bg-violet-50 text-violet-700 border-violet-100",
  GUIDE:    "bg-brand-light text-brand-dark border-brand-light",
  ANALYSIS: "bg-amber-50 text-amber-700 border-amber-100",
};
const typeLabels: Record<string, string> = {
  NEWS: "ข่าว", GUIDE: "คู่มือ", ANALYSIS: "วิเคราะห์",
};
function typeBadge(type: string) {
  return typeStyles[type] ?? "bg-gray-100 text-gray-600 border-gray-100";
}

/* ─── Large hero card (item 0) ─── */
function NewsBigCard({ item, radiusClass }: { item: FeaturedNewsItem; radiusClass: string }) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden bg-gray-900",
        "md:col-span-2 min-h-55 md:min-h-70",
        radiusClass,
        transitions.allNormal,
        "hover:-translate-y-px hover:shadow-lg",
      )}
    >
      {/* Hero image */}
      {item.heroImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-[1.03] group-hover:scale-[1.06] transition-transform duration-500"
            style={{ backgroundImage: `url(${item.heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/30 to-black/85" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 p-5 space-y-2">
        <div className="flex items-center gap-2">
          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", typeBadge(item.type))}>
            {typeLabels[item.type] ?? item.type}
          </span>
          <span className="text-[11px] text-white/70">{relativeTime}</span>
        </div>
        <h3 className={cn("text-white font-bold leading-snug line-clamp-2", typography.size.base, `group-hover:text-brand-light ${transitions.colorsNormal}`)}>
          {item.title}
        </h3>
        <p className="text-[13px] text-white/70 line-clamp-1">{item.excerpt}</p>
      </div>
    </Link>
  );
}

/* ─── Small stacked card (items 1–2) ─── */
function NewsSmallCard({ item, radiusClass }: { item: FeaturedNewsItem; radiusClass: string }) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden bg-gray-800",
        "flex-1 min-h-42",
        radiusClass,
        transitions.allNormal,
        "hover:-translate-y-px hover:shadow-md",
      )}
    >
      {item.heroImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity duration-300"
            style={{ backgroundImage: `url(${item.heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80" />
        </>
      )}
      <div className="relative z-10 p-3.5 space-y-1">
        <span className={cn("text-[10px] font-semibold px-1.5 py-0.5 rounded-full border", typeBadge(item.type))}>
          {typeLabels[item.type] ?? item.type}
        </span>
        <h3 className={cn("text-white font-semibold leading-snug line-clamp-2 text-sm", `group-hover:text-brand-light ${transitions.colorsNormal}`)}>
          {item.title}
        </h3>
        <p className="text-[11px] text-white/60">{relativeTime}</p>
      </div>
    </Link>
  );
}

/* ─── Compact row (items 3+) ─── */
function NewsCompactRow({ item }: { item: FeaturedNewsItem }) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group flex items-center gap-3 p-3 rounded-xl bg-gray-50",
        `hover:bg-gray-100 ${transitions.allFast}`,
      )}
    >
      <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-semibold text-gray-900 line-clamp-1", `group-hover:text-brand ${transitions.colorsNormal}`)}>
          {item.title}
        </p>
        <p className="text-[11px] text-gray-500">{relativeTime}</p>
      </div>
      <FiArrowRight className={cn("shrink-0 text-gray-300", `group-hover:text-brand ${transitions.colorsNormal}`)} />
    </Link>
  );
}

/* ─── Section ─── */
interface NewsSectionProps {
  items: FeaturedNewsItem[];
}

export function NewsSection({ items }: NewsSectionProps) {
  if (!items || items.length === 0) return null;

  const [first, ...rest] = items;
  const sidePair = rest.slice(0, 2);
  const compact = rest.slice(2);


  return (
    <section>
      <div className={editorial.header}>
        <div className="flex items-center gap-2">
          <HiOutlineNewspaper className="text-xl text-violet-500" />
          <h2 className={editorial.title}>ข่าวล่าสุด</h2>
        </div>
        <Link href="/news" className={editorial.link}>
          ดูทั้งหมด <FiArrowRight className="text-xs" />
        </Link>
      </div>

      {/* Featured card (2/3) + 2 stacked small cards (1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NewsBigCard item={first} radiusClass="rounded-2xl" />

        {sidePair.length > 0 && (
          <div className="flex flex-col gap-3">
            {sidePair.map((item, idx) => (
              <NewsSmallCard
                key={item.id}
                item={item}
                radiusClass={idx === sidePair.length - 1 ? "rounded-2xl rounded-br-3xl" : "rounded-2xl"}
              />
            ))}
          </div>
        )}
      </div>

      {/* Compact rows for remaining items */}
      {compact.length > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {compact.map((item) => (
            <NewsCompactRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

