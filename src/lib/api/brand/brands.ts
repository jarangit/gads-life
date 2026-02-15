/**
 * Brand API functions — thin wrappers around `http`.
 */

import { http } from "@/lib/api/http";
import type { IBrandListResponse, ListBrandsParams } from "@/lib/api/brand/types";

/** GET /public/brands — paginated list of brands with published products */
export async function fetchBrands(
  params?: ListBrandsParams,
  signal?: AbortSignal,
): Promise<IBrandListResponse> {
  return http<IBrandListResponse>("/public/brands", {
    params: params as Record<string, string | number>,
    signal,
  });
}
