import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { KeyHighlightsCard } from "./KeyHighlightsCard";

const meta: Meta<typeof KeyHighlightsCard> = {
  title: "Organisms/KeyHighlightsCard",
  component: KeyHighlightsCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof KeyHighlightsCard>;

export const Default: Story = {
  args: {
    highlights: [
      { id: "1", content: "ANC ตัดเสียงระดับ Best-in-class" },
      { id: "2", content: "แบตเตอรี่ 30 ชั่วโมง ชาร์จเร็ว 3 นาทีฟัง 3 ชม." },
      { id: "3", content: "เสียงคุณภาพสูง รองรับ LDAC, DSEE Extreme" },
      { id: "4", content: "Multipoint เชื่อมต่อ 2 เครื่องพร้อมกัน" },
      { id: "5", content: "ใส่สบาย น้ำหนักเบาเพียง 250g" },
    ],
  },
};

export const Short: Story = {
  args: {
    highlights: [
      { id: "1", content: "จอ Super AMOLED 6.7 นิ้ว" },
      { id: "2", content: "กล้อง 200MP ถ่ายกลางคืนชัด" },
    ],
  },
};
