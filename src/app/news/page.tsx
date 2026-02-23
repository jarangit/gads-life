/* ──────── News Page ──────── */
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { mockNews } from "@/data/news";
import { FilterChip } from "@/components/ui/atoms/FilterChip";
import { NewsCard } from "@/components/news";

export const metadata: Metadata = buildMetadata({
  title: "ข่าวสินค้า",
  description:
    "ติดตามข่าวสารล่าสุดเกี่ยวกับสินค้าเทคโนโลยี Apple, Samsung และแบรนด์ดังอื่นๆ จาก gads✓life",
  url: "/news",
});

/* ─── All unique categories for filter chips ─── */
const allCategories = ["ทั้งหมด", ...Array.from(new Set(mockNews.map((n) => n.category)))];

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
