/**
 * BeforePurchaseCard - Before purchase points section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: white, purple
 */

import { cn } from "@/utils/cn";
import { ContentPoint } from "../molecules";

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
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl">🤔</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
            BEFORE PURCHASE
          </span>
          <h2 className="text-xl font-bold text-gray-900">
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
