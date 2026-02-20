import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QuickVerdictCard } from "./QuickVerdictCard";

const meta: Meta<typeof QuickVerdictCard> = {
  title: "Organisms/QuickVerdictCard",
  component: QuickVerdictCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuickVerdictCard>;

export const Default: Story = {
  args: {
    quickVerdict: {
      quote: "หูฟัง ANC ที่ดีที่สุดในปี 2026",
      description: "Sony WH-1000XM5 ยังคงเป็นราชาแห่ง ANC ด้วยคุณภาพเสียงที่ยอดเยี่ยม ตัดเสียงรบกวนได้ดีเลิศ และแบตเตอรี่ที่อึดถึง 30 ชม.",
    },
    tags: [
      { id: "1", tag: "คุ้มค่า" },
      { id: "2", tag: "ANC ดีเยี่ยม" },
      { id: "3", tag: "แบตอึด" },
      { id: "4", tag: "เสียงดี" },
    ],
  },
};

export const NoTags: Story = {
  args: {
    quickVerdict: {
      quote: "ลำโพงพกพาสุดคุ้ม",
      description: "JBL Flip 6 คือลำโพง Bluetooth ที่ให้เสียงดีในราคาที่จับต้องได้",
    },
  },
};

export const LongDescription: Story = {
  args: {
    quickVerdict: {
      quote: "สมาร์ทโฟนเรือธงที่ครบเครื่องที่สุด",
      description: "Samsung Galaxy S25 Ultra มาพร้อมกล้อง 200MP, จอ Dynamic AMOLED 2X ขนาด 6.9 นิ้ว, ชิป Snapdragon 8 Elite ทำทุกอย่างได้ลื่นไหล ถ่ายรูปสวย เล่นเกมลื่น แบตอึดทั้งวัน เชื่อมต่อ S-Pen ได้อย่างไร้รอยต่อ",
    },
    tags: [
      { id: "1", tag: "เรือธง" },
      { id: "2", tag: "กล้องดี" },
      { id: "3", tag: "S-Pen" },
    ],
  },
};
