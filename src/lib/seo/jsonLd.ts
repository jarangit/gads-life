const SITE_NAME = "gads✓life";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gadslife.com";

export interface ProductReviewJsonLdParams {
  name: string;
  subtitle?: string | null;
  overallScore: number;
  image?: string | null;
  price?: number | null;
  brand?: { name?: string | null } | null;
  quickVerdict?: { description?: string | null } | null;
}

/**
 * Build JSON-LD structured data for product review
 */
export function buildProductReviewJsonLd(product: ProductReviewJsonLdParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `รีวิว ${product.name}`,
    reviewBody: product.quickVerdict?.description || product.subtitle,
    itemReviewed: {
      "@type": "Product",
      name: product.name,
      description: product.subtitle,
      image: product.image,
      brand: product.brand?.name
        ? {
            "@type": "Brand",
            name: product.brand.name,
          }
        : undefined,
      offers: product.price
        ? {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "THB",
          }
        : undefined,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.overallScore,
      bestRating: 10,
      worstRating: 0,
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Build JSON-LD structured data for breadcrumbs
 */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Build JSON-LD structured data for product list (category page)
 */
export function buildProductListJsonLd(
  category: { name: string; description?: string },
  products: Array<{ name: string; url: string; image?: string | null }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    description: category.description,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${SITE_URL}${product.url}`,
      image: product.image,
    })),
  };
}

/**
 * Build JSON-LD structured data for organization
 */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      // Add social media URLs here
      // "https://facebook.com/gadslife",
      // "https://twitter.com/gadslife",
    ],
  };
}
