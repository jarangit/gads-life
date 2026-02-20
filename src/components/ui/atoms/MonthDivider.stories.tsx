import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MonthDivider } from "./MonthDivider";

const meta: Meta<typeof MonthDivider> = {
  title: "Atoms/MonthDivider",
  component: MonthDivider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MonthDivider>;

export const Default: Story = {
  args: { date: "2026-03-15", count: 5 },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <MonthDivider date="2026-02-01" count={3} />
      <MonthDivider date="2026-03-01" count={7} />
      <MonthDivider date="2026-04-01" count={2} />
      <MonthDivider date="2026-05-01" count={12} />
    </div>
  ),
};
