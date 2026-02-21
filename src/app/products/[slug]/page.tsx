import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
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
  PriceHistoryCard,
} from "@/components/ui/organisms";
import { Button } from "@/components/ui";

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

      {/* Price History */}
      {/* <div className="max-w-7xl mx-auto mb-8">
        <PriceHistoryCard
          data={{
            productSlug: slug,
            currency: "THB",
            source: "shopee",
            range: {
              months: 12,
              from: "2025-03",
              to: "2026-02",
            },
            monthly: [
              { month: "2025-03", minPrice: 42900, avgPrice: 44500, sampleCount: 15 },
              { month: "2025-04", minPrice: 43500, avgPrice: 45000, sampleCount: 12 },
              { month: "2025-05", minPrice: 41500, avgPrice: 43000, sampleCount: 18 },
              { month: "2025-06", minPrice: 40900, avgPrice: 42500, sampleCount: 20 },
              { month: "2025-07", minPrice: 42000, avgPrice: 43500, sampleCount: 14 },
              { month: "2025-08", minPrice: 41000, avgPrice: 42000, sampleCount: 16 },
              { month: "2025-09", minPrice: 39900, avgPrice: 41000, sampleCount: 22 },
              { month: "2025-10", minPrice: 40500, avgPrice: 42000, sampleCount: 19 },
              { month: "2025-11", minPrice: 38900, avgPrice: 40500, sampleCount: 28 },
              { month: "2025-12", minPrice: 41000, avgPrice: 42500, sampleCount: 25 },
              { month: "2026-01", minPrice: 42000, avgPrice: 43000, sampleCount: 17 },
              { month: "2026-02", minPrice: 41500, avgPrice: 42800, sampleCount: 14 },
            ],
            insight: {
              cheapestMonth: "2025-11",
              cheapestPrice: 38900,
              currentPrice: 42800,
              diffFromCheapest: 3900,
            },
          }}
        />
      </div> */}

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
