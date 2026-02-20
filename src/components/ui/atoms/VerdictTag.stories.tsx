import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VerdictTag } from "./VerdictTag";

const meta: Meta<typeof VerdictTag> = {
  title: "Atoms/VerdictTag",
  component: VerdictTag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VerdictTag>;

export const Default: Story = {
  args: { label: "คุ้มค่า" },
};

export const MultipleTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <VerdictTag label="คุ้มค่า" />
      <VerdictTag label="ทนทาน" />
      <VerdictTag label="ดีไซน์เยี่ยม" />
      <VerdictTag label="แบตอึด" />
      <VerdictTag label="จอสวย" />
    </div>
  ),
};
