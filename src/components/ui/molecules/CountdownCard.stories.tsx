import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CountdownCard } from "./CountdownCard";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof CountdownCard> = {
  title: "Molecules/CountdownCard",
  component: CountdownCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountdownCard>;

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

const sampleActivity: Activity = {
  id: "1",
  title: "Live Review: ลำโพง Bluetooth 2026 ตัวไหนเสียงดีสุด?",
  description: "รีวิวสดลำโพง Bluetooth รุ่นใหม่ล่าสุด",
  date: daysFromNow(7),
  time: "19:00 - 21:00",
  location: "ออนไลน์ (YouTube Live)",
  category: "Live Review",
};

export const Default: Story = {
  args: { activity: sampleActivity },
};

export const Workshop: Story = {
  args: {
    activity: {
      ...sampleActivity,
      id: "2",
      title: "Workshop: จัดโต๊ะทำงานให้ Pro ด้วยงบหลักพัน",
      category: "Workshop",
      date: daysFromNow(14),
      location: "Gads✓Life Studio, ลาดพร้าว",
    },
  },
};

export const Tomorrow: Story = {
  args: {
    activity: {
      ...sampleActivity,
      date: daysFromNow(1),
      title: "Expo: มหกรรม Gadget ลดราคากลางปี",
      category: "Expo",
    },
  },
};
