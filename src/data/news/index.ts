/* ──────── Mock News Data ──────── */

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  body?: string[]; // full article body — array of paragraphs
  source: string;
  publishedAt: string; // ISO date string
  category: string;
  slug: string;
  externalUrl?: string;
  image?: string | null;
  relatedSlugs?: string[];
}

export const mockNews: NewsItem[] = [
  {
    id: "news-001",
    title: "Apple เปิดตัว iPhone 17 Air บางที่สุดในประวัติศาสตร์ Apple",
    excerpt:
      "Apple ประกาศเปิดตัว iPhone 17 Air หน้าจอ 6.6 นิ้ว บางเพียง 5.5 มม. พร้อม chip A19 และกล้องหลัก 48 MP ราคาเริ่มต้นที่ 33,900 บาท",
    body: [
      "Apple ได้เปิดตัว iPhone 17 Air อย่างเป็นทางการในงาน Spring Event 2026 ซึ่งถือเป็นการเปิดตัวที่ทำให้แฟนๆ Apple ทั่วโลกตื่นเต้นอย่างมาก",
      "iPhone 17 Air มีความบาง 5.5 มม. ซึ่งบางกว่า iPod nano รุ่นเก่าเสียอีก และยังคงรองรับ Face ID รุ่นใหม่ที่ฝังอยู่ใต้หน้าจอ Dynamic Island รุ่น 3 ที่แสดงผลได้เร็วขึ้น 2 เท่า",
      "สเปคหลักได้แก่ chip A19 ที่ทำ Neural Engine เร็วขึ้น 35% กล้องหลัก 48 MP aperture f/1.6 พร้อม sensor-shift OIS รุ่นใหม่ และกล้องหน้า 24 MP รองรับ 4K ProRes Video",
      "แบตเตอรี่ใช้งานได้นาน 22 ชั่วโมงบนเครือข่าย 5G แม้ว่าตัวเครื่องจะบางมาก Apple อ้างว่าใช้เทคโนโลยี stacked battery cell ใหม่ที่ fix ปัญหา energy density",
      "ราคาเริ่มต้น 33,900 บาทสำหรับ 128 GB จำหน่ายใน 3 สีคือ Titanium Silver, Midnight Black และ Desert Sand",
    ],
    source: "9to5Mac",
    publishedAt: "2026-02-22T09:00:00Z",
    category: "iPhone",
    slug: "apple-iphone-17-air-launch",
    image: null,
    relatedSlugs: ["ios-19-3-update-apple-intelligence", "airpods-pro-3-fda-hearing-aid"],
  },
  {
    id: "news-002",
    title: "MacBook Air M4 ทำ benchmark ดีกว่า M3 ถึง 30% พร้อม RAM เริ่มต้น 16 GB",
    excerpt:
      "ผลทดสอบ Geekbench รั่วไหลออกมาชี้ให้เห็นว่า MacBook Air M4 ทำประสิทธิภาพได้ดีกว่ารุ่นก่อนอย่างมีนัยสำคัญ และ Apple ตัดสินใจเพิ่ม RAM ขั้นต่ำเป็น 16 GB",
    body: [
      "ผลทดสอบ Geekbench 6 ของ MacBook Air รุ่นใหม่ที่รั่วไหลออกมาแสดงให้เห็นคะแนน Single-Core ที่ 3,850 และ Multi-Core ที่ 15,200 ซึ่งสูงกว่า M3 ประมาณ 28-32%",
      "สิ่งที่น่าสนใจที่สุดคือ Apple ตัดสินใจยกระดับ RAM ขั้นต่ำจาก 8 GB เป็น 16 GB สำหรับทุกรุ่น ซึ่งเป็นการตอบสนองต่อเสียงวิจารณ์เรื่อง RAM ที่น้อยเกินไปสำหรับงาน AI",
      "MacBook Air M4 ยังคงดีไซน์เดิม แต่เปลี่ยนมาใช้พอร์ต MagSafe 4 ที่รองรับชาร์จสูงสุด 140W และเพิ่ม Thunderbolt 5 จำนวน 2 พอร์ต",
      "คาดว่าจะเปิดตัวอย่างเป็นทางการในงาน WWDC 2026 ราคาเริ่มต้นอยู่ที่ประมาณ 38,900 บาทสำหรับรุ่น 13 นิ้ว",
    ],
    source: "MacRumors",
    publishedAt: "2026-02-21T14:30:00Z",
    category: "Mac",
    slug: "macbook-air-m4-benchmark-leak",
    image: null,
    relatedSlugs: ["ipad-pro-m4-ultra-chip"],
  },
  {
    id: "news-003",
    title: "Apple Watch Ultra 3 มาพร้อม Micro LED display ครั้งแรก",
    excerpt:
      "Apple Watch Ultra 3 จะใช้จอ Micro LED ความสว่างสูงสุด 3,000 nits พร้อมรองรับการดำน้ำลึกได้ถึง 100 เมตร และ battery life นาน 72 ชั่วโมง",
    body: [
      "Bloomberg รายงานว่า Apple Watch Ultra 3 ที่กำลังจะเปิดตัวในปลายปี 2026 จะเป็น Apple Watch รุ่นแรกที่ใช้ Micro LED display แทน OLED",
      "Micro LED ให้ความสว่างสูงสุด 3,000 nits ซึ่งมากกว่า Ultra 2 ถึง 50% และยังประหยัดพลังงานได้ดีกว่า ทำให้ Apple สามารถยืด battery life ไปได้ถึง 72 ชั่วโมงในโหมด Low Power",
      "สเปคอื่นๆ ได้แก่ chip S10 ที่รองรับ on-device health AI การตรวจวัด blood glucose แบบไม่ต้องเจาะเลือด (รุ่น Cellular เท่านั้น) และระบบ dual-frequency GPS ที่แม่นยำขึ้น",
      "ตัวเครื่องยังคงใช้ titanium ระดับ aerospace-grade และรองรับการดำน้ำลึกถึง 100 เมตร (EN 13319) ราคาเริ่มต้นคาดที่ประมาณ 36,900 บาท",
    ],
    source: "Bloomberg",
    publishedAt: "2026-02-20T11:00:00Z",
    category: "Apple Watch",
    slug: "apple-watch-ultra-3-micro-led",
    image: null,
    relatedSlugs: ["apple-iphone-17-air-launch"],
  },
  {
    id: "news-004",
    title: "iOS 19.3 update แก้ไขบั๊กสำคัญ พร้อมฟีเจอร์ Apple Intelligence ใหม่",
    excerpt:
      "iOS 19.3 นำเสนอการปรับปรุงประสิทธิภาพ AI Writing Tools ใหม่ แก้ไขปัญหา FaceID ในอุณหภูมิต่ำ และเพิ่มตัวเลือกภาษาไทยใน Siri",
    body: [
      "Apple ปล่อย iOS 19.3 สำหรับ iPhone XS ขึ้นไป อัปเดตนี้มีขนาดไฟล์ 680 MB และแนะนำให้อัปเดตโดยเร็ว",
      "การแก้ไขบั๊กที่สำคัญ ได้แก่ ปัญหา Face ID ที่ fail บ่อยเมื่ออุณหภูมิต่ำกว่า 10°C ปัญหา Wi-Fi ที่ drop บน iPhone 16 Pro และ bug ที่ทำให้ notification เงียบโดยไม่ตั้งใจ",
      "ฟีเจอร์ใหม่ใน Apple Intelligence ประกอบด้วย Writing Tools ที่เพิ่มโหมด Academic สำหรับงานวิชาการ Image Playground ที่สร้างรูปได้เร็วขึ้น 3 เท่า และ Priority Notifications ที่ฉลาดขึ้นมาก",
      "ที่น่าสนใจที่สุดคือการเพิ่มภาษาไทยในระบบ Siri ซึ่งรองรับคำสั่งภาษาไทยได้แล้วบางส่วน คาดว่าจะรองรับเต็มรูปแบบใน iOS 20",
    ],
    source: "The Verge",
    publishedAt: "2026-02-19T08:00:00Z",
    category: "iOS",
    slug: "ios-19-3-update-apple-intelligence",
    image: null,
    relatedSlugs: ["apple-iphone-17-air-launch", "airpods-pro-3-fda-hearing-aid"],
  },
  {
    id: "news-005",
    title: "AirPods Pro 3 มาพร้อมระบบ hearing aid ได้รับการรับรอง FDA",
    excerpt:
      "AirPods Pro 3 ผ่านการรับรองจาก FDA ในฐานะอุปกรณ์ช่วยฟัง รุ่นใหม่นี้มีระบบ ANC ดีขึ้น 40% และ Conversation Awareness ที่ชาญฉลาดกว่าเดิม",
    body: [
      "AirPods Pro 3 ได้รับการรับรองจาก FDA ในฐานะ over-the-counter hearing aid อย่างเป็นทางการ ทำให้ Apple กลายเป็นบริษัทเทคโนโลยีแรกที่มีผลิตภัณฑ์ consumer ที่ผ่านมาตรฐานนี้",
      "ระบบ Active Noise Cancellation รุ่นใหม่ใช้ chip H3 ที่ประมวลผล audio ได้ 30 ล้านครั้งต่อวินาที ทำให้ลด noise ได้ดีขึ้น 40% เมื่อเทียบกับ Pro 2",
      "Conversation Awareness ถูกพัฒนาให้สามารถแยกแยะเสียงของคนที่คุยด้วยออกจากเสียงรบกวนได้แม้อยู่ในพื้นที่เสียงดัง และปรับระดับเสียงอัตโนมัติโดยไม่ต้องกด",
      "แบตเตอรี่ใช้งานได้ 8 ชั่วโมง (ANC on) หรือ 32 ชั่วโมงรวม case และรองรับ USB-C charging ราคาเริ่มต้น 9,990 บาท",
    ],
    source: "TechCrunch",
    publishedAt: "2026-02-18T16:00:00Z",
    category: "AirPods",
    slug: "airpods-pro-3-fda-hearing-aid",
    image: null,
    relatedSlugs: ["apple-iphone-17-air-launch", "ios-19-3-update-apple-intelligence"],
  },
  {
    id: "news-006",
    title: "iPad Pro M4 Ultra: Apple วางแผนใช้ chip M4 Ultra ใน iPad ครั้งแรก",
    excerpt:
      "รายงานจาก Ming-Chi Kuo ระบุว่า Apple เตรียมนำ M4 Ultra มาใส่ iPad Pro รุ่น 2026 ซึ่งจะทำให้ iPad มีประสิทธิภาพใกล้เคียง Mac Pro",
    body: [
      "นักวิเคราะห์ชื่อดัง Ming-Chi Kuo เผยแพร่รายงานล่าสุดระบุว่า Apple กำลังพัฒนา iPad Pro รุ่นปลายปี 2026 ที่จะใช้ chip M4 Ultra ซึ่งเป็นครั้งแรกที่ chip ระดับ Ultra จะมาอยู่ใน iPad",
      "M4 Ultra ประกอบด้วย CPU 32 core, GPU 80 core และ Neural Engine 32 core ทำให้ iPad Pro รุ่นนี้มี on-device AI ที่เทียบเท่า Mac Pro ราคา 200,000 บาท",
      "iPad Pro รุ่นนี้คาดว่าจะมาพร้อมจอ OLED ขนาด 13.3 นิ้ว ความละเอียด 2,732 x 2,048 pixels และรองรับ Apple Pencil 4 ที่มีระบบ haptic feedback ที่ดีขึ้นมาก",
      "RAM 32 GB เป็นค่าเริ่มต้น พร้อม storage สูงสุด 4 TB ราคาเริ่มต้นประมาณ 52,900 บาท สำหรับรุ่น 256 GB",
    ],
    source: "Ming-Chi Kuo",
    publishedAt: "2026-02-17T10:00:00Z",
    category: "iPad",
    slug: "ipad-pro-m4-ultra-chip",
    image: null,
    relatedSlugs: ["macbook-air-m4-benchmark-leak"],
  },
];
