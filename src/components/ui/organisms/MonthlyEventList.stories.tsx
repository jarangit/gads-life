import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MonthlyEventList } from "./MonthlyEventList";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof MonthlyEventList> = {
  title: "Organisms/MonthlyEventList",
  component: MonthlyEventList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MonthlyEventList>;

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

const mockActivities: Activity[] = [
  { id: "1", title: "Live Review: ลำโพง Bluetooth", description: "รีวิวสด 5 ลำโพงใหม่", date: "2026-03-05", time: "19:00 - 21:00", location: "YouTube Live", category: "Live Review" },
  { id: "2", title: "Workshop: Setup โต๊ะทำงาน", description: "สอนจัดโต๊ะในงบหลักพัน", date: "2026-03-12", time: "13:00 - 16:00", location: "Studio ลาดพร้าว", category: "Workshop" },
  { id: "3", title: "Meetup: สายชาร์จรวมตัว", description: "พบปะแลกเปลี่ยน", date: "2026-03-20", time: "15:00 - 18:00", location: "Lido Connect", category: "Meetup" },
  { id: "4", title: "Thailand Gadget Expo", description: "งานมหกรรม Gadget", date: "2026-04-10", time: "10:00 - 20:00", location: "BITEC บางนา", category: "Expo" },
  { id: "5", title: "Talk: อนาคต AI", description: "สนทนาเรื่อง AI", date: "2026-04-18", time: "14:00 - 16:00", location: "สามย่านมิตรทาวน์", category: "Talk" },
];

export const Default: Story = {
  args: { activities: mockActivities },
};

export const FilteredMonth: Story = {
  args: { activities: mockActivities, selectedMonth: "2026-03" },
};
