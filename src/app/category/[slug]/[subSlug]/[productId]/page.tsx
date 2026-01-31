import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  getCategoryBySlug,
  getSubcategoryBySlug,
} from '@/data/categories';
import { getProductById } from '@/data/products';
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from 'react-icons/fi';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
    subSlug: string;
    productId: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug, subSlug, productId } = await params;
  
  // Get parent category
  const category = getCategoryBySlug(slug);
  if (!category || category.status === 'hidden') {
    notFound();
  }
  
  // Get subcategory
  const subcategory = getSubcategoryBySlug(subSlug);
  if (!subcategory || subcategory.parentCategoryId !== category.id || subcategory.status === 'hidden') {
    notFound();
  }

  // Get product
  const product = getProductById(productId);
  if (!product || product.subCategory !== subcategory.id) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price);
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
          href={`/category/${slug}/${subSlug}`}
          className="text-gray-600 hover:text-black font-medium flex items-center gap-1"
        >
          <FiArrowLeft /> กลับไป {subcategory.title}
        </Link>
      </header>

      {/* Product Title */}
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-brand text-sm font-semibold tracking-wider uppercase">
          {product.subCategoryLabel}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
          {product.name}
        </h1>
        <p className="text-xl text-gray-500 mt-2">{product.subtitle}</p>
      </div>

      {/* Bento Grid - Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {/* Overall Score - Large Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-black rounded-[2rem] p-8 text-white relative overflow-hidden min-h-[300px]">
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
            {product.ratings.map((rating, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-400">{rating.subCategory}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-6 h-2 rounded-full ${i <= rating.score ? 'bg-brand' : 'bg-gray-700'}`}
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
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2rem] p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl mb-4">{product.image}</div>
            <span className="text-gray-500 text-sm">
              {product.name}
            </span>
          </div>
        </div>

        {/* Quick Verdict Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-8 min-h-[300px]">
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
            {product.quickVerdict.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights - จุดเด่น */}
        <div className="md:col-span-2 lg:col-span-3 bg-brand rounded-[2rem] p-8 min-h-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-900 text-xs font-semibold tracking-wider uppercase">
              จุดเด่น
            </span>
            <span className="text-green-900 text-xs">KEY HIGHLIGHTS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur rounded-2xl p-4"
              >
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <h3 className="font-bold text-black">{highlight.title}</h3>
                <p className="text-green-900 text-sm mt-1">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Weaknesses - จุดด้อย */}
        <div className="md:col-span-2 lg:col-span-3 bg-gray-900 rounded-[2rem] p-8 min-h-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
              จุดด้อย
            </span>
            <span className="text-gray-500 text-xs">WEAKNESSES</span>
          </div>
          <div className="space-y-4">
            {product.weaknesses.map((weakness, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 rounded-2xl p-4"
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiX className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{weakness.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {weakness.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Section - Before/After */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Before Purchase - ก่อนซื้อ */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🤔</span>
            </div>
            <div>
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                {product.beforePurchase.titleEn}
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                {product.beforePurchase.title}
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {product.beforePurchase.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After Usage - หลังใช้งาน */}
        <div className="lg:col-span-2 bg-[#1a1a1a] rounded-[2rem] p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                {product.afterUsage.titleEn}
              </span>
              <h2 className="text-xl font-bold">{product.afterUsage.title}</h2>
            </div>
          </div>
          <div className="space-y-4">
            {product.afterUsage.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheck className="text-brand mt-1" />
                <p className="text-gray-300">
                  <strong className="text-white">{point.highlight}</strong> —{' '}
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pros & Cons Detail */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Detailed Pros */}
        <div className="bg-white rounded-[2rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">+</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              ข้อดีหลังใช้งานจริง
            </h2>
          </div>

          <div className="space-y-6">
            {product.detailedPros.map((pro, index) => (
              <div key={index} className="border-l-4 border-brand pl-4">
                <h3 className="font-bold text-gray-900">{pro.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{pro.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Cons */}
        <div className="bg-white rounded-[2rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">−</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              ข้อเสียที่ต้องรู้
            </h2>
          </div>

          <div className="space-y-6">
            {product.detailedCons.map((con, index) => (
              <div key={index} className="border-l-4 border-red-400 pl-4">
                <h3 className="font-bold text-gray-900">{con.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{con.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Verdict */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
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
                  {product.finalVerdict.buyIf.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
                  <FiX /> ข้ามไป ถ้า...
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {product.finalVerdict.skipIf.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-gray-400 text-sm">
                    {product.pricing.priceLabel}
                  </span>
                  <p className="text-3xl font-bold">
                    ฿{formatPrice(product.pricing.price)}
                  </p>
                  {product.pricing.monthlyPrice && (
                    <span className="text-gray-400 text-sm">
                      หรือ ฿{formatPrice(product.pricing.monthlyPrice)}/เดือน
                    </span>
                  )}
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

// Generate static params for all products
export async function generateStaticParams() {
  const { getAllVisibleCategories, getSubcategoriesByCategoryId } = await import('@/data/categories');
  const { getProductsBySubcategory } = await import('@/data/products');
  
  const categories = getAllVisibleCategories();
  const params: { slug: string; subSlug: string; productId: string }[] = [];
  
  for (const category of categories) {
    const subcategories = getSubcategoriesByCategoryId(category.id);
    for (const subcategory of subcategories) {
      const products = getProductsBySubcategory(subcategory.id);
      for (const product of products) {
        params.push({
          slug: category.slug,
          subSlug: subcategory.slug,
          productId: product.id,
        });
      }
    }
  }
  
  return params;
}
