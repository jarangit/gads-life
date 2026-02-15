export interface IHomeResponse {
  categories: Category[];
  topPicks: LastReview[];
  lastReview: LastReview[];
  topBrands: TopBrand[];
}

export interface Category {
  id: string;
  slug: string;
  nameTh: string;
  nameEn: null | string;
  description: null | string;
  heroImage: null;
  isActive: number;
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface LastReview {
  id: string;
  categoryId: null | string;
  brandId: null | string;
  name: string;
  subtitle: string;
  image: null;
  overallScore: string;
  isRecommended: boolean;
  price: number;
  currency: string;
  priceLabel: string;
  affiliateLink: null;
  lastUpdated: Date;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface TopBrand {
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
