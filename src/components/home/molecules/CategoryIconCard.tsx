import Link from "next/link";
import { IconBox, getCategoryIcon, transitions, typography, shadows } from "@/components/ui";
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
          ${radiusClass} p-3 md:p-4 text-center group ${transitions.allNormal}
          bg-gray-50/80 hover:bg-gray-100 cursor-pointer hover:-translate-y-0.5
        `}
      >
        <IconBox
          size="md"
          bgClass="bg-white"
          className={`mx-auto mb-2 ${shadows.sm} group-hover:shadow ${transitions.allNormal}`}
        >
          {getCategoryIcon(category.slug, "text-xl")}
        </IconBox>
        <h3 className={`${typography.weight.medium} text-gray-800 ${typography.size.caption}`}>
          {category.nameTh || category.nameEn}
        </h3>
      </div>
    </Link>
  );
}
