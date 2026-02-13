import { IBrandItemVm } from "@/types/models/brand";
import { ICategoryItemVm } from "@/types/models/category";
import { IProductItemVm } from "@/types/models/product";

export type ProductListResponse = {
  items: { id: string; name: string; slug: string }[];
  total?: number;
};

export async function getProducts(): Promise<IProductItemVm[]> {
  const res = await fetch(`${process.env.NEST_API_BASE_URL}/public/products`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getCategories(): Promise<ICategoryItemVm[]> {
  const res = await fetch(
    `${process.env.NEST_API_BASE_URL}/public/categories`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getBrands(): Promise<IBrandItemVm[]> {
  const res = await fetch(`${process.env.NEST_API_BASE_URL}/public/brands`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}
