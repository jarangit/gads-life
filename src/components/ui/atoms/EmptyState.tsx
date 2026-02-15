import React from "react";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  EmptyState – shown when a list has no items
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
