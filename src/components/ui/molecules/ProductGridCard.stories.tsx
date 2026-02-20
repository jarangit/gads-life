import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductGridCard } from "./ProductGridCard";

const meta: Meta<typeof ProductGridCard> = {
  title: "Molecules/ProductGridCard",
  component: ProductGridCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductGridCard>;

export const Default: Story = {
  args: {
    id: "1",
    name: "Sony WH-1000XM5",
    image: "https://placehold.co/300x300/e2e8f0/64748b?text=Sony+XM5",
    overallScore: 9.2,
    isRecommended: true,
    priceLabel: "฿12,900",
    brandName: "Sony",
    categoryName: "Audio",
  },
};

export const NotRecommended: Story = {
  args: {
    id: "2",
    name: "Generic Earbuds X100",
    image: "https://placehold.co/300x300/e2e8f0/64748b?text=Earbuds",
    overallScore: 5.5,
    isRecommended: false,
    priceLabel: "฿499",
    brandName: "NoName",
    categoryName: "Audio",
  },
};

export const NoImage: Story = {
  args: {
    id: "3",
    name: "Xiaomi Smart Band 9",
    image: null,
    overallScore: 8.0,
    isRecommended: false,
    priceLabel: "฿1,290",
    brandName: "Xiaomi",
    categoryName: "Wearable",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <ProductGridCard id="1" name="Sony WH-1000XM5" image={null} overallScore={9.2} isRecommended priceLabel="฿12,900" brandName="Sony" categoryName="Audio" />
      <ProductGridCard id="2" name="Apple AirPods Pro 2" image={null} overallScore={9.0} isRecommended priceLabel="฿8,990" brandName="Apple" categoryName="Audio" />
      <ProductGridCard id="3" name="Samsung Galaxy S25" image={null} overallScore={8.8} isRecommended priceLabel="฿33,900" brandName="Samsung" categoryName="Smartphone" />
      <ProductGridCard id="4" name="Logitech MX Master 3S" image={null} overallScore={8.5} isRecommended={false} priceLabel="฿3,490" brandName="Logitech" categoryName="Desk" />
    </div>
  ),
};
