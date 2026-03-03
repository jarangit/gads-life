"use client";

/* ──────── News Article Content ──────── */

import { useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import type { NewsItem } from "@/data/news";
import type { ContentArticleResponse } from "@/lib/api";
import { Badge } from "@/components/ui/atoms/Badge";
import { NewsArticleHero, RelatedNewsSection } from "@/components/news";
import { useArticleById, useArticles } from "@/hooks/useArticles";

export interface NewsArticleContentProps {
  slug: string;
  id: string;
}

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

export function NewsArticleContent({ id }: NewsArticleContentProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const { data: articlesList } = useArticles({ page: 1, limit: 100 });
  const { data: article } = useArticleById(id);

  if (!article) return null;

  const item = toNewsItem(article);
  const sections =
    item.sections?.length > 0
      ? item.sections.slice().sort((a, b) => a.sortOrder - b.sortOrder)
      : [];

  const relatedItems = (articlesList?.items ?? [])
    .filter((entry) => entry.id !== item.id)
    .slice(0, 4)
    .map(toNewsItem);

  return (
    <div className="min-h-screen bg-background pb-16">
      <NewsArticleHero item={item} />

      <article className="mx-auto max-w-3xl px-4 mt-10 space-y-8">
        {sections.map((section) => {
          const isList = section.body.includes("\n- ");
          if (isList) {
            const items = section.body
              .split("\n")
              .map((line) => line.trim())
              .filter((line) => line.startsWith("-"))
              .map((line) => line.replace(/^-\\s*/, ""));

            return (
              <div key={section.id} className="space-y-3">
                {section.heading && (
                  <h2 className="text-xl font-semibold text-foreground leading-snug">
                    {section.heading}
                  </h2>
                )}
                <ul className="space-y-2.5 text-lg leading-loose text-gray-700">
                  {items.map((text, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return (
            <div key={section.id} className="space-y-3">
              {section.heading && (
                <h2 className="text-xl font-semibold text-foreground leading-snug">
                  {section.heading}
                </h2>
              )}
              <p className="text-lg leading-loose text-gray-700">
                {section.body}
              </p>
            </div>
          );
        })}

        {item.tags && item.tags.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-600">แท็ก</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  size="xs"
                  variant="score"
                  className="bg-gray-100 text-gray-600"
                >
                  #{tag.value}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {relatedItems.length > 0 && <RelatedNewsSection items={relatedItems} />}

        <div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-brand transition-colors"
          >
            <FiArrowLeft />
            กลับไปยังหน้าข่าวทั้งหมด
          </Link>
        </div>
      </article>
    </div>
  );
}
