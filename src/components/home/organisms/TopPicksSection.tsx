import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { TopPickCard } from "../molecules";
import { LastReview } from "@/lib/api/home/type";
import { IProductItemVm } from "@/types/models/product";

interface TopPicksSectionProps {
  items: IProductItemVm[];
}

const radiusClasses = [
  "rounded-2xl rounded-tl-3xl",
  "rounded-2xl",
  "rounded-2xl rounded-br-3xl",
];

export function TopPicksSection({ items }: TopPicksSectionProps) {
  return (
    <div className="lg:col-span-2 bg-white rounded-[1.75rem] rounded-tl-[2.5rem] p-6 md:p-7">
      <SectionHeader
        icon={<HiOutlineStar className="text-xl text-amber-500" />}
        title="ของดีประจำเดือน"
        linkHref="/top-picks"
        linkText="ดูเพิ่ม"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {items.map((item, idx) => (
          <TopPickCard
            key={item.id}
            item={item}
            radiusClass={radiusClasses[idx] || "rounded-2xl"}
          />
        ))}
      </div>
    </div>
  );
}
