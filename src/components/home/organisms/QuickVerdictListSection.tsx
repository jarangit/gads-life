/* ──────── QuickVerdictListSection – 2-col editorial tile grid ──────── */
import Link from "next/link";
import { FiArrowRight, FiHelpCircle } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { editorial, transitions, typography } from "@/components/ui";
import { QuickVerdictProduct } from "@/lib/api/home/type";

interface QuickVerdictListSectionProps {
  items: QuickVerdictProduct[];
}

export function QuickVerdictListSection({ items }: QuickVerdictListSectionProps) {
  return (
    <section>
      <div className={editorial.header}>
        <div className="flex items-center gap-2">
          <FiHelpCircle className="text-xl text-gray-600" />
          <h2 className={editorial.title}>รู้ไหมนี่คือสินค้าอะไร?</h2>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/products/${item.slug}`}
              className={cn(
                "group flex items-center justify-between gap-3",
                editorial.cardBorder,
                "hover:border-gray-200 hover:shadow-md",
                "px-4 py-3",
                transitions.allFast,
              )}
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span
                  className={`${typography.size.xs} text-brand-dark ${typography.weight.semibold} uppercase tracking-wide`}
                >
                  {item.categoryName}
                </span>
                <p
                  className={`${typography.size.sm} text-gray-600 group-hover:text-gray-900 ${transitions.colorsNormal} line-clamp-1`}
                >
                  &ldquo;{item.quickVerdict}&rdquo;
                </p>
              </div>
              <FiArrowRight
                className={`text-gray-300 group-hover:text-brand shrink-0 ${transitions.colorsNormal}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

