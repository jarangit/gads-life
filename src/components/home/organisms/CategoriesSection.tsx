import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { CategoryIconCard } from "../molecules";
import { Category } from "@/lib/api/home/type";

interface CategoriesSectionProps {
  categories: Category[];
}

const getRadiusClass = (idx: number): string => {
  if (idx === 0) return "rounded-xl rounded-tl-2xl";
  if (idx === 2) return "rounded-xl rounded-tr-2xl";
  if (idx === 5) return "rounded-xl rounded-br-2xl";
  return "rounded-xl";
};

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <div className="bg-white rounded-[1.75rem] rounded-bl-[2.5rem] p-6 md:p-7">
      <SectionHeader
        icon={<HiOutlineFolder className="text-xl text-gray-600" />}
        title="เลือกตามหมวด"
        linkHref="/categories"
        linkText="ทั้งหมด"
      />

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
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
