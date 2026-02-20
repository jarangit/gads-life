import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DateBox } from "./DateBox";

const meta: Meta<typeof DateBox> = {
  title: "Atoms/DateBox",
  component: DateBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateBox>;

export const Default: Story = {
  args: { date: "2026-03-15" },
};

export const Today: Story = {
  args: { date: new Date().toISOString() },
};

export const MultipleDates: Story = {
  render: () => (
    <div className="flex gap-3">
      <DateBox date="2026-02-20" />
      <DateBox date="2026-03-15" />
      <DateBox date="2026-06-01" />
      <DateBox date="2026-12-25" />
    </div>
  ),
};
