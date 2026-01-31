import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import type { ProductData } from '@/data/products';

interface ProductListCardProps {
  product: ProductData;
  categorySlug: string;
  subcategorySlug: string;
}

export const ProductListCard: React.FC<ProductListCardProps> = ({
  product,
  categorySlug,
  subcategorySlug,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  return (
    <Link
      href={`/category/${categorySlug}/${subcategorySlug}/${product.id}`}
      className="block group h-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
        {/* Header with Score */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          {/* Recommended Badge */}
          {product.isRecommended && (
            <div className="absolute top-4 left-4">
              <span className="bg-brand text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <FiCheck className="w-3 h-3" /> แนะนำ
              </span>
            </div>
          )}
          
          {/* Arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <FiArrowUpRight className="w-4 h-4 text-white" />
          </div>

          {/* Product Image/Icon */}
          <div className="text-center py-4">
            <span className="text-6xl">{product.image}</span>
          </div>

          {/* Score Badge */}
          <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1.5 rounded-full">
            <span className="text-lg font-bold text-brand">{product.overallScore}</span>
            <span className="text-xs text-gray-400">/5</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Label */}
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {product.subCategoryLabel}
          </span>

          {/* Product Name */}
          <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-brand transition-colors">
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.subtitle}
          </p>

          {/* Quick Verdict */}
          <div className="mt-4 p-3 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-700 font-medium">
              &ldquo;{product.quickVerdict.quote}&rdquo;
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.quickVerdict.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rating Bars */}
          <div className="mt-4 space-y-2">
            {product.ratings.slice(0, 3).map((rating, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{rating.subCategory}</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-4 h-1.5 rounded-full ${
                        i <= rating.score ? 'bg-brand' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ฿{formatPrice(product.pricing.price)}
              </span>
              <span className="text-xs text-gray-400 ml-1">
                {product.pricing.priceLabel}
              </span>
            </div>
            <span className="text-sm text-brand font-medium group-hover:underline">
              ดูรายละเอียด →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Grid component for product listing
interface ProductListGridProps {
  products: ProductData[];
  categorySlug: string;
  subcategorySlug: string;
  title?: string;
}

export const ProductListGrid: React.FC<ProductListGridProps> = ({
  products,
  categorySlug,
  subcategorySlug,
  title,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
      </div>
    );
  }

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {products.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
            categorySlug={categorySlug}
            subcategorySlug={subcategorySlug}
          />
        ))}
      </div>
    </section>
  );
};
