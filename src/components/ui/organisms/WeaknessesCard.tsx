/**
 * WeaknessesCard - Weaknesses (จุดด้อย) section
 *
 * @token radius: rounded-4xl, rounded-2xl, rounded-xl
 * @token color: gray-900, red
 */

import { FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { iconBoxSizes, typography, radius } from "../tokens";

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
    <div className={cn("bg-gray-900 rounded-4xl p-8 min-h-70", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} bg-red-500/20 ${radius.xl} flex items-center justify-center`}>
          <FiX className={`${typography.size['2xl']} text-red-400`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            WEAKNESSES
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-white`}>
            จุดด้อย
          </h2>
        </div>
      </div>
      <div className="space-y-4">
        {weaknesses.map((weakness) => (
          <div
            key={weakness.id}
            className="flex items-start gap-4 bg-white/5 rounded-2xl p-4"
          >
            <div className={`w-10 h-10 bg-red-500/20 ${radius.xl} flex items-center justify-center shrink-0`}>
              <FiX className="text-red-400" />
            </div>
            <div>
              <p className="text-white">{weakness.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
