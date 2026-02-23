/* ──────── News Data (token-aligned schema) ──────── */

export type NewsStatus = "PUBLISHED" | "DRAFT";
export type NewsType = "NEWS" | "GUIDE" | "ANALYSIS";

export interface NewsBulletItem {
  itemType: "BULLET" | "CHECK" | "WARNING";
  text: string;
  orderIndex: number;
}

export interface NewsSection {
  type: "TEXT" | "BULLET";
  title?: string | null;
  body?: string | null; // for TEXT
  items?: NewsBulletItem[]; // for BULLET
  orderIndex: number;
}

export interface ProductLink {
  productId: string;
  relationType: "MENTIONED" | "RECOMMENDED" | "RELATED";
  orderIndex: number;
}

export interface NewsTag {
  tagId: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  type: NewsType;
  status: NewsStatus;
  publishedAt: string; // ISO
  readingTimeSeconds: number;
  isFeatured: 0 | 1;
  category: string;
  source: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  heroImage: string | null;
  heroImageAlt: string | null;
  authorId: number;
  sections: NewsSection[];
  productLinks: ProductLink[];
  tags: NewsTag[];
  externalUrl?: string;
  relatedSlugs?: string[];
  image?: string | null;
}

export const mockNews: NewsItem[] = [
  {
    id: "news-007",
    slug: "apple-glasses-2026-not-full-ar",
    title: "Apple Glasses อาจมาในปี 2026 — แต่ไม่ใช่แบบที่คุณจินตนาการไว้",
    summary: "Apple เร่งพัฒนาแว่นอัจฉริยะ เปิดตัวเร็วสุดปี 2026 แต่รุ่นแรกอาจยังไม่ใช่ AR เต็มรูปแบบ",
    excerpt: "Apple อาจเปิดตัวแว่นอัจฉริยะเร็วสุดปี 2026 แต่รุ่นแรกอาจยังไม่มี AR เต็มรูปแบบ",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-23T10:00:00.000Z",
    readingTimeSeconds: 55,
    isFeatured: 1,
    category: "Apple",
    source: "Bloomberg",
    metaTitle: "Apple Glasses อาจมาในปี 2026 — แต่ยังไม่ใช่ AR เต็มรูปแบบ | gads✓life",
    metaDescription:
      "รายงานล่าสุดชี้ว่า Apple เร่งทำแว่นอัจฉริยะ แต่รุ่นแรกอาจคล้าย Meta Ray-Ban และต้องพึ่ง iPhone มากกว่า AR เต็มรูปแบบ",
    canonicalUrl: "/news/apple-glasses-2026-not-full-ar",
    heroImage: null,
    heroImageAlt: "ภาพประกอบ Apple Glasses",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        title: "What Happened",
        body:
          "ข่าวล่าสุดระบุว่า Apple ชะลอแผน Vision รุ่นถัดไป เพื่อโฟกัสไปที่แว่นอัจฉริยะโดยเฉพาะ. อย่างไรก็ตาม รุ่นแรกอาจไม่มีจอแสดงผลบนเลนส์ แต่ทำงานคล้าย Meta Ray-Ban คือมีกล้อง ลำโพง และใช้งานผ่านเสียงร่วมกับ Siri รุ่นใหม่. แว่นจะต้องเชื่อมต่อกับ iPhone และอาจเปิดตัวในช่วงปลายปี 2026 หรือ 2027. ราคาเบื้องต้นคาดว่าอยู่ราว $400–$600.",
        orderIndex: 1,
      },
      {
        type: "TEXT",
        title: "Why It Matters",
        body:
          "ถ้าคุณรอ “AR แบบเห็นภาพลอยตรงหน้า” รุ่นแรกอาจยังไม่ถึงจุดนั้น. แต่ถ้าคุณสนใจผู้ช่วย AI แบบสวมใส่ได้ตลอดวัน นี่อาจเป็นก้าวแรกของ Apple ในตลาดนี้. และถ้าคุณเพิ่งลงทุนกับอุปกรณ์เสริม AR อื่น ๆ คำถามคือ — คุณอยากรอเวอร์ชันที่สองมากกว่าหรือไม่?",
        orderIndex: 2,
      },
      {
        type: "BULLET",
        title: "Should You Care",
        orderIndex: 3,
        items: [
          {
            itemType: "BULLET",
            text: "ถ้าคุณรอ AR เต็มรูปแบบ → พร้อมรอถึงรุ่นที่สองหรือยัง?",
            orderIndex: 1,
          },
          {
            itemType: "BULLET",
            text: "ถ้าใช้ AirPods และ iPhone ทุกวัน → แว่นที่ผสาน AI จะเปลี่ยนวิธีใช้งานไหม?",
            orderIndex: 2,
          },
          {
            itemType: "BULLET",
            text: "ถ้าคุณเพิ่งซื้อ Vision Pro → รู้สึกว่าทิศทางกำลังเปลี่ยนหรือเปล่า?",
            orderIndex: 3,
          },
        ],
      },
    ],
    productLinks: [
      { productId: "apple-glasses", relationType: "MENTIONED", orderIndex: 1 },
      { productId: "apple-vision-pro", relationType: "MENTIONED", orderIndex: 2 },
    ],
    tags: [{ tagId: 10 }, { tagId: 11 }, { tagId: 12 }],
    relatedSlugs: ["apple-iphone-17-air-launch", "ios-19-3-update-apple-intelligence"],
  },
  {
    id: "news-001",
    slug: "apple-iphone-17-air-launch",
    title: "Apple เปิดตัว iPhone 17 Air บางที่สุดในประวัติศาสตร์ Apple",
    summary:
      "iPhone 17 Air หน้าจอ 6.6 นิ้ว บาง 5.5 มม. ชิป A19 กล้องหลัก 48 MP ราคาเริ่มต้น 33,900 บาท",
    excerpt:
      "Apple ประกาศเปิดตัว iPhone 17 Air หน้าจอ 6.6 นิ้ว บางเพียง 5.5 มม. พร้อม chip A19 และกล้องหลัก 48 MP ราคาเริ่มต้นที่ 33,900 บาท",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-22T09:00:00Z",
    readingTimeSeconds: 80,
    isFeatured: 1,
    category: "iPhone",
    source: "9to5Mac",
    metaTitle: "iPhone 17 Air เปิดตัวอย่างเป็นทางการ | gads✓life",
    metaDescription:
      "สรุปสเปก iPhone 17 Air ชิป A19, กล้อง 48 MP, บาง 5.5 มม. ราคาเริ่ม 33,900 บาท",
    canonicalUrl: "/news/apple-iphone-17-air-launch",
    heroImage: null,
    heroImageAlt: "ภาพ iPhone 17 Air",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "Apple ได้เปิดตัว iPhone 17 Air อย่างเป็นทางการในงาน Spring Event 2026 ซึ่งถือเป็นการเปิดตัวที่ทำให้แฟนๆ Apple ทั่วโลกตื่นเต้นอย่างมาก",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "iPhone 17 Air มีความบาง 5.5 มม. และรองรับ Face ID ใต้จอ Dynamic Island รุ่น 3 ที่ตอบสนองเร็วขึ้น 2 เท่า",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "สเปคหลัก: ชิป A19, กล้องหลัก 48 MP f/1.6 พร้อม sensor-shift OIS รุ่นใหม่, กล้องหน้า 24 MP รองรับ 4K ProRes",
      },
      {
        type: "TEXT",
        orderIndex: 4,
        body:
          "แบตเตอรี่ใช้งาน 22 ชั่วโมงบน 5G ใช้เทคโนโลยี stacked battery cell รุ่นใหม่ เพิ่มความหนาแน่นพลังงาน",
      },
      {
        type: "TEXT",
        orderIndex: 5,
        body:
          "ราคาเริ่มต้น 33,900 บาท (128 GB) มี 3 สี: Titanium Silver, Midnight Black, Desert Sand",
      },
    ],
    productLinks: [{ productId: "iphone-17-air", relationType: "MENTIONED", orderIndex: 1 }],
    tags: [{ tagId: 1 }, { tagId: 2 }],
    relatedSlugs: ["ios-19-3-update-apple-intelligence", "airpods-pro-3-fda-hearing-aid"],
  },
  {
    id: "news-002",
    slug: "macbook-air-m4-benchmark-leak",
    title: "MacBook Air M4 ทำ benchmark ดีกว่า M3 ถึง 30% พร้อม RAM เริ่มต้น 16 GB",
    summary:
      "ผลทดสอบชี้ M4 เร็วกว่า M3 ~30% และ Apple เพิ่ม RAM ขั้นต่ำเป็น 16 GB พร้อม MagSafe 4",
    excerpt:
      "ผลทดสอบ Geekbench รั่วไหลออกมาชี้ว่า MacBook Air M4 ทำประสิทธิภาพได้ดีกว่ารุ่นก่อน และ RAM ขั้นต่ำ 16 GB",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-21T14:30:00Z",
    readingTimeSeconds: 70,
    isFeatured: 0,
    category: "Mac",
    source: "MacRumors",
    metaTitle: "MacBook Air M4 แรงขึ้น 30% | gads✓life",
    metaDescription:
      "สรุปข่าวหลุด MacBook Air M4 คะแนน Geekbench สูงกว่า M3 ~30% และ RAM เริ่ม 16 GB",
    canonicalUrl: "/news/macbook-air-m4-benchmark-leak",
    heroImage: null,
    heroImageAlt: "ภาพ MacBook Air M4",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "ผลทดสอบ Geekbench 6 ที่รั่วไหลแสดง Single-Core 3,850 และ Multi-Core 15,200 สูงกว่า M3 ประมาณ 28-32%",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "RAM ขั้นต่ำเพิ่มจาก 8 GB เป็น 16 GB ตอบรับงาน AI และมัลติทาสก์",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "MagSafe 4 รองรับชาร์จ 140W และ Thunderbolt 5 จำนวน 2 พอร์ต พร้อมเปิดตัวคาด WWDC 2026",
      },
    ],
    productLinks: [{ productId: "macbook-air-m4", relationType: "MENTIONED", orderIndex: 1 }],
    tags: [{ tagId: 3 }, { tagId: 4 }],
    relatedSlugs: ["ipad-pro-m4-ultra-chip"],
  },
  {
    id: "news-003",
    slug: "apple-watch-ultra-3-micro-led",
    title: "Apple Watch Ultra 3 มาพร้อม Micro LED display ครั้งแรก",
    summary:
      "Ultra 3 ใช้จอ Micro LED สว่าง 3,000 nits แบต 72 ชม. ชิป S10 รองรับ health AI",
    excerpt:
      "Apple Watch Ultra 3 จะใช้จอ Micro LED ความสว่างสูงสุด 3,000 nits รองรับการดำน้ำ 100 เมตร แบต 72 ชั่วโมง",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-20T11:00:00Z",
    readingTimeSeconds: 65,
    isFeatured: 0,
    category: "Apple Watch",
    source: "Bloomberg",
    metaTitle: "Apple Watch Ultra 3 ใช้ Micro LED | gads✓life",
    metaDescription:
      "จอ Micro LED สว่าง 3,000 nits ประหยัดพลังงานขึ้น พร้อมชิป S10 และ blood glucose monitoring",
    canonicalUrl: "/news/apple-watch-ultra-3-micro-led",
    heroImage: null,
    heroImageAlt: "ภาพ Apple Watch Ultra 3",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "Bloomberg รายงานว่า Ultra 3 จะเป็น Apple Watch รุ่นแรกที่ใช้ Micro LED แทน OLED สว่างสุด 3,000 nits",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "แบตเตอรี่ยืดถึง 72 ชั่วโมงในโหมด Low Power และรองรับการดำน้ำลึก 100 เมตร (EN 13319)",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "ชิป S10 รองรับ on-device health AI พร้อม blood glucose แบบไม่ต้องเจาะเลือด (รุ่น Cellular)",
      },
    ],
    productLinks: [{ productId: "apple-watch-ultra-3", relationType: "MENTIONED", orderIndex: 1 }],
    tags: [{ tagId: 5 }, { tagId: 6 }],
    relatedSlugs: ["apple-iphone-17-air-launch"],
  },
  {
    id: "news-004",
    slug: "ios-19-3-update-apple-intelligence",
    title: "iOS 19.3 update แก้ไขบั๊กสำคัญ พร้อมฟีเจอร์ Apple Intelligence ใหม่",
    summary:
      "iOS 19.3 เพิ่มโหมด Academic ใน Writing Tools แก้บั๊ก Face ID อากาศเย็น และเพิ่ม Siri ภาษาไทย",
    excerpt:
      "iOS 19.3 นำเสนอ Writing Tools โหมด Academic แก้ FaceID ในอุณหภูมิต่ำ เพิ่มภาษาไทยใน Siri",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-19T08:00:00Z",
    readingTimeSeconds: 75,
    isFeatured: 0,
    category: "iOS",
    source: "The Verge",
    metaTitle: "สรุป iOS 19.3 อัปเดตใหญ่ | gads✓life",
    metaDescription:
      "ไฮไลต์ iOS 19.3: Writing Tools โหมด Academic, Fix Face ID อุณหภูมิต่ำ, Siri รองรับไทยบางส่วน",
    canonicalUrl: "/news/ios-19-3-update-apple-intelligence",
    heroImage: null,
    heroImageAlt: "ภาพ iOS 19.3",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "Apple ปล่อย iOS 19.3 (680 MB) สำหรับ iPhone XS ขึ้นไป แนะนำให้อัปเดตโดยเร็ว",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "แก้บั๊ก Face ID เมื่ออุณหภูมิต่ำกว่า 10°C ปัญหา Wi‑Fi drop บน iPhone 16 Pro และ notification เงียบไม่ตั้งใจ",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "Apple Intelligence เพิ่ม Writing Tools โหมด Academic, Image Playground เร็วขึ้น 3 เท่า และ Priority Notifications ฉลาดขึ้น",
      },
      {
        type: "TEXT",
        orderIndex: 4,
        body: "เพิ่มภาษาไทยใน Siri บางส่วน คาดรองรับเต็มรูปแบบใน iOS 20",
      },
    ],
    productLinks: [{ productId: "ios-19-3", relationType: "RELATED", orderIndex: 1 }],
    tags: [{ tagId: 7 }, { tagId: 11 }],
    relatedSlugs: ["apple-iphone-17-air-launch", "airpods-pro-3-fda-hearing-aid"],
  },
  {
    id: "news-005",
    slug: "airpods-pro-3-fda-hearing-aid",
    title: "AirPods Pro 3 มาพร้อมระบบ hearing aid ได้รับการรับรอง FDA",
    summary:
      "AirPods Pro 3 ผ่าน FDA เป็น hearing aid รุ่นแรกจากบริษัทเทค ANC ดีขึ้น 40% แบต 8 ชม.",
    excerpt:
      "AirPods Pro 3 ผ่านการรับรอง FDA เป็นอุปกรณ์ช่วยฟัง ANC ดีขึ้น 40% Conversation Awareness ฉลาดขึ้น",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-18T16:00:00Z",
    readingTimeSeconds: 70,
    isFeatured: 0,
    category: "AirPods",
    source: "TechCrunch",
    metaTitle: "AirPods Pro 3 ผ่าน FDA เป็น hearing aid | gads✓life",
    metaDescription:
      "AirPods Pro 3 ใช้ชิป H3 ANC ดีขึ้น 40% Conversation Awareness เก่งขึ้น แบต 8 ชม. ราคา 9,990 บาท",
    canonicalUrl: "/news/airpods-pro-3-fda-hearing-aid",
    heroImage: null,
    heroImageAlt: "ภาพ AirPods Pro 3",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "AirPods Pro 3 ได้รับการรับรอง FDA เป็น over-the-counter hearing aid บริษัทเทคแรกที่ทำได้",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "ชิป H3 ประมวลผล audio 30 ล้านครั้งต่อวินาที ลด noise ได้ดีขึ้น 40% เทียบ Pro 2",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "Conversation Awareness แยกเสียงคู่สนทนาได้แม้ในที่เสียงดัง ปรับระดับเสียงอัตโนมัติ",
      },
      {
        type: "TEXT",
        orderIndex: 4,
        body: "แบต 8 ชม. (ANC on) หรือ 32 ชม. รวมเคส ชาร์จ USB‑C",
      },
    ],
    productLinks: [{ productId: "airpods-pro-3", relationType: "MENTIONED", orderIndex: 1 }],
    tags: [{ tagId: 8 }, { tagId: 9 }],
    relatedSlugs: ["apple-iphone-17-air-launch", "ios-19-3-update-apple-intelligence"],
  },
  {
    id: "news-006",
    slug: "ipad-pro-m4-ultra-chip",
    title: "iPad Pro M4 Ultra: Apple วางแผนใช้ chip M4 Ultra ใน iPad ครั้งแรก",
    summary:
      "รายงานเผย iPad Pro รุ่นปลายปี 2026 จะใช้ M4 Ultra CPU 32 core GPU 80 core RAM เริ่ม 32 GB",
    excerpt:
      "Apple เตรียมนำ M4 Ultra มาใส่ iPad Pro ปี 2026 ทำให้ประสิทธิภาพใกล้ Mac Pro พร้อมจอ OLED 13.3 นิ้ว",
    type: "NEWS",
    status: "PUBLISHED",
    publishedAt: "2026-02-17T10:00:00Z",
    readingTimeSeconds: 85,
    isFeatured: 0,
    category: "iPad",
    source: "Ming-Chi Kuo",
    metaTitle: "iPad Pro M4 Ultra อาจมาในปลายปี 2026 | gads✓life",
    metaDescription:
      "iPad Pro รุ่นใหม่อาจใช้ M4 Ultra CPU 32c GPU 80c RAM 32 GB จอ OLED 13.3 นิ้ว รองรับ Apple Pencil 4",
    canonicalUrl: "/news/ipad-pro-m4-ultra-chip",
    heroImage: null,
    heroImageAlt: "ภาพ iPad Pro M4 Ultra",
    authorId: 1,
    sections: [
      {
        type: "TEXT",
        orderIndex: 1,
        body:
          "Ming-Chi Kuo ระบุ iPad Pro ปลายปี 2026 จะใช้ชิป M4 Ultra ครั้งแรกใน iPad",
      },
      {
        type: "TEXT",
        orderIndex: 2,
        body:
          "ชิป M4 Ultra: CPU 32 core, GPU 80 core, Neural Engine 32 core เน้น on-device AI ระดับ Mac Pro",
      },
      {
        type: "TEXT",
        orderIndex: 3,
        body:
          "จอ OLED 13.3 นิ้ว 2732x2048 รองรับ Apple Pencil 4 พร้อม haptic feedback ดีขึ้น",
      },
      {
        type: "TEXT",
        orderIndex: 4,
        body: "RAM 32 GB เริ่มต้น storage สูงสุด 4 TB ราคาเริ่มประมาณ 52,900 บาท",
      },
    ],
    productLinks: [{ productId: "ipad-pro-m4-ultra", relationType: "MENTIONED", orderIndex: 1 }],
    tags: [{ tagId: 13 }, { tagId: 14 }],
    relatedSlugs: ["macbook-air-m4-benchmark-leak"],
  },
];
