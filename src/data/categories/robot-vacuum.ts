// Types
export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustPoint {
  text: string;
}

export interface SelectionCriteria {
  title: string;
  description: string;
}

export interface SafeChoiceProduct {
  badge: string;
  name: string;
  subtitle: string;
  reasons: string[];
  bestFor: string;
  whoShouldSkip: string;
}

export interface RankedProduct {
  rank: number;
  name: string;
  badge: string;
  reason: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  whoShouldSkip: string;
  isHighlight?: boolean;
}

export interface CompareOption {
  name: string;
  description: string;
}

export interface ObjectionItem {
  title: string;
  description: string;
}

export interface CategoryPageData {
  // Hero
  hero: {
    title: string;
    subtitle: string;
    trustPoints: TrustPoint[];
    ctaText: string;
  };

  // Trust Framing
  trustFraming: string;

  // Selection Criteria
  selectionCriteria: {
    title: string;
    items: SelectionCriteria[];
  };

  // Safe Choice / Editor Pick
  safeChoice: SafeChoiceProduct;

  // Ranked Products
  rankedProducts: {
    title: string;
    products: RankedProduct[];
  };

  // Compare Helper
  compareHelper: {
    title: string;
    options: CompareOption[];
    hint: string;
  };

  // Objections
  objections: {
    title: string;
    items: ObjectionItem[];
  };

  // Final Recommendation
  finalRecommendation: {
    title: string;
    subtitle: string;
    recommendation: string;
    ctaText: string;
  };

  // FAQ
  faq: {
    title: string;
    items: FAQItem[];
  };

  // Meta
  lastUpdated: string;
}

// Robot Vacuum Category Data
export const robotVacuumCategoryData: CategoryPageData = {
  // Hero
  hero: {
    title: "Top 5 Robot Vacuums ที่คุ้มที่สุดในปี 2026",
    subtitle: "เราคัดมาแล้วจากการใช้งานจริง\nเพื่อให้คุณเลือกได้ โดยไม่ต้องคิดเยอะ",
    trustPoints: [
      { text: "อัปเดตล่าสุด ม.ค. 2026" },
      { text: "ไม่มีอันดับสปอนเซอร์" },
      { text: "มีลิงก์ affiliate (โปร่งใส)" },
    ],
    ctaText: "↓ ดูตัวเลือกที่ดีที่สุด",
  },

  // Trust Framing
  trustFraming: "เราไม่ได้จัดอันดับจากสเปกอย่างเดียว\nแต่ดูจากการใช้งานจริงในบ้านทั่วไป",

  // Selection Criteria
  selectionCriteria: {
    title: "เราเลือก Top 5 จากอะไรบ้าง",
    items: [
      {
        title: "ทำความสะอาดได้ดีจริง",
        description: "ทดสอบกับฝุ่น ผม และเศษอาหารจริง",
      },
      {
        title: "ใช้งานง่ายในชีวิตประจำวัน",
        description: "ไม่ต้องจูนเยอะ ใช้งานง่ายสำหรับทุกคน",
      },
      {
        title: "ปัญหาระยะยาวที่ผู้ใช้เจอ",
        description: "ดูรีวิวจากผู้ใช้จริง 6-12 เดือน",
      },
      {
        title: "ความคุ้มค่าเมื่อเทียบราคา",
        description: "ไม่แพงเกินไป คุ้มค่ากับฟีเจอร์ที่ได้",
      },
    ],
  },

  // Safe Choice / Editor Pick
  safeChoice: {
    badge: "✓ ตัวเลือกปลอดภัย",
    name: "Roborock S7",
    subtitle: "ดีที่สุดโดยรวม",
    reasons: [
      "ปัญหาน้อยที่สุดในระยะยาว",
      "ใช้ได้กับบ้านส่วนใหญ่",
      "ไม่ต้องจูนเยอะ",
    ],
    bestFor: "บ้าน/คอนโดขนาดเล็ก–กลาง ที่ต้องการหุ่นยนต์ที่ใช้งานง่าย",
    whoShouldSkip: "ไม่เหมาะถ้ามีพรมหนามาก หรือสัตว์เลี้ยงขนเยอะ",
  },

  // Ranked Products
  rankedProducts: {
    title: "ตัวเลือกทั้งหมด (Top 5)",
    products: [
      {
        rank: 1,
        name: "Roborock S7",
        badge: "Best Overall",
        reason: "หุ่นยนต์ดูดฝุ่นที่สมดุลที่สุด เหมาะกับบ้านส่วนใหญ่",
        pros: [
          "ดูดฝุ่นได้ดีทั้งพื้นแข็งและพรมบาง",
          "แบตเตอรี่ใช้งานได้นาน 2-3 ชั่วโมง",
          "ระบบ navigation ไม่ค่อยหลงทาง",
        ],
        cons: [
          "ราคาสูงกว่ารุ่นเริ่มต้น",
          "เสียงพอมีเล็กน้อยขณะถูพื้น",
        ],
        bestFor: "คนที่ต้องการหุ่นยนต์ที่ครบเครื่อง ไม่อยากเจอปัญหามาก",
        whoShouldSkip: "คนที่มีพรมหนา หรือต้องการฟีเจอร์ล้ำๆ",
        isHighlight: true,
      },
      {
        rank: 2,
        name: "Eufy RoboVac 11S",
        badge: "Best Value",
        reason: "ราคาประหยัด ทำงานได้ดี เหมาะสำหรับคนงบน้อย",
        pros: [
          "ราคาไม่แพง คุ้มค่ามาก",
          "เสียงเงียบกว่ารุ่นอื่น",
          "บางกว่า เข้าใต้เฟอร์นิเจอร์ได้ดี",
        ],
        cons: [
          "ไม่มี smart mapping",
          "แบตเตอรี่ใช้งานได้สั้นกว่า",
        ],
        bestFor: "คนที่มีพื้นที่ไม่ซับซ้อน งบจำกัด",
        whoShouldSkip: "คนที่ต้องการ app control หรือ mapping",
      },
      {
        rank: 3,
        name: "iRobot Roomba j7+",
        badge: "Best for Pet Owners",
        reason: "เหมาะกับคนเลี้ยงสัตว์ หลีกเลี่ยงอุปสรรคได้ดี",
        pros: [
          "หลีกเลี่ยงขี้สัตว์และสายไฟได้",
          "ถังขยะเติมเองอัตโนมัติ",
          "ดูดขนสัตว์ได้ดีมาก",
        ],
        cons: [
          "ราคาแพงที่สุดในลิสต์",
          "ตัวเครื่องค่อนข้างใหญ่",
        ],
        bestFor: "คนเลี้ยงสัตว์ ที่ต้องการความสะดวกสูงสุด",
        whoShouldSkip: "คนที่ไม่ได้เลี้ยงสัตว์ หรืองบจำกัด",
      },
      {
        rank: 4,
        name: "Xiaomi Mi Robot Vacuum",
        badge: "Best Smart Features",
        reason: "ฟีเจอร์เยอะที่สุด ราคาไม่แพงเกินไป",
        pros: [
          "มี mapping และ app control",
          "ราคาถูกกว่าคู่แข่งที่มีฟีเจอร์คล้ายกัน",
          "แบตเตอรี่ใช้งานได้นาน",
        ],
        cons: [
          "อะไหล่หายากในไทย",
          "การ support ไม่ดีเท่าแบรนด์ใหญ่",
        ],
        bestFor: "คนที่ชอบเทคโนโลยี และไม่กลัวแก้ปัญหาเอง",
        whoShouldSkip: "คนที่ต้องการ support ดีๆ หรือหาอะไหล่ง่าย",
      },
      {
        rank: 5,
        name: "Shark IQ Robot",
        badge: "Best for Large Homes",
        reason: "เหมาะกับบ้านใหญ่ มีถังขยะเติมเองอัตโนมัติ",
        pros: [
          "ถังขยะใหญ่ และเติมเองอัตโนมัติ",
          "แรงดูดสูง เหมาะกับพื้นที่กว้าง",
          "มี mapping และวางแผนเส้นทางได้",
        ],
        cons: [
          "ตัวเครื่องค่อนข้างใหญ่และหนัก",
          "เสียงค่อนข้างดัง",
        ],
        bestFor: "บ้านขนาดใหญ่ ที่ต้องการทำความสะอาดบ่อยๆ",
        whoShouldSkip: "คอนโดขนาดเล็ก หรือคนที่รบกวนเรื่องเสียง",
      },
    ],
  },

  // Compare Helper
  compareHelper: {
    title: "Roborock S7 กับ Eufy RoboVac 11S เลือกอะไรดี?",
    options: [
      {
        name: "เลือก Roborock S7 ถ้าคุณ...",
        description: "อยากได้ความเสถียร ใช้งานง่าย และมี smart mapping",
      },
      {
        name: "เลือก Eufy RoboVac 11S ถ้าคุณ...",
        description: "มีงบจำกัด ไม่จำเป็นต้องมี app control",
      },
    ],
    hint: "ถ้าลังเล → Roborock S7 พลาดน้อยกว่า",
  },

  // Objections
  objections: {
    title: "สิ่งที่ควรรู้ก่อนตัดสินใจ",
    items: [
      {
        title: "เหตุผลที่คนคืนรุ่นนี้บ่อยที่สุด",
        description: "ส่วนใหญ่คืนเพราะคาดหวังว่าจะดูดได้สะอาด 100% เหมือนดูดเอง แต่ความจริงคือหุ่นยนต์ช่วยลดงานประจำวันได้ประมาณ 70-80%",
      },
      {
        title: "รุ่นนี้ไม่เหมาะถ้าคุณ...",
        description: "มีพรมหนาทั่วบ้าน, บ้านมีบันไดหลายชั้น, หรือคาดหวังว่าจะไม่ต้องดูดเองเลยเป็นเดือน",
      },
      {
        title: "ถ้าเรื่องนี้สำคัญกับคุณ ควรข้ามรุ่นนี้",
        description: "ถ้าคุณไม่ชอบเสียงเครื่องใช้ไฟฟ้าเลย, ต้องการหุ่นยนต์ที่ถูพื้นได้ด้วย, หรือต้องการอะไหล่หาซื้อง่ายในห้างทั่วไป",
      },
    ],
  },

  // Final Recommendation
  finalRecommendation: {
    title: "สรุปคำแนะนำของเรา",
    subtitle: "ถ้าคุณอยากได้ตัวเลือกที่\nใช้งานง่าย คุ้มค่า และพลาดยาก",
    recommendation: "Roborock S7 คือรุ่นที่เราเลือก ถ้าเป็นเงินของเราเอง",
    ctaText: "เช็กราคาล่าสุด →",
  },

  // FAQ
  faq: {
    title: "คำถามที่พบบ่อย",
    items: [
      {
        question: "รุ่นนี้เสียงดังไหม",
        answer: "ดังประมาณ 60-65 เดซิเบล ซึ่งเสียงไม่รบกวนมากในบ้านทั่วไป เหมาะกับการใช้งานตอนกลางวัน",
      },
      {
        question: "ต้องดูแลรักษายากไหม",
        answer: "ต้องทำความสะอาดถังขยะทุก 2-3 วัน และแปรงทุกสัปดาห์ ไม่ยุ่งยากมาก ใช้เวลาประมาณ 5-10 นาที",
      },
      {
        question: "ใช้ได้กับคอนโดขนาดเล็กไหม",
        answer: "ใช้ได้ดีมาก เหมาะกับพื้นที่ 30-80 ตารางเมตร สามารถทำความสะอาดได้ทั่วถึงโดยไม่ติดขัด",
      },
    ],
  },

  // Meta
  lastUpdated: "มกราคม 2026",
};
