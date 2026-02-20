/**
 * HeroImageCard - Product image display card
 *
 * @token radius: rounded-4xl
 * @token color: gray-100, gray-200
 */

import Image from "next/image";
import { cn } from "@/utils/cn";

export interface HeroImageCardProps {
  /** Image URL */
  image?: string | null;
  /** Product name */
  name: string;
  /** Container className */
  className?: string;
}

export function HeroImageCard({ image, name, className }: HeroImageCardProps) {
  return (
    <div
      className={cn(
        " bg-white rounded-4xl p-8 relative overflow-hidden min-h-75 flex items-center justify-center",
        className,
      )}
    >
      <div className="text-center">
        {image && (
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="mx-auto"
          />
        )}
        <span className="text-gray-500 text-sm">{name}</span>
      </div>
    </div>
  );
}
