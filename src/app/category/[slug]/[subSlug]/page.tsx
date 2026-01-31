import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ProductListGrid } from '@/components/ProductListCard';
import { 
  getCategoryBySlug,
  getSubcategoryBySlug,
} from '@/data/categories';
import { getProductsBySubcategory } from '@/data/products';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

interface SubcategoryPageProps {
  params: Promise<{
    slug: string;
    subSlug: string;
  }>;
}

export default async function SubcategoryDetailPage({ params }: SubcategoryPageProps) {
  const { slug, subSlug } = await params;
  
  // Get parent category
  const category = getCategoryBySlug(slug);
  if (!category || category.status === 'hidden') {
    notFound();
  }
  
  // Get subcategory
  const subcategory = getSubcategoryBySlug(subSlug);
  
  // Verify subcategory exists and belongs to this category
  if (!subcategory || subcategory.parentCategoryId !== category.id || subcategory.status === 'hidden') {
    notFound();
  }

  // If subcategory is draft, show coming soon page
  if (subcategory.status === 'draft') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href={`/category/${slug}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <FiArrowLeft /> กลับไป {category.title}
          </Link>
          
          <div className="text-center py-20">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              COMING SOON
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {subcategory.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {subcategory.description}
            </p>
            <p className="text-gray-500">
              เรากำลังเตรียมข้อมูลและรีวิวสำหรับหมวดหมู่นี้<br />
              กรุณากลับมาใหม่เร็วๆ นี้
            </p>
            
            <Link href={`/category/${slug}`}>
              <Button variant="secondary" size="lg" className="mt-8">
                ดูหมวดย่อยอื่น
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get products for this subcategory
  const products = getProductsBySubcategory(subcategory.id);
  const recommendedCount = products.filter(p => p.isRecommended).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Navigation */}
        <Link 
          href={`/category/${slug}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <FiArrowLeft /> กลับไป {category.title}
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          {/* Breadcrumb Badges */}
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default">{category.title}</Badge>
            <span className="text-gray-400">›</span>
            <Badge variant="success">{subcategory.title}</Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {subcategory.title}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mb-6">
            {subcategory.description}
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-6 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-gray-900">{products.length}</div>
              <div className="text-sm text-gray-500">สินค้าทั้งหมด</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand">{recommendedCount}</div>
              <div className="text-sm text-gray-500">แนะนำ</div>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="bg-brand/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheck className="text-brand" />
              <span>อัปเดตล่าสุด ม.ค. 2026</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheck className="text-brand" />
              <span>ไม่มีอันดับสปอนเซอร์</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheck className="text-brand" />
              <span>มีลิงก์ affiliate (โปร่งใส)</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductListGrid 
          products={products}
          categorySlug={slug}
          subcategorySlug={subSlug}
          title={`สินค้าแนะนำใน ${subcategory.title}`}
        />

      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all subcategories
export async function generateStaticParams() {
  const { getAllVisibleCategories, getSubcategoriesByCategoryId } = await import('@/data/categories');
  
  const categories = getAllVisibleCategories();
  const params: { slug: string; subSlug: string }[] = [];
  
  for (const category of categories) {
    const subcategories = getSubcategoriesByCategoryId(category.id);
    for (const subcategory of subcategories) {
      params.push({
        slug: category.slug,
        subSlug: subcategory.slug,
      });
    }
  }
  
  return params;
}
