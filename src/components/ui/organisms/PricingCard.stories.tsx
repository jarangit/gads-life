import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PricingCard } from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Organisms/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  args: {
    pricing: { price: 12900, priceLabel: "ราคาปัจจุบัน" },
    affiliateLink: "https://example.com/buy",
  },
};

export const FallbackPrice: Story = {
  args: {
    price: 4990,
    affiliateLink: "https://example.com/buy",
  },
};

export const NoPricingData: Story = {
  args: {
    pricing: null,
    price: 39900,
  },
};

export const WithAffiliate: Story = {
  args: {
    pricing: { price: 8990, priceLabel: "ราคา Shopee" },
    affiliateLink: "https://shopee.co.th/product/example",
  },
};
