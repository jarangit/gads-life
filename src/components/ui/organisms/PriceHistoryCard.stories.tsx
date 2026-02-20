import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceHistoryCard } from "./PriceHistoryCard";

const meta: Meta<typeof PriceHistoryCard> = {
  title: "Organisms/PriceHistoryCard",
  component: PriceHistoryCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PriceHistoryCard>;

export const Default: Story = {
  args: {
    data: {
      productSlug: "macbook-air-m3-15",
      currency: "THB",
      source: "shopee",
      range: {
        months: 12,
        from: "2025-03",
        to: "2026-02",
      },
      monthly: [
        { month: "2025-03", minPrice: 42900, avgPrice: 44500, sampleCount: 15 },
        { month: "2025-04", minPrice: 43500, avgPrice: 45000, sampleCount: 12 },
        { month: "2025-05", minPrice: 41500, avgPrice: 43000, sampleCount: 18 },
        { month: "2025-06", minPrice: 40900, avgPrice: 42500, sampleCount: 20 },
        { month: "2025-07", minPrice: 42000, avgPrice: 43500, sampleCount: 14 },
        { month: "2025-08", minPrice: 41000, avgPrice: 42000, sampleCount: 16 },
        { month: "2025-09", minPrice: 39900, avgPrice: 41000, sampleCount: 22 },
        { month: "2025-10", minPrice: 40500, avgPrice: 42000, sampleCount: 19 },
        { month: "2025-11", minPrice: 38900, avgPrice: 40500, sampleCount: 28 },
        { month: "2025-12", minPrice: 41000, avgPrice: 42500, sampleCount: 25 },
        { month: "2026-01", minPrice: 42000, avgPrice: 43000, sampleCount: 17 },
        { month: "2026-02", minPrice: 41500, avgPrice: 42800, sampleCount: 14 },
      ],
      insight: {
        cheapestMonth: "2025-11",
        cheapestPrice: 38900,
        currentPrice: 42800,
        diffFromCheapest: 3900,
      },
    },
  },
};

export const NoData: Story = {
  args: {
    data: {
      productSlug: "macbook-air-m3-15",
      currency: "THB",
      source: "shopee",
      range: {
        months: 12,
        from: "2025-03",
        to: "2026-02",
      },
      monthly: [
        { month: "2025-03", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-04", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-05", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-06", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-07", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-08", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-09", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-10", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-11", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-12", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2026-01", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2026-02", minPrice: null, avgPrice: null, sampleCount: 0 },
      ],
      insight: {
        cheapestMonth: null,
        cheapestPrice: null,
        currentPrice: null,
        diffFromCheapest: null,
      },
    },
  },
};

export const PartialData: Story = {
  args: {
    data: {
      productSlug: "iphone-15-pro",
      currency: "THB",
      source: "lazada",
      range: {
        months: 12,
        from: "2025-03",
        to: "2026-02",
      },
      monthly: [
        { month: "2025-03", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-04", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-05", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-06", minPrice: null, avgPrice: null, sampleCount: 0 },
        { month: "2025-07", minPrice: 38900, avgPrice: 39500, sampleCount: 5 },
        { month: "2025-08", minPrice: 37500, avgPrice: 38000, sampleCount: 8 },
        { month: "2025-09", minPrice: 36900, avgPrice: 37500, sampleCount: 12 },
        { month: "2025-10", minPrice: 35900, avgPrice: 36500, sampleCount: 15 },
        { month: "2025-11", minPrice: 34900, avgPrice: 35500, sampleCount: 20 },
        { month: "2025-12", minPrice: 36000, avgPrice: 37000, sampleCount: 18 },
        { month: "2026-01", minPrice: 36500, avgPrice: 37500, sampleCount: 14 },
        { month: "2026-02", minPrice: 35500, avgPrice: 36000, sampleCount: 10 },
      ],
      insight: {
        cheapestMonth: "2025-11",
        cheapestPrice: 34900,
        currentPrice: 36000,
        diffFromCheapest: 1100,
      },
    },
  },
};

export const CheapestNow: Story = {
  args: {
    data: {
      productSlug: "airpods-pro-2",
      currency: "THB",
      source: "shopee",
      range: {
        months: 6,
        from: "2025-09",
        to: "2026-02",
      },
      monthly: [
        { month: "2025-09", minPrice: 8500, avgPrice: 8900, sampleCount: 10 },
        { month: "2025-10", minPrice: 8200, avgPrice: 8600, sampleCount: 12 },
        { month: "2025-11", minPrice: 8000, avgPrice: 8400, sampleCount: 15 },
        { month: "2025-12", minPrice: 8100, avgPrice: 8500, sampleCount: 14 },
        { month: "2026-01", minPrice: 7900, avgPrice: 8200, sampleCount: 16 },
        { month: "2026-02", minPrice: 7500, avgPrice: 7800, sampleCount: 18 },
      ],
      insight: {
        cheapestMonth: "2026-02",
        cheapestPrice: 7500,
        currentPrice: 7500,
        diffFromCheapest: 0,
      },
    },
  },
};
