"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "@/lib/api/product/products";
import {
  ScoreCard,
  HeroImageCard,
  QuickVerdictCard,
  KeyHighlightsCard,
  WeaknessesCard,
  BeforePurchaseCard,
  AfterUsageCard,
  ProsCard,
  ConsCard,
  FinalVerdictCard,
} from "@/components/ui/organisms";
import { Button } from "@/components/ui";

interface ProductDetailClientProps {
  slug: string;
}

export default function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProductBySlug(slug),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-gray-500">ไม่พบข้อมูลสินค้า</p>
        <Link href="/products" className="text-brand hover:underline">
          กลับไปหน้าสินค้าทั้งหมด
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Link
          href="/products"
          className="text-gray-600 hover:text-black font-medium flex items-center gap-1"
        >
          <FiArrowLeft /> กลับไปหน้าสินค้าทั้งหมด
        </Link>
        {product.affiliateLink && (
          <Button
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            radius="full"
            className="gap-2"
          >
            เช็คราคา <FiArrowRight />
          </Button>
        )}
      </div>

      {/* Product Title */}
      <div className="max-w-7xl mx-auto mb-8">
        {product.category && (
          <span className="text-brand text-sm font-semibold tracking-wider uppercase">
            {product.category.nameTh || product.category.nameEn}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
          {product.name}
        </h1>
        <p className="text-xl text-gray-500 mt-2">{product.subtitle}</p>
      </div>

      {/* Bento Grid - Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <ScoreCard
          overallScore={product.overallScore}
          ratings={product.ratings}
          isRecommended={product.isRecommended}
          className="md:col-span-2 lg:col-span-2"
        />
        <HeroImageCard
          image={product.image}
          name={product.name}
          className="md:col-span-2 lg:col-span-2"
        />
        {product.quickVerdict && (
          <QuickVerdictCard
            quickVerdict={product.quickVerdict}
            tags={product.quickVerdictTags}
            className="md:col-span-2 lg:col-span-2"
          />
        )}
        {product.keyHighlights && product.keyHighlights.length > 0 && (
          <KeyHighlightsCard
            highlights={product.keyHighlights}
            className="md:col-span-2 lg:col-span-3"
          />
        )}
        {product.weaknesses && product.weaknesses.length > 0 && (
          <WeaknessesCard
            weaknesses={product.weaknesses}
            className="md:col-span-2 lg:col-span-3"
          />
        )}
      </div>

      {/* Review Section - Before/After */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {product.beforePurchasePoints && product.beforePurchasePoints.length > 0 && (
          <BeforePurchaseCard
            points={product.beforePurchasePoints}
            className="lg:col-span-2"
          />
        )}
        {product.afterUsagePoints && product.afterUsagePoints.length > 0 && (
          <AfterUsageCard
            points={product.afterUsagePoints}
            className="lg:col-span-2"
          />
        )}
      </div>

      {/* Pros & Cons */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {product.pros && product.pros.length > 0 && (
          <ProsCard pros={product.pros} />
        )}
        {product.cons && product.cons.length > 0 && (
          <ConsCard cons={product.cons} />
        )}
      </div>

      {/* Final Verdict */}
      {product.finalVerdictPoints && product.finalVerdictPoints.length > 0 && (
        <div className="max-w-7xl mx-auto mb-8">
          <FinalVerdictCard
            points={product.finalVerdictPoints}
            pricing={product.pricing}
            price={product.price}
            affiliateLink={product.affiliateLink}
          />
        </div>
      )}
    </div>
  );
}