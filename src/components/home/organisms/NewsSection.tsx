/* ──────── NewsSection ──────── */
import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { SectionHeader } from "../atoms";
import { bentoRadius, sectionPanel, transitions, typography } from "@/components/ui";
import { NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";

/* ─── Category badge color map ─── */
const categoryColors: Record<string, string> = {
  iPhone: "bg-blue-50 text-blue-700 border-blue-100",
  Mac: "bg-gray-100 text-gray-700 border-gray-200",
  iPad: "bg-violet-50 text-violet-700 border-violet-100",
  AirPods: "bg-sky-50 text-sky-700 border-sky-100",
  "Apple Watch": "bg-rose-50 text-rose-700 border-rose-100",
  iOS: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Apple: "bg-gray-900 text-white border-transparent",
};

function getCategoryClass(category: string) {
  return (
    categoryColors[category] ??
    "bg-brand-light text-brand-dark border-brand-light"
  );
}

/* ─── Single news row ─── */
interface NewsRowProps {
  item: NewsItem;
  isLast: boolean;
}

function NewsRow({ item, isLast }: NewsRowProps) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  const inner = (
    <div
      className={cn(
        "group flex items-start gap-3 py-3 cursor-pointer",
        !isLast && "border-b border-gray-50",
        `hover:bg-gray-50 -mx-2 px-2 rounded-xl ${transitions.allFast}`,
      )}
    >
      {/* Category dot */}
      <div className="shrink-0 w-2 h-2 rounded-full bg-brand mt-2" />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className={cn(
              "text-[10px] font-semibold px-2 py-0.5 rounded-full border",
              getCategoryClass(item.category ?? ''),
            )}
          >
            {item.category}
          </span>
          <span className="text-[10px] text-gray-400">
            {item.source} · {relativeTime}
          </span>
        </div>

        <p
          className={cn(
            typography.weight.semibold,
            "text-gray-900 leading-snug line-clamp-2 text-sm",
            `group-hover:text-brand ${transitions.colorsNormal}`,
          )}
        >
          {item.title}
        </p>

        <p className="text-xs text-gray-500 mt-1 line-clamp-1 leading-relaxed">
          {item.excerpt}
        </p>
      </div>

      {/* Arrow */}
      <FiArrowRight
        className={cn(
          "shrink-0 text-gray-300 mt-1",
          `group-hover:text-brand ${transitions.colorsNormal}`,
        )}
      />
    </div>
  );

  if (item.externalUrl) {
    return (
      <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={`/news/${item.slug}`}>{inner}</Link>;
}

/* ─── Section ─── */
interface NewsSectionProps {
  items: NewsItem[];
}

export function NewsSection({ items }: NewsSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`bg-white ${bentoRadius.sectionBL} ${sectionPanel.padding}`}>
      <SectionHeader
        icon={<HiOutlineNewspaper className="text-xl text-violet-500" />}
        title="ข่าวล่าสุด"
        linkHref="/news"
        linkText="ดูทั้งหมด"
      />

      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        {items.map((item, idx) => (
          <NewsRow key={item.id} item={item} isLast={idx === items.length - 1} />
        ))}
      </div>
    </div>
  );
}
