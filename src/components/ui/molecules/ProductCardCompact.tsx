import React from "react";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { ProductImage } from "../atoms/ProductImage";
import { RecommendedBadge, ScoreBadge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { typography, transitions } from "../tokens";

/* ─────────────────────────────────────────────
 *  ProductCard – compact product card (home,
 *  category detail, listing grids).
 * ───────────────────────────────────────────── */

export interface ProductCardCompactProps {
  id: string;
  name: string;
  slug?: string;
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
  affiliateLink?: string | null;
  showActions?: boolean;
}

export function ProductCardCompact({
  slug,
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
  affiliateLink,
  showActions = false,
}: ProductCardCompactProps) {
  const link = href ?? `/products/${slug}`;
  const hasDiscount = sellPrice != null && price != null && sellPrice < price;
  const displayPrice = hasDiscount ? sellPrice : price;

  return (
    <div
      className={cn(
        "group bg-gray-50/80 hover:bg-gray-100/80",
        transitions.allNormal,
        radius,
      )}
    >
      <Link href={link} className="block p-4 active:scale-[0.99]">
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

        <h3
          className={`${typography.weight.semibold} text-gray-900 mt-2 line-clamp-1 ${typography.size.body}`}
        >
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
      </Link>

      {/* Action buttons */}
      {showActions && (
        <div className="px-4 pb-4 flex-col flex-wrap gap-y-2">
          {affiliateLink && (
            <Button
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              radius="full"
              className="flex-1 justify-center w-full"
            >
              เช็คราคา <FiExternalLink />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
