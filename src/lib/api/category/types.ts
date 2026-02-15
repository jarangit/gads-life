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
  id: "tbk3Hhf1Eg";
  slug: "laptops";
  nameTh: "แล็ปท็อป edit";
  nameEn: "Laptop";
  description: "test";
  heroImage: null;
  isActive: 1;
  orderIndex: 0;
  createdAt: "2026-02-15T01:35:12.541Z";
  updatedAt: "2026-02-15T01:40:09.000Z";
  productCount: 0;
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
