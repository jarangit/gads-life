/* ──────── Cookie Policy Page ──────── */
import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "นโยบาย Cookie",
  description:
    "ข้อมูลเกี่ยวกับการใช้งาน Cookie ของ gads✓life ว่าเราเก็บอะไร เพื่ออะไร และคุณสามารถจัดการได้อย่างไร",
  url: "/legal",
  noIndex: false,
});

/* ─── Static section helpers ─── */
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

interface CookieTableRowProps {
  name: string;
  purpose: string;
  duration: string;
  type: "จำเป็น" | "วิเคราะห์" | "ฟังก์ชัน";
}

const typeColors: Record<CookieTableRowProps["type"], string> = {
  จำเป็น: "bg-green-50 text-green-700 border-green-200",
  วิเคราะห์: "bg-blue-50 text-blue-700 border-blue-200",
  ฟังก์ชัน: "bg-purple-50 text-purple-700 border-purple-200",
};

function CookieTableRow({ name, purpose, duration, type }: CookieTableRowProps) {
  return (
    <tr className="border-b border-gray-100 last:border-none">
      <td className="py-3 pr-4 font-mono text-xs text-gray-700 align-top whitespace-nowrap">
        {name}
      </td>
      <td className="py-3 pr-4 text-sm text-gray-600 align-top">{purpose}</td>
      <td className="py-3 pr-4 text-sm text-gray-500 align-top whitespace-nowrap">
        {duration}
      </td>
      <td className="py-3 align-top">
        <span
          className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[type]}`}
        >
          {type}
        </span>
      </td>
    </tr>
  );
}

/* ─── Anchor nav items ─── */
const navItems = [
  { id: "what", label: "คุกกี้คืออะไร" },
  { id: "types", label: "ประเภทคุกกี้ที่เราใช้" },
  { id: "table", label: "รายละเอียดคุกกี้" },
  { id: "manage", label: "วิธีจัดการคุกกี้" },
  { id: "changes", label: "การเปลี่ยนแปลงนโยบาย" },
  { id: "contact", label: "ติดต่อเรา" },
];

/* ─── Page ─── */
export default function LegalPage() {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-4">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            หน้าแรก
          </Link>
          <span>/</span>
          <span>นโยบาย Cookie</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          นโยบาย Cookie
        </h1>
        <p className="text-sm text-gray-500">
          อัปเดตล่าสุด: <time dateTime="2026-02-23">23 กุมภาพันธ์ 2569</time>
        </p>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          เว็บไซต์ <strong className="text-gray-800">gads✓life</strong>{" "}
          ใช้งาน Cookie เพื่อให้ประสบการณ์การใช้งานดีขึ้น
          หน้านี้อธิบายว่าเราใช้ Cookie อะไรบ้าง เพื่อวัตถุประสงค์ใด
          และคุณสามารถควบคุมหรือปฏิเสธได้อย่างไร
        </p>
      </div>

      {/* Quick nav */}
      <nav
        aria-label="สารบัญ"
        className="bg-gray-50 rounded-2xl p-5 mb-10 border border-gray-100"
      >
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          สารบัญ
        </p>
        <ol className="space-y-1.5">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-gray-600 hover:text-brand transition-colors flex gap-2"
              >
                <span className="text-gray-400 shrink-0 tabular-nums">
                  {i + 1}.
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="space-y-10">
        {/* 1 */}
        <Section id="what" title="1. คุกกี้คืออะไร">
          <p>
            Cookie คือไฟล์ข้อความขนาดเล็กที่เว็บไซต์บันทึกไว้ในอุปกรณ์ของคุณ
            (คอมพิวเตอร์ แท็บเล็ต หรือโทรศัพท์มือถือ)
            เมื่อคุณเยี่ยมชมเว็บไซต์
          </p>
          <p>
            Cookie ช่วยให้เว็บไซต์จำการตั้งค่าและพฤติกรรมของคุณ
            เพื่อไม่ต้องกรอกข้อมูลซ้ำในการเยี่ยมชมครั้งถัดไป
            และช่วยให้เราเข้าใจว่าผู้ใช้งานเข้าถึงเนื้อหาใดมากที่สุด
            เพื่อพัฒนาเว็บไซต์ให้ดีขึ้นต่อเนื่อง
          </p>
        </Section>

        {/* 2 */}
        <Section id="types" title="2. ประเภทคุกกี้ที่เราใช้">
          <div className="space-y-5">
            {/* Essential */}
            <div className="rounded-xl border border-green-100 bg-green-50/50 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-base">✅</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    คุกกี้ที่จำเป็น (Essential Cookies)
                  </p>
                  <p>
                    จำเป็นต้องมีเพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้อง
                    เช่น การจดจำว่าคุณยอมรับ Cookie แล้ว
                    คุกกี้ประเภทนี้ไม่สามารถปิดได้
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-base">📊</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    คุกกี้วิเคราะห์ (Analytics Cookies)
                  </p>
                  <p>
                    ช่วยให้เราเข้าใจว่าผู้เยี่ยมชมใช้เว็บไซต์อย่างไร
                    เช่น หน้าที่ดูมากที่สุด เวลาที่ใช้บนเว็บ
                    และเส้นทางการนำทาง ข้อมูลทั้งหมดเป็นแบบไม่ระบุตัวตน
                  </p>
                </div>
              </div>
            </div>

            {/* Functional */}
            <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-base">⚙️</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    คุกกี้ฟังก์ชัน (Functional Cookies)
                  </p>
                  <p>
                    จดจำการตั้งค่าและการแสดงผลที่คุณเลือก
                    เพื่อประสบการณ์ที่ดีขึ้นในการเยี่ยมชมครั้งถัดไป
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 3 */}
        <Section id="table" title="3. รายละเอียดคุกกี้ที่ใช้งาน">
          <p>รายการคุกกี้ที่เว็บไซต์ gads✓life ใช้งานในปัจจุบัน:</p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    ชื่อ
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    วัตถุประสงค์
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    อายุ
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    ประเภท
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 bg-white px-4">
                <CookieTableRow
                  name="gadslife_cookie_consent"
                  purpose="บันทึกว่าคุณยอมรับหรือปฏิเสธการใช้งาน Cookie แล้ว"
                  duration="1 ปี"
                  type="จำเป็น"
                />
                <CookieTableRow
                  name="_ga"
                  purpose="Google Analytics — แยกแยะผู้ใช้งานแต่ละคนออกจากกัน (ไม่ระบุตัวตน)"
                  duration="2 ปี"
                  type="วิเคราะห์"
                />
                <CookieTableRow
                  name="_ga_*"
                  purpose="Google Analytics — บันทึก session state"
                  duration="2 ปี"
                  type="วิเคราะห์"
                />
                <CookieTableRow
                  name="theme_preference"
                  purpose="จดจำธีมหรือการตั้งค่าการแสดงผลที่เลือก"
                  duration="6 เดือน"
                  type="ฟังก์ชัน"
                />
              </tbody>
            </table>
          </div>
        </Section>

        {/* 4 */}
        <Section id="manage" title="4. วิธีจัดการหรือปฏิเสธ Cookie">
          <p>
            คุณมีสิทธิ์ควบคุม Cookie ได้หลายวิธี:
          </p>
          <ul className="list-none space-y-3 mt-2">
            {[
              {
                icon: "🔔",
                title: "ผ่าน Banner ของเรา",
                detail:
                  'เมื่อเข้าเว็บครั้งแรก คุณสามารถกด "ปฏิเสธ" ใน Banner Cookie ที่ปรากฏขึ้น',
              },
              {
                icon: "🌐",
                title: "ผ่านการตั้งค่าเบราว์เซอร์",
                detail:
                  "เบราว์เซอร์ส่วนใหญ่อนุญาตให้บล็อกหรือลบ Cookie ได้ใน Settings → Privacy & Security",
              },
              {
                icon: "🚫",
                title: "Google Analytics Opt-Out",
                detail: (
                  <>
                    ติดตั้ง{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-brand transition-colors"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>{" "}
                    เพื่อหยุดการติดตามทั้งหมด
                  </>
                ),
              },
            ].map(({ icon, title, detail }) => (
              <li
                key={title}
                className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <span className="text-base shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">
                    {title}
                  </p>
                  <p className="text-gray-600">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-gray-500 text-xs bg-amber-50 border border-amber-100 rounded-xl p-3">
            ⚠️ การปิด Cookie บางประเภทอาจส่งผลให้ฟีเจอร์บางส่วนของเว็บไซต์ทำงานไม่ครบถ้วน
          </p>
        </Section>

        {/* 5 */}
        <Section id="changes" title="5. การเปลี่ยนแปลงนโยบาย">
          <p>
            เราอาจปรับปรุงนโยบาย Cookie นี้เป็นครั้งคราวเพื่อให้สอดคล้องกับ
            การเปลี่ยนแปลงของกฎหมายหรือวิธีการใช้งานของเรา
            โดยจะแสดงวันที่อัปเดตล่าสุดไว้ด้านบนของหน้านี้เสมอ
          </p>
          <p>
            หากมีการเปลี่ยนแปลงที่มีนัยสำคัญ เราจะแจ้งให้คุณทราบ
            ผ่าน Banner ที่ปรากฏบนเว็บไซต์
          </p>
        </Section>

        {/* 6 */}
        <Section id="contact" title="6. ติดต่อเรา">
          <p>
            หากมีคำถามเกี่ยวกับนโยบาย Cookie หรือการใช้งานข้อมูลส่วนบุคคล
            สามารถติดต่อเราได้ที่:
          </p>
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 mt-2 text-sm space-y-1">
            <p className="font-semibold text-gray-800">gads✓life</p>
            <p>
              อีเมล:{" "}
              <a
                href="mailto:hello@gads.life"
                className="underline underline-offset-2 hover:text-brand transition-colors"
              >
                hello@gads.life
              </a>
            </p>
            <p>เว็บไซต์: gads.life</p>
          </div>
        </Section>
      </div>

      {/* Footer nav */}
      <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          © 2026 gads✓life · นโยบาย Cookie
        </p>
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          ← กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}
