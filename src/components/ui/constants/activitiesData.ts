import type { Activity } from "./activities";

/* ─────────────────────────────────────────────
 *  Mock data – upcoming activities / events
 *  covering the full year 2026
 * ───────────────────────────────────────────── */

export const activities: Activity[] = [
  // ── กุมภาพันธ์ 2026 ────────────────────────
  {
    id: "1",
    title: "Live Review: ลำโพง Bluetooth 2026 ตัวไหนเสียงดีสุด?",
    description:
      "รีวิวสดลำโพง Bluetooth รุ่นใหม่ล่าสุด 5 ตัว พร้อมเทียบเสียงแบบ blind test ให้คนดูตัดสินเอง",
    date: "2026-02-21",
    time: "19:00 - 21:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },
  {
    id: "2",
    title: "Workshop: จัดโต๊ะทำงานให้ Pro ด้วยงบหลักพัน",
    description:
      "เวิร์คชอปสอนเลือกอุปกรณ์ setup โต๊ะทำงาน ตั้งแต่จอมอนิเตอร์ คีย์บอร์ด เมาส์ จนถึงไฟ LED ในงบไม่เกิน 5,000 บาท",
    date: "2026-02-28",
    time: "13:00 - 16:00",
    location: "Gads✓Life Studio, ลาดพร้าว",
    category: "Workshop",
  },

  // ── มีนาคม 2026 ────────────────────────────
  {
    id: "3",
    title: "Gadget Expo 2026",
    description:
      "งานแสดงสินค้าเทคโนโลยีและแกดเจ็ตล่าสุด พร้อมทดลองใช้ก่อนใคร รวมแบรนด์ดังกว่า 100 แบรนด์ ทั้ง Samsung, Apple, Sony, JBL และอีกมากมาย",
    date: "2026-03-15",
    time: "10:00 - 20:00",
    location: "สามย่านมิตรทาวน์, กรุงเทพฯ",
    category: "Expo",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Workshop: สอนเลือกหูฟังให้เหมาะกับตัวเอง",
    description:
      "เวิร์คชอปเชิงปฏิบัติการ เรียนรู้วิธีเลือกหูฟังที่เหมาะกับสไตล์การฟังของคุณ ตั้งแต่ Gaming, Music Production ไปจนถึง Casual Listening",
    date: "2026-03-22",
    time: "13:00 - 16:00",
    location: "Gads✓Life Studio, ลาดพร้าว",
    category: "Workshop",
  },

  // ── เมษายน 2026 ────────────────────────────
  {
    id: "5",
    title: "Live Review: รีวิวมือถือรุ่นใหม่ Q2/2026",
    description:
      "รีวิวสดมือถือรุ่นใหม่ล่าสุดจากหลายแบรนด์ พร้อมเปรียบเทียบกล้อง แบตเตอรี่ และประสิทธิภาพแบบจัดเต็ม",
    date: "2026-04-05",
    time: "19:00 - 21:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },
  {
    id: "6",
    title: "Community Meetup: กลุ่มคนรักแกดเจ็ต",
    description:
      "พบปะพูดคุยแลกเปลี่ยนประสบการณ์กับชุมชนคนรักเทคโนโลยี พร้อมกิจกรรมแจกของรางวัลและทดลองแกดเจ็ตใหม่ก่อนใคร",
    date: "2026-04-12",
    time: "14:00 - 17:00",
    location: "The Commons, ทองหล่อ",
    category: "Meetup",
  },
  {
    id: "7",
    title: "Flash Sale: Songkran Tech Deals",
    description:
      "ดีลเทคโนโลยีรับสงกรานต์ ลดราคาสินค้าคัดสรรจาก Gads✓Life ลดสูงสุด 60% เฉพาะสมาชิก",
    date: "2026-04-13",
    time: "00:00 - 23:59",
    location: "gads.life",
    category: "Promotion",
  },

  // ── พฤษภาคม 2026 ───────────────────────────
  {
    id: "8",
    title: "Tech Talk: อนาคตของ AI กับชีวิตประจำวัน",
    description:
      "เสวนาเรื่อง AI ที่จะเปลี่ยนแปลงวิธีที่เราใช้เทคโนโลยี ตั้งแต่ Smart Home, Wearable AI ไปจนถึง AI ในการเลือกซื้อสินค้า",
    date: "2026-05-03",
    time: "18:00 - 20:00",
    location: "True Digital Park, กรุงเทพฯ",
    category: "Talk",
  },
  {
    id: "9",
    title: "Workshop: ถ่ายภาพสินค้าด้วยมือถือแบบโปร",
    description:
      "เรียนรู้เทคนิคถ่ายภาพสินค้าให้สวยด้วยมือถือ เหมาะสำหรับขายออนไลน์ พร้อมสอนแต่งภาพด้วยแอปฟรี",
    date: "2026-05-17",
    time: "10:00 - 14:00",
    location: "Gads✓Life Studio, ลาดพร้าว",
    category: "Workshop",
  },
  {
    id: "10",
    title: "Live Review: Tablet ตัวไหนคุ้มสุด 2026?",
    description:
      "เปรียบเทียบ iPad, Galaxy Tab, Xiaomi Pad และ Huawei MatePad รุ่นใหม่ล่าสุด ใครเหมาะกับใคร?",
    date: "2026-05-24",
    time: "19:00 - 21:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },

  // ── มิถุนายน 2026 ──────────────────────────
  {
    id: "11",
    title: "Smart Home Expo 2026",
    description:
      "งานจัดแสดงนวัตกรรม Smart Home ครบวงจร ตั้งแต่หลอดไฟอัจฉริยะ กล้องวงจรปิด ไปจนถึงหุ่นยนต์ดูดฝุ่น พบดีลพิเศษในงาน",
    date: "2026-06-07",
    time: "10:00 - 20:00",
    location: "ไบเทค บางนา, กรุงเทพฯ",
    category: "Expo",
  },
  {
    id: "12",
    title: "Tech Talk: Cybersecurity สำหรับคนทั่วไป",
    description:
      "รู้จักภัยคุกคามทางไซเบอร์ที่พบบ่อย วิธีป้องกันตัวเองในโลกดิจิทัล ตั้งแต่ Password Manager ไปจนถึง VPN",
    date: "2026-06-14",
    time: "14:00 - 16:00",
    location: "KX Knowledge Xchange, กรุงเทพฯ",
    category: "Talk",
  },
  {
    id: "13",
    title: "Mid-Year Mega Sale",
    description:
      "มหกรรมลดราคากลางปี รวมสินค้าเทคโนโลยีกว่า 500 รายการ ลดสูงสุด 70% พร้อมคูปองส่วนลดพิเศษสำหรับสมาชิก",
    date: "2026-06-25",
    time: "00:00 - 23:59",
    location: "gads.life",
    category: "Promotion",
  },

  // ── กรกฎาคม 2026 ───────────────────────────
  {
    id: "14",
    title: "Workshop: สร้าง Mechanical Keyboard คันแรกของคุณ",
    description:
      "เวิร์คชอปแบบ Hands-on สอนประกอบ Mechanical Keyboard ตั้งแต่เลือกสวิตช์ ลงสาย Lube ไปจนถึง Modding ให้เสียงดี",
    date: "2026-07-04",
    time: "10:00 - 17:00",
    location: "Hubba-to, เอกมัย",
    category: "Workshop",
  },
  {
    id: "15",
    title: "Community Meetup: Photographer × Tech",
    description:
      "พบปะช่างภาพและคนรักเทคโนโลยี แชร์เทคนิคถ่ายรูปด้วยกล้อง Mirrorless และมือถือ พร้อมทดลองเลนส์ใหม่",
    date: "2026-07-12",
    time: "13:00 - 17:00",
    location: "Lumpini Park, กรุงเทพฯ",
    category: "Meetup",
  },
  {
    id: "16",
    title: "Live Review: TWS Earbuds Under ฿2,000 จัดอันดับ!",
    description:
      "รีวิวและจัดอันดับหูฟัง True Wireless ราคาไม่เกิน 2,000 บาท 10 รุ่น ตัวไหนเสียงดี ANC แน่น สมราคา?",
    date: "2026-07-19",
    time: "19:00 - 21:30",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },

  // ── สิงหาคม 2026 ───────────────────────────
  {
    id: "17",
    title: "Gaming Fest 2026",
    description:
      "เทศกาลเกมและอุปกรณ์เกมมิ่ง มาพร้อมรุ่นใหม่จากแบรนด์ชั้นนำ ทั้ง ROG, Razer, SteelSeries แข่งเกมชิงรางวัลรวมกว่า 100,000 บาท",
    date: "2026-08-08",
    time: "10:00 - 21:00",
    location: "Royal Paragon Hall, กรุงเทพฯ",
    category: "Expo",
  },
  {
    id: "18",
    title: "Tech Talk: Cloud Computing เบื้องต้นสำหรับ Non-Dev",
    description:
      "เข้าใจ Cloud Computing แบบไม่ต้องเขียนโค้ด เรียนรู้ว่าทำไมธุรกิจถึงต้องใช้ Cloud และมันเปลี่ยนโลกเราอย่างไร",
    date: "2026-08-15",
    time: "14:00 - 16:00",
    location: "AIS D.C., เซ็นทรัลเวิลด์",
    category: "Talk",
  },
  {
    id: "19",
    title: "Workshop: DIY สาย USB-C Custom ทำเองได้!",
    description:
      "สอนทำสาย USB-C แบบ Custom ด้วยตัวเอง เลือกสี เลือก Connector อยากได้แบบไหนทำได้เลย วัสดุรวมในค่าลงทะเบียน",
    date: "2026-08-23",
    time: "13:00 - 16:00",
    location: "Gads✓Life Studio, ลาดพร้าว",
    category: "Workshop",
  },

  // ── กันยายน 2026 ───────────────────────────
  {
    id: "20",
    title: "Live Review: iPhone 18 Series First Look",
    description:
      "พรีวิวสด iPhone 18 ทุกรุ่นตั้งแต่วันแรกที่ได้เครื่อง เทียบกล้อง ดีไซน์ และฟีเจอร์ใหม่แบบละเอียด",
    date: "2026-09-12",
    time: "19:00 - 22:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },
  {
    id: "21",
    title: "Community Meetup: Apple Ecosystem Fans",
    description:
      "พบปะชาว Apple จัดเต็ม แชร์ Tips & Tricks ใน Ecosystem ตั้งแต่ iPhone, Mac, Watch ไปจนถึง Vision Pro",
    date: "2026-09-20",
    time: "14:00 - 17:00",
    location: "Think Space, สยาม",
    category: "Meetup",
  },
  {
    id: "22",
    title: "Tech Talk: Wearable Tech อนาคตที่สวมใส่ได้",
    description:
      "หัวข้อเจาะลึกเทคโนโลยีสวมใส่ ตั้งแต่ Smart Watch, Smart Ring ไปจนถึง AR Glasses โดยผู้เชี่ยวชาญจากหลายสาขา",
    date: "2026-09-27",
    time: "18:00 - 20:00",
    location: "True Digital Park, กรุงเทพฯ",
    category: "Talk",
  },

  // ── ตุลาคม 2026 ────────────────────────────
  {
    id: "23",
    title: "Workshop: เลือก Laptop 2026 ยังไงไม่ให้พลาด",
    description:
      "สอนวิเคราะห์สเปค เปรียบเทียบชิปเซ็ต ดูจอ ดูแบตเตอรี่ ครบทุกเรื่องที่ต้องรู้ก่อนซื้อ Laptop เครื่องใหม่",
    date: "2026-10-03",
    time: "13:00 - 16:00",
    location: "Gads✓Life Studio, ลาดพร้าว",
    category: "Workshop",
  },
  {
    id: "24",
    title: "10.10 Flash Sale: สุดยอดดีลเทคโนโลยี",
    description:
      "ลดแรงรับ 10.10 สินค้าเทคโนโลยีคัดสรรจากทีม Gads✓Life ลดสูงสุด 75% Flash Deal ทุกชั่วโมง",
    date: "2026-10-10",
    time: "00:00 - 23:59",
    location: "gads.life",
    category: "Promotion",
  },
  {
    id: "25",
    title: "Live Review: Power Bank ตัวไหนชาร์จไวจริง?",
    description:
      "ทดสอบ Power Bank 8 รุ่นยอดนิยม วัดจริงทั้ง Output, ความจุจริง และความร้อนขณะชาร์จ",
    date: "2026-10-18",
    time: "19:00 - 21:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },

  // ── พฤศจิกายน 2026 ─────────────────────────
  {
    id: "26",
    title: "Thailand Tech Conference 2026",
    description:
      "งานประชุมเทคโนโลยีระดับประเทศ รวมวิทยากรจาก Google, Microsoft, AWS และ Startup ไทย หัวข้อครอบคลุม AI, IoT, Web3",
    date: "2026-11-07",
    time: "09:00 - 18:00",
    location: "Queen Sirikit National Convention Center",
    category: "Expo",
  },
  {
    id: "27",
    title: "11.11 Super Tech Sale",
    description:
      "มหกรรมช้อปเทคโนโลยี 11.11 ลดกระหน่ำ Flash Deal ทุก 2 ชั่วโมง พร้อมแจก Voucher สำหรับสมาชิก Gads✓Life",
    date: "2026-11-11",
    time: "00:00 - 23:59",
    location: "gads.life",
    category: "Promotion",
  },
  {
    id: "28",
    title: "Workshop: ทำ Home Lab เซิร์ฟเวอร์ที่บ้านด้วย Mini PC",
    description:
      "สอนติดตั้ง Home Server ด้วย Mini PC ราคาประหยัด ตั้งแต่ NAS, Plex Media Server ไปจนถึง Home Assistant",
    date: "2026-11-15",
    time: "10:00 - 16:00",
    location: "Hubba-to, เอกมัย",
    category: "Workshop",
  },
  {
    id: "29",
    title: "Community Meetup: Android vs iOS ดีเบตมิตรภาพ",
    description:
      "ดีเบตสุดสนุกระหว่างชาว Android และ iOS พร้อมโหวตสดจากคนดู มีของรางวัลแจกทุกรอบ",
    date: "2026-11-22",
    time: "14:00 - 17:00",
    location: "TCDC, เจริญกรุง",
    category: "Meetup",
  },

  // ── ธันวาคม 2026 ───────────────────────────
  {
    id: "30",
    title: "Gads✓Life Year-End Awards 2026",
    description:
      "ประกาศรางวัลสุดยอดสินค้าเทคโนโลยีแห่งปี คัดเลือกจากการใช้งานจริงตลอดปี 2026 โดยทีมงานและชุมชน Gads✓Life",
    date: "2026-12-06",
    time: "18:00 - 21:00",
    location: "Siam Paragon, กรุงเทพฯ",
    category: "Expo",
  },
  {
    id: "31",
    title: "12.12 Final Sale: ดีลส่งท้ายปี",
    description:
      "ดีลสุดท้ายของปี! สินค้าเทคโนโลยีลดราคาพิเศษ เคลียร์สต็อกรับปีใหม่ พร้อม Gift Set สุดพิเศษ",
    date: "2026-12-12",
    time: "00:00 - 23:59",
    location: "gads.life",
    category: "Promotion",
  },
  {
    id: "32",
    title: "Live Review: สรุปแกดเจ็ตที่ดีที่สุดแห่งปี 2026",
    description:
      "รีวิวรวมสุดยอดแกดเจ็ตประจำปี Best of 2026 ครอบคลุมทุกหมวด ตั้งแต่มือถือ หูฟัง แล็ปท็อป ไปจนถึง Smart Home",
    date: "2026-12-20",
    time: "19:00 - 22:00",
    location: "ออนไลน์ (YouTube Live)",
    category: "Live Review",
  },
  {
    id: "33",
    title: "Tech Talk: เทรนด์เทคโนโลยี 2027 ที่ต้องจับตา",
    description:
      "พาส่องเทรนด์เทคโนโลยีที่จะมาแรงในปี 2027 ตั้งแต่ AI Agent, Spatial Computing, ไปจนถึง Quantum Computing สำหรับคนทั่วไป",
    date: "2026-12-27",
    time: "14:00 - 16:00",
    location: "True Digital Park, กรุงเทพฯ",
    category: "Talk",
  },
];
