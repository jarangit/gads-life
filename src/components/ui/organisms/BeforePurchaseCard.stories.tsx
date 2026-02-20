import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BeforePurchaseCard } from "./BeforePurchaseCard";

const meta: Meta<typeof BeforePurchaseCard> = {
  title: "Organisms/BeforePurchaseCard",
  component: BeforePurchaseCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BeforePurchaseCard>;

export const Default: Story = {
  args: {
    points: [
      { id: "1", content: "ต้องเช็คว่ารองรับ LDAC / aptX Adaptive หรือไม่ ถ้าต้องการเสียงคุณภาพสูง" },
      { id: "2", content: "น้ำหนัก 250g อาจหนักสำหรับคนที่ชอบหูฟังเบาๆ" },
      { id: "3", content: "ถ้าใช้กับ iPhone จะได้ AAC เท่านั้น อาจไม่คุ้มเท่า AirPods Max" },
    ],
  },
};

export const SinglePoint: Story = {
  args: {
    points: [{ id: "1", content: "เช็คราคาหลายร้านก่อนตัดสินใจ" }],
  },
};
