import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedEventCard } from "./FeaturedEventCard";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof FeaturedEventCard> = {
  title: "Molecules/FeaturedEventCard",
  component: FeaturedEventCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedEventCard>;

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

export const Default: Story = {
  args: {
    activity: {
      id: "1",
      title: "Thailand Gadget Expo 2026",
      description: "งานมหกรรม Gadget ที่ใหญ่ที่สุดในไทย พบกับสินค้าใหม่ จัดโปรลดราคาสุดพิเศษ",
      date: daysFromNow(14),
      time: "10:00 - 20:00",
      location: "BITEC บางนา, กรุงเทพฯ",
      category: "Expo",
      isFeatured: true,
    },
  },
};

export const LiveReview: Story = {
  args: {
    activity: {
      id: "2",
      title: "Live Review: ลำโพง Bluetooth 2026 ตัวไหนเสียงดีสุด?",
      description: "รีวิวสดลำโพง Bluetooth รุ่นใหม่ล่าสุด 5 ตัว พร้อมเทียบเสียงแบบ blind test",
      date: daysFromNow(3),
      time: "19:00 - 21:00",
      location: "ออนไลน์ (YouTube Live)",
      category: "Live Review",
      isFeatured: true,
    },
  },
};
