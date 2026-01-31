import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheck, FiArrowRight, FiArrowUpRight, FiSearch, FiClock } from 'react-icons/fi';
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineMusicNote, HiOutlineHome, HiOutlineLightningBolt, HiOutlineHeart, HiOutlineOfficeBuilding, HiOutlineSparkles, HiOutlineTrendingUp, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { BsSmartwatch, BsDiamond, BsBatteryCharging, BsHeadphones, BsLightningCharge } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { getAllVisibleCategories } from '@/data/categories';

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700 text-2xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700 text-2xl" />,
  audio: <HiOutlineMusicNote className="text-gray-700 text-2xl" />,
  wearable: <BsSmartwatch className="text-gray-700 text-2xl" />,
  home: <HiOutlineHome className="text-gray-700 text-2xl" />,
  'home-gadgets': <HiOutlineHome className="text-gray-700 text-2xl" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700 text-2xl" />,
  charging: <HiOutlineLightningBolt className="text-gray-700 text-2xl" />,
  'charging-power': <HiOutlineLightningBolt className="text-gray-700 text-2xl" />,
  health: <HiOutlineHeart className="text-gray-700 text-2xl" />,
  'health-lifestyle': <HiOutlineHeart className="text-gray-700 text-2xl" />,
};

// Mock data for top picks
const topPicks = [
  {
    id: 1,
    title: 'Anker 737 Power Bank',
    category: 'Charging',
    badge: 'ดีที่สุด',
    image: 'https://m.media-amazon.com/images/I/61CGflkHL0L._AC_SL1500_.jpg',
    slug: '/category/charging-power/power-bank/anker-737'
  },
  {
    id: 2,
    title: 'Sony WH-1000XM5',
    category: 'หูฟัง',
    badge: 'เดินทางต้องมี',
    image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg',
    slug: '/category/audio/headphones/sony-wh1000xm5'
  },
  {
    id: 3,
    title: 'MacBook Air M3',
    category: 'Laptop',
    badge: 'คุ้มที่สุด',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
    slug: '/category/laptop/macbook/macbook-air-m3'
  },
];

// Mock data for problems/needs
const commonProblems = [
  {
    id: 1,
    icon: <BsBatteryCharging className="text-xl" />,
    title: 'แบตหมดบ่อย',
    description: 'Power Bank ชาร์จเร็ว จุเยอะ',
    color: 'bg-orange-100 text-orange-600',
    slug: '/category/charging-power/power-bank'
  },
  {
    id: 2,
    icon: <BsHeadphones className="text-xl" />,
    title: 'หูฟังไม่สบาย',
    description: 'หูฟังใส่นานได้ ไม่เจ็บ',
    color: 'bg-violet-100 text-violet-600',
    slug: '/category/audio/headphones?filter=comfort'
  },
  {
    id: 3,
    icon: <BsLightningCharge className="text-xl" />,
    title: 'ชาร์จช้ามาก',
    description: 'หัวชาร์จ + สาย Fast Charge',
    color: 'bg-sky-100 text-sky-600',
    slug: '/category/charging-power/charger'
  },
  {
    id: 4,
    icon: <HiOutlineDesktopComputer className="text-xl" />,
    title: 'โน้ตบุ๊คหนัก',
    description: 'บาง เบา แต่แรง',
    color: 'bg-emerald-100 text-emerald-600',
    slug: '/category/laptop'
  },
];

// Mock data for latest reviews
const latestReviews = [
  {
    id: 1,
    title: 'Anker USB-C Hub 7-in-1',
    category: 'อุปกรณ์เสริม',
    rating: 8.5,
    updatedAt: '2 วันที่แล้ว',
    image: 'https://m.media-amazon.com/images/I/61CGflkHL0L._AC_SL1500_.jpg',
    slug: '/category/desk/hub/anker-usb-c-hub'
  },
  {
    id: 2,
    title: 'Roborock S8 Pro Ultra',
    category: 'หุ่นยนต์ดูดฝุ่น',
    rating: 9.2,
    updatedAt: '5 วันที่แล้ว',
    image: 'https://m.media-amazon.com/images/I/61Bg8JosvZL._AC_SL1500_.jpg',
    slug: '/category/home-gadgets/robot-vacuum/roborock-s8'
  },
  {
    id: 3,
    title: 'Samsung Galaxy Watch 6',
    category: 'Smart Watch',
    rating: 8.0,
    updatedAt: '1 สัปดาห์ที่แล้ว',
    image: 'https://m.media-amazon.com/images/I/61V1USwBRkL._AC_SL1500_.jpg',
    slug: '/category/wearable/smartwatch/galaxy-watch-6'
  },
];

export default function Home() {
  const categories = getAllVisibleCategories();

  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-xl" />
            </div>
            <span className="hidden md:block font-bold text-gray-900">gads<FiCheck className="inline text-brand" />life</span>
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
          {/* Search Button */}
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors">
            <FiSearch className="text-gray-600" />
          </button>
          <button className="hidden md:block px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            SIGN UP
          </button>
        </div>
      </header>

      {/* Main Bento Grid */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Hero Section - Prompt + Top Picks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Main Hero - What are you looking for? */}
          <div className="lg:col-span-1 lg:row-span-2 bg-black rounded-[2.5rem] rounded-br-[3.5rem] p-8 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="text-brand/80 text-xs font-medium tracking-wide flex items-center gap-1.5">
                <HiOutlineSparkles className="text-sm" /> หาของดีๆ กันเถอะ
              </span>
              <h1 className="text-white text-3xl md:text-[2.75rem] font-bold mt-5 leading-[1.15]">
                วันนี้<br />
                อยากได้อะไร?
              </h1>
              <p className="text-gray-500 mt-4 text-[13px] leading-relaxed">
                บอกมาเลย — จะเป็นหมวดหมู่ หรือปัญหาที่เจอก็ได้<br />
                เดี๋ยวเราช่วยหาให้
              </p>
            </div>
            
            {/* Quick Search Prompt */}
            <div className="mt-6 space-y-3">
              <Link href="/category" className="block">
                <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-colors">
                  <FiSearch className="text-gray-400" />
                  <span className="text-gray-300 text-sm">ค้นหาสินค้า...</span>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2">
                <Link href="/category/charging-power" className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all">
                  🔋 Power Bank
                </Link>
                <Link href="/category/audio" className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all">
                  🎧 หูฟัง
                </Link>
                <Link href="/category/laptop" className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all">
                  💻 Laptop
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <Link href="/category" className="bg-brand text-black font-semibold px-6 py-3 rounded-2xl rounded-tl-lg hover:bg-brand-hover transition-all hover:scale-[1.02] flex items-center gap-2">
                ดูของทั้งหมด <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* 🌟 Top Picks Section */}
          <div className="lg:col-span-2 bg-white rounded-[1.75rem] rounded-tl-[2.5rem] p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <h2 className="text-lg font-bold text-gray-900">ของดีประจำเดือน</h2>
              </div>
              <Link href="/top-picks" className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors">
                ดูเพิ่ม <FiArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {topPicks.map((item, idx) => (
                <Link key={item.id} href={item.slug} className="group">
                  <div className={`bg-gray-50/80 p-4 hover:bg-gray-100/80 transition-all hover:-translate-y-0.5 ${
                    idx === 0 ? 'rounded-2xl rounded-tl-3xl' : 
                    idx === 1 ? 'rounded-2xl' : 
                    'rounded-2xl rounded-br-3xl'
                  }`}>
                    <div className="relative w-full h-28 md:h-32 mb-3 rounded-xl overflow-hidden bg-white/80">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <span className="inline-block text-[11px] text-brand font-medium bg-brand/10 px-2 py-0.5 rounded-full">{item.badge}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 line-clamp-1 text-[15px]">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 🧠 Problem-based Section */}
          <div className="lg:col-span-2 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 rounded-[1.75rem] rounded-tr-[2.5rem] p-6 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🤔</span>
              <h2 className="text-lg font-bold text-gray-900">เจอปัญหาแบบนี้มั้ย?</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
              {commonProblems.map((problem, idx) => (
                <Link key={problem.id} href={problem.slug} className="group">
                  <div className={`bg-white/90 backdrop-blur-sm p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full ${
                    idx === 0 ? 'rounded-2xl rounded-tl-3xl' :
                    idx === 3 ? 'rounded-2xl rounded-br-3xl' :
                    'rounded-2xl'
                  }`}>
                    <div className={`w-9 h-9 ${problem.color} rounded-lg flex items-center justify-center mb-2.5`}>
                      {problem.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-[13px] leading-tight">{problem.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">{problem.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 🧭 Categories Section */}
        <div className="bg-white rounded-[1.75rem] rounded-bl-[2.5rem] p-6 md:p-7">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">🗂️ เลือกตามหมวด</h2>
            <Link href="/categories" className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors">
              ทั้งหมด <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {categories.slice(0, 6).map((category, idx) => {
              const isActive = category.status === 'active';
              const isDraft = category.status === 'draft';
              const isClickable = isActive || isDraft;
              
              // Varying border radius for organic feel
              const radiusClass = idx === 0 ? 'rounded-xl rounded-tl-2xl' :
                                  idx === 2 ? 'rounded-xl rounded-tr-2xl' :
                                  idx === 5 ? 'rounded-xl rounded-br-2xl' :
                                  'rounded-xl';
              
              const cardContent = (
                <div 
                  className={`
                    ${radiusClass} p-3 md:p-4 text-center group transition-all
                    ${isClickable ? 'bg-gray-50/80 hover:bg-gray-100 cursor-pointer hover:-translate-y-0.5' : 'bg-gray-50/50 opacity-40'}
                  `}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm group-hover:shadow transition-shadow">
                    {categoryIcons[category.icon || category.slug] || categoryIcons[category.id] || <HiOutlineDesktopComputer className="text-gray-700 text-xl" />}
                  </div>
                  <h3 className="font-medium text-gray-800 text-[13px]">{category.title}</h3>
                  {isDraft && (
                    <span className="text-[10px] text-amber-600 mt-0.5 block">เร็วๆ นี้</span>
                  )}
                </div>
              );
              
              if (isClickable) {
                return (
                  <Link key={category.id} href={`/category/${category.slug}`} className="block">
                    {cardContent}
                  </Link>
                );
              }
              
              return <div key={category.id}>{cardContent}</div>;
            })}
          </div>
        </div>

        {/* 🔥 Latest Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-[1.75rem] rounded-tr-[2.5rem] p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="text-lg">🆕</span>
                <h2 className="text-lg font-bold text-gray-900">เพิ่งรีวิวไป</h2>
              </div>
              <Link href="/reviews" className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors">
                ดูเพิ่ม <FiArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="space-y-2">
              {latestReviews.map((review, idx) => (
                <Link key={review.id} href={review.slug} className="block group">
                  <div className={`flex items-center gap-4 p-3 hover:bg-gray-50/80 transition-all ${
                    idx === 0 ? 'rounded-xl rounded-tl-2xl' :
                    idx === latestReviews.length - 1 ? 'rounded-xl rounded-br-2xl' :
                    'rounded-xl'
                  }`}>
                    <div className="relative w-14 h-14 flex-shrink-0 bg-gray-100/80 rounded-lg overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.title}
                        fill
                        className="object-contain p-1.5"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1 text-[15px]">
                        {review.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{review.category}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-base font-bold text-brand">{review.rating}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {review.updatedAt}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Section - Compact */}
          <div className="space-y-3">
            <div className="bg-black rounded-[1.5rem] rounded-tr-[2.5rem] p-5 text-white">
              <span className="text-2xl mb-2 block">✓</span>
              <h3 className="font-bold mb-0.5 text-[15px]">ใช้จริง รีวิวจริง</h3>
              <p className="text-gray-500 text-[13px]">
                ไม่ได้มาจากสเปก
              </p>
            </div>

            <div className="bg-white rounded-[1.5rem] p-5">
              <span className="text-2xl mb-2 block">🎯</span>
              <h3 className="font-bold text-gray-900 mb-0.5 text-[15px]">เลือกง่าย</h3>
              <p className="text-gray-500 text-[13px]">
                สรุปให้แล้ว แค่เลือก
              </p>
            </div>

            <div className="bg-white rounded-[1.5rem] rounded-bl-[2.5rem] p-5">
              <span className="text-2xl mb-2 block">💎</span>
              <h3 className="font-bold text-gray-900 mb-0.5 text-[15px]">ไม่มีสปอนเซอร์</h3>
              <p className="text-gray-500 text-[13px]">
                มีแค่ affiliate link
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 pt-8 pb-6 border-t border-gray-200/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-xs" />
            </div>
            <span className="font-bold text-gray-800 text-sm">gads✓life</span>
          </div>
          <div className="flex gap-6 text-[13px] text-gray-500">
            <Link href="/disclosure" className="hover:text-gray-800 transition-colors">Disclosure</Link>
            <Link href="/methodology" className="hover:text-gray-800 transition-colors">How we test</Link>
            <Link href="/legal" className="hover:text-gray-800 transition-colors">Legal stuff</Link>
          </div>
          <p className="text-[13px] text-gray-400">© 2026 gadslife</p>
        </div>
      </footer>
    </div>
  );
}
