import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreBar } from "./ScoreBar";

const meta: Meta<typeof ScoreBar> = {
  title: "Atoms/ScoreBar",
  component: ScoreBar,
  tags: ["autodocs"],
  argTypes: {
    score: { control: { type: "range", min: 0, max: 5, step: 1 } },
    maxScore: { control: { type: "range", min: 1, max: 10, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof ScoreBar>;

export const Default: Story = {
  args: { score: 4 },
};

export const Low: Story = {
  args: { score: 1 },
};

export const Mid: Story = {
  args: { score: 3 },
};

export const Full: Story = {
  args: { score: 5 },
};

export const CustomColors: Story = {
  args: {
    score: 3,
    activeClass: "bg-yellow-400",
    inactiveClass: "bg-gray-200",
  },
};

export const AllScores: Story = {
  render: () => (
    <div className="space-y-3 max-w-xs">
      {[1, 2, 3, 4, 5].map((s) => (
        <div key={s} className="flex items-center gap-3">
          <span className="text-sm w-4 text-right">{s}</span>
          <ScoreBar score={s} />
        </div>
      ))}
    </div>
  ),
};
