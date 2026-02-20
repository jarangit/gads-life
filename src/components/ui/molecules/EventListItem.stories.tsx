import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EventListItem } from "./EventListItem";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof EventListItem> = {
  title: "Molecules/EventListItem",
  component: EventListItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EventListItem>;

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

const baseActivity: Activity = {
  id: "1",
  title: "Workshop: สอนถ่ายรูปสินค้าด้วยมือถือ",
  description: "เรียนรู้เทคนิคถ่ายภาพสินค้าให้สวยด้วยสมาร์ทโฟน",
  date: daysFromNow(5),
  time: "10:00 - 12:00",
  location: "Co-Working Space, สีลม",
  category: "Workshop",
};

export const Default: Story = {
  args: { activity: baseActivity },
};

export const Expo: Story = {
  args: {
    activity: {
      ...baseActivity,
      id: "2",
      title: "Thailand Gadget Expo 2026",
      category: "Expo",
      date: daysFromNow(20),
      location: "BITEC บางนา",
    },
  },
};

export const List: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <EventListItem activity={baseActivity} />
      <EventListItem
        activity={{
          ...baseActivity,
          id: "2",
          title: "Meetup: สายชาร์จรวมตัว ครั้งที่ 4",
          category: "Meetup",
          date: daysFromNow(10),
        }}
      />
      <EventListItem
        activity={{
          ...baseActivity,
          id: "3",
          title: "Talk: อนาคต AI ในชีวิตประจำวัน",
          category: "Talk",
          date: daysFromNow(15),
        }}
      />
    </div>
  ),
};
