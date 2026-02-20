import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState } from "./EmptyState";
import { FiInbox, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Button } from "./Button";

const meta: Meta<typeof EmptyState> = {
  title: "Atoms/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithCustomMessage: Story = {
  args: { message: "ไม่พบสินค้าที่ค้นหา" },
};

export const WithIcon: Story = {
  args: {
    icon: <FiSearch className="text-4xl text-gray-300" />,
    message: "ไม่พบผลลัพธ์",
  },
};

export const WithAction: Story = {
  args: {
    icon: <FiShoppingBag className="text-4xl text-gray-300" />,
    message: "ยังไม่มีสินค้าในรายการ",
    children: (
      <Button variant="primary" size="sm">
        เริ่มช้อปปิ้ง
      </Button>
    ),
  },
};

export const Inbox: Story = {
  args: {
    icon: <FiInbox className="text-5xl text-gray-300" />,
    message: "กล่องข้อความว่างเปล่า",
  },
};
