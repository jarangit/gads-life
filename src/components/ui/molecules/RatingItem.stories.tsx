import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RatingItem } from "./RatingItem";

const meta: Meta<typeof RatingItem> = {
  title: "Molecules/RatingItem",
  component: RatingItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RatingItem>;

export const Default: Story = {
  args: { label: "คุณภาพเสียง", score: 4 },
};

export const Low: Story = {
  args: { label: "ความคุ้มค่า", score: 2 },
};

export const Full: Story = {
  args: { label: "ดีไซน์", score: 5 },
};

export const RatingList: Story = {
  render: () => (
    <div className="space-y-3 max-w-xs bg-white p-4 rounded-2xl">
      <RatingItem label="คุณภาพเสียง" score={5} />
      <RatingItem label="ดีไซน์" score={4} />
      <RatingItem label="ความสะดวกสบาย" score={4} />
      <RatingItem label="แบตเตอรี่" score={3} />
      <RatingItem label="ความคุ้มค่า" score={4} />
    </div>
  ),
};
