"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { useCategoryBySlug } from "@/hooks";
import { CategoryDetailSkeleton, ErrorFallback } from "@/components/Skeleton";
import type { ProductItemDto } from "@/lib/api/types";

// ──────────────────────────────────────────────
//  Product card for category product listing
// ──────────────────────────────────────────────

function ProductItemCard({ product }: { product: ProductItemDto }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300 text-4xl">
            📦
          </div>
        )}

        {/* Recommended badge */}
        {product.isRecommended && (
          <div className="absolute top-3 left-3">
            <Badge variant="success">แนะนำ</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Brand */}
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {product.brand.name}
        </span>

        {/* Name */}
        <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Score */}
        <div className="flex items-center gap-1.5">
          <FiStar className="text-brand fill-brand w-4 h-4" />
          <span className="font-semibold text-gray-900">
            {product.overallScore.toFixed(1)}
          </span>
          <span className="text-gray-400 text-sm">/ 10</span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900">
          {product.priceLabel}
        </p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
//  Main category detail content
// ──────────────────────────────────────────────

interface Props {
  slug: string;
}

export default function CategoryDetailContent({ slug }: Props) {
  const { data, isLoading, isError, error, refetch } =
    useCategoryBySlug(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CategoryDetailSkeleton />
        <Footer />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <FiArrowLeft /> กลับไปหน้าหมวดหมู่
          </Link>
          <ErrorFallback
            message={error?.message}
            onRetry={() => refetch()}
          />
        </main>
        <Footer />
      </div>
    );
  }

  const { category, items, pagination } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back navigation */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <FiArrowLeft /> กลับไปหน้าหมวดหมู่
        </Link>

        {/* Category Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <Badge variant="default" className="mb-4">
            {category.nameTh || category.nameEn || category.slug}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category.nameTh || category.nameEn}
          </h1>
          {category.description && (
            <p className="text-lg text-gray-600 max-w-2xl">
              {category.description}
            </p>
          )}

          {/* Hero image */}
          {category.heroImage && (
            <div className="mt-6 relative rounded-xl overflow-hidden aspect-[3/1]">
              <Image
                src={category.heroImage}
                alt={category.nameTh || ""}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Stats */}
          <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-brand">
                {pagination.total}
              </div>
              <div className="text-sm text-gray-500">สินค้าทั้งหมด</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {items.filter((p) => p.isRecommended).length}
              </div>
              <div className="text-sm text-gray-500">แนะนำ</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {items.length > 0 ? (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              สินค้าในหมวดหมู่นี้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product) => (
                <ProductItemCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              ยังไม่มีสินค้าในหมวดหมู่นี้
            </p>
            <Link href="/categories">
              <Button variant="secondary" size="lg" className="mt-6">
                ดูหมวดหมู่อื่น
              </Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
