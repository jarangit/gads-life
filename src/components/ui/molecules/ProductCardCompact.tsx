import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
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
  affiliateLink,
  showActions = false,
}: ProductCardCompactProps) {
  const link = href ?? `/products/${slug}`;

  return (
    <div
      className={cn(
        "group bg-white hover:bg-white-100/80",
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
