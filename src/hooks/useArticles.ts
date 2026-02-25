import {
  fetchContentArticleById,
  fetchContentArticles,
  ListContentArticlesParams,
  queryKeys,
} from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useArticles(params?: ListContentArticlesParams) {
  return useQuery({
    queryKey: queryKeys.contentArticles.list(
      params as Record<string, string | number | boolean>,
    ),
    queryFn: ({ signal }) => fetchContentArticles(params, signal),
  });
}

export function useArticleById(id: string | number) {
  return useQuery({
    queryKey: queryKeys.contentArticles.detail(id),
    queryFn: ({ signal }) => fetchContentArticleById(id, signal),
    enabled: !!id,
  });
}
