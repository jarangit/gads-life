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

/** Icon mapping for category slugs */
export const categoryIconMap: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700 text-2xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700 text-2xl" />,
  audio: <HiOutlineMusicNote className="text-gray-700 text-2xl" />,
  wearable: <BsSmartwatch className="text-gray-700 text-2xl" />,
  home: <HiOutlineHome className="text-gray-700 text-2xl" />,
  "home-gadgets": <HiOutlineHome className="text-gray-700 text-2xl" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700 text-2xl" />,
  charging: <HiOutlineLightningBolt className="text-gray-700 text-2xl" />,
  "charging-power": (
    <HiOutlineLightningBolt className="text-gray-700 text-2xl" />
  ),
  health: <HiOutlineHeart className="text-gray-700 text-2xl" />,
  "health-lifestyle": <HiOutlineHeart className="text-gray-700 text-2xl" />,
};
