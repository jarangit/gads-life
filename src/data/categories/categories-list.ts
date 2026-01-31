// Category List Types
export type CategoryStatus = 'active' | 'draft' | 'hidden';

export interface Category {
  id: string;
  type: 'category';
  title: string;
  slug: string;
  description: string;
  order: number;
  status: CategoryStatus;
  icon?: string;
}

export interface CategoriesData {
  categories: Category[];
}

// Categories Data
export const categoriesData: CategoriesData = {
  categories: [
    {
      id: 'laptop',
      type: 'category',
      title: 'Laptop',
      slug: 'laptop',
      description: 'แล็ปท็อปทุกประเภท สำหรับการทำงาน การเรียน และความบันเทิง',
      order: 1,
      status: 'active',
      icon: 'laptop',
    },
    {
      id: 'smartphone',
      type: 'category',
      title: 'Smartphone & Accessories',
      slug: 'smartphone',
      description: 'สมาร์ตโฟนและอุปกรณ์เสริมที่ใช้ในชีวิตประจำวัน',
      order: 2,
      status: 'active',
      icon: 'smartphone',
    },
    {
      id: 'audio',
      type: 'category',
      title: 'Audio Devices',
      slug: 'audio',
      description: 'หูฟัง ลำโพง และอุปกรณ์เสียงสำหรับการใช้งานทั่วไป',
      order: 3,
      status: 'active',
      icon: 'audio',
    },
    {
      id: 'wearable',
      type: 'category',
      title: 'Wearable Gadgets',
      slug: 'wearable',
      description: 'อุปกรณ์สวมใส่อัจฉริยะ เช่น สมาร์ตวอทช์ และฟิตเนสแทร็กเกอร์',
      order: 4,
      status: 'draft',
      icon: 'wearable',
    },
    {
      id: 'home-gadgets',
      type: 'category',
      title: 'Home Gadgets',
      slug: 'home-gadgets',
      description: 'แกดเจ็ตสำหรับใช้ในบ้าน ช่วยให้ชีวิตสะดวกและง่ายขึ้น',
      order: 5,
      status: 'active',
      icon: 'home',
    },
    {
      id: 'desk-work',
      type: 'category',
      title: 'Desk & Work Gadgets',
      slug: 'desk-work',
      description: 'แกดเจ็ตสำหรับโต๊ะทำงาน การทำงาน และการเรียน',
      order: 6,
      status: 'hidden',
      icon: 'desk',
    },
    {
      id: 'charging-power',
      type: 'category',
      title: 'Charging & Power',
      slug: 'charging-power',
      description: 'อุปกรณ์ชาร์จไฟ แบตเตอรี่ และพลังงานพกพา',
      order: 7,
      status: 'active',
      icon: 'charging',
    },
    {
      id: 'health-lifestyle',
      type: 'category',
      title: 'Health & Lifestyle Gadgets',
      slug: 'health-lifestyle',
      description: 'แกดเจ็ตดูแลสุขภาพและไลฟ์สไตล์ในชีวิตประจำวัน',
      order: 8,
      status: 'hidden',
      icon: 'health',
    },
  ],
};

// Helper functions
export const getActiveCategories = (): Category[] => {
  return categoriesData.categories
    .filter((cat) => cat.status === 'active')
    .sort((a, b) => a.order - b.order);
};

export const getDraftCategories = (): Category[] => {
  return categoriesData.categories
    .filter((cat) => cat.status === 'draft')
    .sort((a, b) => a.order - b.order);
};

export const getAllVisibleCategories = (): Category[] => {
  return categoriesData.categories
    .filter((cat) => cat.status !== 'hidden')
    .sort((a, b) => a.order - b.order);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categoriesData.categories.find((cat) => cat.slug === slug);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categoriesData.categories.find((cat) => cat.id === id);
};
