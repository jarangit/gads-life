import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ErrorFallback } from "./ErrorFallback";

const meta: Meta<typeof ErrorFallback> = {
  title: "Molecules/ErrorFallback",
  component: ErrorFallback,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: { message: "ไม่สามารถโหลดรายการสินค้าได้" },
};

export const WithRetry: Story = {
  args: {
    message: "เกิดข้อผิดพลาดในการเชื่อมต่อ",
    onRetry: () => alert("Retry clicked!"),
  },
};
