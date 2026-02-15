import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import {
  BsBatteryCharging,
  BsHeadphones,
  BsLightningCharge,
} from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { ProblemCard } from "../molecules";

const commonProblems = [
  {
    id: 1,
    icon: <BsBatteryCharging className="text-xl" />,
    title: "แบตหมดบ่อย",
    description: "Power Bank ชาร์จเร็ว จุเยอะ",
    color: "bg-orange-100 text-orange-600",
    slug: "/category/charging-power/power-bank",
  },
  {
    id: 2,
    icon: <BsHeadphones className="text-xl" />,
    title: "หูฟังไม่สบาย",
    description: "หูฟังใส่นานได้ ไม่เจ็บ",
    color: "bg-violet-100 text-violet-600",
    slug: "/category/audio/headphones?filter=comfort",
  },
  {
    id: 3,
    icon: <BsLightningCharge className="text-xl" />,
    title: "ชาร์จช้ามาก",
    description: "หัวชาร์จ + สาย Fast Charge",
    color: "bg-sky-100 text-sky-600",
    slug: "/category/charging-power/charger",
  },
  {
    id: 4,
    icon: <HiOutlineDesktopComputer className="text-xl" />,
    title: "โน้ตบุ๊คหนัก",
    description: "บาง เบา แต่แรง",
    color: "bg-emerald-100 text-emerald-600",
    slug: "/category/laptop",
  },
];

const radiusClasses = [
  "rounded-2xl rounded-tl-3xl",
  "rounded-2xl",
  "rounded-2xl",
  "rounded-2xl rounded-br-3xl",
];

export function ProblemsSection() {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 rounded-[1.75rem] rounded-tr-[2.5rem] p-6 md:p-7">
      <div className="flex items-center gap-2 mb-5">
        <HiOutlineQuestionMarkCircle className="text-xl text-orange-500" />
        <h2 className="text-lg font-bold text-gray-900">
          เจอปัญหาแบบนี้มั้ย?
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
        {commonProblems.map((problem, idx) => (
          <ProblemCard
            key={problem.id}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            color={problem.color}
            slug={problem.slug}
            radiusClass={radiusClasses[idx] || "rounded-2xl"}
          />
        ))}
      </div>
    </div>
  );
}
