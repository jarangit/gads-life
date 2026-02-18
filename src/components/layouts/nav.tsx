"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCheck, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { transitions, typography, radius } from "@/components/ui";
import { SearchModal } from "@/components/search";

const navLinks = [
  { href: "/products", label: "สินค้า" },
  { href: "/categories", label: "หมวดหมู่" },
  // { href: "/activities", label: "กิจกรรม" },
  { href: "/products/sale", label: "ลดราคาตอนนี้", featured: true },
];

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isLinkActive = (href: string) => {
    if (href === "/products/sale") return pathname.startsWith("/products/sale");
    if (href === "/products")
      return (
        pathname.startsWith("/products") &&
        !pathname.startsWith("/products/sale")
      );
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-100/50">
        <div className="flex items-center justify-between max-w-7xl mx-auto p-6">
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
                    `${typography.size.sm} ${typography.weight.medium} ${transitions.colorsNormal}`,
                    link.featured ? "!text-red-400 font-bold" : "hover:text-brand",
                    isLinkActive(link.href)
                      ? link.featured
                        ? " !text-brand "
                        : "text-brand"
                      : link.featured
                        ? "text-black"
                        : "text-gray-600",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`w-10 h-10 flex items-center justify-center bg-white ${radius.full} hover:bg-gray-100 ${transitions.colorsNormal}`}
              aria-label="ค้นหาสินค้า"
            >
              <FiSearch className="text-gray-600" />
            </button>

            {/* Hamburger – mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden w-10 h-10 flex items-center justify-center bg-white ${radius.full} hover:bg-gray-100 ${transitions.colorsNormal}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="text-gray-600 text-lg" />
              ) : (
                <FiMenu className="text-gray-600 text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={cn(
            `md:hidden overflow-hidden ${transitions.allSlow} ease-in-out`,
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  `flex items-center justify-between px-4 py-3 ${radius.xl} ${typography.size.sm} ${typography.weight.medium} ${transitions.colorsNormal}`,
                  link.featured
                    ? " text-black"
                    : isLinkActive(link.href)
                      ? "bg-brand/10 text-brand"
                      : "text-gray-600 hover:bg-gray-50",
                )}
              >
                {link.label}
               
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Nav;
