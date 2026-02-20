import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CategoryTag } from "./CategoryTag";

const meta: Meta<typeof CategoryTag> = {
  title: "Atoms/CategoryTag",
  component: CategoryTag,
  tags: ["autodocs"],
  argTypes: {
    category: {
      control: "select",
      options: ["Expo", "Workshop", "Live Review", "Meetup", "Promotion", "Talk"],
    },
    size: {
      control: "select",
      options: ["xs", "sm"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryTag>;

export const Expo: Story = {
  args: { category: "Expo", size: "xs" },
};

export const Workshop: Story = {
  args: { category: "Workshop", size: "xs" },
};

export const LiveReview: Story = {
  args: { category: "Live Review", size: "xs" },
};

export const AllCategories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {["Expo", "Workshop", "Live Review", "Meetup", "Promotion", "Talk"].map((cat) => (
        <CategoryTag key={cat} category={cat} />
      ))}
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <CategoryTag category="Expo" size="xs" />
      <CategoryTag category="Expo" size="sm" />
    </div>
  ),
};
