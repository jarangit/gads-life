"use client";

/* ──────── News Content ──────── */

import Link from "next/link";
import type { NewsItem } from "@/data/news";
import type { ContentArticleResponse } from "@/lib/api";
import { NewsCard } from "@/components/news";
import { useArticles } from "@/hooks/useArticles";

function toNewsItem(item: ContentArticleResponse): NewsItem {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    excerpt: item.excerpt,
    type: item.type,
    status: item.status,
    publishedAt: item.publishedAt,
    isFeatured: item.isFeatured,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    heroImage: item.heroImage,
    heroImageAlt: item.heroImageAlt,
    sections: item.sections,
    tags: item.tags,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

export function NewsContent() {
  const { data } = useArticles({
    page: 1,
    limit: 20,
  });

  const newsItems = (data?.items ?? []).map(toNewsItem);
  const featured = newsItems.filter((item) => item.isFeatured === 1).slice(0, 2);
  const rest = newsItems.filter((item) => !featured.some((f) => f.id === item.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-10">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.08em]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            ข่าว / News
          </p>
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            อัปเดตข่าวเทคโนโลยี
          </h1>
          <p className="text-sm text-gray-500 max-w-md">
            ข่าวสารกระชับ ตรงประเด็น ไม่มีสปอนเซอร์
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-600 transition-colors">หน้าแรก</Link>
          <span>/</span>
          <span>ข่าว</span>
        </div>
      </div>

      {/* Featured grid – top 2 */}
      {featured.length > 0 && (
        <section className="mb-8">
          <p className="text-ทก font-semibold text-gray-600 uppercase tracking-[0.08em] mb-3">
            เด่นวันนี้
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((item) => (
              <NewsCard key={item.id} item={item} featured />
            ))}
          </div>
        </section>
      )}

      {/* Rest list */}
      {rest.length > 0 && (
        <section>
          <p className="text-ทก font-semibold text-gray-600 uppercase tracking-[0.08em] mb-3">
            ข่าวทั้งหมด
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Footer note */}
      <p className="mt-12 text-xs text-gray-500 text-center">
        ข้อมูลข่าวสารอาจมีการอัปเดต กรุณาตรวจสอบแหล่งข่าวต้นทางด้วยเสมอ
      </p>
    </div>
  );
}
