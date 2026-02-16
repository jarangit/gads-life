/**
 * PricingCard - Pricing section with affiliate link
 *
 * @token radius: rounded-4xl, rounded-full
 * @token color: black, gray-900, brand
 */

import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";

export interface PricingData {
  price: number;
  priceLabel?: string;
}

export interface PricingCardProps {
  /** Pricing data */
  pricing?: PricingData | null;
  /** Fallback price if pricing not provided */
  price?: number;
  /** Affiliate link */
  affiliateLink?: string | null;
  /** Container className */
  className?: string;
}

export function PricingCard({
  pricing,
  price,
  affiliateLink,
  className,
}: PricingCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("th-TH").format(value);
  };

  const displayPrice = pricing?.price ?? price ?? 0;

  return (
    <div
      className={cn(
        "bg-linear-to-r from-black to-gray-900 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <span className="text-brand text-xs font-semibold tracking-wider uppercase">
          PRICING
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">ราคา</h2>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              {pricing?.priceLabel && (
                <span className="text-gray-400 text-sm">
                  {pricing.priceLabel}
                </span>
              )}
              <p className="text-3xl font-bold">฿{formatPrice(displayPrice)}</p>
            </div>
            {affiliateLink && (
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-black font-bold px-8 py-4 rounded-full hover:bg-brand-hover transition-colors flex items-center gap-2"
              >
                เช็กราคาล่าสุด <FiArrowRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
