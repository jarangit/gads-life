/* ──────────────────────────────────────────────
 * Content Articles API response types
 * ──────────────────────────────────────────────*/

import type { PaginatedResponse } from "@/lib/api/category/types";

export type ContentArticleType = "NEWS" | "GUIDE" | "ANALYSIS";
export type ContentArticleStatus = "PUBLISHED" | "DRAFT";

export interface ContentArticleSectionResponse {
  id: number;
  articleId: number;
  heading: string | null;
  body: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContentArticleTagResponse {
  id: number;
  articleId: number;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContentArticleResponse {
  id: number;
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  type: ContentArticleType;
  status: ContentArticleStatus;
  publishedAt: string;
  isFeatured: 0 | 1;
  metaTitle: string;
  metaDescription: string;
  heroImage: string | null;
  heroImageAlt: string | null;
  sections: ContentArticleSectionResponse[];
  tags: ContentArticleTagResponse[];
  createdAt: string;
  updatedAt: string;
}

export type IContentArticleListResponse = PaginatedResponse<ContentArticleResponse>;

export interface ListContentArticlesParams {
  page?: number;
  limit?: number;
  type?: ContentArticleType;
  status?: ContentArticleStatus;
  isFeatured?: 0 | 1;
  search?: string;
}
