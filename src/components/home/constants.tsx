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
import { typography } from "@/components/ui";

const iconCls = `text-gray-700 ${typography.size['2xl']}`;

/** Icon mapping for category slugs */
export const categoryIconMap: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className={iconCls} />,
  smartphone: <HiOutlineDeviceMobile className={iconCls} />,
  audio: <HiOutlineMusicNote className={iconCls} />,
  wearable: <BsSmartwatch className={iconCls} />,
  home: <HiOutlineHome className={iconCls} />,
  "home-gadgets": <HiOutlineHome className={iconCls} />,
  desk: <HiOutlineOfficeBuilding className={iconCls} />,
  charging: <HiOutlineLightningBolt className={iconCls} />,
  "charging-power": (
    <HiOutlineLightningBolt className={iconCls} />
  ),
  health: <HiOutlineHeart className={iconCls} />,
  "health-lifestyle": <HiOutlineHeart className={iconCls} />,
};
