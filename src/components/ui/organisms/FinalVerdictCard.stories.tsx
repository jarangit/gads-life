import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FinalVerdictCard } from "./FinalVerdictCard";
import { FinalVerdictType } from "@/lib/api/product/types";

const meta: Meta<typeof FinalVerdictCard> = {
  title: "Organisms/FinalVerdictCard",
  component: FinalVerdictCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FinalVerdictCard>;

export const Default: Story = {
  args: {
    points: [
      { id: "1", type: FinalVerdictType.BUY_IF, text: "ต้องการหูฟัง ANC ระดับท็อป", orderIndex: 1 },
      { id: "2", type: FinalVerdictType.BUY_IF, text: "ใช้งานหลายเครื่องพร้อมกัน (Multipoint)", orderIndex: 2 },
      { id: "3", type: FinalVerdictType.BUY_IF, text: "ฟังเพลงนานๆ ต้องการแบตอึด 30 ชม.", orderIndex: 3 },
      { id: "4", type: FinalVerdictType.SKIP_IF, text: "งบจำกัด มีตัวเลือกที่ถูกกว่าแต่ ANC ดีพอ", orderIndex: 4 },
      { id: "5", type: FinalVerdictType.SKIP_IF, text: "ใช้ iPhone เป็นหลัก AirPods Max อาจเหมาะกว่า", orderIndex: 5 },
    ],
    price: 12900,
    affiliateLink: "https://example.com/buy",
  },
};

export const WithPricing: Story = {
  args: {
    points: [
      { id: "1", type: FinalVerdictType.BUY_IF, text: "ต้องการลำโพงกันน้ำพกพาง่าย", orderIndex: 1 },
      { id: "2", type: FinalVerdictType.SKIP_IF, text: "ต้องการเสียง Bass หนักๆ", orderIndex: 2 },
    ],
    pricing: { price: 4990, priceLabel: "ราคาปัจจุบัน" },
    affiliateLink: "https://example.com/buy",
  },
};

export const BuyOnly: Story = {
  args: {
    points: [
      { id: "1", type: FinalVerdictType.BUY_IF, text: "คุ้มค่ามาก", orderIndex: 1 },
      { id: "2", type: FinalVerdictType.BUY_IF, text: "ดีไซน์สวย", orderIndex: 2 },
    ],
    price: 1990,
  },
};
