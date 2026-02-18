import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { transitions, typography } from "@/components/ui";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  linkHref?: string;
  linkText?: string;
}

export function SectionHeader({
  icon,
  title,
  linkHref,
  linkText,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className={`${typography.size.lg} ${typography.weight.bold} text-gray-900`}>{title}</h2>
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className={`text-gray-500 ${typography.size.sm} hover:text-brand flex items-center gap-1 ${transitions.colorsNormal}`}
        >
          {linkText} <FiArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}
