import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineMusicNote,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";

/* ─────────────────────────────────────────────
 *  Centralised icon map for category slugs.
 *
 *  Used by CategoryCard, CategoryIconCard (home),
 *  SubcategoryCard, and any future category UI.
 *
 *  Pass `sizeClass` to control icon size:
 *    getCategoryIcon("laptop", "text-3xl")
 * ───────────────────────────────────────────── */

type IconEntry = (sizeClass: string) => React.ReactNode;

const iconFactories: Record<string, IconEntry> = {
  laptop: (s) => <HiOutlineDesktopComputer className={`text-gray-700 ${s}`} />,
  smartphone: (s) => <HiOutlineDeviceMobile className={`text-gray-700 ${s}`} />,
  audio: (s) => <HiOutlineMusicNote className={`text-gray-700 ${s}`} />,
  wearable: (s) => <BsSmartwatch className={`text-gray-700 ${s}`} />,
  home: (s) => <HiOutlineHome className={`text-gray-700 ${s}`} />,
  "home-gadgets": (s) => <HiOutlineHome className={`text-gray-700 ${s}`} />,
  desk: (s) => <HiOutlineOfficeBuilding className={`text-gray-700 ${s}`} />,
  "desk-work": (s) => <HiOutlineOfficeBuilding className={`text-gray-700 ${s}`} />,
  charging: (s) => <HiOutlineLightningBolt className={`text-gray-700 ${s}`} />,
  "charging-power": (s) => (
    <HiOutlineLightningBolt className={`text-gray-700 ${s}`} />
  ),
  health: (s) => <HiOutlineHeart className={`text-gray-700 ${s}`} />,
  "health-lifestyle": (s) => <HiOutlineHeart className={`text-gray-700 ${s}`} />,
};

const fallbackIcon: IconEntry = (s) => (
  <HiOutlineDesktopComputer className={`text-gray-700 ${s}`} />
);

/**
 * Get an icon node for a category slug.
 * @param slug   - category slug
 * @param sizeClass - Tailwind text size, default "text-2xl"
 */
export function getCategoryIcon(
  slug: string,
  sizeClass = "text-2xl",
): React.ReactNode {
  return (iconFactories[slug] ?? fallbackIcon)(sizeClass);
}

/**
 * Pre-built record at text-2xl for direct object lookup (home page).
 * Prefer `getCategoryIcon()` when size varies.
 */
export const categoryIconMap: Record<string, React.ReactNode> = Object.fromEntries(
  Object.entries(iconFactories).map(([slug, factory]) => [
    slug,
    factory("text-2xl"),
  ]),
);
