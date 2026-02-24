/* ──────── News Article Page ──────── */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { mockNews } from "@/data/news";
import { buildMetadata } from "@/lib/seo/metadata";
import { cn } from "@/utils/cn";
import { transitions } from "@/components/ui";
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

  const sections = (
    item.sections?.length
      ? item.sections
      : [{ type: "TEXT", title: null, body: item.excerpt, orderIndex: 1 }]
  )
    .slice()
    .sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <main className="min-h-screen bg-background pb-16">
      {/* ── Badge, date, title, hero image ── */}
      <NewsArticleHero item={item} />

      {/* ── Article body ── */}
      <article className="mx-auto max-w-3xl px-4 mt-10 space-y-8">
        {sections.map((section, idx) => {
          if (section.type === "TEXT") {
            return (
              <div key={`text-${idx}`} className="space-y-3">
                {section.title && (
                  <h2 className="text-xl font-semibold text-foreground leading-snug">
                    {section.title}
                  </h2>
                )}
                {section.body && (
                  <p className="text-[15px] leading-loose text-gray-700">
                    {section.body}
                  </p>
                )}
              </div>
            );
          }

          if (section.type === "BULLET" && "items" in section) {
            return (
              <div key={`bullet-${idx}`} className="space-y-3">
                {section.title && (
                  <h2 className="text-xl font-semibold text-foreground leading-snug">
                    {section.title}
                  </h2>
                )}
                <ul className="space-y-2.5 text-[15px] leading-loose text-gray-700">
                  {(section.items ?? [])
                    .slice()
                    .sort((a, b) => a.orderIndex - b.orderIndex)
                    .map((it) => (
                      <li key={it.orderIndex} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                        {it.text}
                      </li>
                    ))}
                </ul>
              </div>
            );
          }

          return null;
        })}

        {/* External source */}
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600",
              `hover:bg-gray-50 hover:text-foreground ${transitions.colorsNormal}`
            )}
          >
            อ่านข่าวต้นฉบับที่ {item.source}
            <FiExternalLink className="text-xs" />
          </a>
        )}

        {/* Divider before meta sections */}
        <hr className="border-gray-100" />

        {/* Product links */}
        {item.productLinks && item.productLinks.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-600">สินค้าที่กล่าวถึง</p>
            <div className="flex flex-wrap gap-2">
              {item.productLinks
                .slice()
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((link) => (
                  <Badge
                    key={`${link.productId}-${link.orderIndex}`}
                    size="xs"
                    variant="status"
                    className="border border-gray-200 bg-white text-gray-600"
                  >
                    {link.productId} · {link.relationType.toLowerCase()}
                  </Badge>
                ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-600">แท็ก</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge
                  key={tag.tagId}
                  size="xs"
                  variant="score"
                  className="bg-gray-100 text-gray-600"
                >
                  #{tag.tagId}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Related news */}
        {relatedItems.length > 0 && (
          <RelatedNewsSection relatedSlugs={relatedItems} />
        )}

        {/* Back link */}
        <div>
          <Link
            href="/news"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-gray-400",
              `hover:text-brand ${transitions.colorsNormal}`
            )}
          >
            <FiArrowLeft />
            กลับไปยังหน้าข่าวทั้งหมด
          </Link>
        </div>
      </article>
    </main>
  );
}
