import type { Metadata } from "next";
import CategoriesContent from "./CategoriesContent";

export const metadata: Metadata = {
  title: "หมวดหมู่ทั้งหมด",
  description:
    "เลือกหมวดหมู่สินค้าที่สนใจ เราคัดสรรสินค้าคุณภาพจากหลากหลายหมวดหมู่",
};

export default function CategoriesPage() {
  return <CategoriesContent />;
}
