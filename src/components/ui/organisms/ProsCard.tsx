/**
 * ProsCard - Detailed pros section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: white, brand
 */

import { FiCheck } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { iconBoxSizes, typography, radius } from "../tokens";

export interface ProData {
  id: string;
  content: string;
}

export interface ProsCardProps {
  /** Pros data */
  pros: ProData[];
  /** Container className */
  className?: string;
}

export function ProsCard({ pros, className }: ProsCardProps) {
  return (
    <div className={cn("bg-white rounded-4xl p-8", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} bg-brand/20 ${radius.xl} flex items-center justify-center`}>
          <FiCheck className={`${typography.size['2xl']} text-brand`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            PROS
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-gray-900`}>
            ข้อดีหลังใช้งานจริง
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {pros.map((pro) => (
          <div key={pro.id} className="border-l-4 border-brand pl-4">
            <p className="text-gray-900">{pro.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
