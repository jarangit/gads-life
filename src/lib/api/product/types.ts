/* ──────────────────────────────────────────────
 * Product API response types
 * ──────────────────────────────────────────────*/

import type { Brand, PaginatedResponse } from "@/lib/api/category/types";

// ---- Product Item ----

export interface ProductResponse {
  id: string;
  name: string;
  subtitle: string;
  image: string | null;
  overallScore: number;
  isRecommended: boolean;
  price: number;
  currency: string;
  priceLabel: string;
  affiliateLink: string | null;
  lastUpdated: string;
  status: string;
  categoryId: string | null;
  brandId: string | null;
  category: {
    id: string;
    slug: string;
    nameTh: string;
    nameEn: string | null;
  } | null;
  brand: Brand | null;
  ratings: ProductRating[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductRating {
  id: string;
  productId: string;
  subCategory: string;
  score: number;
}

// ---- Paginated list ----

export type IProductListResponse = PaginatedResponse<ProductResponse>;

// ---- Query params ----

export type ProductSortOption = "latest" | "priceAsc" | "priceDesc" | "scoreDesc";

export interface ListProductsParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  brandId?: string;
  sort?: ProductSortOption;
}
