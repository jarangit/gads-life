import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DaysCountdownBadge } from "./DaysCountdownBadge";

const meta: Meta<typeof DaysCountdownBadge> = {
  title: "Atoms/DaysCountdownBadge",
  component: DaysCountdownBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DaysCountdownBadge>;

// Helper to create a date N days from now
const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

export const Tomorrow: Story = {
  args: { date: daysFromNow(1) },
};

export const OneWeek: Story = {
  args: { date: daysFromNow(7) },
};

export const OneMonth: Story = {
  args: { date: daysFromNow(30) },
};

export const Past: Story = {
  args: { date: daysFromNow(-5) },
};

export const Various: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <DaysCountdownBadge date={daysFromNow(0)} />
      <DaysCountdownBadge date={daysFromNow(1)} />
      <DaysCountdownBadge date={daysFromNow(3)} />
      <DaysCountdownBadge date={daysFromNow(7)} />
      <DaysCountdownBadge date={daysFromNow(14)} />
      <DaysCountdownBadge date={daysFromNow(30)} />
    </div>
  ),
};
