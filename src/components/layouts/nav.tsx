"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCheck, FiSearch } from "react-icons/fi";
import { cn } from "@/utils/cn";

const navLinks = [
  { href: "/products", label: "สินค้า" },
  { href: "/categories", label: "หมวดหมู่" },
  { href: "/activities", label: "กิจกรรม" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between mb-6 max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 text-xl">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <FiCheck className="text-brand text-xl" />
          </div>
          <span className="font-bold text-gray-900">
            Gads
            <FiCheck className="inline" />
            Life
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand",
                pathname.startsWith(link.href)
                  ? "text-brand"
                  : "text-gray-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {/* Search Button */}
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors">
          <FiSearch className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
