import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconBox } from "./IconBox";
import { FiStar, FiHeart, FiShoppingBag, FiZap } from "react-icons/fi";

const meta: Meta<typeof IconBox> = {
  title: "Atoms/IconBox",
  component: IconBox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    radius: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconBox>;

export const Default: Story = {
  args: {
    children: <FiStar className="text-brand" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconBox size="sm"><FiStar className="text-brand" /></IconBox>
      <IconBox size="md"><FiStar className="text-brand" /></IconBox>
      <IconBox size="lg"><FiStar className="text-brand" /></IconBox>
      <IconBox size="xl"><FiStar className="text-brand" /></IconBox>
    </div>
  ),
};

export const CustomBackground: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconBox bgClass="bg-green-100"><FiHeart className="text-green-600" /></IconBox>
      <IconBox bgClass="bg-blue-100"><FiShoppingBag className="text-blue-600" /></IconBox>
      <IconBox bgClass="bg-yellow-100"><FiZap className="text-yellow-600" /></IconBox>
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    children: <FiHeart className="text-red-500" />,
    radius: "full",
    bgClass: "bg-red-100",
  },
};
