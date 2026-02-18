/**
 * BeforePurchaseCard - Before purchase points section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: white, purple
 */

import { cn } from "@/utils/cn";
import { FiHelpCircle } from "react-icons/fi";
import { ContentPoint } from "../molecules";
import { accentColors, iconBoxSizes, typography, radius } from "../tokens";

export interface PointData {
  id: string;
  content: string;
}

export interface BeforePurchaseCardProps {
  /** Points data */
  points: PointData[];
  /** Container className */
  className?: string;
}

export function BeforePurchaseCard({
  points,
  className,
}: BeforePurchaseCardProps) {
  return (
    <div className={cn("bg-white rounded-4xl p-8", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} ${accentColors.purple.bg} ${radius.xl} flex items-center justify-center`}>
          <FiHelpCircle className={`${typography.size['2xl']} ${accentColors.purple.text}`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            BEFORE PURCHASE
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-gray-900`}>
            สิ่งที่ควรรู้ก่อนซื้อ
          </h2>
        </div>
      </div>
      <div className="space-y-4">
        {points.map((point) => (
          <ContentPoint key={point.id} content={point.content} />
        ))}
      </div>
    </div>
  );
}
