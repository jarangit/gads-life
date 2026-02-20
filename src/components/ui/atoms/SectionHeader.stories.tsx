import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./SectionHeader";
import { FiStar, FiTrendingUp, FiPackage } from "react-icons/fi";

const meta: Meta<typeof SectionHeader> = {
  title: "Atoms/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: { title: "สินค้ายอดนิยม" },
};

export const WithIcon: Story = {
  args: {
    title: "สินค้าแนะนำ",
    icon: <FiStar className="text-brand" />,
  },
};

export const WithLink: Story = {
  args: {
    title: "สินค้าใหม่",
    icon: <FiTrendingUp className="text-brand" />,
    linkHref: "/products",
    linkText: "ดูทั้งหมด",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <SectionHeader title="Small Section" size="sm" icon={<FiPackage />} />
      <SectionHeader title="Medium Section" size="md" icon={<FiPackage />} />
      <SectionHeader title="Large Section" size="lg" icon={<FiPackage />} />
    </div>
  ),
};
