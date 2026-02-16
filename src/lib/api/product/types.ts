/* ──────────────────────────────────────────────
 * Product API response types
 * ──────────────────────────────────────────────*/

import type { Brand, PaginatedResponse } from "@/lib/api/category/types";

// ---- Product Item ----

export interface ProductResponse {
  id: string;
  slug: string;
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

// ---- Product Detail Sub-types ----

export interface ProductKeyHighlight {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductWeakness {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductBeforePurchasePoint {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductAfterUsagePoint {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductPro {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductCon {
  id: string;
  content: string;
  sortOrder: number;
}

export interface ProductQuickVerdict {
  id: string;
  quote: string;
  description: string;
}

export interface ProductQuickVerdictTag {
  id: string;
  tag: string;
  sortOrder: number;
}

export interface ProductPricing {
  id: string;
  price: number;
  currency: string;
  priceLabel: string;
}

export enum FinalVerdictType {
  BUY_IF = "BUY_IF",
  SKIP_IF = "SKIP_IF",
}

export interface ProductFinalVerdictPoint {
  id: number;
  type: FinalVerdictType;
  text: string;
  orderIndex: number;
}

// ---- Full Product Detail Response ----

export interface ProductDetailResponse extends ProductResponse {
  keyHighlights: ProductKeyHighlight[];
  weaknesses: ProductWeakness[];
  beforePurchasePoints: ProductBeforePurchasePoint[];
  afterUsagePoints: ProductAfterUsagePoint[];
  pros: ProductPro[];
  cons: ProductCon[];
  quickVerdict: ProductQuickVerdict | null;
  quickVerdictTags: ProductQuickVerdictTag[];
  pricing: ProductPricing | null;
  finalVerdictPoints: ProductFinalVerdictPoint[];
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
