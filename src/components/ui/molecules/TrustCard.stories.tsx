import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TrustCard } from "./TrustCard";
import { FiShield, FiAward, FiThumbsUp, FiZap } from "react-icons/fi";

const meta: Meta<typeof TrustCard> = {
  title: "Molecules/TrustCard",
  component: TrustCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TrustCard>;

export const Default: Story = {
  args: {
    icon: <FiShield className="text-brand text-xl" />,
    title: "รีวิวจริง 100%",
    description: "ทุกรีวิวมาจากการใช้งานจริง ไม่มีรีวิวปลอม",
  },
};

export const Award: Story = {
  args: {
    icon: <FiAward className="text-yellow-500 text-xl" />,
    title: "ผู้เชี่ยวชาญตรวจสอบ",
    description: "ทีมงานผู้เชี่ยวชาญด้าน Gadget ตรวจสอบทุกรีวิว",
    iconBg: "bg-yellow-100",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <TrustCard icon={<FiShield className="text-brand text-xl" />} title="รีวิวจริง" description="ใช้จริง ไม่จ่ายค่าโฆษณา" />
      <TrustCard icon={<FiAward className="text-yellow-500 text-xl" />} title="คัดสรรแล้ว" description="ผู้เชี่ยวชาญตรวจสอบ" iconBg="bg-yellow-100" />
      <TrustCard icon={<FiThumbsUp className="text-blue-500 text-xl" />} title="ไม่มีสปอนเซอร์" description="อิสระทุกความคิดเห็น" iconBg="bg-blue-100" />
      <TrustCard icon={<FiZap className="text-orange-500 text-xl" />} title="อัพเดตสม่ำเสมอ" description="รีวิวใหม่ทุกสัปดาห์" iconBg="bg-orange-100" />
    </div>
  ),
};
