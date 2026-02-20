import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentPoint } from "./ContentPoint";
import { FiCheck, FiStar, FiCircle } from "react-icons/fi";

const meta: Meta<typeof ContentPoint> = {
  title: "Molecules/ContentPoint",
  component: ContentPoint,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentPoint>;

export const Default: Story = {
  args: { content: "แบตเตอรี่อึดทนถึง 2 วัน ใช้งานหนักได้สบาย" },
};

export const WithCustomIcon: Story = {
  args: {
    content: "ดีไซน์สวยงาม พรีเมียม",
    icon: <FiStar className="text-yellow-500" />,
  },
};

export const List: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <ContentPoint content="จอ AMOLED สีสดสว่างทุกองศา" />
      <ContentPoint content="กล้อง 108MP ถ่ายรูปคมชัด" icon={<FiCheck className="text-green-500" />} />
      <ContentPoint content="ชาร์จเร็ว 65W เต็มใน 30 นาที" />
    </div>
  ),
};
