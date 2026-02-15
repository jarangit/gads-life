"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiArrowRight, FiSearch } from "react-icons/fi";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineMusicNote,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
} from "react-icons/hi";
import {
  BsSmartwatch,
  BsBatteryCharging,
  BsHeadphones,
  BsLightningCharge,
} from "react-icons/bs";
import { useHome } from "@/hooks/useHome";

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700 text-2xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700 text-2xl" />,
  audio: <HiOutlineMusicNote className="text-gray-700 text-2xl" />,
  wearable: <BsSmartwatch className="text-gray-700 text-2xl" />,
  home: <HiOutlineHome className="text-gray-700 text-2xl" />,
  "home-gadgets": <HiOutlineHome className="text-gray-700 text-2xl" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700 text-2xl" />,
  charging: <HiOutlineLightningBolt className="text-gray-700 text-2xl" />,
  "charging-power": (
    <HiOutlineLightningBolt className="text-gray-700 text-2xl" />
  ),
  health: <HiOutlineHeart className="text-gray-700 text-2xl" />,
  "health-lifestyle": <HiOutlineHeart className="text-gray-700 text-2xl" />,
};

// Mock data for problems/needs
const commonProblems = [
  {
    id: 1,
    icon: <BsBatteryCharging className="text-xl" />,
    title: "แบตหมดบ่อย",
    description: "Power Bank ชาร์จเร็ว จุเยอะ",
    color: "bg-orange-100 text-orange-600",
    slug: "/category/charging-power/power-bank",
  },
  {
    id: 2,
    icon: <BsHeadphones className="text-xl" />,
    title: "หูฟังไม่สบาย",
    description: "หูฟังใส่นานได้ ไม่เจ็บ",
    color: "bg-violet-100 text-violet-600",
    slug: "/category/audio/headphones?filter=comfort",
  },
  {
    id: 3,
    icon: <BsLightningCharge className="text-xl" />,
    title: "ชาร์จช้ามาก",
    description: "หัวชาร์จ + สาย Fast Charge",
    color: "bg-sky-100 text-sky-600",
    slug: "/category/charging-power/charger",
  },
  {
    id: 4,
    icon: <HiOutlineDesktopComputer className="text-xl" />,
    title: "โน้ตบุ๊คหนัก",
    description: "บาง เบา แต่แรง",
    color: "bg-emerald-100 text-emerald-600",
    slug: "/category/laptop",
  },
];

// Helper: format relative time in Thai
function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "วันนี้";
  if (diffDays === 1) return "เมื่อวาน";
  if (diffDays < 7) return `${diffDays} วันที่แล้ว`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks} สัปดาห์ที่แล้ว`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} เดือนที่แล้ว`;
}

export default function Home() {
  // Fetch real data from API in parallel
  // let categories: ICategoryItemVm[] = [];
  const { data: homeData } = useHome();

  // Top picks = recommended products or highest score
  const topPicks = homeData?.topPicks;
  // Fallback if no recommended products

  // Latest reviews = most recently updated
  const latestReviews = homeData?.lastReview;

  if (!homeData) {
    // Show loading skeleton or placeholder
    return (
      <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
          <div className="h-[420px] bg-gray-300 rounded-[2.5rem] rounded-br-[3.5rem]" />
          <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-tl-[2.5rem]" />
          <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-tr-[2.5rem]" />
          <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-bl-[2.5rem]" />
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {/* Hero Section - Prompt + Top Picks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {/* Main Hero - What are you looking for? */}
        <div className="lg:col-span-1 lg:row-span-2 bg-black rounded-[2.5rem] rounded-br-[3.5rem] p-8 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-brand/80 text-xs font-medium tracking-wide flex items-center gap-1.5">
              <HiOutlineSparkles className="text-sm" /> หาของดีๆ กันเถอะ
            </span>
            <h1 className="text-white text-3xl md:text-[2.75rem] font-bold mt-5 leading-[1.15]">
              วันนี้
              <br />
              อยากได้อะไร?
            </h1>
            <p className="text-gray-500 mt-4 text-[13px] leading-relaxed">
              บอกมาเลย — จะเป็นหมวดหมู่ หรือปัญหาที่เจอก็ได้
              <br />
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
              <Link
                href="/category/charging-power"
                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all"
              >
                🔋 Power Bank
              </Link>
              <Link
                href="/category/audio"
                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all"
              >
                🎧 หูฟัง
              </Link>
              <Link
                href="/category/laptop"
                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:bg-white/10 hover:text-gray-300 transition-all"
              >
                💻 Laptop
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <Link
              href="/category"
              className="bg-brand text-black font-semibold px-6 py-3 rounded-2xl rounded-tl-lg hover:bg-brand-hover transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              ดูของทั้งหมด <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* 🌟 Top Picks Section */}
        <div className="lg:col-span-2 bg-white rounded-[1.75rem] rounded-tl-[2.5rem] p-6 md:p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <h2 className="text-lg font-bold text-gray-900">
                ของดีประจำเดือน
              </h2>
            </div>
            <Link
              href="/top-picks"
              className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors"
            >
              ดูเพิ่ม <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {topPicks?.map((item, idx) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group"
              >
                <div
                  className={`bg-gray-50/80 p-4 hover:bg-gray-100/80 transition-all hover:-translate-y-0.5 ${
                    idx === 0
                      ? "rounded-2xl rounded-tl-3xl"
                      : idx === 1
                      ? "rounded-2xl"
                      : "rounded-2xl rounded-br-3xl"
                  }`}
                >
                  {item.image ? (
                    <div className="relative w-full h-28 md:h-32 mb-3 rounded-xl overflow-hidden bg-white/80">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-28 md:h-32 mb-3 rounded-xl bg-gray-100 flex items-center justify-center">
                      <span className="text-3xl text-gray-300">📦</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    {item.isRecommended && (
                      <span className="inline-block text-[11px] text-brand font-medium bg-brand/10 px-2 py-0.5 rounded-full">
                        แนะนำ
                      </span>
                    )}
                    <span className="inline-block text-[11px] text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
                      {item.overallScore}/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mt-2 line-clamp-1 text-[15px]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {/* {item?.category?.nameTh || item?.brand?.name || ""} */}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 🧠 Problem-based Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 rounded-[1.75rem] rounded-tr-[2.5rem] p-6 md:p-7">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">🤔</span>
            <h2 className="text-lg font-bold text-gray-900">
              เจอปัญหาแบบนี้มั้ย?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
            {commonProblems.map((problem, idx) => (
              <Link key={problem.id} href={problem.slug} className="group">
                <div
                  className={`bg-white/90 backdrop-blur-sm p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full ${
                    idx === 0
                      ? "rounded-2xl rounded-tl-3xl"
                      : idx === 3
                      ? "rounded-2xl rounded-br-3xl"
                      : "rounded-2xl"
                  }`}
                >
                  <div
                    className={`w-9 h-9 ${problem.color} rounded-lg flex items-center justify-center mb-2.5`}
                  >
                    {problem.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[13px] leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {problem.description}
                  </p>
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
          <Link
            href="/categories"
            className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors"
          >
            ทั้งหมด <FiArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {homeData?.categories?.slice(0, 6).map((category, idx) => {
            // Varying border radius for organic feel
            const radiusClass =
              idx === 0
                ? "rounded-xl rounded-tl-2xl"
                : idx === 2
                ? "rounded-xl rounded-tr-2xl"
                : idx === 5
                ? "rounded-xl rounded-br-2xl"
                : "rounded-xl";

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="block"
              >
                <div
                  className={`
                      ${radiusClass} p-3 md:p-4 text-center group transition-all
                      bg-gray-50/80 hover:bg-gray-100 cursor-pointer hover:-translate-y-0.5
                    `}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm group-hover:shadow transition-shadow">
                    {categoryIcons[category.slug] || (
                      <HiOutlineDesktopComputer className="text-gray-700 text-xl" />
                    )}
                  </div>
                  <h3 className="font-medium text-gray-800 text-[13px]">
                    {category.nameTh || category.nameEn}
                  </h3>
                </div>
              </Link>
            );
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
            <Link
              href="/reviews"
              className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors"
            >
              ดูเพิ่ม <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-2">
            {latestReviews?.map((review, idx) => (
              <Link
                key={review.id}
                href={`/product/${review.id}`}
                className="block group"
              >
                <div
                  className={`flex items-center gap-4 p-3 hover:bg-gray-50/80 transition-all ${
                    idx === 0
                      ? "rounded-xl rounded-tl-2xl"
                      : idx === latestReviews.length - 1
                      ? "rounded-xl rounded-br-2xl"
                      : "rounded-xl"
                  }`}
                >
                  {review.image ? (
                    <div className="relative w-14 h-14 flex-shrink-0 bg-gray-100/80 rounded-lg overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-contain p-1.5"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-100/80 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-gray-300">📦</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1 text-[15px]">
                      {review.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {review.category?.nameTh || review.brand?.name || ""}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-base font-bold text-brand">
                      {review.overallScore}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {formatRelativeTime(review.updatedAt)}
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
            <p className="text-gray-500 text-[13px]">ไม่ได้มาจากสเปก</p>
          </div>

          <div className="bg-white rounded-[1.5rem] p-5">
            <span className="text-2xl mb-2 block">🎯</span>
            <h3 className="font-bold text-gray-900 mb-0.5 text-[15px]">
              เลือกง่าย
            </h3>
            <p className="text-gray-500 text-[13px]">สรุปให้แล้ว แค่เลือก</p>
          </div>

          <div className="bg-white rounded-[1.5rem] rounded-bl-[2.5rem] p-5">
            <span className="text-2xl mb-2 block">💎</span>
            <h3 className="font-bold text-gray-900 mb-0.5 text-[15px]">
              ไม่มีสปอนเซอร์
            </h3>
            <p className="text-gray-500 text-[13px]">มีแค่ affiliate link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
