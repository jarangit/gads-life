/* ──────── News Page ──────── */
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { NewsContent } from "./NewsContent";

export const metadata: Metadata = buildMetadata({
  title: "ข่าวสินค้า",
  description:
    "ติดตามข่าวสารล่าสุดเกี่ยวกับสินค้าเทคโนโลยี Apple, Samsung และแบรนด์ดังอื่นๆ จาก gads✓life",
  url: "/news",
});

/* ─── Page ─── */
export default function NewsPage() {
  return <NewsContent />;
}
