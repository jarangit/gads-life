import { IBrandItemVm } from "@/types/models/brand";
import { ICategoryItemVm } from "@/types/models/category";
import { IProductItemVm } from "@/types/models/product";

// Backend wraps all responses in { success, message, data }
type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type PaginationResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type ProductQueryParams = {
  page?: number;
  limit?: number;
  categoryId?: string;
  brandId?: string;
  sort?: "latest" | "priceAsc" | "priceDesc" | "scoreDesc";
};

type PaginationParams = {
  page?: number;
  limit?: number;
};

function buildQuery(params: Record<string, string | number | undefined>) {
  const qs = new URLSearchParams();
  for (const [key, val] of Object.entries(params)) {
    if (val !== undefined) qs.set(key, String(val));
  }
  const str = qs.toString();
  return str ? `?${str}` : "";
}

// ── Products ──────────────────────────────────────────────

export async function getProducts(
  params: ProductQueryParams = {},
): Promise<PaginationResult<IProductItemVm>> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/products${buildQuery(params)}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  const json: ApiResponse<PaginationResult<IProductItemVm>> = await res.json();
  return json.data;
}

export async function getProductById(id: string): Promise<IProductItemVm> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/products/${id}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch product");
  const json: ApiResponse<IProductItemVm> = await res.json();
  return json.data;
}

// ── Categories ────────────────────────────────────────────

export async function getCategories(
  params: PaginationParams = {},
): Promise<PaginationResult<ICategoryItemVm>> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/categories${buildQuery(params)}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  const json: ApiResponse<PaginationResult<ICategoryItemVm>> = await res.json();
  return json.data;
}

export async function getCategoryBySlug(
  slug: string,
): Promise<ICategoryItemVm> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/categories/${slug}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch category");
  const json: ApiResponse<ICategoryItemVm> = await res.json();
  return json.data;
}

// ── Brands ────────────────────────────────────────────────

export async function getBrands(
  params: PaginationParams = {},
): Promise<PaginationResult<IBrandItemVm>> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/brands${buildQuery(params)}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch brands");
  const json: ApiResponse<PaginationResult<IBrandItemVm>> = await res.json();
  return json.data;
}
