import React from "react";
import Link from "next/link";
import { transitions, radius } from "@/components/ui";

interface QuickTagProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function QuickTag({ href, icon, label }: QuickTagProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs ${radius.full} hover:bg-white/10 hover:text-gray-300 ${transitions.allNormal} flex items-center gap-1.5`}
    >
      {icon} {label}
    </Link>
  );
}
