/* ──────── TopPicksSection – editorial 3-col card grid ──────── */
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { editorial, radius } from "@/components/ui";
import { TopPickCard } from "../molecules";
import { IProductItemVm } from "@/types/models/product";

interface TopPicksSectionProps {
  items: IProductItemVm[];
}

const radiusClasses = [
  `${radius["2xl"]} rounded-tl-3xl`,
  radius["2xl"],
  `${radius["2xl"]} rounded-br-3xl`,
];

export function TopPicksSection({ items }: TopPicksSectionProps) {
  return (
    <section>
      <div className={editorial.header}>
        <h2 className={editorial.title}>ลดราคาอยู่ตอนนี้</h2>
        <Link href="/products/sale" className={editorial.link}>
          ดูเพิ่ม <FiArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <TopPickCard
            key={item.id}
            item={item}
            radiusClass={radiusClasses[idx] || radius["2xl"]}
          />
        ))}
      </div>
    </section>
  );
}
