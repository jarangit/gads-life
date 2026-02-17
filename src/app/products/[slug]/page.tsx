import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import type { Metadata } from "next";
import { fetchProductBySlug } from "@/lib/api/product/products";
import {
  buildProductMetadata,
  notFoundMetadata,
  buildProductReviewJsonLd,
  JsonLd,
} from "@/lib/seo";
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

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await fetchProductBySlug(slug);

    if (!product) {
      return notFoundMetadata("Product");
    }

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

  if (!product) {
    notFound();
  }

  // JSON-LD Structured Data for SEO
  const jsonLd = buildProductReviewJsonLd(product);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={jsonLd} />

      <div className="">
      <Link
        href="/products"
        className="text-gray-600 hover:text-black font-medium flex items-center gap-1"
      >
        <FiArrowLeft /> กลับไปหน้าสินค้าทั้งหมด
      </Link>

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
        {/* Overall Score */}
        <ScoreCard
          overallScore={product.overallScore}
          ratings={product.ratings}
          isRecommended={product.isRecommended}
          className="md:col-span-2 lg:col-span-2"
        />

        {/* Hero Image */}
        <HeroImageCard
          image={product.image}
          name={product.name}
          className="md:col-span-2 lg:col-span-2"
        />

        {/* Quick Verdict */}
        {product.quickVerdict && (
          <QuickVerdictCard
            quickVerdict={product.quickVerdict}
            tags={product.quickVerdictTags}
            className="md:col-span-2 lg:col-span-2"
          />
        )}

        {/* Key Highlights */}
        {product.keyHighlights && product.keyHighlights.length > 0 && (
          <KeyHighlightsCard
            highlights={product.keyHighlights}
            className="md:col-span-2 lg:col-span-3"
          />
        )}

        {/* Weaknesses */}
        {product.weaknesses && product.weaknesses.length > 0 && (
          <WeaknessesCard
            weaknesses={product.weaknesses}
            className="md:col-span-2 lg:col-span-3"
          />
        )}
      </div>

      {/* Review Section - Before/After */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {product.beforePurchasePoints &&
          product.beforePurchasePoints.length > 0 && (
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

      {/* Pros & Cons Detail */}
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
    </>
  );
}
