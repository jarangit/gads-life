import Link from "next/link";
import { IconBox, getCategoryIcon } from "@/components/ui";
import { Category } from "@/lib/api/home/type";

interface CategoryIconCardProps {
  category: Category;
  radiusClass: string;
}

export function CategoryIconCard({
  category,
  radiusClass,
}: CategoryIconCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="block">
      <div
        className={`
          ${radiusClass} p-3 md:p-4 text-center group transition-all
          bg-gray-50/80 hover:bg-gray-100 cursor-pointer hover:-translate-y-0.5
        `}
      >
        <IconBox
          size="md"
          bgClass="bg-white"
          className="mx-auto mb-2 shadow-sm group-hover:shadow transition-shadow"
        >
          {getCategoryIcon(category.slug, "text-xl")}
        </IconBox>
        <h3 className="font-medium text-gray-800 text-[13px]">
          {category.nameTh || category.nameEn}
        </h3>
      </div>
    </Link>
  );
}
