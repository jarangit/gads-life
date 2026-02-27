"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { transitions, typography } from "@/components/ui";
import { FooterFeedbackModal } from "@/components/layouts/FooterFeedbackModal";

const footerLinks: { href: string; label: string }[] = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  // { href: "/disclosure", label: "Disclosure" },
  // { href: "/methodology", label: "How we test" },
  // { href: "/legal", label: "Legal stuff" },
];

export const Footer: React.FC = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <footer className="container  border-t border-gray-200/60">
      <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <FiCheck className={`text-brand ${typography.size.xs}`} />
            </div>
            <span className={`${typography.weight.bold} text-gray-800 ${typography.size.sm}`}>
              gads✓life
            </span>
          </div>

          <div className={`flex gap-6 ${typography.size.caption} text-gray-500`}>
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-gray-800 ${transitions.colorsNormal}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <p className={`${typography.size.caption} text-gray-400`}>© 2026 gadslife</p>
        </div>

        <button
          type="button"
          onClick={() => setIsFeedbackModalOpen(true)}
          className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          แจ้งปัญหา / ขอรีวิว
        </button>
      </div>

      <FooterFeedbackModal
        open={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </footer>
  );
};
