import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchProductBySlug } from "@/lib/api/product/products";
import {
  buildProductMetadata,
  notFoundMetadata,
  buildProductReviewJsonLd,
  JsonLd,
} from "@/lib/seo";
import ProductDetailClient from "./ProductDetailClient";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await fetchProductBySlug(slug);
    if (!product) return notFoundMetadata("Product");
    return buildProductMetadata({ ...product, slug });
  } catch {
    return notFoundMetadata("Product");
  }
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  let product;
  try {
    product = await fetchProductBySlug(slug);
  } catch {
    notFound();
  }

  if (!product) notFound();

  const jsonLd = buildProductReviewJsonLd(product);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProductDetailClient slug={slug} />
    </>
  );
}
