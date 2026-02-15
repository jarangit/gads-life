"use client";

import React from "react";
import { Bone } from "@/components/ui";

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

// Re-export ErrorFallback from design system for backward compatibility
export { ErrorFallback } from "@/components/ui";
export type { ErrorFallbackProps } from "@/components/ui";
