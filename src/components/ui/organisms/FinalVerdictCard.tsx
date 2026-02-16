/**
 * FinalVerdictCard - Final verdict section with buy/skip conditions
 *
 * @token radius: rounded-4xl
 * @token color: black, gray-900, brand, red
 */

import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { FinalVerdictType } from "@/lib/api/product/types";
import { formatPrice } from "../utils";

export interface FinalVerdictPointData {
  id: string | number;
  type: FinalVerdictType;
  text: string;
  orderIndex: number;
}
export interface PricingData {
  price: number;
  priceLabel?: string;
}

export interface FinalVerdictCardProps {
  /** Final verdict points */
  points: FinalVerdictPointData[];
  /** Container className */
  className?: string;
  /** Pricing data */
  pricing?: PricingData | null;
  /** Fallback price if pricing not provided */
  price?: number;
  /** Affiliate link */
  affiliateLink?: string | null;
}

export function FinalVerdictCard({
  points,
  className,
  pricing,
  price,
  affiliateLink,
}: FinalVerdictCardProps) {
  const buyIfPoints = points
    .filter((p) => p.type === FinalVerdictType.BUY_IF)
    .sort((a, b) => a.orderIndex - b.orderIndex);

  const skipIfPoints = points
    .filter((p) => p.type === FinalVerdictType.SKIP_IF)
    .sort((a, b) => a.orderIndex - b.orderIndex);

  const displayPrice = pricing?.price ?? price ?? 0;

  return (
    <div
      className={cn(
        "bg-linear-to-r from-black to-gray-900 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden",
        className,
      )}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <span className="text-brand text-xs font-semibold tracking-wider uppercase">
          FINAL VERDICT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
          สรุป: ควรซื้อไหม?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-brand font-bold text-lg mb-3 flex items-center gap-2">
              <FiCheck /> ซื้อเลย ถ้า...
            </h3>
            <ul className="space-y-2 text-gray-300">
              {buyIfPoints.map((point) => (
                <li key={point.id}>• {point.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
              <FiX /> ข้ามไป ถ้า...
            </h3>
            <ul className="space-y-2 text-gray-300">
              {skipIfPoints.map((point) => (
                <li key={point.id}>• {point.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10">
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
