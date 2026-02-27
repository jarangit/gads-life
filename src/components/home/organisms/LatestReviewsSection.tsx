/* ──────── LatestReviewsSection – Apple Newsroom hero + stacked list ──────── */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPackage } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { editorial, transitions } from "@/components/ui";
import { formatRelativeTime } from "@/components/ui/utils";
import { LastReview } from "@/lib/api/home/type";

interface LatestReviewsSectionProps {
  reviews: LastReview[];
}

/* ─── Large featured card (first item) ─── */
function ReviewFeaturedCard({ review }: { review: LastReview }) {
  return (
    <Link
      href={`/products/${review.slug}`}
      className={cn(
        editorial.featuredCard,
        "md:col-span-2 min-h-[280px] md:min-h-[320px]",
        editorial.cardHover,
      )}
    >
      {review.image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-[1.03] group-hover:scale-[1.06] transition-transform duration-500"
            style={{ backgroundImage: `url(${review.image})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900" />
      )}

      <div className="relative z-10 p-5 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand/90 text-black">
            {review.subtitle}
          </span>
          <span className="text-[11px] text-white/60">
            {formatRelativeTime(review.updatedAt)}
          </span>
        </div>
        <h3 className="text-white text-xl font-bold leading-snug line-clamp-2 group-hover:text-brand-light transition-colors duration-200">
          {review.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-brand">{review.overallScore}</span>
          <span className="text-white/50 text-sm">/ 5</span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Small list card (subsequent items) ─── */
function ReviewSmallCard({ review }: { review: LastReview }) {
  return (
    <Link
      href={`/products/${review.slug}`}
      className={cn(
        "group flex gap-3 items-start p-4",
        editorial.cardBorder,
        "hover:border-gray-200 hover:shadow-md",
        transitions.allNormal,
      )}
    >
      <div className="w-14 h-14 shrink-0 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
        {review.image ? (
          <Image
            src={review.image}
            alt={review.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        ) : (
          <FiPackage className="text-gray-300 text-xl" />
        )}
      </div>

      <div className="flex flex-col gap-0.5 min-w-0 py-0.5">
        <span className="text-[11px] text-gray-400">{review.subtitle}</span>
        <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-brand-dark transition-colors duration-200">
          {review.name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs font-bold text-brand-dark">{review.overallScore}</span>
          <span className="text-[11px] text-gray-400">
            {formatRelativeTime(review.updatedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Section ─── */
export function LatestReviewsSection({ reviews }: LatestReviewsSectionProps) {
  const [featured, ...rest] = reviews;

  return (
    <section>
      <div className={editorial.header}>
        <h2 className={editorial.title}>เพิ่งรีวิวไป</h2>
        <Link href="/products" className={editorial.link}>
          ดูเพิ่ม <FiArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured && <ReviewFeaturedCard review={featured} />}

        <div className="flex flex-col gap-3">
          {rest.slice(0, 3).map((review) => (
            <ReviewSmallCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

