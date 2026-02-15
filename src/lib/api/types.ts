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

export interface CategoryDto {
  id: string;
  slug: string;
  nameTh: string;
  nameEn: string | null;
  description: string | null;
  heroImage: string | null;
  isActive: boolean;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
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
  category: CategoryDto;
  items: ProductItemDto[];
  pagination: Pagination;
}
