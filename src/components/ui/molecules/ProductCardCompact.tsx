import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { ProductImage } from "../atoms/ProductImage";
import { RecommendedBadge, ScoreBadge } from "../atoms/Badge";
import { typography, transitions } from "../tokens";

/* ─────────────────────────────────────────────
 *  ProductCard – compact product card (home,
 *  category detail, listing grids).
 * ───────────────────────────────────────────── */

export interface ProductCardCompactProps {
  id: string;
  name: string;
  image?: string | null;
  overallScore: string | number;
  isRecommended?: boolean;
  subtitle?: string;
  href?: string;
  /** Border-radius class */
  radius?: string;
  price?: number;
  currency?: string;
  sellPrice?: number;
}

export function ProductCardCompact({
  id,
  name,
  image,
  overallScore,
  isRecommended,
  subtitle,
  href,
  radius = "rounded-2xl",
  price,
  currency = "฿",
  sellPrice,
}: ProductCardCompactProps) {
  const link = href ?? `/product/${id}`;
  const hasDiscount = sellPrice != null && price != null && sellPrice < price;
  const displayPrice = hasDiscount ? sellPrice : price;

  return (
    <Link href={link} className="group">
      <div
        className={cn(
          "bg-gray-50/80 p-4 hover:bg-gray-100/80", transitions.allNormal, "hover:-translate-y-0.5",
          radius,
        )}
      >
        <ProductImage
          src={image}
          alt={name}
          sizeClass="w-full h-28 md:h-32"
          radius="rounded-xl"
          bgClass="bg-white/80"
          hoverScale
          className="mb-3"
        />

        <div className="flex items-center gap-1.5">
          {isRecommended && <RecommendedBadge />}
          <ScoreBadge score={overallScore} />
        </div>

        <h3 className={`${typography.weight.semibold} text-gray-900 mt-2 line-clamp-1 ${typography.size.body}`}>
          {name}
        </h3>

        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
            {subtitle}
          </p>
        )}

        {displayPrice != null && (
          <div className="mt-2 flex items-baseline gap-1.5">
            <span
              className={cn(
                "text-sm font-bold",
                hasDiscount ? "text-red-500" : "text-gray-900",
              )}
            >
              {currency}
              {displayPrice.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                {currency}
                {price!.toLocaleString()}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
