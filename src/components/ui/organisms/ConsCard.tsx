/**
 * ConsCard - Detailed cons section
 *
 * @token radius: rounded-4xl, rounded-xl
 * @token color: white, red
 */

import { cn } from "@/utils/cn";
import { typography, radius } from "../tokens";

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
        <div className={`w-10 h-10 bg-red-500 ${radius.xl} flex items-center justify-center`}>
          <span className={`text-white ${typography.weight.bold}`}>−</span>
        </div>
        <h2 className={`${typography.size['2xl']} ${typography.weight.bold} text-gray-900`}>ข้อเสียที่ต้องรู้</h2>
      </div>

      <div className="space-y-6">
        {cons.map((con) => (
          <div key={con.id} className="border-l-4 border-red-400 pl-4">
            <p className="text-gray-900">{con.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
