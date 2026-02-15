import React from 'react';
import { LinkCard } from '@/components/ui';
import { getCategoryIcon } from '@/components/ui';
import type { ICategoryItemVm } from '@/types/models/category';

interface CategoryCardProps {
  category: ICategoryItemVm;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <LinkCard
      href={`/category/${category.slug}`}
      icon={getCategoryIcon(category.slug, "text-3xl")}
      title={category.nameTh || category.nameEn}
      description={category.description || undefined}
      radius="rounded-[2rem]"
      minHeight="min-h-[200px]"
    />
  );
};

// Grid component for displaying multiple categories
interface CategoryGridProps {
  categories: ICategoryItemVm[];
  title?: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  title,
}) => {
  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
