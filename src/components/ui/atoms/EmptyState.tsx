import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  EmptyState – shown when a list has no items
 *
 *  Design Tokens:
 *    - Token-based vertical padding (py-12 = space-12)
 *    - Token-based spacing for icon/message/action
 *    - Uses gray-500 for muted text
 * ───────────────────────────────────────────── */

export interface EmptyStateProps {
  icon?: React.ReactNode;
  message?: string;
  children?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  message = "ยังไม่มีข้อมูล",
  children,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("text-center py-12", className)}>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <p className="text-gray-500 text-lg">{message}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
