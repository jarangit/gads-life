"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import {
  Badge,
  Button,
  ProductGridCard,
  EmptyState,
  ErrorFallback,
} from "@/components/ui";
import { Header } from "@/components/Header";
import { Footer } from "@/components/layouts/Footer";
import { useCategoryBySlug } from "@/hooks";
import { CategoryDetailSkeleton } from "@/components/Skeleton";

// ──────────────────────────────────────────────
//  Main category detail content
// ──────────────────────────────────────────────

interface Props {
  slug: string;
}

export default function CategoryDetailContent({ slug }: Props) {
  const { data, isLoading, isError, error, refetch } = useCategoryBySlug(slug);

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
          <ErrorFallback message={error?.message} onRetry={() => refetch()} />
        </main>
        <Footer />
      </div>
    );
  }

  const { category, items, pagination } = data;

  return (
    <div className="">
      <main className="">
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
            <div className="mt-6 relative rounded-xl overflow-hidden aspect-3/1">
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
                <ProductGridCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  image={product.image}
                  overallScore={product.overallScore}
                  isRecommended={product.isRecommended}
                  priceLabel={product.priceLabel}
                  brandName={product.brand.name}
                  categoryName={category.nameTh || category.nameEn || category.slug}
                />
              ))}
            </div>
          </section>
        ) : (
          <EmptyState message="ยังไม่มีสินค้าในหมวดหมู่นี้">
            <Link href="/categories">
              <Button variant="secondary" size="lg">
                ดูหมวดหมู่อื่น
              </Button>
            </Link>
          </EmptyState>
        )}
      </main>
    </div>
  );
}
