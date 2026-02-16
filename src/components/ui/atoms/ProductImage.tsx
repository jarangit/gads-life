import React from "react";
import Image from "next/image";
import { FiPackage } from "react-icons/fi";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  ProductImage – image with automatic fallback
 *
 *  Design Tokens:
 *    - Token-based radius (rounded-xl = radius-xl)
 *    - Uses gray-100/80 as default background
 *    - Token-based transition duration (duration-300)
 *    - Consistent padding scale
 *
 *  Re-used everywhere a product/category image
 *  is shown with a placeholder.
 * ───────────────────────────────────────────── */

export interface ProductImageProps {
  src: string | null | undefined;
  alt: string;
  /** Container aspect / size class, e.g. "w-full h-32" or "w-14 h-14" */
  sizeClass?: string;
  /** Image internal padding */
  imagePadding?: string;
  /** `sizes` hint for Next/Image */
  sizes?: string;
  /** Radius for the container */
  radius?: string;
  /** Container bg */
  bgClass?: string;
  /** Fallback icon size class */
  fallbackIconClass?: string;
  /** Enable scale-on-hover (needs a parent `group`) */
  hoverScale?: boolean;
  className?: string;
  /** Use fill (default) or explicit width/height */
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ProductImage({
  src,
  alt,
  sizeClass = "w-full h-32",
  imagePadding = "p-2",
  sizes = "(max-width: 768px) 100vw, 33vw",
  radius = "rounded-xl",
  bgClass = "bg-gray-100/80",
  fallbackIconClass = "text-3xl text-gray-300",
  hoverScale = false,
  className,
  fill = true,
  width,
  height,
}: ProductImageProps) {
  if (!src) {
    return (
      <div
        className={cn(
          sizeClass,
          radius,
          bgClass,
          "flex items-center justify-center",
          className,
        )}
      >
        <FiPackage className={fallbackIconClass} />
      </div>
    );
  }

  if (fill) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          sizeClass,
          radius,
          bgClass,
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-contain",
            imagePadding,
            hoverScale &&
              "group-hover:scale-105 transition-transform duration-300",
          )}
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div className={cn(sizeClass, radius, bgClass, "overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 300}
        height={height ?? 300}
        className={cn(
          "object-contain mx-auto",
          imagePadding,
          hoverScale &&
            "group-hover:scale-105 transition-transform duration-300",
        )}
      />
    </div>
  );
}
