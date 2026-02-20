import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bone } from "./Bone";

const meta: Meta<typeof Bone> = {
  title: "Atoms/Bone",
  component: Bone,
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Bone>;

export const Default: Story = {
  args: { className: "h-6 w-48" },
};

export const TextLine: Story = {
  args: { className: "h-4 w-64", radius: "md" },
};

export const Avatar: Story = {
  args: { className: "h-12 w-12", radius: "full" },
};

export const Card: Story = {
  render: () => (
    <div className="w-72 rounded-2xl bg-white p-4 space-y-3">
      <Bone className="h-40 w-full" radius="xl" />
      <Bone className="h-4 w-3/4" radius="md" />
      <Bone className="h-4 w-1/2" radius="md" />
      <div className="flex gap-2">
        <Bone className="h-6 w-16" radius="full" />
        <Bone className="h-6 w-20" radius="full" />
      </div>
    </div>
  ),
};
