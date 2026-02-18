import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { CategoryIconCard } from "../molecules";
import { Category } from "@/lib/api/home/type";
import { bentoRadius, sectionPanel } from "@/components/ui";

interface CategoriesSectionProps {
  categories: Category[];
}

const getRadiusClass = (idx: number): string => {
  if (idx === 0) return bentoRadius.catTL;
  if (idx === 2) return bentoRadius.catTR;
  if (idx === 5) return bentoRadius.catBR;
  return bentoRadius.catDefault;
};

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <div className={`bg-white ${bentoRadius.sectionBL} ${sectionPanel.padding}`}>
      <SectionHeader
        icon={<HiOutlineFolder className="text-xl text-gray-600" />}
        title="เลือกตามหมวด"
        linkHref="/categories"
        linkText="ทั้งหมด"
      />

      <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ${sectionPanel.gap}`}>
        {categories.slice(0, 6).map((category, idx) => (
          <CategoryIconCard
            key={category.id}
            category={category}
            radiusClass={getRadiusClass(idx)}
          />
        ))}
      </div>
    </div>
  );
}
