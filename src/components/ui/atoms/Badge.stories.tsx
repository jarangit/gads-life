import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge, RecommendedBadge, ScoreBadge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "info", "warning", "recommended", "score", "status"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Default Badge", variant: "default", size: "md" },
};

export const Success: Story = {
  args: { children: "สินค้าแนะนำ", variant: "success", size: "md" },
};

export const Info: Story = {
  args: { children: "ข้อมูลเพิ่มเติม", variant: "info", size: "md" },
};

export const Warning: Story = {
  args: { children: "ระวัง", variant: "warning", size: "md" },
};

export const Recommended: Story = {
  args: { children: "แนะนำ", variant: "recommended", size: "md" },
};

export const Score: Story = {
  args: { children: "9.2", variant: "score", size: "md" },
};

export const Status: Story = {
  args: { children: "Active", variant: "status", size: "md" },
};

export const Small: Story = {
  args: { children: "Small", variant: "default", size: "sm" },
};

export const ExtraSmall: Story = {
  args: { children: "XS", variant: "default", size: "xs" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="recommended">Recommended</Badge>
      <Badge variant="score">9.5</Badge>
      <Badge variant="status">Status</Badge>
    </div>
  ),
};

export const RecommendedBadgeStory: Story = {
  name: "RecommendedBadge",
  render: () => <RecommendedBadge />,
};

export const ScoreBadgeStory: Story = {
  name: "ScoreBadge",
  render: () => (
    <div className="flex gap-3">
      <ScoreBadge score={9.2} />
      <ScoreBadge score={7.5} max={10} />
      <ScoreBadge score="8.0" />
    </div>
  ),
};
