"use client";

import React from "react";
import { FiPackage, FiSliders, FiX } from "react-icons/fi";
import {
  SectionHeader,
  FilterChip,
  SortSelect,
  ProductGridCard,
  EmptyState,
  ErrorFallback,
  Bone,
} from "@/components/ui";
import { useProducts, useBrands, useCategories } from "@/hooks";
import type { ProductSortOption } from "@/lib/api/product/types";

// ──────────────────────────────────────────────
//  Sort options
// ──────────────────────────────────────────────

const SORT_OPTIONS: { value: ProductSortOption; label: string }[] = [
  { value: "latest", label: "ล่าสุด" },
  { value: "scoreDesc", label: "คะแนนสูงสุด" },
  { value: "priceAsc", label: "ราคาน้อย → มาก" },
  { value: "priceDesc", label: "ราคามาก → น้อย" },
];

// ──────────────────────────────────────────────
//  Skeleton
// ──────────────────────────────────────────────

function ProductsPageSkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-black rounded-[2rem] p-8 md:p-12 space-y-4">
        <Bone className="h-4 w-32 rounded-full bg-white/10" />
        <Bone className="h-10 w-2/3 rounded-xl bg-white/10" />
        <Bone className="h-5 w-full max-w-lg rounded-lg bg-white/10" />
      </div>

      {/* Filter chips */}
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <Bone key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden">
            <Bone className="aspect-square w-full" />
            <div className="p-4 space-y-3">
              <Bone className="h-3 w-20 rounded-lg" />
              <Bone className="h-5 w-3/4 rounded-lg" />
              <Bone className="h-4 w-1/3 rounded-lg" />
              <Bone className="h-6 w-1/2 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
//  Pagination
// ──────────────────────────────────────────────

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        ← ก่อนหน้า
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={`w-10 h-10 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
              p === page
                ? "bg-brand text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        ถัดไป →
      </button>
    </div>
  );
}

// ──────────────────────────────────────────────
//  Main content
// ──────────────────────────────────────────────

export default function ProductsContent() {
  // Filter state
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<
    string | undefined
  >(undefined);
  const [selectedBrandId, setSelectedBrandId] = React.useState<
    string | undefined
  >(undefined);
  const [sort, setSort] = React.useState<ProductSortOption>("latest");
  const [page, setPage] = React.useState(1);

  // Reset page when filters change
  React.useEffect(() => {
    setPage(1);
  }, [selectedCategoryId, selectedBrandId, sort]);

  // Data fetching
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
    error: productsErr,
    refetch: refetchProducts,
  } = useProducts({
    page,
    limit: 20,
    categoryId: selectedCategoryId,
    brandId: selectedBrandId,
    sort,
  });

  const { data: categoriesData } = useCategories({ page: 1, limit: 100 });
  const { data: brandsData } = useBrands({ page: 1, limit: 100 });

  const categories = categoriesData?.items ?? [];
  const brands = brandsData?.items ?? [];
  const products = productsData?.items ?? [];
  const totalProducts = productsData?.total ?? 0;
  const totalPages = productsData?.totalPages ?? 0;

  const hasActiveFilters = !!selectedCategoryId || !!selectedBrandId;

  function clearFilters() {
    setSelectedCategoryId(undefined);
    setSelectedBrandId(undefined);
    setSort("latest");
    setPage(1);
  }

  // Initial loading (no data at all)
  if (productsLoading && !productsData) {
    return <ProductsPageSkeleton />;
  }

  return (
    <div className="space-y-8 pb-12">
      {/* ── Hero Section ── */}
      <section>
        <div className="bg-black rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-brand text-sm font-semibold tracking-wider uppercase">
              ALL PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              สินค้าทั้งหมด
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              คัดสรรสินค้าจากการใช้งานจริง กรองตามหมวดหมู่หรือแบรนด์
              เลือกของดีได้ง่ายขึ้น
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-brand">
                  {totalProducts}
                </div>
                <div className="text-gray-500 text-sm">สินค้าทั้งหมด</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {products.filter((p) => p.isRecommended).length > 0
                    ? products.filter((p) => p.isRecommended).length + "+"
                    : "—"}
                </div>
                <div className="text-gray-500 text-sm">แนะนำ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters Section ── */}
      <section className="space-y-4">
        {/* Filter header + sort */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-gray-700">
            <FiSliders className="text-lg" />
            <span className="font-semibold">กรอง</span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1 ml-2 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
              >
                <FiX className="text-sm" />
                ล้างตัวกรอง
              </button>
            )}
          </div>
          <SortSelect
            options={SORT_OPTIONS}
            value={sort}
            onChange={setSort}
          />
        </div>

        {/* Category chips */}
        {categories.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              หมวดหมู่
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="ทั้งหมด"
                selected={!selectedCategoryId}
                onClick={() => setSelectedCategoryId(undefined)}
              />
              {categories.map((cat) => (
                <FilterChip
                  key={cat.id}
                  label={cat.nameTh || cat.nameEn || cat.slug}
                  selected={selectedCategoryId === cat.id}
                  count={cat.productCount ?? undefined}
                  onClick={() =>
                    setSelectedCategoryId(
                      selectedCategoryId === cat.id ? undefined : cat.id,
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Brand chips */}
        {brands.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              แบรนด์
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="ทั้งหมด"
                selected={!selectedBrandId}
                onClick={() => setSelectedBrandId(undefined)}
              />
              {brands.map((brand) => (
                <FilterChip
                  key={brand.id}
                  label={brand.name}
                  selected={selectedBrandId === brand.id}
                  count={brand.publishedProductsCount}
                  onClick={() =>
                    setSelectedBrandId(
                      selectedBrandId === brand.id ? undefined : brand.id,
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Products Grid ── */}
      <section>
        <SectionHeader
          icon={<FiPackage className="text-brand" />}
          title={
            hasActiveFilters
              ? `ผลลัพธ์ ${totalProducts} รายการ`
              : `สินค้าทั้งหมด ${totalProducts} รายการ`
          }
          size="md"
          className="mb-6"
        />

        {productsError ? (
          <ErrorFallback
            message={productsErr?.message}
            onRetry={() => refetchProducts()}
          />
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductGridCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  image={product.image}
                  overallScore={product.overallScore}
                  isRecommended={product.isRecommended}
                  priceLabel={product.priceLabel}
                  brandName={product.brand?.name}
                  categoryName={product.category?.nameTh ?? undefined}
                />
              ))}
            </div>

            {/* Loading overlay for page transitions */}
            {productsLoading && (
              <div className="flex justify-center py-8">
                <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <EmptyState
            icon={<FiPackage className="text-4xl text-gray-300" />}
            message="ไม่พบสินค้าที่ตรงกับตัวกรอง"
          >
            <button
              type="button"
              onClick={clearFilters}
              className="mt-2 px-6 py-2 rounded-full bg-brand text-white font-medium hover:bg-brand-hover transition-colors cursor-pointer"
            >
              ล้างตัวกรอง
            </button>
          </EmptyState>
        )}
      </section>
    </div>
  );
}
