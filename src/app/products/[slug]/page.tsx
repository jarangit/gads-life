import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { fetchProductBySlug } from "@/lib/api/product/products";
import { FinalVerdictType } from "@/lib/api/product/types";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-4 md:p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FiCheck className="text-brand text-xl" />
          </div>
          <span className="font-bold text-gray-900">
            gads
            <FiCheck className="inline text-brand" />
            life
          </span>
        </Link>
        <Link
          href="/products"
          className="text-gray-600 hover:text-black font-medium flex items-center gap-1"
        >
          <FiArrowLeft /> กลับไปหน้าสินค้าทั้งหมด
        </Link>
      </header>

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
        {/* Overall Score - Large Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-black rounded-4xl p-8 text-white relative overflow-hidden min-h-[300px]">
          <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
            OVERALL SCORE
          </span>
          <div className="mt-4">
            <span className="text-8xl font-bold text-brand">
              {product.overallScore}
            </span>
            <span className="text-2xl text-gray-400">/10</span>
          </div>
          <div className="mt-6 space-y-2">
            {product.ratings?.map((rating) => (
              <div
                key={rating.id}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-400">{rating.subCategory}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${
                        i <= rating.score ? "bg-brand" : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {product.isRecommended && (
            <div className="absolute bottom-6 right-6">
              <span className="bg-brand text-black text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </span>
            </div>
          )}
        </div>

        {/* Hero Image Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-4xl p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
          <div className="text-center">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mx-auto"
              />
            )}
            <span className="text-gray-500 text-sm">{product.name}</span>
          </div>
        </div>

        {/* Quick Verdict Card */}
        {product.quickVerdict && (
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-4xl p-8 min-h-[300px]">
            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
              QUICK VERDICT
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 whitespace-pre-line">
              &ldquo;{product.quickVerdict.quote}&rdquo;
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.quickVerdict.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.quickVerdictTags?.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag.tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Highlights - จุดเด่น */}
        {product.keyHighlights && product.keyHighlights.length > 0 && (
          <div className="md:col-span-2 lg:col-span-3 bg-brand rounded-4xl p-8 min-h-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-900 text-xs font-semibold tracking-wider uppercase">
                จุดเด่น
              </span>
              <span className="text-green-900 text-xs">KEY HIGHLIGHTS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.keyHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="bg-white/50 backdrop-blur rounded-2xl p-4"
                >
                  <div className="text-3xl mb-2">✨</div>
                  <p className="font-bold text-black">{highlight.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Weaknesses - จุดด้อย */}
        {product.weaknesses && product.weaknesses.length > 0 && (
          <div className="md:col-span-2 lg:col-span-3 bg-gray-900 rounded-4xl p-8 min-h-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                จุดด้อย
              </span>
              <span className="text-gray-500 text-xs">WEAKNESSES</span>
            </div>
            <div className="space-y-4">
              {product.weaknesses.map((weakness) => (
                <div
                  key={weakness.id}
                  className="flex items-start gap-4 bg-white/5 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiX className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white">{weakness.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Section - Before/After */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Before Purchase - ก่อนซื้อ */}
        {product.beforePurchasePoints &&
          product.beforePurchasePoints.length > 0 && (
            <div className="lg:col-span-2 bg-white rounded-4xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤔</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                    BEFORE PURCHASE
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    สิ่งที่ควรรู้ก่อนซื้อ
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                {product.beforePurchasePoints.map((point) => (
                  <div key={point.id} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">•</span>
                    <p className="text-gray-700">{point.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* After Usage - หลังใช้งาน */}
        {product.afterUsagePoints && product.afterUsagePoints.length > 0 && (
          <div className="lg:col-span-2 bg-[#1a1a1a] rounded-4xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                  AFTER USAGE
                </span>
                <h2 className="text-xl font-bold">หลังใช้งาน</h2>
              </div>
            </div>
            <div className="space-y-4">
              {product.afterUsagePoints.map((point) => (
                <div key={point.id} className="flex items-start gap-3">
                  <FiCheck className="text-brand mt-1" />
                  <p className="text-gray-300">{point.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pros & Cons Detail */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Detailed Pros */}
        {product.pros && product.pros.length > 0 && (
          <div className="bg-white rounded-4xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">+</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                ข้อดีหลังใช้งานจริง
              </h2>
            </div>

            <div className="space-y-6">
              {product.pros.map((pro) => (
                <div key={pro.id} className="border-l-4 border-brand pl-4">
                  <p className="text-gray-900">{pro.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Cons */}
        {product.cons && product.cons.length > 0 && (
          <div className="bg-white rounded-4xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">−</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                ข้อเสียที่ต้องรู้
              </h2>
            </div>

            <div className="space-y-6">
              {product.cons.map((con) => (
                <div key={con.id} className="border-l-4 border-red-400 pl-4">
                  <p className="text-gray-900">{con.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Final Verdict */}
      {product.finalVerdictPoints && product.finalVerdictPoints.length > 0 && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <span className="text-brand text-xs font-semibold tracking-wider uppercase">
                FINAL VERDICT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                สรุป: ควรซื้อไหม?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-brand font-bold text-lg mb-3 flex items-center gap-2">
                    <FiCheck /> ซื้อเลย ถ้า...
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {product.finalVerdictPoints
                      .filter((p) => p.type === FinalVerdictType.BUY_IF)
                      .sort((a, b) => a.orderIndex - b.orderIndex)
                      .map((point) => (
                        <li key={point.id}>• {point.text}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
                    <FiX /> ข้ามไป ถ้า...
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {product.finalVerdictPoints
                      .filter((p) => p.type === FinalVerdictType.SKIP_IF)
                      .sort((a, b) => a.orderIndex - b.orderIndex)
                      .map((point) => (
                        <li key={point.id}>• {point.text}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <span className="text-brand text-xs font-semibold tracking-wider uppercase">
              PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">ราคา</h2>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  {product.pricing?.priceLabel && (
                    <span className="text-gray-400 text-sm">
                      {product.pricing.priceLabel}
                    </span>
                  )}
                  <p className="text-3xl font-bold">
                    ฿{formatPrice(product.pricing?.price ?? product.price)}
                  </p>
                </div>
                {product.affiliateLink && (
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand text-black font-bold px-8 py-4 rounded-full hover:bg-brand-hover transition-colors flex items-center gap-2"
                  >
                    เช็กราคาล่าสุด <FiArrowRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-8 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-sm" />
            </div>
            <span className="font-bold text-gray-900">
              gads
              <FiCheck className="inline text-brand" />
              life
            </span>
          </div>
          <p className="text-sm text-gray-500">
            รีวิวนี้อัปเดตล่าสุด: {product.lastUpdated}
          </p>
        </div>
      </footer>
    </div>
  );
}
