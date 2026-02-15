import type { Metadata } from "next";
import { fetchCategories } from "@/lib/api/category/categories";
import CategoryDetailContent from "./CategoryDetailContent";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  // Attempt to build a nice title; fails gracefully to a generic one
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title,
    description: `ดูสินค้าแนะนำในหมวดหมู่ ${title} จาก gads✓life`,
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  return <CategoryDetailContent slug={slug} />;
}

/**
 * Optionally pre-generate known category paths at build time.
 * This fetches the public categories list from the API;
 * if the API is unreachable at build time it falls back to an empty array
 * (pages will be generated on-demand via ISR).
 */
export async function generateStaticParams() {
  try {
    const data = await fetchCategories({ page: 1, limit: 100 });
    return data.items.map((item) => ({ slug: item.category.slug }));
  } catch {
    return [];
  }
}
