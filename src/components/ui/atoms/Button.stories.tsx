import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { FiShoppingCart, FiArrowRight, FiHeart } from "react-icons/fi";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "dark", "outline"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["default", "md", "xl", "2xl", "full"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary Button", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Ghost Button", variant: "ghost" },
};

export const Dark: Story = {
  args: { children: "Dark Button", variant: "dark" },
};

export const Outline: Story = {
  args: { children: "Outline Button", variant: "outline" },
};

export const Disabled: Story = {
  args: { children: "Disabled", variant: "primary", disabled: true },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="primary">
        <FiShoppingCart className="mr-2" /> ซื้อเลย
      </Button>
      <Button variant="secondary">
        ดูเพิ่มเติม <FiArrowRight className="ml-2" />
      </Button>
      <Button variant="ghost">
        <FiHeart className="mr-2" /> บันทึก
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    children: "Go to Products",
    href: "/products",
    variant: "primary",
  },
};

export const FullRounded: Story = {
  args: {
    children: "Pill Button",
    variant: "primary",
    radius: "full",
  },
};
