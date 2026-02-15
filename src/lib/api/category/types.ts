/* ──────────────────────────────────────────────
 * API response types matching the NestJS backend
 * ──────────────────────────────────────────────*/

// ---- Shared ----

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ---- Brand ----

export interface Brand {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

// ---- Category ----

export interface CategoryItemResponse {
  id: string;
  slug: string;
  nameTh: string;
  nameEn: string | null;
  description: string | null;
  heroImage: string | null;
  isActive: number;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
  productCount: number;
}

// ---- Product Item (inside a category) ----

export interface ProductItemDto {
  id: string;
  slug: string;
  name: string;
  image: string | null;
  overallScore: number;
  isRecommended: boolean;
  price: number;
  currency: string;
  priceLabel: string;
  brand: Brand;
  lastUpdated: string;
}

// ---- Category with products ----

export interface CategoryWithProductsDto {
  category: CategoryItemResponse;
  items: ProductItemDto[];
  pagination: Pagination;
}

export interface ICategoryListResponse {
  items: CategoryItemResponse[];
  pagination: Pagination;
}
