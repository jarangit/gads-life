/* ──────── News Article Page ──────── */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft } from "react-icons/fi";
import { mockNews } from "@/data/news";
import { buildMetadata } from "@/lib/seo/metadata";
import { cn } from "@/utils/cn";
import { Badge } from "@/components/ui/atoms/Badge";
import { NewsArticleHero, RelatedNewsSection } from "@/components/news";

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

  const sections =
    item.sections?.length > 0
      ? item.sections.slice().sort((a, b) => a.sortOrder - b.sortOrder)
      : [];
  const relatedItems = mockNews.filter((n) => n.slug !== item.slug);

  return (
    <main className="min-h-screen bg-background pb-16">
      {/* ── Badge, date, title, hero image ── */}
      <NewsArticleHero item={item} />

      {/* ── Article body ── */}
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
                <ul className="space-y-2.5 text-[15px] leading-loose text-gray-700">
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
              <p className="text-[15px] leading-loose text-gray-700">
                {section.body}
              </p>
            </div>
          );
        })}

        {/* Tags */}
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

        {/* Related news */}
        {relatedItems.length > 0 && (
          <RelatedNewsSection items={relatedItems} />
        )}

        {/* Back link */}
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
    </main>
  );
}
