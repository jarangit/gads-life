/* ──────── Mock News Data (normalized to API schema) ──────── */

export type NewsType = "NEWS" | "GUIDE" | "ANALYSIS";
export type NewsStatus = "PUBLISHED" | "DRAFT";

export interface NewsSection {
  id: number;
  articleId: number;
  heading: string | null;
  body: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface NewsTag {
  id: number;
  articleId: number;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  type: NewsType;
  status: NewsStatus;
  publishedAt: string;
  isFeatured: 0 | 1;
  metaTitle: string;
  metaDescription: string;
  heroImage: string | null;
  heroImageAlt: string | null;
  sections: NewsSection[];
  tags: NewsTag[];
  createdAt: string;
  updatedAt: string;
  /** Optional legacy fields kept for UI compatibility */
  category?: string;
  source?: string;
  readingTimeSeconds?: number;
  relatedSlugs?: string[];
  externalUrl?: string;
}

export const mockNews: NewsItem[] = [
  {
    id: 3,
    slug: "apple-glasses-2026-rumor-1",
    title: "Apple Glasses อาจมาในปี 2026 — แต่ไม่ใช่แบบที่คุณจินตนาการไว้",
    summary:
      "Apple อาจเปิดตัวแว่นอัจฉริยะในปี 2026 แต่รุ่นแรกอาจยังไม่ใช่ AR เต็มรูปแบบอย่างที่หลายคนคาดหวัง",
    excerpt:
      "มีรายงานว่า Apple เร่งพัฒนาแว่นอัจฉริยะ และอาจเปิดตัวเร็วสุดปี 2026 แต่รุ่นแรกอาจทำงานคล้าย Meta Ray-Ban มากกว่าการเป็น AR เต็มตัว",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-24T23:00:00.000Z",
    isFeatured: 1,
    metaTitle: "Apple Glasses 2026 ข่าวลือล่าสุด ควรรอไหม?",
    metaDescription:
      "Apple อาจเปิดตัว Apple Glasses ในปี 2026 แต่รุ่นแรกอาจยังไม่ใช่ AR เต็มรูปแบบ ดูรายละเอียดและผลต่อการตัดสินใจซื้อที่นี่",
    heroImage: "https://www.digitec.ch/Files/7/7/4/6/3/0/6/3/Screenshot_20260216-091435.Gmail_.png.webp",
    heroImageAlt: "Concept Apple Glasses wearable device 2026",
    category: "Apple",
    source: "Bloomberg",
    readingTimeSeconds: 240,
    relatedSlugs: [],
    sections: [
      {
        id: 6,
        articleId: 3,
        heading: "What Happened",
        body:
          "รายงานล่าสุดระบุว่า Apple ชะลอแผนพัฒนา Vision รุ่นถัดไป เพื่อโฟกัสไปที่แว่นอัจฉริยะโดยเฉพาะ รุ่นแรกอาจไม่มีจอ AR บนเลนส์ แต่จะมีกล้อง ลำโพง และทำงานผ่าน Siri รุ่นใหม่ แว่นจะต้องเชื่อมต่อกับ iPhone และอาจเปิดตัวช่วงปลายปี 2026 หรือ 2027 ราคาเบื้องต้นคาดว่าอยู่ราว 400–600 ดอลลาร์",
        sortOrder: 1,
        createdAt: "2026-02-24T03:13:03.213Z",
        updatedAt: "2026-02-24T03:13:03.213Z",
      },
      {
        id: 7,
        articleId: 3,
        heading: "Why It Matters",
        body:
          "ถ้าคุณรอ AR แบบเห็นภาพซ้อนบนโลกจริง รุ่นแรกอาจยังไม่ถึงจุดนั้น แต่ถ้าคุณสนใจผู้ช่วย AI แบบสวมใส่ได้ตลอดวัน นี่อาจเป็นก้าวแรกของ Apple ในตลาดนี้ และถ้าคุณเพิ่งลงทุนกับอุปกรณ์ AR อื่น คำถามคือคุณอยากรอเวอร์ชันที่สมบูรณ์กว่านี้หรือไม่",
        sortOrder: 2,
        createdAt: "2026-02-24T03:13:03.218Z",
        updatedAt: "2026-02-24T03:13:03.218Z",
      },
      {
        id: 8,
        articleId: 3,
        heading: "Should You Care",
        body:
          "- ถ้าคุณรอ AR เต็มรูปแบบ คุณพร้อมรอถึงรุ่นที่สองหรือยัง\n- ถ้าใช้ iPhone และ AirPods ทุกวัน แว่นที่ผสาน AI จะเปลี่ยนวิธีใช้งานไหม\n- ถ้าคุณเพิ่งซื้อ Vision Pro รู้สึกว่าทิศทางกำลังเปลี่ยนหรือเปล่า",
        sortOrder: 3,
        createdAt: "2026-02-24T03:13:03.222Z",
        updatedAt: "2026-02-24T03:13:03.222Z",
      },
    ],
    tags: [
      {
        id: 9,
        articleId: 3,
        value: "Apple",
        createdAt: "2026-02-24T03:13:03.232Z",
        updatedAt: "2026-02-24T03:13:03.232Z",
      },
      {
        id: 10,
        articleId: 3,
        value: "Apple Glasses",
        createdAt: "2026-02-24T03:13:03.237Z",
        updatedAt: "2026-02-24T03:13:03.237Z",
      },
      {
        id: 11,
        articleId: 3,
        value: "AR",
        createdAt: "2026-02-24T03:13:03.242Z",
        updatedAt: "2026-02-24T03:13:03.242Z",
      },
      {
        id: 12,
        articleId: 3,
        value: "Wearable",
        createdAt: "2026-02-24T03:13:03.247Z",
        updatedAt: "2026-02-24T03:13:03.247Z",
      },
      {
        id: 13,
        articleId: 3,
        value: "Rumor",
        createdAt: "2026-02-24T03:13:03.249Z",
        updatedAt: "2026-02-24T03:13:03.249Z",
      },
    ],
    createdAt: "2026-02-24T03:13:03.210Z",
    updatedAt: "2026-02-24T03:13:03.210Z",
  },
  {
    id: 4,
    slug: "iphone-17-air-pricing-thailand",
    title: "ราคาไทย iPhone 17 Air เริ่ม 33,900 บาท เปิดจองต้นมีนา",
    summary:
      "Apple Thailand ยืนยันราคาเริ่มต้น iPhone 17 Air ที่ 33,900 บาท เปิดจอง 5 มีนาคม ส่งมอบ 12 มีนาคม",
    excerpt:
      "iPhone 17 Air ราคาไทยเริ่ม 33,900 บาท จอง 5 มี.ค. ส่งมอบ 12 มี.ค. มีสี Titanium Silver, Midnight Black, Desert Sand",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-24T10:00:00.000Z",
    isFeatured: 1,
    metaTitle: "ราคาไทย iPhone 17 Air เริ่ม 33,900 บาท | gads✓life",
    metaDescription:
      "สรุปวันจองและวันรับเครื่อง iPhone 17 Air ในไทย ราคาเริ่ม 33,900 บาท ครบสี Titanium Silver, Midnight Black, Desert Sand",
    heroImage: null,
    heroImageAlt: "iPhone 17 Air สี Titanium Silver",
    category: "iPhone",
    source: "Apple Thailand",
    readingTimeSeconds: 140,
    relatedSlugs: ["apple-glasses-2026-rumor-1"],
    sections: [
      {
        id: 9,
        articleId: 4,
        heading: "กำหนดการ",
        body: "เปิดจอง 5 มีนาคม 2026 เวลา 08:00 น. รับเครื่องเริ่ม 12 มีนาคม 2026 ที่ Apple Store และผู้ให้บริการเครือข่าย",
        sortOrder: 1,
        createdAt: "2026-02-24T03:20:00.000Z",
        updatedAt: "2026-02-24T03:20:00.000Z",
      },
      {
        id: 10,
        articleId: 4,
        heading: "ราคาทุกรุ่น",
        body: "128 GB: 33,900 บาท\n256 GB: 36,900 บาท\n512 GB: 42,900 บาท",
        sortOrder: 2,
        createdAt: "2026-02-24T03:20:00.000Z",
        updatedAt: "2026-02-24T03:20:00.000Z",
      },
    ],
    tags: [
      { id: 14, articleId: 4, value: "iPhone 17 Air", createdAt: "2026-02-24T03:20:00.000Z", updatedAt: "2026-02-24T03:20:00.000Z" },
      { id: 15, articleId: 4, value: "Pricing", createdAt: "2026-02-24T03:20:00.000Z", updatedAt: "2026-02-24T03:20:00.000Z" },
      { id: 16, articleId: 4, value: "Thailand", createdAt: "2026-02-24T03:20:00.000Z", updatedAt: "2026-02-24T03:20:00.000Z" },
    ],
    createdAt: "2026-02-24T03:20:00.000Z",
    updatedAt: "2026-02-24T03:20:00.000Z",
  },
  {
    id: 5,
    slug: "macbook-air-m4-launch-window",
    title: "MacBook Air M4 คาดเปิดตัว WWDC 2026 พร้อม MagSafe 4",
    summary: "แหล่งข่าวระบุ MacBook Air M4 จะเปิดตัวในงาน WWDC 2026 มาพร้อม MagSafe 4 และ Thunderbolt 5",
    excerpt: "MacBook Air M4 อาจเปิดตัวกลางปีนี้ ใช้ชิป M4 ประสิทธิภาพดีขึ้น ~30% พอร์ต MagSafe 4 ชาร์จเร็วขึ้น",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-23T12:00:00.000Z",
    isFeatured: 0,
    metaTitle: "MacBook Air M4 เปิดตัวกลางปี 2026 | gads✓life",
    metaDescription: "สรุปข่าว MacBook Air M4: เปิดตัวคาด WWDC 2026 มี MagSafe 4, Thunderbolt 5 และ RAM เริ่ม 16 GB",
    heroImage: null,
    heroImageAlt: "MacBook Air M4 concept",
    category: "Mac",
    source: "MacRumors",
    readingTimeSeconds: 120,
    relatedSlugs: [],
    sections: [
      {
        id: 11,
        articleId: 5,
        heading: "ไทม์ไลน์",
        body: "เปิดตัวคาดว่าในงาน WWDC 2026 ช่วงเดือนมิถุนายน พร้อมวางจำหน่ายปลายเดือน",
        sortOrder: 1,
        createdAt: "2026-02-23T12:05:00.000Z",
        updatedAt: "2026-02-23T12:05:00.000Z",
      },
      {
        id: 12,
        articleId: 5,
        heading: "สเปกหลักที่คาด",
        body: "- ชิป M4 (CPU ใหม่)\n- MagSafe 4 รองรับชาร์จ 140W\n- Thunderbolt 5 x2\n- RAM เริ่ม 16 GB",
        sortOrder: 2,
        createdAt: "2026-02-23T12:05:00.000Z",
        updatedAt: "2026-02-23T12:05:00.000Z",
      },
    ],
    tags: [
      { id: 17, articleId: 5, value: "MacBook Air", createdAt: "2026-02-23T12:05:00.000Z", updatedAt: "2026-02-23T12:05:00.000Z" },
      { id: 18, articleId: 5, value: "M4", createdAt: "2026-02-23T12:05:00.000Z", updatedAt: "2026-02-23T12:05:00.000Z" },
      { id: 19, articleId: 5, value: "WWDC 2026", createdAt: "2026-02-23T12:05:00.000Z", updatedAt: "2026-02-23T12:05:00.000Z" },
    ],
    createdAt: "2026-02-23T12:00:00.000Z",
    updatedAt: "2026-02-23T12:00:00.000Z",
  },
  {
    id: 6,
    slug: "apple-watch-ultra-3-battery-72h",
    title: "Apple Watch Ultra 3 ลือแบต 72 ชั่วโมง พร้อม Micro LED",
    summary: "รายงานใหม่ระบุ Ultra 3 ใช้ Micro LED และโหมดประหยัดพลังงานได้สูงสุด 72 ชั่วโมง",
    excerpt: "Apple Watch Ultra 3 จะใช้จอ Micro LED สว่างขึ้น ประหยัดไฟขึ้น ทำให้โหมด Low Power ใช้ได้นาน 72 ชม.",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-22T08:00:00.000Z",
    isFeatured: 0,
    metaTitle: "Apple Watch Ultra 3 แบต 72 ชม. | gads✓life",
    metaDescription: "ข่าวลือ Ultra 3 ใช้ Micro LED เพิ่มความสว่างและประหยัดไฟ โหมด Low Power ได้นาน 72 ชม.",
    heroImage: null,
    heroImageAlt: "Apple Watch Ultra 3 concept",
    category: "Apple Watch",
    source: "Bloomberg",
    readingTimeSeconds: 110,
    relatedSlugs: [],
    sections: [
      {
        id: 13,
        articleId: 6,
        heading: "จุดเด่น",
        body: "- จอ Micro LED สว่างขึ้น 50%\n- โหมด Low Power ใช้ได้ 72 ชม.\n- รองรับดำน้ำ 100 ม.",
        sortOrder: 1,
        createdAt: "2026-02-22T08:05:00.000Z",
        updatedAt: "2026-02-22T08:05:00.000Z",
      },
    ],
    tags: [
      { id: 20, articleId: 6, value: "Apple Watch", createdAt: "2026-02-22T08:05:00.000Z", updatedAt: "2026-02-22T08:05:00.000Z" },
      { id: 21, articleId: 6, value: "Micro LED", createdAt: "2026-02-22T08:05:00.000Z", updatedAt: "2026-02-22T08:05:00.000Z" },
    ],
    createdAt: "2026-02-22T08:00:00.000Z",
    updatedAt: "2026-02-22T08:00:00.000Z",
  },
  {
    id: 7,
    slug: "ios-19-3-apple-intelligence-update",
    title: "iOS 19.3 เพิ่ม Writing Tools Academic และ Siri ภาษาไทย (บางส่วน)",
    summary: "อัปเดต iOS 19.3 เพิ่มโหมด Academic ใน Writing Tools แก้บั๊ก Face ID อากาศหนาว และเริ่มรองรับ Siri ภาษาไทย",
    excerpt: "iOS 19.3 ปล่อยแล้ว เพิ่ม Writing Tools โหมด Academic, Fix Face ID อุณหภูมิต่ำ และ Siri ภาษาไทยเบื้องต้น",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-21T07:00:00.000Z",
    isFeatured: 0,
    metaTitle: "iOS 19.3 มีอะไรใหม่ | gads✓life",
    metaDescription: "สรุปฟีเจอร์ใหม่ใน iOS 19.3: Writing Tools Academic, Fix Face ID หนาว, Siri ภาษาไทยเบื้องต้น",
    heroImage: null,
    heroImageAlt: "iOS 19.3 update screen",
    category: "iOS",
    source: "Apple",
    readingTimeSeconds: 130,
    relatedSlugs: [],
    sections: [
      {
        id: 14,
        articleId: 7,
        heading: "สิ่งที่เปลี่ยน",
        body: "- Writing Tools โหมด Academic\n- แก้ Face ID ในอากาศต่ำ 10°C\n- Siri รองรับไทยบางส่วน",
        sortOrder: 1,
        createdAt: "2026-02-21T07:05:00.000Z",
        updatedAt: "2026-02-21T07:05:00.000Z",
      },
    ],
    tags: [
      { id: 22, articleId: 7, value: "iOS 19.3", createdAt: "2026-02-21T07:05:00.000Z", updatedAt: "2026-02-21T07:05:00.000Z" },
      { id: 23, articleId: 7, value: "Apple Intelligence", createdAt: "2026-02-21T07:05:00.000Z", updatedAt: "2026-02-21T07:05:00.000Z" },
    ],
    createdAt: "2026-02-21T07:00:00.000Z",
    updatedAt: "2026-02-21T07:00:00.000Z",
  },
  {
    id: 8,
    slug: "airpods-pro-3-fda-hearing-aid-approval",
    title: "AirPods Pro 3 ได้รับการรับรอง FDA เป็น hearing aid",
    summary: "AirPods Pro 3 ผ่าน FDA เป็นเครื่องช่วยฟัง OTC รุ่นแรกจากบริษัทเทค พร้อม ANC ดีขึ้น 40%",
    excerpt: "AirPods Pro 3 ถูกจัดเป็นอุปกรณ์ช่วยฟังอย่างเป็นทางการ ANC ดีขึ้น 40% แบต 8 ชม. (ANC on)",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-20T15:00:00.000Z",
    isFeatured: 0,
    metaTitle: "AirPods Pro 3 ผ่าน FDA เป็น hearing aid | gads✓life",
    metaDescription: "AirPods Pro 3 ผ่าน FDA เป็น OTC hearing aid ANC ดีขึ้น 40% Conversation Awareness ฉลาดขึ้น",
    heroImage: null,
    heroImageAlt: "AirPods Pro 3 case",
    category: "AirPods",
    source: "TechCrunch",
    readingTimeSeconds: 100,
    relatedSlugs: [],
    sections: [
      {
        id: 15,
        articleId: 8,
        heading: "ทำไมสำคัญ",
        body: "- เป็น consumer device แรกที่ได้ FDA hearing aid\n- ANC รุ่นใหม่ลดเสียงได้ดีขึ้น 40%",
        sortOrder: 1,
        createdAt: "2026-02-20T15:05:00.000Z",
        updatedAt: "2026-02-20T15:05:00.000Z",
      },
    ],
    tags: [
      { id: 24, articleId: 8, value: "AirPods Pro 3", createdAt: "2026-02-20T15:05:00.000Z", updatedAt: "2026-02-20T15:05:00.000Z" },
      { id: 25, articleId: 8, value: "FDA", createdAt: "2026-02-20T15:05:00.000Z", updatedAt: "2026-02-20T15:05:00.000Z" },
    ],
    createdAt: "2026-02-20T15:00:00.000Z",
    updatedAt: "2026-02-20T15:00:00.000Z",
  },
  {
    id: 9,
    slug: "ipad-pro-m4-ultra-2026",
    title: "iPad Pro ปลายปีอาจใช้ชิป M4 Ultra เป็นครั้งแรก",
    summary: "Ming-Chi Kuo ระบุ iPad Pro ปี 2026 อาจใช้ชิป M4 Ultra CPU 32c GPU 80c พร้อม RAM เริ่ม 32 GB",
    excerpt: "iPad Pro รุ่นใหม่ลือใช้ M4 Ultra เทียบ Mac Pro เน้น AI on-device และจอ OLED 13.3 นิ้ว",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-19T09:00:00.000Z",
    isFeatured: 0,
    metaTitle: "iPad Pro M4 Ultra คาดมาในปลายปี 2026 | gads✓life",
    metaDescription: "ข่าวลือ iPad Pro ใช้ M4 Ultra, จอ OLED 13.3 นิ้ว, RAM 32 GB เริ่มต้น, รองรับ Apple Pencil 4",
    heroImage: null,
    heroImageAlt: "iPad Pro M4 Ultra render",
    category: "iPad",
    source: "Ming-Chi Kuo",
    readingTimeSeconds: 150,
    relatedSlugs: [],
    sections: [
      {
        id: 16,
        articleId: 9,
        heading: "สเปกที่คาด",
        body: "- M4 Ultra CPU 32c GPU 80c\n- RAM เริ่ม 32 GB\n- จอ OLED 13.3 นิ้ว",
        sortOrder: 1,
        createdAt: "2026-02-19T09:05:00.000Z",
        updatedAt: "2026-02-19T09:05:00.000Z",
      },
    ],
    tags: [
      { id: 26, articleId: 9, value: "iPad Pro", createdAt: "2026-02-19T09:05:00.000Z", updatedAt: "2026-02-19T09:05:00.000Z" },
      { id: 27, articleId: 9, value: "M4 Ultra", createdAt: "2026-02-19T09:05:00.000Z", updatedAt: "2026-02-19T09:05:00.000Z" },
    ],
    createdAt: "2026-02-19T09:00:00.000Z",
    updatedAt: "2026-02-19T09:00:00.000Z",
  },
  {
    id: 10,
    slug: "apple-vision-pro-price-cut-rumor",
    title: "ลือ Apple Vision Pro อาจปรับลดราคาในรุ่นถัดไป",
    summary: "นักวิเคราะห์คาด Apple อาจลดราคา Vision Pro รุ่นใหม่เพื่อต่อสู้คู่แข่ง AR/VR",
    excerpt: "มีรายงานว่า Vision Pro รุ่นถัดไปอาจราคาลดลง 20-25% จากรุ่นแรก เพื่อลดอุปสรรคการเข้าถึงตลาด",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-18T06:00:00.000Z",
    isFeatured: 0,
    metaTitle: "Vision Pro รุ่นใหม่อาจถูกลง | gads✓life",
    metaDescription: "ข่าวลือ Vision Pro รุ่นถัดไปอาจลดราคา 20-25% เพื่อดันยอดขาย และปรับสเปกบางส่วน",
    heroImage: null,
    heroImageAlt: "Apple Vision Pro render",
    category: "Vision Pro",
    source: "Bloomberg",
    readingTimeSeconds: 95,
    relatedSlugs: [],
    sections: [
      {
        id: 17,
        articleId: 10,
        heading: "ราคาที่คาด",
        body: "ลดลง 20-25% จากรุ่นแรก พร้อมปรับสเปกกล้องและแบตเตอรีเล็กน้อย",
        sortOrder: 1,
        createdAt: "2026-02-18T06:05:00.000Z",
        updatedAt: "2026-02-18T06:05:00.000Z",
      },
    ],
    tags: [
      { id: 28, articleId: 10, value: "Vision Pro", createdAt: "2026-02-18T06:05:00.000Z", updatedAt: "2026-02-18T06:05:00.000Z" },
      { id: 29, articleId: 10, value: "Price Cut", createdAt: "2026-02-18T06:05:00.000Z", updatedAt: "2026-02-18T06:05:00.000Z" },
    ],
    createdAt: "2026-02-18T06:00:00.000Z",
    updatedAt: "2026-02-18T06:00:00.000Z",
  },
  {
    id: 11,
    slug: "apple-intelligence-on-device-roadmap",
    title: "แผน Apple Intelligence เตรียมย้ายประมวลผลขึ้นอุปกรณ์มากขึ้นใน iOS 20",
    summary: "เอกสารภายในเผย Apple จะเพิ่มสัดส่วน on-device processing สำหรับ Apple Intelligence ใน iOS 20 เพื่อลด latency",
    excerpt: "Apple ตั้งเป้า iOS 20 ให้ Apple Intelligence ทำงานบนเครื่องมากขึ้น ลดพึ่งพาเซิร์ฟเวอร์ เพิ่มความเป็นส่วนตัว",
    type: "ANALYSIS",
    status: "PUBLISHED",
    publishedAt: "2026-02-17T13:00:00.000Z",
    isFeatured: 0,
    metaTitle: "Apple Intelligence จะ on-device มากขึ้นใน iOS 20 | gads✓life",
    metaDescription: "วิเคราะห์แผน Apple Intelligence ย้ายการประมวลผลมา on-device ใน iOS 20 ลด latency เพิ่ม privacy",
    heroImage: null,
    heroImageAlt: "Apple Intelligence illustration",
    category: "Apple Intelligence",
    source: "The Information",
    readingTimeSeconds: 180,
    relatedSlugs: [],
    sections: [
      {
        id: 18,
        articleId: 11,
        heading: "ประเด็นสำคัญ",
        body: "- ลดการพึ่งพาเซิร์ฟเวอร์\n- เพิ่มการใช้ Neural Engine รุ่นใหม่\n- เน้นความเป็นส่วนตัว",
        sortOrder: 1,
        createdAt: "2026-02-17T13:05:00.000Z",
        updatedAt: "2026-02-17T13:05:00.000Z",
      },
    ],
    tags: [
      { id: 30, articleId: 11, value: "Apple Intelligence", createdAt: "2026-02-17T13:05:00.000Z", updatedAt: "2026-02-17T13:05:00.000Z" },
      { id: 31, articleId: 11, value: "On-device AI", createdAt: "2026-02-17T13:05:00.000Z", updatedAt: "2026-02-17T13:05:00.000Z" },
    ],
    createdAt: "2026-02-17T13:00:00.000Z",
    updatedAt: "2026-02-17T13:00:00.000Z",
  },
  {
    id: 12,
    slug: "homepod-3-uwb-rumor",
    title: "HomePod 3 อาจมาพร้อม UWB รองรับตำแหน่งแม่นยำขึ้น",
    summary: "ข่าวลือชี้ HomePod 3 จะใส่ชิป UWB รุ่นใหม่ รองรับการค้นหาตำแหน่งและ Handoff แม่นยำกว่าเดิม",
    excerpt: "HomePod รุ่นใหม่อาจเพิ่ม UWB สำหรับจับตำแหน่งอุปกรณ์ Apple ในห้อง และปรับลำโพงให้เสียงกว้างขึ้น",
    type: "RUMOR" as NewsType,
    status: "PUBLISHED",
    publishedAt: "2026-02-16T11:00:00.000Z",
    isFeatured: 0,
    metaTitle: "ลือ HomePod 3 ใส่ UWB | gads✓life",
    metaDescription: "ข่าวลือ HomePod 3 จะมี UWB รองรับ Handoff แม่นยำขึ้น และเสียงกว้างขึ้น",
    heroImage: null,
    heroImageAlt: "HomePod 3 rumor render",
    category: "HomePod",
    source: "9to5Mac",
    readingTimeSeconds: 90,
    relatedSlugs: [],
    sections: [
      {
        id: 19,
        articleId: 12,
        heading: "ฟีเจอร์ที่คาด",
        body: "- ชิป UWB รุ่นใหม่\n- ปรับเสียงให้กระจายกว้างขึ้น\n- รองรับ Matter อัปเดต",
        sortOrder: 1,
        createdAt: "2026-02-16T11:05:00.000Z",
        updatedAt: "2026-02-16T11:05:00.000Z",
      },
    ],
    tags: [
      { id: 32, articleId: 12, value: "HomePod 3", createdAt: "2026-02-16T11:05:00.000Z", updatedAt: "2026-02-16T11:05:00.000Z" },
      { id: 33, articleId: 12, value: "UWB", createdAt: "2026-02-16T11:05:00.000Z", updatedAt: "2026-02-16T11:05:00.000Z" },
    ],
    createdAt: "2026-02-16T11:00:00.000Z",
    updatedAt: "2026-02-16T11:00:00.000Z",
  },
];
