import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroImageCard } from "./HeroImageCard";

const meta: Meta<typeof HeroImageCard> = {
  title: "Organisms/HeroImageCard",
  component: HeroImageCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroImageCard>;

export const Default: Story = {
  args: {
    name: "Sony WH-1000XM5",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Sony+WH-1000XM5",
  },
};

export const NoImage: Story = {
  args: {
    name: "Product Without Image",
    image: null,
  },
};
