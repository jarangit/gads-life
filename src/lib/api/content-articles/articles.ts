/**
 * Content Articles API functions — thin wrappers around `http`.
 */

import { http } from "@/lib/api/http";
import type {
  ContentArticleDetailResponse,
  IContentArticleListResponse,
  ListContentArticlesParams,
} from "@/lib/api/content-articles/types";

/** GET /public/content-articles — paginated list of content articles */
export async function fetchContentArticles(
  params?: ListContentArticlesParams,
  signal?: AbortSignal,
): Promise<IContentArticleListResponse> {
  return http<IContentArticleListResponse>("/public/content-articles", {
    params: params as Record<string, string | number>,
    signal,
  });
}

/** GET /public/content-articles/:id — single content article detail */
export async function fetchContentArticleById(
  id: string | number,
  signal?: AbortSignal,
): Promise<ContentArticleDetailResponse> {
  return http<ContentArticleDetailResponse>(`/public/content-articles/${id}`, {
    signal,
  });
}
