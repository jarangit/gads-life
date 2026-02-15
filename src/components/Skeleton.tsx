"use client";

import React from "react";

/** Pulsing placeholder block — the building brick for all skeletons */
function Bone({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-gray-200 ${className}`}
      aria-hidden
    />
  );
}

// ──────────────────────────────────────────────
//  Category Card skeleton
// ──────────────────────────────────────────────

export function CategoryCardSkeleton() {
  return (
    <div className="bg-white rounded-[2rem] p-6 min-h-[200px]">
      <div className="flex justify-between items-start">
        <Bone className="w-14 h-14 rounded-2xl" />
        <Bone className="w-10 h-10 rounded-full" />
      </div>
      <div className="mt-6 space-y-3">
        <Bone className="h-6 w-2/3 rounded-lg" />
        <Bone className="h-4 w-full rounded-lg" />
        <Bone className="h-4 w-4/5 rounded-lg" />
      </div>
    </div>
  );
}

export function CategoryGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────
//  Category Detail skeleton
// ──────────────────────────────────────────────

export function CategoryDetailSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back link */}
      <Bone className="h-5 w-40 rounded-lg" />

      {/* Header card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
        <Bone className="h-6 w-32 rounded-full" />
        <Bone className="h-10 w-2/3 rounded-xl" />
        <Bone className="h-5 w-full rounded-lg" />
        <Bone className="h-5 w-3/4 rounded-lg" />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 space-y-4">
            <Bone className="h-40 w-full rounded-xl" />
            <Bone className="h-5 w-3/4 rounded-lg" />
            <Bone className="h-4 w-1/2 rounded-lg" />
            <Bone className="h-4 w-1/3 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
//  Generic error fallback
// ──────────────────────────────────────────────

interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  message = "เกิดข้อผิดพลาดในการโหลดข้อมูล",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">⚠️</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        ไม่สามารถโหลดข้อมูลได้
      </h3>
      <p className="text-gray-500 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          ลองใหม่
        </button>
      )}
    </div>
  );
}
