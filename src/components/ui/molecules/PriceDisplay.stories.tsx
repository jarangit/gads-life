import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceDisplay } from "./PriceDisplay";

const meta: Meta<typeof PriceDisplay> = {
  title: "Molecules/PriceDisplay",
  component: PriceDisplay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PriceDisplay>;

export const Default: Story = {
  args: { price: 2990 },
};

export const WithOriginalPrice: Story = {
  args: { price: 1990, originalPrice: 2990 },
};

export const CustomLabel: Story = {
  args: { price: 15900, label: "ราคาเริ่มต้น" },
};

export const PriceComparison: Story = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      <PriceDisplay price={990} label="Budget" />
      <PriceDisplay price={4990} originalPrice={6990} label="Mid-range" />
      <PriceDisplay price={39900} label="Flagship" />
    </div>
  ),
};
