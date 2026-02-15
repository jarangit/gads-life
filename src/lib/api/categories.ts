/**
 * Category API functions — thin wrappers around `http`.
 *
 * These are **plain async functions** (no hooks) so they can be:
 *   • used inside React Query hooks
 *   • called from server components / route handlers
 *   • unit-tested without React
 */

import { http } from "@/lib/api/http";
import type {
  CategoryWithProductsDto,
  PaginatedResponse,
} from "@/lib/api/types";

// ---- Params ----

export interface ListCategoriesParams {
  page?: number;
  limit?: number;
}

// ---- Functions ----

/** GET /public/categories — paginated list of active categories */
export async function fetchCategories(
  params?: ListCategoriesParams,
  signal?: AbortSignal,
): Promise<PaginatedResponse<CategoryWithProductsDto>> {
  return http<PaginatedResponse<CategoryWithProductsDto>>(
    "/public/categories",
    { params: params as Record<string, string | number>, signal },
  );
}

/** GET /public/categories/:slug — single category with its products */
export async function fetchCategoryBySlug(
  slug: string,
  signal?: AbortSignal,
): Promise<CategoryWithProductsDto> {
  return http<CategoryWithProductsDto>(`/public/categories/${slug}`, {
    signal,
  });
}
