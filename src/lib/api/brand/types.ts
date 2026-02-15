/* ──────────────────────────────────────────────
 * Brand API response types
 * ──────────────────────────────────────────────*/

import type { PaginatedResponse } from "@/lib/api/category/types";

export interface BrandResponse {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  logoUrl: string | null;
  publishedProductsCount: number;
}

export type IBrandListResponse = PaginatedResponse<BrandResponse>;

export interface ListBrandsParams {
  page?: number;
  limit?: number;
}
