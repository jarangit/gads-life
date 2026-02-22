/**
 * WeaknessesCard - Weaknesses (จุดด้อย) section
 *
 * @token radius: rounded-4xl, rounded-2xl, rounded-xl
 * @token color: gray-900, red
 */

import { FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { accentColors, iconBoxSizes, typography, radius } from "../tokens";

export interface WeaknessData {
  id: string;
  content: string;
}

export interface WeaknessesCardProps {
  /** Weakness items */
  weaknesses: WeaknessData[];
  /** Container className */
  className?: string;
}

export function WeaknessesCard({
  weaknesses,
  className,
}: WeaknessesCardProps) {
  return (
    <div className={cn("bg-red-50 rounded-4xl p-8 min-h-70", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} ${accentColors.red.bg} ${radius.xl} flex items-center justify-center`}>
          <FiX className={`${typography.size.lg} ${accentColors.red.text}`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            WEAKNESSES
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-gray-900`}>
            จุดด้อย
          </h2>
        </div>
      </div>
      <div className="space-y-3">
        {weaknesses.map((weakness) => (
          <div
            key={weakness.id}
            className="flex items-start gap-3"
          >
            <FiX className={`${accentColors.red.text} mt-1 shrink-0`} />
            <p className={`${typography.weight.medium} text-gray-800`}>{weakness.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
