/* ──────── HeroSection – editorial 2-col hero ──────── */
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { SearchPrompt } from "../molecules";
import { typography, transitions } from "@/components/ui";
import type { Category } from "@/lib/api/home/type";

interface HeroSectionProps {
  onSearchClick?: () => void;
  categories?: Category[];
}

export function HeroSection({ onSearchClick, categories }: HeroSectionProps) {
  return (
    <div className="bg-black rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8 min-h-[280px] md:min-h-[320px] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none" aria-hidden />

      {/* Left: Headline + CTA */}
      <div className="md:col-span-2 flex flex-col justify-between">
        <div>
          <span className={`text-brand/80 ${typography.size.xs} ${typography.weight.medium} tracking-wide flex items-center gap-1.5`}>
            <HiOutlineSparkles className={typography.size.sm} /> หาของดีๆ กันเถอะ
          </span>
          <h1 className={`text-white ${typography.size["4xl"]} md:${typography.size.display} ${typography.weight.bold} mt-4 ${typography.leading.hero}`}>
            วันนี้
            <br />
            อยากได้อะไร?
          </h1>
          <p className={`text-gray-500 mt-4 ${typography.size.caption} ${typography.leading.relaxed}`}>
            บอกมาเลย — จะเป็นหมวดหมู่
            <br />
            หรือปัญหาที่เจอก็ได้
          </p>
        </div>

        <Link
          href="/products"
          className={`mt-6 bg-brand text-black ${typography.weight.semibold} px-6 py-3 rounded-2xl hover:bg-brand-hover ${transitions.allNormal} hover:scale-[1.02] flex items-center gap-2 w-fit`}
        >
          ดูสินค้าทั้งหมด <FiArrowRight />
        </Link>
      </div>

      {/* Right: Search + category shortcuts */}
      <div className="md:col-span-3 flex flex-col justify-center">
        <SearchPrompt onSearchClick={onSearchClick} categories={categories} />
      </div>
    </div>
  );
}
