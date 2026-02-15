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
