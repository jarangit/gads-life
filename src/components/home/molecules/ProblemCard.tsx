import React from "react";
import Link from "next/link";

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
    <Link href={slug} className="group">
      <div
        className={`bg-white/90 backdrop-blur-sm p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full ${radiusClass}`}
      >
        <div
          className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center mb-2.5`}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 text-[13px] leading-tight">
          {title}
        </h3>
        <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
