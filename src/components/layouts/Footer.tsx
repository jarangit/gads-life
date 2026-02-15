import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-16 pt-8 pb-6 border-t border-gray-200/60">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
            <FiCheck className="text-brand text-xs" />
          </div>
          <span className="font-bold text-gray-800 text-sm">gads✓life</span>
        </div>
        <div className="flex gap-6 text-[13px] text-gray-500">
          <Link
            href="/disclosure"
            className="hover:text-gray-800 transition-colors"
          >
            Disclosure
          </Link>
          <Link
            href="/methodology"
            className="hover:text-gray-800 transition-colors"
          >
            How we test
          </Link>
          <Link href="/legal" className="hover:text-gray-800 transition-colors">
            Legal stuff
          </Link>
        </div>
        <p className="text-[13px] text-gray-400">© 2026 gadslife</p>
      </div>
    </footer>
  );
};
