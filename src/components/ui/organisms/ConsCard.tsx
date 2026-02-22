/**
 * ConsCard - Detailed cons section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: white, red
 */

import { FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { iconBoxSizes, typography, radius } from "../tokens";

export interface ConData {
  id: string;
  content: string;
}

export interface ConsCardProps {
  /** Cons data */
  cons: ConData[];
  /** Container className */
  className?: string;
}

export function ConsCard({ cons, className }: ConsCardProps) {
  return (
    <div className={cn("bg-white rounded-4xl p-8", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconBoxSizes.lg} bg-red-500/20 ${radius.xl} flex items-center justify-center`}>
          <FiX className={`${typography.size['2xl']} text-red-500`} />
        </div>
        <div>
          <span className={`text-gray-400 ${typography.size.xs} ${typography.weight.semibold} tracking-wider uppercase`}>
            CONS
          </span>
          <h2 className={`${typography.size.xl} ${typography.weight.bold} text-gray-900`}>ข้อเสียที่ต้องรู้</h2>
        </div>
      </div>

      <div className="space-y-6">
        {cons.map((con) => (
          <div key={con.id} className="border-l-4 border-red-500 pl-4">
            <p className="text-gray-900">{con.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
