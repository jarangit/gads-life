import React from 'react';
import Link from 'next/link';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { CategoryGrid } from '@/components/CategoryCard';
import { getAllVisibleCategories } from '@/data/categories';

export default function CategoriesPage() {
  const categories = getAllVisibleCategories();
  const activeCount = categories.filter(c => c.status === 'active').length;
  const comingSoonCount = categories.filter(c => c.status === 'draft').length;

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f0f0f0]/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <FiCheck className="text-brand text-xl" />
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/categories" className="text-black font-semibold">
                  Categories
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-black font-medium transition-colors">
                  About
                </Link>
                <Link href="/faq" className="text-gray-600 hover:text-black font-medium transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-200 rounded-full transition-colors">
                LOG IN
              </button>
              <button className="px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
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
              
              {/* Stats */}
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-brand">{activeCount}</div>
                  <div className="text-gray-500 text-sm">หมวดหมู่พร้อมให้บริการ</div>
                </div>
                {comingSoonCount > 0 && (
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">{comingSoonCount}</div>
                    <div className="text-gray-500 text-sm">เร็วๆ นี้</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <CategoryGrid 
          categories={categories} 
          title="หมวดหมู่ทั้งหมด"
          showDrafts={true}
        />

        {/* Trust Section */}
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <FiCheck className="text-2xl text-brand" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">คัดสรรอย่างดี</h3>
              <p className="text-gray-500 text-sm">
                ทุกหมวดหมู่ผ่านการคัดเลือกจากทีมงาน ไม่ใช่แค่รวบรวมมาเยอะๆ
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FiArrowRight className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">อัปเดตสม่ำเสมอ</h3>
              <p className="text-gray-500 text-sm">
                เราอัปเดตข้อมูลและรีวิวสินค้าใหม่ๆ ทุกเดือน
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ตรงจุด ไม่อ้อม</h3>
              <p className="text-gray-500 text-sm">
                บอกตรงๆ ว่าอะไรดี อะไรไม่ดี ไม่ต้องอ่านยาว
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-6 mt-12 py-8 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-sm" />
            </div>
            <span className="font-bold text-gray-900">gads<FiCheck className="inline text-brand" />life</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/disclosure" className="hover:text-black transition-colors">Disclosure</Link>
            <Link href="/methodology" className="hover:text-black transition-colors">Methodology</Link>
            <Link href="/legal" className="hover:text-black transition-colors">Legal</Link>
          </div>
          <p className="text-sm text-gray-500">© 2026 gadslife</p>
        </div>
      </footer>
    </div>
  );
}
