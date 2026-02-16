/**
 * PriceDisplay - Shows price with optional original price and discount
 *
 * @token spacing: gap-2
 * @token color: purple-600, gray-500
 */

import { cn } from "@/utils/cn";

export interface PriceDisplayProps {
  /** Current price */
  price: number;
  /** Original price (for showing discount) */
  originalPrice?: number;
  /** Currency symbol */
  currency?: string;
  /** Label text (e.g., "ราคา", "Price") */
  label?: string;
  /** Container className */
  className?: string;
}

export function PriceDisplay({
  price,
  originalPrice,
  currency = "฿",
  label = "ราคา",
  className,
}: PriceDisplayProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString("th-TH");
  };

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      {label && <span className="text-gray-600">{label}</span>}
      <span className="text-2xl font-bold text-purple-600">
        {currency}
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span className="text-gray-500 line-through text-sm">
          {currency}
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}
