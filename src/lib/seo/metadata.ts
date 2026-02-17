import type { Metadata } from "next";

const SITE_NAME = "gads✓life";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gadslife.com";

export interface BuildMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  image?: string | null;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/**
 * Build consistent metadata for any page
 */
export function buildMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = url ? `${SITE_URL}${url}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "gads life", "รีวิว", "review"].filter(Boolean),
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : [],
    },
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

/**
 * Build product review metadata
 */
export function buildProductMetadata(product: {
  name: string;
  subtitle?: string | null;
  overallScore: number;
  image?: string | null;
  slug: string;
  quickVerdict?: { description?: string | null } | null;
  category?: { nameTh?: string | null; nameEn?: string | null } | null;
  brand?: { name?: string | null } | null;
}): Metadata {
  const categoryName =
    product.category?.nameTh || product.category?.nameEn || "";
  const description =
    product.quickVerdict?.description ||
    product.subtitle ||
    `รีวิว ${product.name} แบบจัดเต็ม คะแนน ${product.overallScore}/10 พร้อมข้อดี ข้อเสีย และสรุปว่าควรซื้อไหม`;

  return buildMetadata({
    title: `${product.name} รีวิว ${product.overallScore}/10`,
    description,
    keywords: [product.name, categoryName, product.brand?.name || ""].filter(
      Boolean
    ),
    image: product.image,
    url: `/products/${product.slug}`,
    type: "article",
  });
}

/**
 * Build category page metadata
 */
export function buildCategoryMetadata(category: {
  nameEn: string;
  nameTh?: string;
  slug: string;
  description?: string;
}): Metadata {
  const name = category.nameTh || category.nameEn;

  return buildMetadata({
    title: `${name} - รวมรีวิวสินค้า`,
    description:
      category.description ||
      `รวมรีวิว${name}ทั้งหมด พร้อมคะแนน ข้อดี ข้อเสีย เปรียบเทียบก่อนตัดสินใจซื้อ`,
    keywords: [name, category.nameEn],
    url: `/category/${category.slug}`,
  });
}

/**
 * Not found metadata
 */
export function notFoundMetadata(type = "Product"): Metadata {
  return buildMetadata({
    title: `${type} Not Found`,
    description: `The requested ${type.toLowerCase()} could not be found.`,
    noIndex: true,
  });
}
