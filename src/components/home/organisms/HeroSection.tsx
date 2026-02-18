import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { SearchPrompt } from "../molecules";
import { bentoRadius, cardHeights, typography, transitions } from "@/components/ui";
import type { Category } from "@/lib/api/home/type";

interface HeroSectionProps {
  onSearchClick?: () => void;
  categories?: Category[];
}

export function HeroSection({ onSearchClick, categories }: HeroSectionProps) {
  return (
    <div className={`lg:col-span-1 lg:row-span-2 bg-black ${bentoRadius.hero} p-8 ${cardHeights.hero} flex flex-col justify-between relative overflow-hidden`}>
      <div>
        <span className={`text-brand/80 ${typography.size.xs} ${typography.weight.medium} tracking-wide flex items-center gap-1.5`}>
          <HiOutlineSparkles className={typography.size.sm} /> หาของดีๆ กันเถอะ
        </span>
        <h1 className={`text-white ${typography.size['3xl']} md:${typography.size.display} ${typography.weight.bold} mt-5 ${typography.leading.hero}`}>
          วันนี้
          <br />
          อยากได้อะไร?
        </h1>
        <p className={`text-gray-500 mt-4 ${typography.size.caption} ${typography.leading.relaxed}`}>
          บอกมาเลย — จะเป็นหมวดหมู่ หรือปัญหาที่เจอก็ได้
          <br />
          เดี๋ยวเราช่วยหาให้
        </p>
      </div>

      <SearchPrompt onSearchClick={onSearchClick} categories={categories} />

      <div className="flex items-center gap-3 mt-auto">
        <Link
          href="/products"
          className={`bg-brand text-black ${typography.weight.semibold} px-6 py-3 rounded-2xl rounded-tl-lg hover:bg-brand-hover ${transitions.allNormal} hover:scale-[1.02] flex items-center gap-2`}
        >
          ดูสินค้าทั้งหมด <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
