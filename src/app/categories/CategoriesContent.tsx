"use client";

import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { TrustCard } from "@/components/ui";
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
      <section className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TrustCard
            icon={<FiCheck className="text-2xl text-brand" />}
            title="คัดสรรอย่างดี"
            description="ทุกหมวดหมู่ผ่านการคัดเลือกจากทีมงาน ไม่ใช่แค่รวบรวมมาเยอะๆ"
            iconStyle="box"
            iconBg="bg-brand/10"
            radius="rounded-[2rem]"
          />
          <TrustCard
            icon={<FiArrowRight className="text-2xl text-purple-600" />}
            title="อัปเดตสม่ำเสมอ"
            description="เราอัปเดตข้อมูลและรีวิวสินค้าใหม่ๆ ทุกเดือน"
            iconStyle="box"
            iconBg="bg-purple-100"
            radius="rounded-[2rem]"
          />
          <TrustCard
            icon={<span className="text-2xl">🎯</span>}
            title="ตรงจุด ไม่อ้อม"
            description="บอกตรงๆ ว่าอะไรดี อะไรไม่ดี ไม่ต้องอ่านยาว"
            iconStyle="box"
            iconBg="bg-orange-100"
            radius="rounded-[2rem]"
          />
        </div>
      </section>
    </div>
  );
}
