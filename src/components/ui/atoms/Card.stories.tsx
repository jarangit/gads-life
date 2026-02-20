import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "highlight", "muted", "dark", "glass", "gradient"],
    },
    hoverable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Default Card</h3>
        <p className="text-gray-500 text-sm mt-2">This is a default card with standard styling.</p>
      </div>
    ),
  },
};

export const Highlight: Story = {
  args: {
    variant: "highlight",
    children: (
      <div>
        <h3 className="text-lg font-semibold">Highlight Card</h3>
        <p className="text-gray-500 text-sm mt-2">Card with a highlight variant.</p>
      </div>
    ),
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: (
      <div>
        <h3 className="text-lg font-semibold">Muted Card</h3>
        <p className="text-gray-500 text-sm mt-2">Card with a muted variant.</p>
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-white">Dark Card</h3>
        <p className="text-gray-300 text-sm mt-2">Card with a dark variant.</p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: (
      <div>
        <h3 className="text-lg font-semibold">Glass Card</h3>
        <p className="text-gray-500 text-sm mt-2">Card with glass morphism effect.</p>
      </div>
    ),
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-white">Gradient Card</h3>
        <p className="text-white/80 text-sm mt-2">Card with gradient variant.</p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold">Hover Me</h3>
        <p className="text-gray-500 text-sm mt-2">This card has hover effects.</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      {(["default", "highlight", "muted", "dark", "glass", "gradient"] as const).map((v) => (
        <Card key={v} variant={v}>
          <h3 className={`text-lg font-semibold ${v === "dark" || v === "gradient" ? "text-white" : ""}`}>
            {v}
          </h3>
          <p className={`text-sm mt-1 ${v === "dark" || v === "gradient" ? "text-white/70" : "text-gray-500"}`}>
            Card variant
          </p>
        </Card>
      ))}
    </div>
  ),
};
