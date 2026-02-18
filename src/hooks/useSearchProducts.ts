"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";
import { fetchProducts } from "@/lib/api/product/products";

// ──────────────────────────────────────────────
//  useSearchProducts — search products with debounced keyword
// ──────────────────────────────────────────────

const SEARCH_LIMIT = 8;
const MIN_SEARCH_LENGTH = 2;

export function useSearchProducts(search: string) {
  const trimmed = search.trim();
  const enabled = trimmed.length >= MIN_SEARCH_LENGTH;

  return useQuery({
    queryKey: queryKeys.products.list({ search: trimmed, limit: SEARCH_LIMIT }),
    queryFn: ({ signal }) =>
      fetchProducts({ search: trimmed, limit: SEARCH_LIMIT }, signal),
    enabled,
    staleTime: 1000 * 60, // 1 min — avoid re-fetching same keyword
    placeholderData: (prev) => prev, // keep previous results while refetching
  });
}
