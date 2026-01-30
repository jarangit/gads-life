import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-[#05db04] text-xl">✓</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/category" className="text-gray-800 hover:text-black font-medium">
              Products
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-black font-medium">
              About
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-black font-medium">
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
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        
        {/* Main Hero Card - Large */}
        <Link href="/category" className="md:col-span-1 lg:row-span-2">
          <div className="bg-black rounded-[2rem] p-8 h-full min-h-[400px] flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div>
              <span className="text-[#05db04] text-sm font-semibold tracking-wider uppercase">
                CURATED PICKS
              </span>
              <h1 className="text-white text-4xl md:text-5xl font-bold mt-4 leading-tight">
                เลือกของดี<br />
                โดยไม่ต้อง<br />
                คิดเยอะ
              </h1>
            </div>
            
            {/* Product Image Placeholder */}
            <div className="absolute bottom-8 right-4 w-48 h-48 opacity-80">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto relative z-10">
              <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-gray-500 text-xs uppercase">SHOP</span>
                <span className="text-black font-semibold">All products</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Card */}
        <div className="bg-[#e8e8e8] rounded-[2rem] p-6 relative overflow-hidden min-h-[200px]">
          <div className="flex justify-between items-start">
            <span className="text-gray-600 text-xs font-semibold tracking-wider uppercase">
              WORLD OF GADGETS
            </span>
            <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
          
          {/* Abstract shapes */}
          <div className="absolute top-12 right-8">
            <div className="w-32 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-60"></div>
            <div className="w-20 h-20 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full absolute -bottom-4 left-8 opacity-60"></div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-auto absolute bottom-6 left-6">
            View our blog
          </h2>
        </div>

        {/* About Card - Purple */}
        <Link href="/about" className="block">
          <div className="bg-[#c4b5fd] rounded-[2rem] p-6 min-h-[200px] relative group cursor-pointer hover:bg-[#b4a5ed] transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-purple-900 text-xs font-semibold tracking-wider uppercase block">
                  DISCOVER
                </span>
                <span className="text-purple-900 text-xs font-semibold tracking-wider uppercase">
                  OUR HISTORY
                </span>
              </div>
              <div className="w-8 h-8 border border-purple-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-purple-900 absolute bottom-6 left-6">
              About us
            </h2>
          </div>
        </Link>

        {/* Contact Card - Green */}
        <Link href="/contact" className="block">
          <div className="bg-[#05db04] rounded-[2rem] p-6 min-h-[200px] relative group cursor-pointer hover:bg-[#04c903] transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-green-900 text-xs font-semibold tracking-wider uppercase block">
                  HAVE SOME
                </span>
                <span className="text-green-900 text-xs font-semibold tracking-wider uppercase">
                  QUESTIONS?
                </span>
              </div>
              <div className="w-8 h-8 border border-green-700 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-black absolute bottom-6 left-6">
              Contact us
            </h2>
          </div>
        </Link>

        {/* Categories Section */}
        <div className="md:col-span-2 lg:col-span-3 mt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">หมวดหมู่แนะนำ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Robot Vacuum Card */}
            <Link href="/category" className="block">
              <div className="bg-white rounded-[2rem] p-6 min-h-[180px] relative group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                    🤖
                  </div>
                  <div className="w-8 h-8 bg-[#05db04] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Robot Vacuums</h3>
                <p className="text-gray-500 text-sm mt-1">Top 5 ที่คุ้มที่สุดในปี 2026</p>
              </div>
            </Link>

            {/* Headphones Card */}
            <div className="bg-white/50 rounded-[2rem] p-6 min-h-[180px] relative opacity-60">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                  🎧
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
                  SOON
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Headphones</h3>
              <p className="text-gray-400 text-sm mt-1">เร็วๆ นี้</p>
            </div>

            {/* Smartphones Card */}
            <div className="bg-white/50 rounded-[2rem] p-6 min-h-[180px] relative opacity-60">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                  📱
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
                  SOON
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Smartphones</h3>
              <p className="text-gray-400 text-sm mt-1">เร็วๆ นี้</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="md:col-span-2 lg:col-span-3 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-black rounded-[2rem] p-6 text-white">
              <div className="w-12 h-12 bg-[#05db04] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-bold mb-2">จากการใช้งานจริง</h3>
              <p className="text-gray-400 text-sm">
                ไม่ใช่แค่สเปกบนกระดาษ แต่มาจากประสบการณ์จริง
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ตัดสินใจง่าย</h3>
              <p className="text-gray-500 text-sm">
                เราคิดให้แล้ว คุณแค่เลือกตัวเลือกที่เหมาะกับคุณ
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">โปร่งใส</h3>
              <p className="text-gray-500 text-sm">
                ไม่มีอันดับสปอนเซอร์ มีเฉพาะ affiliate links
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-12 py-8 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-[#05db04] text-sm">✓</span>
            </div>
            <span className="font-bold text-gray-900">gads✓life</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/disclosure" className="hover:text-black">Disclosure</Link>
            <Link href="/methodology" className="hover:text-black">Methodology</Link>
            <Link href="/legal" className="hover:text-black">Legal</Link>
          </div>
          <p className="text-sm text-gray-500">© 2026 gadslife</p>
        </div>
      </footer>
    </div>
  );
}
