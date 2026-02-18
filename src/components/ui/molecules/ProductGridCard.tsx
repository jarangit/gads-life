/* ──────────────────────────────────────────────
 *  ProductGridCard — product card for listing grids
 *
 *  Uses ProductImage with fallback, score badge,
 *  recommended badge, brand label, and price.
 *  Designed for the All Products page grid.
 * ──────────────────────────────────────────────*/

import Link from "next/link";
import { FiStar } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { Badge } from "@/components/ui/atoms/Badge";
import { ProductImage } from "@/components/ui/atoms/ProductImage";
import { transitions, typography, shadows } from "../tokens";

export interface ProductGridCardProps {
  id: string;
  slug?: string;
  name: string;
  image: string | null;
  overallScore: number;
  isRecommended: boolean;
  priceLabel: string;
  brandName?: string;
  categoryName?: string;
  radius?: string;
  className?: string;
}

export function ProductGridCard({
  id,
  slug,
  name,
  image,
  overallScore,
  isRecommended,
  priceLabel,
  brandName,
  categoryName,
  radius = "rounded-2xl",
  className,
}: ProductGridCardProps) {
  const href = slug ? `/products/${slug}` : `/products/${id}`;

  return (
    <Link href={href} className={cn("group block", className)}>
      <div
        className={cn(
          "bg-white border border-gray-100 overflow-hidden",
          `hover:shadow-lg hover:border-gray-200 ${transitions.allSlow}`,
          radius,
        )}
      >
        {/* Image */}
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <ProductImage
            src={image}
            alt={name}
            sizeClass="w-full h-full"
            radius=""
            bgClass="bg-gray-50"
            imagePadding="p-4"
            hoverScale
            fallbackIconClass="text-4xl text-gray-300"
          />

          {/* Recommended badge */}
          {isRecommended && (
            <div className="absolute top-3 left-3">
              <Badge variant="success" size="sm">
                แนะนำ
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Brand & Category */}
          <div className="flex items-center gap-2">
            {brandName && (
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {brandName}
              </span>
            )}
            {brandName && categoryName && (
              <span className="text-gray-300">·</span>
            )}
            {categoryName && (
              <span className="text-xs text-gray-400">{categoryName}</span>
            )}
          </div>

          {/* Name */}
          <h3 className={`${typography.weight.bold} text-gray-900 line-clamp-2 ${typography.leading.tight} group-hover:text-brand ${transitions.colorsNormal}`}>
            {name}
          </h3>

          {/* Score */}
          <div className="flex items-center gap-1.5">
            <FiStar className="text-brand fill-brand w-4 h-4" />
            <span className="font-semibold text-gray-900">
              {/* {overallScore?.toFixed(1)} */}
            </span>
            <span className="text-gray-400 text-sm">/ 10</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-gray-900">{priceLabel}</p>
        </div>
      </div>
    </Link>
  );
}
