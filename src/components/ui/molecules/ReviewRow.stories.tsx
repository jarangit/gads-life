import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReviewRow } from "./ReviewRow";

const meta: Meta<typeof ReviewRow> = {
  title: "Molecules/ReviewRow",
  component: ReviewRow,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReviewRow>;

export const Default: Story = {
  args: {
    id: "1",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    subtitle: "หูฟังครอบหู ANC",
    value: "9.2",
    valueLabel: "คะแนน",
  },
};

export const WithImage: Story = {
  args: {
    id: "2",
    slug: "jbl-flip-6",
    name: "JBL Flip 6",
    image: "https://placehold.co/100x100/e2e8f0/64748b?text=JBL",
    subtitle: "ลำโพงบลูทูธ",
    value: "8.5",
    valueLabel: "คะแนน",
  },
};

export const List: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <ReviewRow id="1" slug="sony-wh-1000xm5" name="Sony WH-1000XM5" subtitle="หูฟัง ANC" value="9.2" valueLabel="คะแนน" />
      <ReviewRow id="2" slug="jbl-flip-6" name="JBL Flip 6" subtitle="ลำโพง Bluetooth" value="8.5" valueLabel="คะแนน" />
      <ReviewRow id="3" slug="airpods-pro-2" name="Apple AirPods Pro 2" subtitle="หูฟัง TWS" value="9.0" valueLabel="คะแนน" />
    </div>
  ),
};
