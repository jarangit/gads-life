import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IconBox } from "../atoms/IconBox";
import { cn } from "@/utils/cn";
import { transitions, typography, radius, cardHeights, shadows } from "../tokens";

/* ─────────────────────────────────────────────
 *  LinkCard – card that navigates on click.
 *
 *  Used for category cards, subcategory cards,
 *  and similar "browse" UI patterns.
 * ───────────────────────────────────────────── */

export interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  /** Show hover arrow */
  showArrow?: boolean;
  /** Bottom accent line on hover */
  accentLine?: boolean;
  accentColor?: string;
  radius?: string;
  minHeight?: string;
  className?: string;
  children?: React.ReactNode;
}

export function LinkCard({
  href,
  icon,
  title,
  description,
  showArrow = true,
  accentLine = true,
  accentColor = "bg-brand",
  radius: linkRadius = radius['2xl'],
  minHeight = cardHeights.sm,
  className,
  children,
}: LinkCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div
        className={cn(
          "bg-white p-5 h-full relative group flex flex-col",
          transitions.allSlow, "border border-gray-100",
          `hover:${shadows.lg} cursor-pointer hover:border-brand/30`,
          linkRadius,
          minHeight,
          className,
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <IconBox size="lg" bgClass="bg-gray-100" radius="xl">
            {icon}
          </IconBox>

          {showArrow && (
            <div className={`w-8 h-8 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 ${transitions.allSlow} transform group-hover:scale-110`}>
              <FiArrowUpRight className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-4 flex-1">
          <h3 className={`${typography.size.lg} ${typography.weight.bold} text-gray-900 mb-1`}>{title}</h3>
          {description && (
            <p className={`${typography.size.sm} text-gray-500 line-clamp-2`}>{description}</p>
          )}
        </div>

        {children}

        {/* Bottom accent line */}
        {accentLine && (
          <div
            className={cn(
              "absolute bottom-0 left-4 right-4 h-0.5 rounded-full",
              `opacity-0 group-hover:opacity-100 ${transitions.colorsSlow}`,
              accentColor,
            )}
          />
        )}
      </div>
    </Link>
  );
}
