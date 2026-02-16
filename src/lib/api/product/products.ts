/**
 * Product API functions — thin wrappers around `http`.
 *
 * These are **plain async functions** (no hooks) so they can be:
 *   • used inside React Query hooks
 *   • called from server components / route handlers
 *   • unit-tested without React
 */

import { http } from "@/lib/api/http";
import type {
  IProductListResponse,
  ListProductsParams,
  ProductDetailResponse,
} from "@/lib/api/product/types";

// ---- Functions ----

/** GET /public/products — paginated list with optional filters */
export async function fetchProducts(
  params?: ListProductsParams,
  signal?: AbortSignal,
): Promise<IProductListResponse> {
  return http<IProductListResponse>("/public/products", {
    params: params as Record<string, string | number>,
    signal,
  });
}

/** GET /public/products/:id — single product detail */
export async function fetchProductById(
  id: string,
  signal?: AbortSignal,
): Promise<ProductDetailResponse> {
  return http<ProductDetailResponse>(`/public/products/${id}`, { signal });
}

/** GET /public/products/slug/:slug — single product detail by slug */
export async function fetchProductBySlug(
  slug: string,
  signal?: AbortSignal,
): Promise<ProductDetailResponse> {
  return http<ProductDetailResponse>(`/public/products/slug/${slug}`, { signal });
}
