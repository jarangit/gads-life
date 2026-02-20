import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LinkCard } from "./LinkCard";
import { FiStar, FiTrendingUp, FiPackage, FiShoppingBag } from "react-icons/fi";

const meta: Meta<typeof LinkCard> = {
  title: "Molecules/LinkCard",
  component: LinkCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  args: {
    href: "/products",
    icon: <FiPackage />,
    title: "สินค้าทั้งหมด",
    description: "ดูรีวิวสินค้า Gadget กว่า 100+ ชิ้น",
  },
};

export const WithoutArrow: Story = {
  args: {
    href: "/trending",
    icon: <FiTrendingUp />,
    title: "กำลังมาแรง",
    description: "สินค้าที่ได้รับความนิยมสูงสุดในสัปดาห์นี้",
    showArrow: false,
  },
};

export const CustomAccent: Story = {
  args: {
    href: "/recommended",
    icon: <FiStar />,
    title: "สินค้าแนะนำ",
    description: "คัดสรรสินค้าคุณภาพดีโดยทีมงาน",
    accentColor: "bg-yellow-400",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <LinkCard href="/products" icon={<FiPackage />} title="สินค้า" description="100+ รีวิว" />
      <LinkCard href="/trending" icon={<FiTrendingUp />} title="มาแรง" description="ประจำสัปดาห์" accentColor="bg-orange-400" />
      <LinkCard href="/recommended" icon={<FiStar />} title="แนะนำ" description="คัดสรรแล้ว" accentColor="bg-yellow-400" />
      <LinkCard href="/deals" icon={<FiShoppingBag />} title="โปรโมชัน" description="ลดราคาพิเศษ" accentColor="bg-red-400" />
    </div>
  ),
};
