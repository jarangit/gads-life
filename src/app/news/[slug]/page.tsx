/* ──────── News Article Page ──────── */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { mockNews } from "@/data/news";
import { buildMetadata } from "@/lib/seo/metadata";
import { cn } from "@/utils/cn";
import { radius, transitions, typography } from "@/components/ui";
import { Badge } from "@/components/ui/atoms/Badge";
import {
  NewsArticleHero,
  RelatedNewsSection,
} from "@/components/news";

/* ──── Metadata ──── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.metaTitle ?? item.title,
    description: item.metaDescription ?? item.summary ?? item.excerpt,
    url: item.canonicalUrl ?? `/news/${item.slug}`,
  });
}

/* ──── Static Params ──── */
export function generateStaticParams() {
  return mockNews.map((item) => ({ slug: item.slug }));
}

/* ──── Page ──── */
export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) notFound();

  const relatedItems = item.relatedSlugs ?? [];

  return (
    <main className="min-h-screen bg-background">
      {/* ── Article hero with breadcrumb, title, meta ── */}
      <NewsArticleHero item={item} />

      {/* ── Article body ── */}
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div
          className={cn(
            "bg-white p-6 sm:p-8 border border-gray-100 space-y-7",
            radius["2xl"],
            "shadow-xs",
          )}
        >
          {(item.sections?.length
            ? item.sections
            : [
                {
                  type: "TEXT",
                  title: null,
                  body: item.excerpt,
                  orderIndex: 1,
                },
              ]
          )
            .slice()
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((section, idx) => {
              if (section.type === "TEXT") {
                return (
                  <div
                    key={`${section.title ?? "text"}-${idx}`}
                    className="space-y-2.5"
                  >
                    {section.title && (
                      <h2
                        className={cn(
                          "text-lg font-semibold text-foreground",
                          typography.leading.tight,
                        )}
                      >
                        {section.title}
                      </h2>
                    )}
                    {section.body && (
                      <p className="text-[15px] leading-relaxed text-gray-700 whitespace-pre-line">
                        {section.body}
                      </p>
                    )}
                  </div>
                );
              }

              if (section.type === "BULLET" && "items" in section) {
                return (
                  <div
                    key={`${section.title ?? "bullet"}-${idx}`}
                    className="space-y-2.5"
                  >
                    {section.title && (
                      <h2
                        className={cn(
                          "text-lg font-semibold text-foreground",
                          typography.leading.tight,
                        )}
                      >
                        {section.title}
                      </h2>
                    )}
                    <ul className="list-disc pl-5 space-y-1.5 text-[15px] leading-relaxed text-gray-700">
                      {(section.items ?? [])
                        .slice()
                        .sort((a, b) => a.orderIndex - b.orderIndex)
                        .map((item) => (
                          <li key={item.orderIndex}>{item.text}</li>
                        ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}

          {/* External source link */}
          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-full border bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600",
                "hover:bg-gray-100 hover:text-foreground",
                transitions.colorsNormal,
              )}
            >
              อ่านข่าวต้นฉบับที่ {item.source}
              <FiExternalLink className="text-xs" />
            </a>
          )}
        </div>

        {/* ── Related news ── */}
        {item.productLinks && item.productLinks.length > 0 && (
          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              สินค้าที่กล่าวถึง
            </p>
            <div className="flex flex-wrap gap-2">
              {item.productLinks
                .slice()
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((link) => (
                  <Badge
                    key={`${link.productId}-${link.orderIndex}`}
                    size="xs"
                    variant="status"
                    className="bg-gray-50 text-gray-700 border border-gray-200"
                  >
                    {link.productId} · {link.relationType.toLowerCase()}
                  </Badge>
                ))}
            </div>
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">แท็ก</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge
                  key={tag.tagId}
                  size="xs"
                  variant="score"
                  className="bg-gray-100 text-gray-700"
                >
                  #{tag.tagId}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {relatedItems.length > 0 && (
          <RelatedNewsSection relatedSlugs={relatedItems} className="mt-8" />
        )}

        {/* ── Back link ── */}
        <div className="mt-8">
          <Link
            href="/news"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-gray-500",
              `hover:text-brand ${transitions.colorsNormal}`,
            )}
          >
            <FiArrowLeft />
            กลับไปยังหน้าข่าวทั้งหมด
          </Link>
        </div>
      </section>
    </main>
  );
}
