import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SortSelect } from "./SortSelect";
import { useState } from "react";

const meta: Meta<typeof SortSelect<string>> = {
  title: "Atoms/SortSelect",
  component: SortSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SortSelect<string>>;

const options = [
  { value: "recommended", label: "แนะนำ" },
  { value: "newest", label: "ใหม่ล่าสุด" },
  { value: "price-asc", label: "ราคา: ต่ำ → สูง" },
  { value: "price-desc", label: "ราคา: สูง → ต่ำ" },
  { value: "score", label: "คะแนนสูงสุด" },
];

export const Default: Story = {
  args: {
    options,
    value: "recommended",
    onChange: () => {},
  },
};

export const Interactive: Story = {
  render: function SortSelectInteractive() {
    const [value, setValue] = useState("recommended");
    return (
      <div className="max-w-xs">
        <SortSelect options={options} value={value} onChange={setValue} />
        <p className="mt-2 text-sm text-gray-500">Selected: {value}</p>
      </div>
    );
  },
};
