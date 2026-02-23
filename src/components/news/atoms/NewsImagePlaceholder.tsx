/* ──────── News Image Placeholder Atom ──────── */

import { HiOutlineNewspaper } from "react-icons/hi";
import { cn } from "@/utils/cn";
import { radius } from "@/components/ui";

export interface NewsImagePlaceholderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-full h-48",
};

const iconSizes = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export function NewsImagePlaceholder({
  size = "md",
  className,
}: NewsImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-gray-50 flex items-center justify-center text-gray-300 border border-dashed border-gray-200",
        radius.xl,
        sizeClasses[size],
        className
      )}
    >
      <HiOutlineNewspaper className={iconSizes[size]} />
    </div>
  );
}
