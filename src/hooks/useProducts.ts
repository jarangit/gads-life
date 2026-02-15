"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";
import {
  fetchProducts,
} from "@/lib/api/product/products";
import type { ListProductsParams } from "@/lib/api/product/types";
import { fetchBrands } from "@/lib/api/brand/brands";
import type { ListBrandsParams } from "@/lib/api/brand/types";

// ──────────────────────────────────────────────
//  useProducts — paginated product list with filters
// ──────────────────────────────────────────────

export function useProducts(params?: ListProductsParams) {
  return useQuery({
    queryKey: queryKeys.products.list(
      params as Record<string, string | number | boolean>,
    ),
    queryFn: ({ signal }) => fetchProducts(params, signal),
  });
}

// ──────────────────────────────────────────────
//  useBrands — paginated brand list
// ──────────────────────────────────────────────

export function useBrands(params?: ListBrandsParams) {
  return useQuery({
    queryKey: queryKeys.brands.list(
      params as Record<string, string | number | boolean>,
    ),
    queryFn: ({ signal }) => fetchBrands(params, signal),
  });
}
