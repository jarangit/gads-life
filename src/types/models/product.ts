export interface IProductItemVm {
  id: string;
  name: string;
  subtitle: string;
  image: null;
  overallScore: number;
  isRecommended: boolean;
  price: number;
  currency: string;
  priceLabel: string;
  affiliateLink: null;
  lastUpdated: Date;
  status: string;
  categoryId: string;
  brandId: string;
  category: Category;
  brand: Brand;
  ratings: Rating[];
  createdAt: Date;
  updatedAt: Date;
  sellPrice?: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: null;
  description: null;
  logoUrl: null;
  ogImageUrl: null;
  metaTitle: null;
  metaDescription: null;
  canonicalUrl: null;
  isIndexable: boolean;
  isFollowable: boolean;
  schemaJsonLd: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  slug: string;
  nameTh: string;
  nameEn: null;
  description: null;
  heroImage: null;
  isActive: number;
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Rating {
  id: number;
  productId: string;
  subCategory: string;
  score: number;
}
