import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsBatteryCharging, BsHeadphones, BsLaptop } from "react-icons/bs";
import { QuickTag } from "../atoms";

const quickTags = [
  {
    href: "/category/charging-power",
    icon: <BsBatteryCharging className="text-sm" />,
    label: "Power Bank",
  },
  {
    href: "/category/audio",
    icon: <BsHeadphones className="text-sm" />,
    label: "หูฟัง",
  },
  {
    href: "/category/laptop",
    icon: <BsLaptop className="text-sm" />,
    label: "Laptop",
  },
];

export function SearchPrompt() {
  return (
    <div className="mt-6 space-y-3">
      <Link href="/category" className="block">
        <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-colors">
          <FiSearch className="text-gray-400" />
          <span className="text-gray-300 text-sm">ค้นหาสินค้า...</span>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2">
        {quickTags.map((tag) => (
          <QuickTag
            key={tag.href}
            href={tag.href}
            icon={tag.icon}
            label={tag.label}
          />
        ))}
      </div>
    </div>
  );
}
