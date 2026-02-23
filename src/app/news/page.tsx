/* ──────── News Page ──────── */
import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiArrowRight, FiExternalLink, FiClock } from "react-icons/fi";
import { buildMetadata } from "@/lib/seo/metadata";
import { mockNews, NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { FilterChip } from "@/components/ui/atoms/FilterChip";
import { Badge } from "@/components/ui/atoms/Badge";
import { typography, radius, transitions } from "@/components/ui";
import { getCategoryTone } from "./categoryStyles";

export const metadata: Metadata = buildMetadata({
  title: "ข่าวสินค้า",
  description:
    "ติดตามข่าวสารล่าสุดเกี่ยวกับสินค้าเทคโนโลยี Apple, Samsung และแบรนด์ดังอื่นๆ จาก gads✓life",
  url: "/news",
});

/* ─── All unique categories for filter chips ─── */
const allCategories = ["ทั้งหมด", ...Array.from(new Set(mockNews.map((n) => n.category)))];

/* ─── News Card ─── */
function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  const tone = getCategoryTone(item.category);
  const readingMinutes = Math.max(1, Math.round(item.readingTimeSeconds / 60));
  const summaryText = item.summary || item.excerpt;

  const content = (
    <div
      className={cn(
        "group flex gap-4 bg-white border border-gray-100",
        radius["2xl"],
        "p-4 sm:p-5",
        featured && "sm:flex-col",
        `hover:shadow-lg hover:border-gray-200 ${transitions.allSlow}`,
      )}
    >
      {/* Placeholder image area */}
      <div
        className={cn(
          "shrink-0 bg-gray-50 flex items-center justify-center text-gray-300 border border-dashed border-gray-200",
          radius.xl,
          featured ? "w-full h-40" : "w-16 h-16",
        )}
      >
        <HiOutlineNewspaper className={featured ? "text-4xl" : "text-2xl"} />
      </div>

      <div className="flex-1 min-w-0">
        {/* Category + meta */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span
            className={cn(
              "text-[11px] font-semibold px-2.5 py-0.5 rounded-full border",
              tone.bg,
              tone.text,
              tone.border,
            )}
          >
            {item.category}
          </span>
          <span className="text-[11px] text-gray-400 flex items-center gap-1">
            {item.source} · {relativeTime} · <FiClock className="text-[10px]" /> {readingMinutes} นาที
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            typography.weight.semibold,
            "text-gray-900",
            featured
              ? `${typography.size.base} leading-snug line-clamp-3`
              : `${typography.size.sm} leading-snug line-clamp-2`,
            `group-hover:text-brand ${transitions.colorsNormal}`,
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
          <Badge size="xs" variant="score" className="bg-gray-50 text-gray-500">
            {readingMinutes} นาทีอ่าน
          </Badge>
          {item.tags?.length > 0 && (
            <Badge size="xs" variant="score" className="bg-brand/10 text-brand-dark">
              {item.tags.length} แท็ก
            </Badge>
          )}
        </div>

        {/* CTA */}
        <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-gray-400 group-hover:text-brand transition-colors duration-200">
          {item.externalUrl ? (
            <>อ่านต่อ <FiExternalLink className="text-[10px]" /></>
          ) : (
            <>อ่านรีวิว <FiArrowRight className="text-[10px]" /></>
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

/* ─── Page ─── */
export default function NewsPage() {
  const featured = mockNews.slice(0, 2);
  const rest = mockNews.slice(2);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.08em]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            ข่าว / News
          </p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            ข่าวสินค้าล่าสุด
          </h1>
          <p className="text-sm text-gray-500 max-w-xl">
            อัปเดตข่าวเทคโนโลยีแบบกระชับ ใช้ระบบดีไซน์เดียวกับรีวิวหลัก เพื่อประสบการณ์อ่านที่เบาและเร็ว
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span>ข่าว</span>
        </div>
      </div>

      {/* Category filter chips (static — no client interaction needed for now) */}
      <div className="flex gap-2 flex-wrap mb-8">
        {allCategories.map((cat) => (
          <FilterChip key={cat} label={cat} selected={cat === "ทั้งหมด"} />
        ))}
      </div>

      {/* Featured grid – top 2 */}
      <section className="mb-6">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] mb-3">
          เด่นวันนี้
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {featured.map((item) => (
            <NewsCard key={item.id} item={item} featured />
          ))}
        </div>
      </section>

      {/* Rest list */}
      <section>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] mb-3">
          ข่าวทั้งหมด
        </p>
        <div className="flex flex-col gap-3">
          {rest.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Footer note */}
      <p className="mt-12 text-xs text-gray-400 text-center">
        ข้อมูลข่าวสารอาจมีการอัปเดต กรุณาตรวจสอบแหล่งข่าวต้นทางด้วยเสมอ
      </p>
    </div>
  );
}
