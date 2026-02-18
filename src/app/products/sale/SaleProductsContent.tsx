"use client";

import { FiPackage, FiTag, FiZap } from "react-icons/fi";
import {
  SectionHeader,
  ProductGridCard,
  EmptyState,
  ErrorFallback,
  Bone,
} from "@/components/ui";
import { useHome } from "@/hooks/useHome";

function DealsPageSkeleton() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] p-8 md:p-12 space-y-4 bg-black">
        <Bone className="h-4 w-36 rounded-full bg-white/30" />
        <Bone className="h-10 w-2/3 rounded-xl bg-white/30" />
        <Bone className="h-5 w-full max-w-lg rounded-lg bg-white/30" />
      </div>
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

function formatPrice(price: number, currency = "THB") {
  const symbol = currency === "THB" ? "฿" : "";
  return `${symbol}${price.toLocaleString("th-TH")}`;
}

export default function SaleProductsContent() {
  const { data: homeData, isLoading, isError, error, refetch } = useHome();

  const deals = (homeData?.sellProducts ?? [])
    .filter(
      (product) =>
        typeof product.sellPrice === "number" &&
        product.sellPrice > 0 &&
        product.sellPrice < product.price,
    )
    .map((product) => {
      const sellPrice = product.sellPrice as number;
      const discountAmount = product.price - sellPrice;
      const discountPercent = Math.round((discountAmount / product.price) * 100);
      return { ...product, sellPrice, discountAmount, discountPercent };
    })
    .sort((a, b) => b.discountPercent - a.discountPercent);

  const maxDiscount = deals[0]?.discountPercent ?? 0;

  if (isLoading && !homeData) {
    return <DealsPageSkeleton />;
  }

  if (isError) {
    return (
      <ErrorFallback message={(error as Error)?.message} onRetry={() => refetch()} />
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <section>
        <div className="rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden bg-black">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand">
              <FiZap />
              Secret Deals
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              สินค้ากำลังลดราคา
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              หน้านี้รวมดีลที่ลดจริง ณ ตอนนี้ สำหรับคนที่เข้ามาดูโดยเฉพาะ
              รีบเช็กก่อนหมดโปร
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold">{deals.length}</div>
                <div className="text-gray-400 text-sm">ดีลที่กำลังลด</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">{maxDiscount}%</div>
                <div className="text-gray-400 text-sm">ส่วนลดสูงสุด</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          icon={<FiTag className="text-brand" />}
          title={`ดีลลดราคาวันนี้ ${deals.length} รายการ`}
          size="md"
          className="mb-6"
        />

        {deals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {deals.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-black bg-brand shadow-sm">
                  <FiTag className="text-[11px]" />
                  ลด {product.discountPercent}%
                </div>
                <ProductGridCard
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  image={product.image}
                  overallScore={product.overallScore}
                  isRecommended={product.isRecommended}
                  priceLabel={formatPrice(product.sellPrice, product.currency)}
                  brandName={product.brand?.name}
                  categoryName={product.category?.nameTh ?? undefined}
                />
                <p className="mt-2 text-sm text-gray-500">
                  จาก{" "}
                  <span className="line-through">
                    {formatPrice(product.price, product.currency)}
                  </span>{" "}
                  เหลือ{" "}
                  <span className="font-semibold text-brand-dark">
                    {formatPrice(product.sellPrice, product.currency)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<FiPackage className="text-4xl text-gray-300" />}
            message="ตอนนี้ยังไม่มีสินค้าลดราคาที่กำลังแสดงอยู่"
          />
        )}
      </section>
    </div>
  );
}
