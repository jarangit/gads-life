import React from "react";
import Link from "next/link";
import { transitions, typography, iconBoxSizes, radius } from "@/components/ui";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  slug: string;
  radiusClass: string;
}

export function ProblemCard({
  icon,
  title,
  description,
  color,
  slug,
  radiusClass,
}: ProblemCardProps) {
  return (
    <Link href={""} className="group">
      <div
        className={`bg-white/90 backdrop-blur-sm p-4 hover:shadow-lg hover:-translate-y-1 ${transitions.allNormal} h-full ${radiusClass}`}
      >
        <div
          className={`${iconBoxSizes.sm} ${color} ${radius.lg} flex items-center justify-center mb-2.5`}
        >
          {icon}
        </div>
        <h3
          className={`${typography.weight.semibold} text-gray-900 ${typography.size.caption} ${typography.leading.tight}`}
        >
          {title}
        </h3>
        <p
          className={`${typography.size["2xs"]} text-gray-500 mt-1 line-clamp-2 ${typography.leading.relaxed}`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
