import React from "react";
import { Card } from "../atoms/Card";
import { IconBox } from "../atoms/IconBox";
import { typography, bentoRadius } from "../tokens";
import type { CardVariant } from "../atoms/Card";
import type { IconBoxSize } from "../atoms/IconBox";

/* ─────────────────────────────────────────────
 *  TrustCard – value-proposition / feature card
 *
 *  Used on the home page trust section and the
 *  categories trust section.
 * ───────────────────────────────────────────── */

export interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: CardVariant;
  radius?: string;
  iconBg?: string;
  iconSize?: IconBoxSize;
  /** Show icon in an IconBox container (categories style) or raw (home style) */
  iconStyle?: "raw" | "box";
}

export function TrustCard({
  icon,
  title,
  description,
  variant = "default",
  radius = bentoRadius.trustTR.split(' ')[0],
  iconBg = "bg-brand/10",
  iconSize = "lg",
  iconStyle = "raw",
}: TrustCardProps) {
  const isDark = variant === "dark";

  return (
    <Card variant={variant} radius={radius} padding="p-5">
      {iconStyle === "box" ? (
        <IconBox size={iconSize} bgClass={iconBg} radius="xl" className="mb-4">
          {icon}
        </IconBox>
      ) : (
        <div className="text-2xl mb-2">{icon}</div>
      )}
      <h3
        className={`${typography.weight.bold} mb-0.5 ${typography.size.body} ${
          isDark ? "" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className={`${typography.size.caption} text-gray-500`}>{description}</p>
    </Card>
  );
}
