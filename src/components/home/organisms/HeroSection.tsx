import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { SearchPrompt } from "../molecules";

export function HeroSection() {
  return (
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

      <SearchPrompt />

      <div className="flex items-center gap-3 mt-auto">
        <Link
          href="/category"
          className="bg-brand text-black font-semibold px-6 py-3 rounded-2xl rounded-tl-lg hover:bg-brand-hover transition-all hover:scale-[1.02] flex items-center gap-2"
        >
          ดูของทั้งหมด <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
