import React from "react";
import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  ReviewRow – horizontal row for listing
 *  recent reviews / products.
 * ───────────────────────────────────────────── */

export interface ReviewRowProps {
  id: string;
  name: string;
  image?: string | null;
  /** Left subtitle line */
  subtitle?: string;
  /** Right-side primary value (e.g. score) */
  value?: string | number;
  /** Right-side secondary label (e.g. relative time) */
  valueLabel?: string;
  href?: string;
  radius?: string;
}

export function ReviewRow({
  id,
  name,
  image,
  subtitle,
  value,
  valueLabel,
  href,
  radius = "rounded-xl",
}: ReviewRowProps) {
  const link = href ?? `/product/${id}`;

  return (
    <Link href={link} className="block group">
      <div
        className={cn(
          "flex items-center gap-4 p-3 hover:bg-gray-50/80 transition-all",
          radius,
        )}
      >
        <ProductImage
          src={image}
          alt={name}
          sizeClass="w-14 h-14"
          radius="rounded-lg"
          bgClass="bg-gray-100/80"
          imagePadding="p-1.5"
          fallbackIconClass="text-xl text-gray-300"
          sizes="56px"
          className="shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1 text-[15px]">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
          )}
        </div>

        {(value !== undefined || valueLabel) && (
          <div className="text-right shrink-0">
            {value !== undefined && (
              <div className="text-base font-bold text-brand">{value}</div>
            )}
            {valueLabel && (
              <div className="text-[11px] text-gray-400 mt-0.5">
                {valueLabel}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
