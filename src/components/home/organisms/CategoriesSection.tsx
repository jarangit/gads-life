/* ──────── CategoriesSection – horizontal scrollable pills ──────── */
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { getCategoryIcon, editorial, transitions } from "@/components/ui";
import { Category } from "@/lib/api/home/type";

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section>
      <div className={editorial.header}>
        <h2 className={editorial.title}>เลือกตามหมวด</h2>
        <Link href="/categories" className={editorial.link}>
          ทั้งหมด <FiArrowRight className="text-xs" />
        </Link>
      </div>

      {/* Horizontal scrollable pill row */}
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={cn(
              "flex-none flex items-center gap-2",
              "bg-white rounded-full px-4 py-2.5",
              "text-sm font-medium text-gray-700",
              "border border-gray-200",
              "hover:border-brand hover:text-brand-dark hover:bg-brand-light/50",
              transitions.allNormal,
            )}
          >
            {getCategoryIcon(category.slug, "text-base")}
            {category.nameTh}
          </Link>
        ))}
      </div>
    </section>
  );
}
