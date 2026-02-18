import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { transitions, radius, typography, getCategoryIcon } from "@/components/ui";
import type { Category } from "@/lib/api/home/type";

interface SearchPromptProps {
  onSearchClick?: () => void;
  categories?: Category[];
}

export function SearchPrompt({ onSearchClick, categories }: SearchPromptProps) {
  const tags = (categories ?? []).slice(0, 3);

  return (
    <div className="mt-6 space-y-3">
      <button onClick={onSearchClick} className="block w-full text-left">
        <div className={`bg-white/10 backdrop-blur ${radius.xl} px-4 py-3 flex items-center gap-3 hover:bg-white/20 ${transitions.colorsNormal}`}>
          <FiSearch className="text-gray-400" />
          <span className={`text-gray-300 ${typography.size.sm}`}>ค้นหาสินค้า...</span>
        </div>
      </button>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className={`px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs ${radius.full} hover:bg-white/10 hover:text-gray-300 ${transitions.allNormal} flex items-center gap-1.5`}
            >
              {getCategoryIcon(cat.slug, typography.size.sm)} {cat.nameTh}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
