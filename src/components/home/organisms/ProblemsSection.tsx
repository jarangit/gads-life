/* ──────── ProblemsSection – 4-chip editorial grid ──────── */
import React from "react";
import Link from "next/link";
import {
  BsBatteryCharging,
  BsHeadphones,
  BsLightningCharge,
} from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { cn } from "@/utils/cn";
import { accentColors, editorial, transitions } from "@/components/ui";

const commonProblems = [
  {
    id: 1,
    icon: <BsBatteryCharging className="text-xl" />,
    title: "แบตหมดบ่อย",
    description: "Power Bank ชาร์จเร็ว จุเยอะ",
    color: `${accentColors.orange.bg} ${accentColors.orange.text}`,
    slug: "/category/charging-power/power-bank",
  },
  {
    id: 2,
    icon: <BsHeadphones className="text-xl" />,
    title: "หูฟังไม่สบาย",
    description: "หูฟังใส่นานได้ ไม่เจ็บ",
    color: `${accentColors.violet.bg} ${accentColors.violet.text}`,
    slug: "/category/audio/headphones?filter=comfort",
  },
  {
    id: 3,
    icon: <BsLightningCharge className="text-xl" />,
    title: "ชาร์จช้ามาก",
    description: "หัวชาร์จ + สาย Fast Charge",
    color: `${accentColors.sky.bg} ${accentColors.sky.text}`,
    slug: "/category/charging-power/charger",
  },
  {
    id: 4,
    icon: <HiOutlineDesktopComputer className="text-xl" />,
    title: "โน้ตบุ๊คหนัก",
    description: "บาง เบา แต่แรง",
    color: `${accentColors.emerald.bg} ${accentColors.emerald.text}`,
    slug: "/category/laptop",
  },
];

export function ProblemsSection() {
  return (
    <section>
      <div className={editorial.header}>
        <h2 className={editorial.title}>เจอปัญหาแบบนี้มั้ย?</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {commonProblems.map((problem) => (
          <Link
            key={problem.id}
            href={problem.slug}
            className={cn(
              "group flex flex-col gap-3 p-4",
              editorial.cardBorder,
              "hover:border-gray-200 hover:shadow-md",
              transitions.allNormal,
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                problem.color,
              )}
            >
              {problem.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{problem.title}</p>
              <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">
                {problem.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
