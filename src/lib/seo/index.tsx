import React from "react";

export {
  buildMetadata,
  buildProductMetadata,
  buildCategoryMetadata,
  notFoundMetadata,
} from "./metadata";
export type { BuildMetadataOptions } from "./metadata";

export {
  buildProductReviewJsonLd,
  buildBreadcrumbJsonLd,
  buildProductListJsonLd,
  buildOrganizationJsonLd,
} from "./jsonLd";
export type { ProductReviewJsonLdParams, BreadcrumbItem } from "./jsonLd";

/**
 * JsonLd Component - renders JSON-LD structured data
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    ></script>
  );
}
