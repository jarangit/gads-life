import Link from "next/link";
import { FiArrowRight, FiHelpCircle } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { transitions, typography, bentoRadius, sectionPanel } from "@/components/ui";
import { SectionHeader } from "../atoms";
import { QuickVerdictProduct } from "@/lib/api/home/type";

/* ─────────────────────────────────────────────
 *  QuickVerdictListSection – mystery quiz panel
 *  "รู้ไหมนี่คือสินค้าอะไร?"
 * ───────────────────────────────────────────── */

interface QuickVerdictListSectionProps {
  items: QuickVerdictProduct[];
}

export function QuickVerdictListSection({ items }: QuickVerdictListSectionProps) {
  return (
    <div className={cn("bg-white", bentoRadius.sectionBR, sectionPanel.padding)}>
      <SectionHeader
        icon={<FiHelpCircle className="text-xl text-gray-600" />}
        title="รู้ไหมนี่คือสินค้าอะไร?"
      />

      <ul className={`flex flex-col ${sectionPanel.gap}`}>
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/products/${item.slug}`}
              className={cn(
                "group flex items-center justify-between gap-3",
                "bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3",
                transitions.allFast,
              )}
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className={`${typography.size.xs} text-brand-dark ${typography.weight.semibold} uppercase tracking-wide`}>
                  {item.categoryName}
                </span>
                <p className={`${typography.size.sm} text-gray-600 group-hover:text-gray-900 ${transitions.colorsNormal} line-clamp-1`}>
                  &ldquo;{item.quickVerdict}&rdquo;
                </p>
              </div>
              <FiArrowRight className={`text-gray-300 group-hover:text-brand shrink-0 ${transitions.colorsNormal}`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
