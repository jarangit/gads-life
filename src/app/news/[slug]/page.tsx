/* ──────── News Article Page ──────── */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FiArrowLeft,
  FiExternalLink,
  FiCalendar,
  FiTag,
  FiClock,
} from "react-icons/fi";
import { mockNews } from "@/data/news";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";
import { typography, radius, transitions } from "@/components/ui";
import { Badge } from "@/components/ui/atoms/Badge";
import { getCategoryTone } from "../categoryStyles";

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

/* ──── Related News Card ──── */
function RelatedCard({ slug }: { slug: string }) {
  const item = mockNews.find((n) => n.slug === slug);
  if (!item) return null;
  const tone = getCategoryTone(item.category);
  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group flex flex-col gap-2 bg-white border border-gray-100 p-4",
        radius.xl,
        `hover:shadow-md ${transitions.allNormal}`,
      )}
    >
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-semibold border",
          tone.bg,
          tone.text,
          tone.border,
        )}
      >
        {item.category}
      </span>
      <p className="text-sm font-medium leading-snug text-foreground group-hover:text-brand-dark line-clamp-2 transition-colors duration-150">
        {item.title}
      </p>
      <span className="text-xs text-gray-400">
        {formatRelativeTime(item.publishedAt)}
      </span>
    </Link>
  );
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

  const tone = getCategoryTone(item.category);
  const relatedItems = item.relatedSlugs ?? [];
  const readingMinutes = Math.max(1, Math.round(item.readingTimeSeconds / 60));

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero band ── */}
      <div className="bg-white border-b border-gray-100">
        <div className=" px-4 py-8 space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400">
            <Link
              href="/"
              className="hover:text-brand transition-colors duration-150"
            >
              หน้าแรก
            </Link>
            <span>/</span>
            <Link
              href="/news"
              className="hover:text-brand transition-colors duration-150"
            >
              ข่าวสินค้า
            </Link>
            <span>/</span>
            <span className="max-w-50 truncate text-gray-500">
              {item.title}
            </span>
          </nav>

          {/* Title */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold border",
                  tone.bg,
                  tone.text,
                  tone.border,
                )}
              >
                <FiTag className="text-[11px]" />
                {item.category}
              </span>
              <Badge
                size="xs"
                variant="info"
                className="bg-gray-100 text-gray-700"
              >
                {item.type}
              </Badge>
              <Badge
                size="xs"
                variant="success"
                className="bg-brand/10 text-brand-dark"
              >
                {item.status === "PUBLISHED" ? "เผยแพร่แล้ว" : "ร่าง"}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold leading-snug text-foreground">
              {item.title}
            </h1>

            {item.summary && (
              <p className="text-base text-gray-600 leading-relaxed">
                {item.summary}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-gray-400" />
                {formatRelativeTime(item.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-px bg-gray-300" />
                แหล่งข่าว:&nbsp;
                <span className="font-medium text-foreground">
                  {item.source}
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-px bg-gray-300" />
                <FiClock className="text-gray-400" />
                {readingMinutes} นาที
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Image placeholder ── */}
      <div className=" px-4">
        <div
          className={cn(
            "my-6 flex h-48 items-center justify-center bg-gray-50 border border-dashed border-gray-200 sm:h-64 overflow-hidden",
            radius["2xl"],
          )}
        >
          {item.heroImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.heroImage}
              alt={item.heroImageAlt ?? item.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-4xl opacity-20">📰</span>
          )}
        </div>
      </div>

      {/* ── Article body ── */}
      <section className=" px-4 pb-10">
        <div
          className={cn(
            "bg-white p-6 sm:p-8 border border-gray-100 space-y-6",
            radius["2xl"],
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
                    className="space-y-2"
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
                      <p className="text-base leading-relaxed text-gray-700">
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
                    className="space-y-2"
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
                    <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
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
            <h2
              className={cn(
                "mb-3 text-base font-semibold text-foreground",
                typography.leading.tight,
              )}
            >
              สินค้าที่กล่าวถึง
            </h2>
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
            <h3 className="text-sm font-semibold text-gray-700 mb-2">แท็ก</h3>
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
          <div className="mt-8">
            <h2
              className={cn(
                "mb-3 text-base font-semibold text-foreground",
                typography.leading.tight,
              )}
            >
              ข่าวที่เกี่ยวข้อง
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedItems.map((relSlug) => (
                <RelatedCard key={relSlug} slug={relSlug} />
              ))}
            </div>
          </div>
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
