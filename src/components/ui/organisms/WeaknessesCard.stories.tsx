import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WeaknessesCard } from "./WeaknessesCard";

const meta: Meta<typeof WeaknessesCard> = {
  title: "Organisms/WeaknessesCard",
  component: WeaknessesCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeaknessesCard>;

export const Default: Story = {
  args: {
    weaknesses: [
      { id: "1", content: "ราคาสูงกว่าคู่แข่งในระดับเดียวกัน" },
      { id: "2", content: "ไม่รองรับ aptX Adaptive" },
      { id: "3", content: "ไม่มีช่อง 3.5mm" },
    ],
  },
};

export const SingleWeakness: Story = {
  args: {
    weaknesses: [{ id: "1", content: "แบตเตอรี่หมดเร็วเมื่อเปิด ANC ตลอดเวลา" }],
  },
};
