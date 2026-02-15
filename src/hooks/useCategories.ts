"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";
import {
  fetchCategories,
  fetchCategoryBySlug,
  type ListCategoriesParams,
} from "@/lib/api/category/categories";

// ──────────────────────────────────────────────
//  useCategories — paginated category list
// ──────────────────────────────────────────────

export function useCategories(params?: ListCategoriesParams) {
  return useQuery({
    queryKey: queryKeys.categories.list(
      params as Record<string, string | number | boolean>,
    ),
    queryFn: ({ signal }) => fetchCategories(params, signal),
  });
}

// ──────────────────────────────────────────────
//  useCategoryBySlug — single category detail
// ──────────────────────────────────────────────

export function useCategoryBySlug(slug: string) {
  return useQuery({
    queryKey: queryKeys.categories.detail(slug),
    queryFn: ({ signal }) => fetchCategoryBySlug(slug, signal),
    enabled: !!slug,
  });
}
