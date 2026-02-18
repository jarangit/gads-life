import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import {
  BsBatteryCharging,
  BsHeadphones,
  BsLightningCharge,
} from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { ProblemCard } from "../molecules";
import { accentColors, bentoRadius, sectionPanel, typography, radius } from "@/components/ui";

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

const radiusClasses = [
  `${radius['2xl']} rounded-tl-3xl`,
  radius['2xl'],
  radius['2xl'],
  `${radius['2xl']} rounded-br-3xl`,
];

export function ProblemsSection() {
  return (
    <div className={`lg:col-span-2 bg-linear-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 ${bentoRadius.sectionTR} ${sectionPanel.padding}`}>
      <div className="flex items-center gap-2 mb-5">
        <HiOutlineQuestionMarkCircle className={`text-xl ${accentColors.orange.icon}`} />
        <h2 className={`${typography.size.lg} ${typography.weight.bold} text-gray-900`}>
          เจอปัญหาแบบนี้มั้ย?
        </h2>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-4 ${sectionPanel.gap}`}>
        {commonProblems.map((problem, idx) => (
          <ProblemCard
            key={problem.id}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            color={problem.color}
            slug={problem.slug}
            radiusClass={radiusClasses[idx] || radius['2xl']}
          />
        ))}
      </div>
    </div>
  );
}
