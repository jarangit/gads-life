import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ConsCard } from "./ConsCard";

const meta: Meta<typeof ConsCard> = {
  title: "Organisms/ConsCard",
  component: ConsCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConsCard>;

export const Default: Story = {
  args: {
    cons: [
      { id: "1", content: "ราคาค่อนข้างสูง เมื่อเทียบกับรุ่นก่อน" },
      { id: "2", content: "ไม่มีช่องเสียบ 3.5mm แจ็ค" },
      { id: "3", content: "App Headphones ยังมีบั๊กบ้างเป็นครั้งคราว" },
    ],
  },
};

export const SingleCon: Story = {
  args: {
    cons: [{ id: "1", content: "แบตเตอรี่ไม่อึดเท่าที่ควร" }],
  },
};
