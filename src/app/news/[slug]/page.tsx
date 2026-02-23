/* ──────── News Article Page ──────── */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft, FiExternalLink, FiCalendar, FiTag } from "react-icons/fi";
import { mockNews } from "@/data/news";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatRelativeTime } from "@/components/ui/utils";
import { cn } from "@/utils/cn";

/* ──── Category colors (matches /news/page.tsx) ──── */
const categoryColors: Record<string, string> = {
  iPhone: "bg-blue-100 text-blue-700",
  Mac: "bg-gray-100 text-gray-700",
  "Apple Watch": "bg-orange-100 text-orange-700",
  iOS: "bg-purple-100 text-purple-700",
  AirPods: "bg-green-100 text-green-700",
  iPad: "bg-pink-100 text-pink-700",
};

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
    title: item.title,
    description: item.excerpt,
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
  const colorClass = categoryColors[item.category] ?? "bg-gray-100 text-gray-700";
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:shadow-md"
    >
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium",
          colorClass
        )}
      >
        {item.category}
      </span>
      <p className="text-sm font-medium leading-snug text-foreground group-hover:text-brand-dark line-clamp-2 transition-colors duration-150">
        {item.title}
      </p>
      <span className="text-xs text-gray-400">{formatRelativeTime(item.publishedAt)}</span>
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

  const colorClass = categoryColors[item.category] ?? "bg-gray-100 text-gray-700";
  const paragraphs = item.body ?? [item.excerpt];
  const relatedItems = item.relatedSlugs ?? [];

  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero band ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand transition-colors duration-150">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-brand transition-colors duration-150">
              ข่าวสินค้า
            </Link>
            <span>/</span>
            <span className="max-w-50 truncate text-gray-500">{item.title}</span>
          </nav>

          {/* Category badge */}
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
              colorClass
            )}
          >
            <FiTag className="text-[11px]" />
            {item.category}
          </span>

          {/* Title */}
          <h1 className="mb-4 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            {item.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-gray-400" />
              {formatRelativeTime(item.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3.5 w-px bg-gray-300" />
              แหล่งข่าว:&nbsp;
              <span className="font-medium text-foreground">{item.source}</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Image placeholder ── */}
      <div className="mx-auto max-w-3xl px-4">
        <div className="my-6 flex h-48 items-center justify-center rounded-2xl bg-gray-100 sm:h-64">
          <span className="text-4xl opacity-20">🍎</span>
        </div>
      </div>

      {/* ── Article body ── */}
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* External source link */}
          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-150 hover:bg-gray-100 hover:text-foreground"
            >
              อ่านข่าวต้นฉบับที่ {item.source}
              <FiExternalLink className="text-xs" />
            </a>
          )}
        </div>

        {/* ── Related news ── */}
        {relatedItems.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-base font-semibold text-foreground">ข่าวที่เกี่ยวข้อง</h2>
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
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-brand"
          >
            <FiArrowLeft />
            กลับไปยังหน้าข่าวทั้งหมด
          </Link>
        </div>
      </section>
    </main>
  );
}
