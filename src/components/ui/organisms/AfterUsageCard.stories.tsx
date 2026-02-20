import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AfterUsageCard } from "./AfterUsageCard";

const meta: Meta<typeof AfterUsageCard> = {
  title: "Organisms/AfterUsageCard",
  component: AfterUsageCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AfterUsageCard>;

export const Default: Story = {
  args: {
    points: [
      { id: "1", content: "ใช้ไปสัปดาห์แรก ANC ตัดเสียงได้ดีมาก ทั้งในออฟฟิศและบนรถไฟฟ้า" },
      { id: "2", content: "แบตอยู่ได้ประมาณ 28 ชม. ตามสเปก ชาร์จไว 3 นาทีได้ 3 ชม." },
      { id: "3", content: "Multipoint เชื่อมต่อ 2 เครื่องพร้อมกันได้ สลับระหว่าง Mac กับมือถือลื่นมาก" },
    ],
  },
};

export const SinglePoint: Story = {
  args: {
    points: [{ id: "1", content: "ใส่สบายทั้งวัน ไม่เจ็บหู" }],
  },
};
