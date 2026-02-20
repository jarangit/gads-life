import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProsCard } from "./ProsCard";

const meta: Meta<typeof ProsCard> = {
  title: "Organisms/ProsCard",
  component: ProsCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProsCard>;

export const Default: Story = {
  args: {
    pros: [
      { id: "1", content: "ANC ตัดเสียงได้ดีเยี่ยม ระดับ Top 3 ของตลาด" },
      { id: "2", content: "เสียงสมดุลดี ทั้ง Bass, Mid, Treble ชัดเจน" },
      { id: "3", content: "ใส่สบาย น้ำหนักเบา ใส่ได้ทั้งวัน" },
      { id: "4", content: "แบตเตอรี่ 30 ชม. ชาร์จ 3 นาทีฟัง 3 ชม." },
    ],
  },
};

export const SinglePro: Story = {
  args: {
    pros: [{ id: "1", content: "คุณภาพเสียงยอดเยี่ยม" }],
  },
};
