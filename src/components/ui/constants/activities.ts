/* ─────────────────────────────────────────────
 *  Activity – shared types
 * ───────────────────────────────────────────── */

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  isFeatured?: boolean;
}

/** Category → Tailwind color classes */
export const activityCategoryColors: Record<string, string> = {
  Expo: "bg-purple-100 text-purple-700",
  Workshop: "bg-blue-100 text-blue-700",
  "Live Review": "bg-red-100 text-red-700",
  Meetup: "bg-green-100 text-green-700",
  Promotion: "bg-amber-100 text-amber-700",
  Talk: "bg-indigo-100 text-indigo-700",
};
