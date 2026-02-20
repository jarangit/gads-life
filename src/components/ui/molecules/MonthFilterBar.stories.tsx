import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MonthFilterBar } from "./MonthFilterBar";
import { useState } from "react";
import type { Activity } from "../constants/activities";

const meta: Meta<typeof MonthFilterBar> = {
  title: "Molecules/MonthFilterBar",
  component: MonthFilterBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MonthFilterBar>;

const mockActivities: Activity[] = [
  { id: "1", title: "Event 1", description: "", date: "2026-02-15", time: "10:00", location: "BKK", category: "Expo" },
  { id: "2", title: "Event 2", description: "", date: "2026-02-20", time: "14:00", location: "BKK", category: "Workshop" },
  { id: "3", title: "Event 3", description: "", date: "2026-03-10", time: "10:00", location: "BKK", category: "Meetup" },
  { id: "4", title: "Event 4", description: "", date: "2026-03-25", time: "19:00", location: "Online", category: "Live Review" },
  { id: "5", title: "Event 5", description: "", date: "2026-03-28", time: "10:00", location: "BKK", category: "Talk" },
  { id: "6", title: "Event 6", description: "", date: "2026-04-05", time: "13:00", location: "CNX", category: "Expo" },
  { id: "7", title: "Event 7", description: "", date: "2026-05-12", time: "10:00", location: "BKK", category: "Workshop" },
];

export const Default: Story = {
  args: {
    activities: mockActivities,
    selected: null,
    onChange: () => {},
  },
};

export const Interactive: Story = {
  render: function MonthFilterBarInteractive() {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <div>
        <MonthFilterBar activities={mockActivities} selected={selected} onChange={setSelected} />
        <p className="mt-3 text-sm text-gray-500">
          Selected: {selected ?? "ทั้งหมด"}
        </p>
      </div>
    );
  },
};
