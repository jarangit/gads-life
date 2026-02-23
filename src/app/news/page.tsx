/* ──────── News Page ──────── */
import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { buildMetadata } from "@/lib/seo/metadata";
import { mockNews, NewsItem } from "@/data/news";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";

export const metadata: Metadata = buildMetadata({
  title: "ข่าวสินค้า",
  description:
    "ติดตามข่าวสารล่าสุดเกี่ยวกับสินค้าเทคโนโลยี Apple, Samsung และแบรนด์ดังอื่นๆ จาก gads✓life",
  url: "/news",
});

/* ─── Category color map ─── */
const categoryColors: Record<string, string> = {
  iPhone: "bg-blue-50 text-blue-700 border-blue-100",
  Mac: "bg-gray-100 text-gray-700 border-gray-200",
  iPad: "bg-violet-50 text-violet-700 border-violet-100",
  AirPods: "bg-sky-50 text-sky-700 border-sky-100",
  "Apple Watch": "bg-rose-50 text-rose-700 border-rose-100",
  iOS: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Apple: "bg-gray-900 text-white border-transparent",
};

function getCategoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-brand-light text-brand-dark border-brand-light";
}

/* ─── All unique categories for filter chips ─── */
const allCategories = ["ทั้งหมด", ...Array.from(new Set(mockNews.map((n) => n.category)))];

/* ─── News Card ─── */
function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const relativeTime = formatRelativeTime(item.publishedAt);

  const content = (
    <div
      className={cn(
        "group flex gap-4 bg-white rounded-2xl border border-gray-100 p-5",
        "hover:shadow-md hover:border-gray-200 transition-all duration-200",
        featured && "sm:flex-col",
      )}
    >
      {/* Placeholder image area */}
      <div
        className={cn(
          "shrink-0 rounded-xl bg-gray-100 flex items-center justify-center text-gray-300",
          featured ? "w-full h-36" : "w-16 h-16",
        )}
      >
        <HiOutlineNewspaper className={featured ? "text-4xl" : "text-2xl"} />
      </div>

      <div className="flex-1 min-w-0">
        {/* Category + meta */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span
            className={cn(
              "text-[10px] font-semibold px-2.5 py-0.5 rounded-full border",
              getCategoryClass(item.category),
            )}
          >
            {item.category}
          </span>
          <span className="text-xs text-gray-400">
            {item.source} · {relativeTime}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            "font-semibold text-gray-900 leading-snug",
            "group-hover:text-brand transition-colors duration-200",
            featured ? "text-base line-clamp-3" : "text-sm line-clamp-2",
          )}
        >
          {item.title}
        </h2>

        {/* Excerpt */}
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
          {item.excerpt}
        </p>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-brand transition-colors duration-200">
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
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          หน้าแรก
        </Link>
        <span>/</span>
        <span>ข่าวสินค้า</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
          <HiOutlineNewspaper className="text-violet-600 text-xl" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ข่าวสินค้าล่าสุด</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            อัปเดตข่าวสารเทคโนโลยีและสินค้าใหม่จากทั่วโลก
          </p>
        </div>
      </div>

      {/* Category filter chips (static — no client interaction needed for now) */}
      <div className="flex gap-2 flex-wrap mb-8">
        {allCategories.map((cat) => (
          <span
            key={cat}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium border cursor-default",
              cat === "ทั้งหมด"
                ? "bg-black text-white border-transparent"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 transition-colors",
            )}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Featured grid – top 2 */}
      <section className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          เด่นวันนี้
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((item) => (
            <NewsCard key={item.id} item={item} featured />
          ))}
        </div>
      </section>

      {/* Rest list */}
      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
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
