import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ProductCard } from '@/components/ProductCard';
import { FAQ } from '@/components/FAQ';
import { SubcategoryGrid } from '@/components/SubcategoryCard';
import { 
  getCategoryBySlug, 
  getAllVisibleCategories,
  getSubcategoriesByCategoryId,
  robotVacuumCategoryData,
  type CategoryPageData
} from '@/data/categories';
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';

// Map category slug to its page data
// For now, only robot-vacuum has full data, others will show placeholder
const categoryDataMap: Record<string, CategoryPageData | null> = {
  'home-gadgets': robotVacuumCategoryData, // Using robot vacuum data as example
  // Add more category data mappings here as they become available
};

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  // If category doesn't exist or is hidden, show 404
  if (!category || category.status === 'hidden') {
    notFound();
  }

  // If category is draft, show coming soon page
  if (category.status === 'draft') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <FiArrowLeft /> กลับไปหน้าหมวดหมู่
          </Link>
          
          <div className="text-center py-20">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              COMING SOON
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>
            <p className="text-gray-500">
              เรากำลังเตรียมข้อมูลและรีวิวสำหรับหมวดหมู่นี้<br />
              กรุณากลับมาใหม่เร็วๆ นี้
            </p>
            
            <Link href="/categories">
              <Button variant="secondary" size="lg" className="mt-8">
                ดูหมวดหมู่อื่น
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get the category page data (if available)
  const data = categoryDataMap[slug];
  
  // Get subcategories for this category
  const subcategories = getSubcategoriesByCategoryId(category.id);
  
  // If has subcategories, show subcategory listing page
  if (subcategories.length > 0) {
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
          
          {/* Category Header */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
            <Badge variant="default" className="mb-4">{category.title}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {category.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {category.description}
            </p>
            
            {/* Stats */}
            <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-brand">
                  {subcategories.filter(s => s.status === 'active').length}
                </div>
                <div className="text-sm text-gray-500">หมวดย่อยพร้อมให้บริการ</div>
              </div>
              {subcategories.filter(s => s.status === 'draft').length > 0 && (
                <div>
                  <div className="text-2xl font-bold text-yellow-500">
                    {subcategories.filter(s => s.status === 'draft').length}
                  </div>
                  <div className="text-sm text-gray-500">เร็วๆ นี้</div>
                </div>
              )}
            </div>
          </div>

          {/* Subcategories Grid */}
          <SubcategoryGrid 
            subcategories={subcategories}
            categorySlug={slug}
            title="เลือกหมวดย่อยที่สนใจ"
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  // If no detailed data yet, show placeholder
  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <FiArrowLeft /> กลับไปหน้าหมวดหมู่
          </Link>
          
          <div className="text-center py-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              กำลังอัปเดต
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>
            <p className="text-gray-500">
              เรากำลังรวบรวมและทดสอบสินค้าในหมวดหมู่นี้<br />
              กรุณากลับมาใหม่เร็วๆ นี้
            </p>
            
            <Link href="/categories">
              <Button variant="secondary" size="lg" className="mt-8">
                ดูหมวดหมู่อื่น
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Navigation */}
        <Link 
          href="/categories" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <FiArrowLeft /> กลับไปหน้าหมวดหมู่
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <Badge variant="default">{category.title}</Badge>
        </div>
        
        {/* 1️⃣ Hero — Decision Promise */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.hero.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 whitespace-pre-line">
            {data.hero.subtitle}
          </p>

          <div className="space-y-2 mb-8">
            {data.hero.trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <FiCheck className="text-brand" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          <Button variant="secondary" size="lg">
            {data.hero.ctaText}
          </Button>
        </section>

        {/* 2️⃣ Trust Framing */}
        <section className="mb-16">
          <div className="bg-gray-50 border-l-4 border-brand p-6 rounded-r-lg">
            <p className="text-gray-700 whitespace-pre-line">
              {data.trustFraming}
            </p>
          </div>
        </section>

        {/* 3️⃣ Selection Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.selectionCriteria.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.selectionCriteria.items.map((item, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-gray-900 mb-2">
                  • {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 4️⃣ ⭐ Safe Choice / Editor Pick */}
        <section className="mb-16">
          <Card variant="highlight" className="relative">
            <div className="mb-4">
              <Badge variant="success">{data.safeChoice.badge}</Badge>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {data.safeChoice.name} — {data.safeChoice.subtitle}
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">เหตุผลที่เราเลือก</h3>
              <ul className="space-y-2 text-gray-700">
                {data.safeChoice.reasons.map((reason, index) => (
                  <li key={index}>• {reason}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-brand-dark mb-2">เหมาะกับ</h3>
              <p className="text-gray-700">
                {data.safeChoice.bestFor}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">ใครควรข้าม</h3>
              <p className="text-gray-700">
                {data.safeChoice.whoShouldSkip}
              </p>
            </div>

            <Button variant="primary" size="lg" className="flex items-center gap-1">
              ดูราคาล่าสุด <FiArrowRight />
            </Button>
          </Card>
        </section>

        {/* 5️⃣ Top 5 Ranked List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {data.rankedProducts.title}
          </h2>

          <div className="space-y-4">
            {data.rankedProducts.products.map((product) => (
              <ProductCard
                key={product.rank}
                rank={product.rank}
                name={product.name}
                badge={product.badge}
                reason={product.reason}
                pros={product.pros}
                cons={product.cons}
                bestFor={product.bestFor}
                whoShouldSkip={product.whoShouldSkip}
                isHighlight={product.isHighlight}
              />
            ))}
          </div>
        </section>

        {/* 6️⃣ Compare Helper */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.compareHelper.title}
          </h2>

          <Card>
            <div className="space-y-4">
              {data.compareHelper.options.map((option, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {option.name}
                  </h3>
                  <p className="text-gray-700">
                    {option.description}
                  </p>
                </div>
              ))}

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-gray-800 flex items-start gap-2">
                  <HiOutlineLightBulb className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                  <span><strong>คำแนะนำ:</strong> {data.compareHelper.hint}</span>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 7️⃣ Objection & Risk Disclosure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.objections.title}
          </h2>

          <div className="space-y-4">
            {data.objections.items.map((item, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 8️⃣ Final Recommendation */}
        <section className="mb-16">
          <Card variant="highlight">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {data.finalRecommendation.title}
            </h2>

            <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">
              {data.finalRecommendation.subtitle}
            </p>

            <p className="text-xl font-bold text-gray-900 mb-6">
              {data.finalRecommendation.recommendation}
            </p>

            <Button variant="primary" size="lg">
              {data.finalRecommendation.ctaText}
            </Button>
          </Card>
        </section>

        {/* 9️⃣ FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.faq.title}
          </h2>

          <Card>
            <FAQ items={data.faq.items} />
          </Card>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = getAllVisibleCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}
