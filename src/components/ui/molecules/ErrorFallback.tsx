"use client";

import React from "react";
import { transitions, typography, radius } from "../tokens";

/* ─────────────────────────────────────────────
 *  ErrorFallback – error state with retry button
 * ───────────────────────────────────────────── */

export interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  message = "เกิดข้อผิดพลาดในการโหลดข้อมูล",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className={`w-16 h-16 bg-red-100 ${radius.full} flex items-center justify-center mb-4`}>
        <span className={typography.size['2xl']}>⚠️</span>
      </div>
      <h3 className={`${typography.size.lg} ${typography.weight.bold} text-gray-900 mb-2`}>
        ไม่สามารถโหลดข้อมูลได้
      </h3>
      <p className="text-gray-500 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={`px-6 py-2.5 bg-black text-white ${typography.weight.medium} ${radius.full} hover:bg-gray-800 ${transitions.colorsNormal}`}
        >
          ลองใหม่
        </button>
      )}
    </div>
  );
}
