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
  ICategoryListResponse,
  PaginatedResponse,
} from "@/lib/api/category/types";

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
): Promise<ICategoryListResponse> {
  const data = await http<ICategoryListResponse>("/public/categories", {
    params: params as Record<string, string | number>,
    signal,
  });
  return data;
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
