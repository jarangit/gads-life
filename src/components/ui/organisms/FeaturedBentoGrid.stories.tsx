import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedBentoGrid } from "./FeaturedBentoGrid";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof FeaturedBentoGrid> = {
  title: "Organisms/FeaturedBentoGrid",
  component: FeaturedBentoGrid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedBentoGrid>;

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

const featured: Activity = {
  id: "1",
  title: "Thailand Gadget Expo 2026",
  description: "งานมหกรรม Gadget ที่ใหญ่ที่สุดในไทย พบกับสินค้าใหม่กว่า 500 รายการ",
  date: daysFromNow(14),
  time: "10:00 - 20:00",
  location: "BITEC บางนา, กรุงเทพฯ",
  category: "Expo",
  isFeatured: true,
};

const upcoming: Activity[] = [
  {
    id: "2",
    title: "Workshop: จัดโต๊ะทำงานให้ Pro",
    description: "สอนเลือกอุปกรณ์ setup โต๊ะทำงานในงบหลักพัน",
    date: daysFromNow(7),
    time: "13:00 - 16:00",
    location: "Gads✓Life Studio",
    category: "Workshop",
  },
  {
    id: "3",
    title: "Live Review: หูฟัง TWS 2026",
    description: "เปรียบเทียบหูฟัง TWS รุ่นใหม่ 5 ตัว",
    date: daysFromNow(10),
    time: "19:00 - 21:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },
  {
    id: "4",
    title: "Meetup: สายชาร์จรวมตัว ครั้งที่ 5",
    description: "พบปะและแลกเปลี่ยน gadget กัน",
    date: daysFromNow(21),
    time: "15:00 - 18:00",
    location: "Lido Connect, สยาม",
    category: "Meetup",
  },
];

export const Default: Story = {
  args: { featured, upcoming },
};

export const SingleUpcoming: Story = {
  args: { featured, upcoming: [upcoming[0]] },
};
