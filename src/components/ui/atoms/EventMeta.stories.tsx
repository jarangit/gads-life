import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EventMeta } from "./EventMeta";

const meta: Meta<typeof EventMeta> = {
  title: "Atoms/EventMeta",
  component: EventMeta,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "muted"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventMeta>;

export const Default: Story = {
  args: {
    date: "2026-03-15",
    time: "14:00-17:00",
    location: "สยามพารากอน, ชั้น 5",
  },
};

export const DateOnly: Story = {
  args: {
    date: "2026-04-20",
  },
};

export const TimeAndLocation: Story = {
  args: {
    time: "10:00-12:00",
    location: "เซ็นทรัลเวิลด์",
  },
};

export const Light: Story = {
  args: {
    date: "2026-03-15",
    time: "14:00-17:00",
    location: "สยามพารากอน",
    variant: "light",
  },
};

export const Muted: Story = {
  args: {
    date: "2026-03-15",
    time: "14:00-17:00",
    location: "สยามพารากอน",
    variant: "muted",
  },
};
