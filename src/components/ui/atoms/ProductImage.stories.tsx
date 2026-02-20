import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductImage } from "./ProductImage";

const meta: Meta<typeof ProductImage> = {
  title: "Atoms/ProductImage",
  component: ProductImage,
  tags: ["autodocs"],
  argTypes: {
    hoverScale: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ProductImage>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/300x300/e2e8f0/64748b?text=Product",
    alt: "Sample Product",
    fill: false,
    width: 300,
    height: 300,
  },
};

export const Fallback: Story = {
  args: {
    src: null,
    alt: "No image",
    fill: false,
    width: 300,
    height: 300,
  },
};

export const Small: Story = {
  args: {
    src: "https://placehold.co/200x200/e2e8f0/64748b?text=SM",
    alt: "Small product",
    sizeClass: "w-24 h-24",
    fill: false,
    width: 200,
    height: 200,
  },
};

export const WithHoverScale: Story = {
  decorators: [
    (Story) => (
      <div className="group w-48 cursor-pointer">
        <Story />
      </div>
    ),
  ],
  args: {
    src: "https://placehold.co/300x300/e2e8f0/64748b?text=Hover+Me",
    alt: "Hover product",
    hoverScale: true,
    fill: false,
    width: 300,
    height: 300,
  },
};
