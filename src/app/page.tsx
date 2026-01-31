import React from 'react';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiArrowUpRight, FiSend } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineMusicNote, HiOutlineHome, HiOutlineLightningBolt, HiOutlineHeart, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { RiRobot2Line } from 'react-icons/ri';
import { BsHeadphones, BsPhone, BsDiamond, BsSmartwatch } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { getAllVisibleCategories, type Category } from '@/data/categories';

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700" />,
  audio: <HiOutlineMusicNote className="text-gray-700" />,
  wearable: <BsSmartwatch className="text-gray-700" />,
  home: <HiOutlineHome className="text-gray-700" />,
  'home-gadgets': <HiOutlineHome className="text-gray-700" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700" />,
  charging: <HiOutlineLightningBolt className="text-gray-700" />,
  'charging-power': <HiOutlineLightningBolt className="text-gray-700" />,
  health: <HiOutlineHeart className="text-gray-700" />,
  'health-lifestyle': <HiOutlineHeart className="text-gray-700" />,
};

export default function Home() {
  const categories = getAllVisibleCategories();

  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-xl" />
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
              <span className="text-brand text-sm font-semibold tracking-wider uppercase">
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
                <RiRobot2Line className="text-6xl text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto relative z-10">
              <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-gray-500 text-xs uppercase">SHOP</span>
                <span className="text-black font-semibold">All products</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <FiArrowRight className="w-5 h-5" />
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
              <FiArrowUpRight className="w-4 h-4 text-gray-600" />
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
                <FiArrowUpRight className="w-4 h-4 text-purple-900" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-purple-900 absolute bottom-6 left-6">
              About us
            </h2>
          </div>
        </Link>

        {/* Contact Card - Green */}
        <Link href="/contact" className="block">
          <div className="bg-brand rounded-[2rem] p-6 min-h-[200px] relative group cursor-pointer hover:bg-brand-hover transition-colors">
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
                <FiSend className="w-4 h-4 text-green-900" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-black absolute bottom-6 left-6">
              Contact us
            </h2>
          </div>
        </Link>

        {/* Categories Section */}
        <div className="md:col-span-2 lg:col-span-3 mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">หมวดหมู่แนะนำ</h2>
            <Link href="/categories" className="text-brand font-medium hover:underline flex items-center gap-1">
              ดูทั้งหมด <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category) => {
              const isActive = category.status === 'active';
              const isDraft = category.status === 'draft';
              const isClickable = isActive || isDraft;
              
              const cardContent = (
                <div 
                  className={`
                    bg-white rounded-[2rem] p-6 min-h-[180px] relative group
                    transition-all duration-300
                    ${isClickable ? 'hover:shadow-lg cursor-pointer' : 'bg-white/50 opacity-60'}
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                      {categoryIcons[category.icon || category.slug] || categoryIcons[category.id] || <HiOutlineDesktopComputer className="text-gray-700" />}
                    </div>
                    {isActive ? (
                      <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <FiArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    ) : isDraft ? (
                      <span className="text-xs font-medium text-yellow-800 bg-yellow-100 px-2 py-1 rounded-full">
                        SOON
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
                        HIDDEN
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{category.title}</h3>
                  <p className={`text-sm mt-1 line-clamp-2 ${isClickable ? 'text-gray-500' : 'text-gray-400'}`}>
                    {category.description}
                  </p>
                </div>
              );
              
              if (isClickable) {
                return (
                  <Link key={category.id} href={`/category/${category.slug}`} className="block">
                    {cardContent}
                  </Link>
                );
              }
              
              return (
                <div key={category.id} className="block cursor-default">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Section */}
        <div className="md:col-span-2 lg:col-span-3 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-black rounded-[2rem] p-6 text-white">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-4">
                <FiCheck className="text-2xl text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">จากการใช้งานจริง</h3>
              <p className="text-gray-400 text-sm">
                ไม่ใช่แค่สเปกบนกระดาษ แต่มาจากประสบการณ์จริง
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <BiTargetLock className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ตัดสินใจง่าย</h3>
              <p className="text-gray-500 text-sm">
                เราคิดให้แล้ว คุณแค่เลือกตัวเลือกที่เหมาะกับคุณ
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <BsDiamond className="text-2xl text-green-600" />
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
              <FiCheck className="text-brand text-sm" />
            </div>
            <span className="font-bold text-gray-900">gads<FiCheck className="inline text-brand" />life</span>
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
