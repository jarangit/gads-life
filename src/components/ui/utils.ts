/** Format a date to Thai relative time string */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "วันนี้";
  if (diffDays === 1) return "เมื่อวาน";
  if (diffDays < 7) return `${diffDays} วันที่แล้ว`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks} สัปดาห์ที่แล้ว`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} เดือนที่แล้ว`;
}

/** Format price in Thai Baht */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("th-TH").format(price);
}

/* ─────────────────────────────────────────────
 *  Activities – helper functions
 * ───────────────────────────────────────────── */

import type { Activity } from "./constants/activities";

/** Format a date string to Thai month + year */
export function formatThaiMonth(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", { month: "long", year: "numeric" });
}

/** Format a date string to full Thai date */
export function formatThaiDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Calculate days until a given date */
export function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

/** Get a Thai label for day count */
export function getDaysLabel(days: number): string {
  if (days <= 0) return "วันนี้!";
  if (days === 1) return "พรุ่งนี้";
  return `อีก ${days} วัน`;
}

/** Group activities by month key (YYYY-MM) */
export function groupByMonth(items: Activity[]): Map<string, Activity[]> {
  const map = new Map<string, Activity[]>();
  for (const item of items) {
    const key = item.date.slice(0, 7); // "2026-03"
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

/** Format a date string to short Thai month name (ก.พ., มี.ค., …) */
export function formatShortThaiMonth(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", { month: "short" });
}
