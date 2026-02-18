import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { TopPickCard } from "../molecules";
import { LastReview } from "@/lib/api/home/type";
import { IProductItemVm } from "@/types/models/product";
import { accentColors, bentoRadius, sectionPanel, radius } from "@/components/ui";

interface TopPicksSectionProps {
  items: IProductItemVm[];
}

const radiusClasses = [
  `${radius['2xl']} rounded-tl-3xl`,
  radius['2xl'],
  `${radius['2xl']} rounded-br-3xl`,
];

export function TopPicksSection({ items }: TopPicksSectionProps) {
  return (
    <div className={`lg:col-span-2 bg-white ${bentoRadius.sectionTL} ${sectionPanel.padding}`}>
      <SectionHeader
        icon={<HiOutlineStar className={`text-xl ${accentColors.amber.text}`} />}
        title="ของดีประจำเดือน"
        linkHref="/top-picks"
        linkText="ดูเพิ่ม"
      />

      <div className={`grid grid-cols-1 md:grid-cols-3 ${sectionPanel.gap}`}>
        {items.map((item, idx) => (
          <TopPickCard
            key={item.id}
            item={item}
            radiusClass={radiusClasses[idx] || radius['2xl']}
          />
        ))}
      </div>
    </div>
  );
}
