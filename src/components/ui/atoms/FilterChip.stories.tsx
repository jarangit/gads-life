import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FilterChip } from "./FilterChip";
import { useState } from "react";

const meta: Meta<typeof FilterChip> = {
  title: "Atoms/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  args: { label: "ทั้งหมด" },
};

export const Selected: Story = {
  args: { label: "ทั้งหมด", selected: true },
};

export const WithCount: Story = {
  args: { label: "Smartphone", count: 24 },
};

export const SelectedWithCount: Story = {
  args: { label: "Smartphone", count: 24, selected: true },
};

export const FilterGroup: Story = {
  render: function FilterGroupStory() {
    const [selected, setSelected] = useState("all");
    const filters = [
      { id: "all", label: "ทั้งหมด", count: 120 },
      { id: "laptop", label: "Laptop", count: 32 },
      { id: "phone", label: "Smartphone", count: 45 },
      { id: "audio", label: "Audio", count: 18 },
      { id: "wearable", label: "Wearable", count: 25 },
    ];
    return (
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <FilterChip
            key={f.id}
            label={f.label}
            count={f.count}
            selected={selected === f.id}
            onClick={() => setSelected(f.id)}
          />
        ))}
      </div>
    );
  },
};
