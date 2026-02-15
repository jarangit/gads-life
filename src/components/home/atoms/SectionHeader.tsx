import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

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
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="text-gray-500 text-sm hover:text-brand flex items-center gap-1 transition-colors"
        >
          {linkText} <FiArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}
