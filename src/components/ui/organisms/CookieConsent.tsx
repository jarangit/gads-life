/* ──────── CookieConsent ──────── */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { Button } from "../atoms/Button";
import { typography, transitions } from "../tokens";

/* ─── Constants ─── */
const STORAGE_KEY = "gadslife_cookie_consent";

type ConsentStatus = "accepted" | "declined";

/* ─── Component ─── */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Runs client-side only — `visible` defaults to false on SSR, so no hydration mismatch
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so the banner slides in after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (status: ConsentStatus) => {
    localStorage.setItem(STORAGE_KEY, status);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="แจ้งเตือนการใช้งาน Cookie"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:pb-6",
        "transition-all duration-500 ease-out",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "max-w-3xl mx-auto",
          "bg-white rounded-2xl shadow-lg",
          "border border-gray-100",
          "px-5 py-4 sm:px-6 sm:py-5",
          "flex flex-col sm:flex-row items-start sm:items-center gap-4"
        )}
      >
        {/* ─── Icon ─── */}
        <div
          className="shrink-0 w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-xl"
          aria-hidden="true"
        >
          🍪
        </div>

        {/* ─── Text ─── */}
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              typography.weight.semibold,
              typography.size.sm,
              "text-gray-800 mb-0.5"
            )}
          >
            เว็บไซต์นี้ใช้งาน Cookie
          </p>
          <p className={cn(typography.size.caption, "text-gray-500 leading-relaxed")}>
            เราใช้ Cookie เพื่อวิเคราะห์การใช้งานและปรับปรุงประสบการณ์ของคุณ{" "}
            <Link
              href="/legal"
              className={cn(
                "text-gray-700 underline underline-offset-2",
                `hover:text-brand ${transitions.colorsNormal}`
              )}
            >
              นโยบาย Cookie
            </Link>
          </p>
        </div>

        {/* ─── Actions ─── */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => saveConsent("declined")}
            aria-label="ปฏิเสธ Cookie"
            className={cn(
              "flex-1 sm:flex-none px-4 py-2 rounded-xl",
              typography.size.sm,
              typography.weight.medium,
              "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
              transitions.colorsNormal
            )}
          >
            ปฏิเสธ
          </button>
          <Button
            variant="primary"
            size="sm"
            radius="xl"
            onClick={() => saveConsent("accepted")}
            className="flex-1 sm:flex-none"
          >
            ยอมรับทั้งหมด
          </Button>
        </div>

        {/* ─── Close (X) ─── */}
        <button
          onClick={() => saveConsent("declined")}
          aria-label="ปิด"
          className={cn(
            "absolute top-3 right-3 sm:relative sm:top-auto sm:right-auto",
            "p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100",
            transitions.colorsNormal
          )}
        >
          <FiX className="text-base" />
        </button>
      </div>
    </div>
  );
}
