/* ──────── News Article Page ──────── */
import type { Metadata } from "next";
import { fetchContentArticles } from "@/lib/api";
import { buildMetadata } from "@/lib/seo/metadata";
import { NewsArticleContent } from "./NewsArticleContent";

// Allow on-demand rendering for slugs not pre-generated
export const dynamicParams = true;

/* ──── Metadata ──── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await fetchContentArticles({ page: 1, limit: 100 });
    const item = response.items.find((entry) => entry.slug === slug);
    if (!item) return {};
    return buildMetadata({
      title: item.metaTitle ?? item.title,
      description: item.metaDescription ?? item.summary ?? item.excerpt,
      url: `/news/${item.slug}`,
    });
  } catch {
    return {};
  }
}

/* ──── Static Params ──── */
export async function generateStaticParams() {
  try {
    const response = await fetchContentArticles({ page: 1, limit: 100 });
    return response.items.map((item) => ({ slug: item.slug }));
  } catch {
    return [];
  }
}

/* ──── Page ──── */
export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let articleId: string = "";
  try {
    const response = await fetchContentArticles({ page: 1, limit: 100 });
    const matched = response.items.find((item) => item.slug === slug);
    if (matched) articleId = String(matched.id);
  } catch {
    // fall through — client will handle missing id gracefully
  }

  return <NewsArticleContent id={articleId} slug={slug} />;
}
