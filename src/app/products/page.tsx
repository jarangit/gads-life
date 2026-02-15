import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "สินค้าทั้งหมด",
  description:
    "รวมสินค้าที่คัดสรรจากการใช้งานจริง เลือกตามหมวดหมู่หรือแบรนด์ที่ชอบ",
  openGraph: {
    title: "สินค้าทั้งหมด | gads✓life",
    description:
      "รวมสินค้าที่คัดสรรจากการใช้งานจริง เลือกตามหมวดหมู่หรือแบรนด์ที่ชอบ",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
