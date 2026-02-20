import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCardCompact } from "./ProductCardCompact";

const meta: Meta<typeof ProductCardCompact> = {
  title: "Molecules/ProductCardCompact",
  component: ProductCardCompact,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductCardCompact>;

export const Default: Story = {
  args: {
    id: "1",
    name: "Sony WH-1000XM5",
    image: "https://placehold.co/300x300/e2e8f0/64748b?text=Sony+XM5",
    overallScore: 9.2,
    isRecommended: true,
    subtitle: "หูฟังครอบหู ANC ตัวท็อป",
    price: 12900,
  },
};

export const WithDiscount: Story = {
  args: {
    id: "2",
    name: "JBL Flip 6",
    image: "https://placehold.co/300x300/e2e8f0/64748b?text=JBL+Flip6",
    overallScore: 8.5,
    subtitle: "ลำโพงบลูทูธกันน้ำ",
    price: 4990,
    sellPrice: 3990,
  },
};

export const NoImage: Story = {
  args: {
    id: "3",
    name: "Marshall Emberton II",
    image: null,
    overallScore: 8.0,
    subtitle: "ลำโพงพกพาดีไซน์คลาสสิก",
    price: 5990,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 max-w-md">
      <ProductCardCompact id="1" name="Sony WH-1000XM5" image={null} overallScore={9.2} isRecommended subtitle="ANC Headphones" price={12900} />
      <ProductCardCompact id="2" name="JBL Flip 6" image={null} overallScore={8.5} subtitle="Bluetooth Speaker" price={4990} sellPrice={3990} />
      <ProductCardCompact id="3" name="Apple AirPods Pro 2" image={null} overallScore={9.0} isRecommended subtitle="TWS Earbuds" price={8990} />
      <ProductCardCompact id="4" name="Samsung Galaxy Buds3" image={null} overallScore={7.8} subtitle="TWS Earbuds" price={5990} />
    </div>
  ),
};
