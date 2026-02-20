import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreCard } from "./ScoreCard";

const meta: Meta<typeof ScoreCard> = {
  title: "Organisms/ScoreCard",
  component: ScoreCard,
  tags: ["autodocs"],
  argTypes: {
    overallScore: { control: { type: "range", min: 0, max: 10, step: 0.1 } },
    isRecommended: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ScoreCard>;

export const Default: Story = {
  args: {
    overallScore: 9.2,
    isRecommended: true,
    ratings: [
      { id: "1", subCategory: "คุณภาพเสียง", score: 5 },
      { id: "2", subCategory: "ANC", score: 5 },
      { id: "3", subCategory: "ดีไซน์", score: 4 },
      { id: "4", subCategory: "ความสะดวกสบาย", score: 4 },
      { id: "5", subCategory: "แบตเตอรี่", score: 5 },
      { id: "6", subCategory: "ความคุ้มค่า", score: 4 },
    ],
  },
};

export const NotRecommended: Story = {
  args: {
    overallScore: 5.5,
    isRecommended: false,
    ratings: [
      { id: "1", subCategory: "คุณภาพเสียง", score: 3 },
      { id: "2", subCategory: "ดีไซน์", score: 2 },
      { id: "3", subCategory: "แบตเตอรี่", score: 3 },
      { id: "4", subCategory: "ความคุ้มค่า", score: 2 },
    ],
  },
};

export const NoRatings: Story = {
  args: {
    overallScore: 8.0,
    isRecommended: true,
  },
};
