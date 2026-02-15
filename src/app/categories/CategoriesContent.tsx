"use client";

import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { CategoryGrid } from "@/components/CategoryCard";
import { useCategories } from "@/hooks";
import { CategoryGridSkeleton, ErrorFallback } from "@/components/Skeleton";
import { ICategoryItemVm } from "@/types/models/category";

export default function CategoriesContent() {
  const { data, isLoading, isError, error, refetch } = useCategories();

  // Map API response → display Categories
  const categories = React.useMemo(
    () =>
      ((data?.items ?? []).map((item) => item) as unknown) as ICategoryItemVm[],
    [data],
  );

  const activeCount = data?.pagination.total ?? 0; // Assuming all returned items are active
  // const comingSoonCount = categories.filter((c) => c.isActive === "draft").length;

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-black rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-brand text-sm font-semibold tracking-wider uppercase">
              ALL CATEGORIES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              เลือกหมวดหมู่ที่สนใจ
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              เราคัดสินค้าคุณภาพจากหลากหลายหมวดหมู่ เพื่อให้คุณเลือกได้ง่ายขึ้น
              โดยไม่ต้องเสียเวลาค้นหาเอง
            </p>

            {/* Stats — only show when data is ready */}
            {!isLoading && (
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-brand">
                    {activeCount}
                  </div>
                  <div className="text-gray-500 text-sm">
                    หมวดหมู่พร้อมให้บริการ
                  </div>
                </div>
                {/* {comingSoonCount > 0 && (
                    <div>
                      <div className="text-3xl font-bold text-yellow-400">
                        {comingSoonCount}
                      </div>
                      <div className="text-gray-500 text-sm">เร็วๆ นี้</div>
                    </div>
                  )} */}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Grid — loading / error / data */}
      {isLoading ? (
        <CategoryGridSkeleton />
      ) : isError ? (
        <ErrorFallback message={error?.message} onRetry={() => refetch()} />
      ) : (
        <CategoryGrid categories={categories} title="หมวดหมู่ทั้งหมด" />
      )}

      {/* Trust Section */}
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-[2rem] p-6">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
              <FiCheck className="text-2xl text-brand" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              คัดสรรอย่างดี
            </h3>
            <p className="text-gray-500 text-sm">
              ทุกหมวดหมู่ผ่านการคัดเลือกจากทีมงาน ไม่ใช่แค่รวบรวมมาเยอะๆ
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <FiArrowRight className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              อัปเดตสม่ำเสมอ
            </h3>
            <p className="text-gray-500 text-sm">
              เราอัปเดตข้อมูลและรีวิวสินค้าใหม่ๆ ทุกเดือน
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              ตรงจุด ไม่อ้อม
            </h3>
            <p className="text-gray-500 text-sm">
              บอกตรงๆ ว่าอะไรดี อะไรไม่ดี ไม่ต้องอ่านยาว
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
