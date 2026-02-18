import type { Metadata } from "next";
import SaleProductsContent from "./SaleProductsContent";

export const metadata: Metadata = {
  title: "สินค้ากำลังลดราคา",
  description: "รวมดีลสินค้าลดราคาที่คัดไว้ให้สำหรับคนที่เข้าหน้านี้โดยเฉพาะ",
  openGraph: {
    title: "สินค้ากำลังลดราคา | gads✓life",
    description: "รวมดีลสินค้าลดราคาที่คัดไว้ให้สำหรับคนที่เข้าหน้านี้โดยเฉพาะ",
  },
};

export default function SaleProductsPage() {
  return <SaleProductsContent />;
}
