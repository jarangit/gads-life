"use client";

/* ──────── News Content ──────── */

import Link from "next/link";
import type { NewsItem } from "@/data/news";
import type { ContentArticleResponse } from "@/lib/api";
import { FilterChip } from "@/components/ui/atoms/FilterChip";
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

  const allTags = [
    "ทั้งหมด",
    ...Array.from(
      new Set(
        newsItems.flatMap((item) => item.tags?.map((tag) => tag.value) ?? []),
      ),
    ),
  ];

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
            ข่าว / News
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

      {/* Tag filter chips (static — no client interaction needed for now) */}
      {/* <div className="flex gap-2 flex-wrap mb-8">
        {allTags.map((tag) => (
          <FilterChip key={tag} label={tag} selected={tag === "ทั้งหมด"} />
        ))}
      </div> */}

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
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
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
