/* ──────── About Page ──────── */
import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiStar, FiShield, FiHeart } from "react-icons/fi";
import { HiOutlineBeaker, HiOutlineChatAlt2 } from "react-icons/hi";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "เกี่ยวกับเรา",
  description:
    "gads✓life คือเว็บรีวิวสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์ ไม่มีรีวิวปลอม ทุกบทความผ่านกระบวนการทดสอบที่โปร่งใส",
  url: "/about",
});

/* ─── Helpers ─── */
interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

function PrincipleCard({
  icon,
  title,
  description,
  accent,
}: PrincipleCardProps) {
  return (
    <div className={`rounded-2xl border p-5 ${accent}`}>
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-brand-light text-brand flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-sm mb-0.5">{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          หน้าแรก
        </Link>
        <span>/</span>
        <span>เกี่ยวกับเรา</span>
      </div>

      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
            <FiCheck className="text-brand text-base" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">gads✓life</h1>
        </div>
        <p className="text-xl font-semibold text-gray-800 leading-snug mb-4">
          คัดสรรสินค้าจากการใช้งานจริง
          <br />
          <span className="text-brand">ไม่มีอันดับสปอนเซอร์</span>
        </p>
        <p className="text-gray-600 leading-relaxed">
          เราเชื่อว่าการซื้อของออนไลน์ควรง่ายกว่านี้ แต่ความจริงคือ
          รีวิวส่วนใหญ่บนอินเทอร์เน็ตถูกซื้อหรือแต่งขึ้น gads✓life
          ถูกสร้างขึ้นเพื่อแก้ปัญหานี้ — ให้ทุกรีวิวมาจากการใช้งานจริง ทดสอบจริง
          และพูดตรงๆ ไม่ว่าผลลัพธ์จะออกมาเป็นอย่างไร
        </p>
      </div>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          หลักการของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PrincipleCard
            icon={<FiShield className="text-green-600" />}
            title="ไม่รับเงินจากแบรนด์"
            description="ไม่มีสปอนเซอร์ ไม่มีรีวิวที่ถูกชำระเงิน ทุกบทความเขียนด้วยความเป็นอิสระ 100%"
            accent="border-green-100 bg-green-50/40"
          />
          <PrincipleCard
            icon={<HiOutlineBeaker className="text-blue-600" />}
            title="ทดสอบจริงทุกชิ้น"
            description="สินค้าทุกชิ้นผ่านการใช้งานจริงในชีวิตประจำวัน ไม่ใช่แค่อ่านสเปคหรือดูรูปภาพจากแบรนด์"
            accent="border-blue-100 bg-blue-50/40"
          />
          <PrincipleCard
            icon={<FiStar className="text-amber-600" />}
            title="คะแนนจากข้อมูล ไม่ใช่ความรู้สึก"
            description="ระบบคะแนนของเราใช้เกณฑ์ที่ชัดเจน วัดได้ และเปิดเผยต่อสาธารณะ ทำให้เปรียบเทียบได้ง่าย"
            accent="border-amber-100 bg-amber-50/40"
          />
          <PrincipleCard
            icon={<FiHeart className="text-rose-600" />}
            title="เขียนเพื่อผู้ซื้อ ไม่ใช่แบรนด์"
            description="เราบอกทั้งข้อดีและข้อเสีย เพราะเชื่อว่าข้อมูลครบถ้วนคือสิ่งที่คุณสมควรได้รับ"
            accent="border-rose-100 bg-rose-50/40"
          />
        </div>
      </section>

      {/* How we review */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          กระบวนการรีวิวของเรา
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          ทุกรีวิวผ่านขั้นตอนเดียวกัน ไม่มีข้อยกเว้น
        </p>
        <div className="space-y-5 border-l-2 border-gray-100 pl-6 ml-4">
          <Step
            number="1"
            title="เลือกสินค้าที่คุ้มค่ารีวิว"
            description="เราเลือกสินค้าจากความต้องการจริงของผู้ใช้งาน ไม่ใช่จากแบรนด์ที่ขอให้รีวิว"
          />
          <Step
            number="2"
            title="ซื้อหรือยืมมาใช้งานจริง"
            description="สินค้าส่วนใหญ่ถูกซื้อด้วยเงินของเราเอง หากได้รับมาทดสอบจะแจ้งให้ทราบอย่างชัดเจนในบทความ"
          />
          <Step
            number="3"
            title="ทดสอบในสภาพแวดล้อมจริง"
            description="ใช้งานอย่างน้อย 2–4 สัปดาห์ในชีวิตประจำวัน วัดผลตามเกณฑ์ที่กำหนดไว้ล่วงหน้า"
          />
          <Step
            number="4"
            title="ให้คะแนนตามเกณฑ์มาตรฐาน"
            description="คะแนนแต่ละด้านถูกคำนวณจากข้อมูลที่วัดได้ ไม่ใช่ความรู้สึกส่วนตัว"
          />
          <Step
            number="5"
            title="อัปเดตหลังใช้งานนาน"
            description="เราติดตามสินค้าหลังการใช้งานระยะยาว และอัปเดตบทความหากพบข้อมูลใหม่ที่สำคัญ"
          />
        </div>
        <div className="mt-6">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:underline underline-offset-2 transition-colors"
          >
            อ่านรายละเอียดวิธีการรีวิวทั้งหมด →
          </Link>
        </div>
      </section>

      {/* Disclosure */}
      <section className="mb-12">
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
          <div className="flex items-start gap-3 mb-3">
            <HiOutlineChatAlt2 className="text-gray-500 text-xl shrink-0 mt-0.5" />
            <h2 className="text-base font-semibold text-gray-800">
              ความโปร่งใสด้านรายได้
            </h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            gads✓life รักษาความเป็นอิสระด้านบรรณาธิการไว้เสมอ
            รายได้ของเว็บไซต์มาจาก Affiliate Links ซึ่งหมายความว่า
            เมื่อคุณซื้อสินค้าผ่านลิงก์ของเรา เราจะได้รับค่าคอมมิชชั่นเล็กน้อย
            <strong className="text-gray-800">
              {" "}
              โดยไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับคุณ
            </strong>
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            ค่าคอมมิชชั่นนี้{" "}
            <strong className="text-gray-800">
              ไม่ส่งผลต่อคะแนนหรือเนื้อหา
            </strong>{" "}
            ของบทความแต่อย่างใด สินค้าที่ได้คะแนนต่ำก็ยังได้คะแนนต่ำ แม้จะมี
            Affiliate Link หรือไม่มีก็ตาม
          </p>
          <Link
            href="/disclosure"
            className="inline-block mt-4 text-xs text-gray-500 underline underline-offset-2 hover:text-gray-800 transition-colors"
          >
            อ่าน Disclosure Policy ฉบับเต็ม
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12">
        <div className="rounded-2xl bg-foreground text-background p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-base mb-1">เริ่มต้นหาสินค้าดีๆ</p>
            <p className="text-sm text-gray-400">
              ดูรีวิวสินค้าที่คัดสรรมาแล้ว พร้อมคะแนนจากการทดสอบจริง
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-foreground text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            ดูสินค้าทั้งหมด →
          </Link>
        </div>
      </section>

      {/* Footer nav */}
      <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-gray-400">© 2026 gads✓life</p>
        <div className="flex gap-5 text-xs text-gray-500">
          <Link
            href="/methodology"
            className="hover:text-gray-800 transition-colors"
          >
            How we test
          </Link>
          <Link
            href="/disclosure"
            className="hover:text-gray-800 transition-colors"
          >
            Disclosure
          </Link>
          <Link href="/legal" className="hover:text-gray-800 transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
