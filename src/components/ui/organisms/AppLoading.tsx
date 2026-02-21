import React from "react";
import { Bone } from "@/components/ui/atoms";

export interface AppLoadingProps {
  variant?: "default" | "product-detail";
}

function DefaultLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] bg-black p-8 md:p-12 space-y-4">
        <Bone className="h-4 w-28 rounded-full bg-white/10" />
        <Bone className="h-10 w-2/3 rounded-xl bg-white/10" />
        <Bone className="h-5 w-full max-w-lg rounded-lg bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-2xl bg-white p-5 space-y-4">
            <Bone className="h-40 w-full rounded-xl" />
            <Bone className="h-5 w-3/4 rounded-lg" />
            <Bone className="h-4 w-1/2 rounded-lg" />
            <Bone className="h-4 w-2/3 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetailLoading() {
  return (
    <div className="space-y-8">
      <Bone className="h-5 w-44 rounded-lg" />

      <div className="max-w-7xl mx-auto mb-8 space-y-3">
        <Bone className="h-4 w-28 rounded-full" />
        <Bone className="h-10 w-2/3 rounded-xl" />
        <Bone className="h-6 w-1/2 rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <Bone className="h-56 md:col-span-2 lg:col-span-2" />
        <Bone className="h-56 md:col-span-2 lg:col-span-2" />
        <Bone className="h-56 md:col-span-2 lg:col-span-2" />
        <Bone className="h-44 md:col-span-2 lg:col-span-3" />
        <Bone className="h-44 md:col-span-2 lg:col-span-3" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Bone className="h-56" />
        <Bone className="h-56" />
      </div>
    </div>
  );
}

export function AppLoading({ variant = "default" }: AppLoadingProps) {
  if (variant === "product-detail") {
    return <ProductDetailLoading />;
  }

  return <DefaultLoading />;
}
