/**
 * AfterUsageCard - After usage points section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: dark, brand
 */

import { FiCheck, FiCheckCircle } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { ContentPoint } from "../molecules";
import { iconBoxSizes, typography, radius } from "../tokens";

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
    <div className={cn("bg-gray-900 rounded-4xl p-8 text-white", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} bg-brand/20 ${radius.xl} flex items-center justify-center`}>
          <FiCheckCircle className={`${typography.size['2xl']} text-brand`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            AFTER USAGE
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold}`}>หลังใช้งาน</h2>
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
