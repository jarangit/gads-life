/**
 * AfterUsageCard - After usage points section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: dark, brand
 */

import { FiCheck } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { ContentPoint } from "../molecules";

export interface PointData {
  id: string;
  content: string;
}

export interface AfterUsageCardProps {
  /** Points data */
  points: PointData[];
  /** Container className */
  className?: string;
}

export function AfterUsageCard({ points, className }: AfterUsageCardProps) {
  return (
    <div className={cn("bg-[#1a1a1a] rounded-4xl p-8 text-white", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center">
          <span className="text-2xl">✅</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
            AFTER USAGE
          </span>
          <h2 className="text-xl font-bold">หลังใช้งาน</h2>
        </div>
      </div>
      <div className="space-y-4">
        {points.map((point) => (
          <ContentPoint
            key={point.id}
            content={point.content}
            icon={<FiCheck className="text-brand mt-1" />}
            textClass="text-gray-300"
          />
        ))}
      </div>
    </div>
  );
}
