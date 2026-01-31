export interface ProductRating {
  subCategory: string;
  score: number; // 1-5
}

export interface KeyPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Weakness {
  title: string;
  description: string;
}

export interface BeforeAfterPoint {
  text: string;
  highlight?: string;
  detail?: string;
}

export interface ProCon {
  title: string;
  description: string;
}

export interface ProductData {
  // Basic Info
  id: string;
  subCategory: string;
  subCategoryLabel: string;
  name: string;
  subtitle: string;
  image: string;
  
  // Scores
  overallScore: number;
  isRecommended: boolean;
  ratings: ProductRating[];
  
  // Quick Verdict
  quickVerdict: {
    quote: string;
    description: string;
    tags: string[];
  };
  
  // Key Highlights (จุดเด่น)
  keyHighlights: KeyPoint[];
  
  // Weaknesses (จุดด้อย)
  weaknesses: Weakness[];
  
  // Before Purchase (ก่อนซื้อคิดอะไร)
  beforePurchase: {
    title: string;
    titleEn: string;
    points: string[];
  };
  
  // After Usage (หลังใช้งาน)
  afterUsage: {
    title: string;
    titleEn: string;
    duration: string;
    points: BeforeAfterPoint[];
  };
  
  // Detailed Pros
  detailedPros: ProCon[];
  
  // Detailed Cons
  detailedCons: ProCon[];
  
  // Final Verdict
  finalVerdict: {
    buyIf: string[];
    skipIf: string[];
  };
  
  // Pricing
  pricing: {
    price: number;
    currency: string;
    monthlyPrice?: number;
    priceLabel: string;
  };
  
  // Meta
  lastUpdated: string;
  affiliateLink?: string;
}

export const macbookAirM3: ProductData = {
  // Basic Info
  id: "macbook-air-m3-15",
  subCategory: "LAPTOP",
  subCategoryLabel: "LAPTOP • REVIEWED",
  name: "MacBook Air M3",
  subtitle: "15\" • 2024 • Space Gray",
  image: "💻",
  
  // Scores
  overallScore: 9.2,
  isRecommended: true,
  ratings: [
    { subCategory: "Performance", score: 5 },
    { subCategory: "Battery", score: 5 },
    { subCategory: "Display", score: 4 },
    { subCategory: "Value", score: 4 },
  ],
  
  // Quick Verdict
  quickVerdict: {
    quote: "แล็ปท็อปที่ดีที่สุด\nสำหรับคนทั่วไป",
    description: "MacBook Air M3 คือเครื่องที่เราแนะนำให้กับทุกคนที่ต้องการแล็ปท็อปที่ใช้งานได้ทุกอย่าง ไม่ว่าจะทำงาน เรียน หรือใช้งานทั่วไป",
    tags: ["Everyday Use", "Students", "Professionals"],
  },
  
  // Key Highlights (จุดเด่น)
  keyHighlights: [
    {
      icon: "⚡",
      title: "M3 Chip",
      description: "แรงขึ้น 60% จาก M1 ทำงานหนักได้สบาย",
    },
    {
      icon: "🔋",
      title: "18 ชม.",
      description: "แบตอึดทั้งวัน ไม่ต้องพกสายชาร์จ",
    },
    {
      icon: "🪶",
      title: "1.51 kg",
      description: "เบามาก พกพาสะดวกทุกวัน",
    },
    {
      icon: "🤫",
      title: "Fanless",
      description: "ไม่มีพัดลม เงียบสนิท 100%",
    },
  ],
  
  // Weaknesses (จุดด้อย)
  weaknesses: [
    {
      title: "จอไม่ 120Hz",
      description: "ยังคงเป็น 60Hz ขณะที่ Pro ได้ ProMotion แล้ว",
    },
    {
      title: "RAM 8GB พื้นฐาน",
      description: "ถ้าใช้งานหนักควรอัพเป็น 16GB",
    },
    {
      title: "Port แค่ 2 ช่อง",
      description: "USB-C 2 ช่อง + MagSafe อาจไม่พอสำหรับบางคน",
    },
  ],
  
  // Before Purchase
  beforePurchase: {
    title: "ก่อนซื้อคิดอะไร",
    titleEn: "BEFORE PURCHASE",
    points: [
      "กลัวว่า M3 จะร้อนเกินไปเพราะไม่มีพัดลม",
      "ไม่แน่ใจว่า 8GB RAM จะพอใช้งานจริงไหม",
      "จอ 15\" จะใหญ่เกินไปสำหรับพกพาหรือเปล่า",
      "ราคาแพงกว่า Windows ที่สเปกดีกว่า",
    ],
  },
  
  // After Usage
  afterUsage: {
    title: "หลังใช้งาน 3 เดือน",
    titleEn: "AFTER 3 MONTHS",
    duration: "3 เดือน",
    points: [
      {
        highlight: "ไม่ร้อนเลย",
        detail: "ใช้งานทั้งวันก็แค่อุ่นๆ",
        text: "",
      },
      {
        highlight: "8GB พอใช้",
        detail: "สำหรับงานทั่วไป เปิด Chrome 20+ tabs ได้",
        text: "",
      },
      {
        highlight: "15\" กำลังดี",
        detail: "ทำงานสบายตา พกพาได้สบาย",
        text: "",
      },
      {
        highlight: "คุ้มราคา",
        detail: "ประสิทธิภาพ + แบต + build quality ดีมาก",
        text: "",
      },
    ],
  },
  
  // Detailed Pros
  detailedPros: [
    {
      title: "แบตเตอรี่อึดมาก",
      description: "ใช้งานจริง 14-16 ชั่วโมง ชาร์จวันละครั้งก็พอ ไม่ต้องพกสายชาร์จไปทำงาน",
    },
    {
      title: "เปิดเครื่องไว ใช้งานได้ทันที",
      description: "เปิดฝาแล้วใช้งานได้เลย ไม่ต้องรอ boot แบบ Windows",
    },
    {
      title: "Trackpad ดีที่สุดในโลก",
      description: "ลื่น แม่นยำ gesture ใช้งานง่าย ไม่ต้องพก mouse เลย",
    },
    {
      title: "ระบบนิเวศ Apple",
      description: "AirDrop, Handoff, Universal Control ใช้งานร่วมกับ iPhone ได้สะดวกมาก",
    },
  ],
  
  // Detailed Cons
  detailedCons: [
    {
      title: "ไม่เหมาะกับ Gaming",
      description: "เกมบน macOS มีน้อย และ M3 ไม่ได้แรงพอสำหรับ AAA games",
    },
    {
      title: "อัพเกรดไม่ได้",
      description: "RAM และ SSD บัดกรีติด ต้องเลือกสเปกให้ดีตั้งแต่ซื้อ",
    },
    {
      title: "ซ่อมแพง",
      description: "ถ้าเสียนอกประกัน ค่าซ่อมแพงมาก ควรซื้อ AppleCare+",
    },
    {
      title: "Webcam 1080p ธรรมดา",
      description: "คุณภาพใช้ได้ แต่ไม่ได้โดดเด่น ถ้า meeting บ่อยอาจต้องซื้อ webcam เพิ่ม",
    },
  ],
  
  // Final Verdict
  finalVerdict: {
    buyIf: [
      "ต้องการแล็ปท็อปที่ใช้งานได้ทุกวัน",
      "ให้ความสำคัญกับ battery life",
      "ต้องการเครื่องเงียบ ไม่มีเสียงพัดลม",
      "ใช้งานร่วมกับ iPhone/iPad",
      "ต้องการ resale value ดี",
    ],
    skipIf: [
      "ต้องการเล่นเกม AAA",
      "ใช้โปรแกรมเฉพาะที่มีแค่บน Windows",
      "ต้องการ RAM/SSD มากๆ แต่งบจำกัด",
      "ต้องการ external GPU",
    ],
  },
  
  // Pricing
  pricing: {
    price: 44900,
    currency: "THB",
    monthlyPrice: 1870,
    priceLabel: "ราคาเริ่มต้น",
  },
  
  // Meta
  lastUpdated: "มกราคม 2026",
  affiliateLink: "#",
};
