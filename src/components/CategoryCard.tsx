import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { 
  HiOutlineDesktopComputer, 
  HiOutlineDeviceMobile, 
  HiOutlineMusicNote,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineOfficeBuilding
} from 'react-icons/hi';
import { BsSmartwatch } from 'react-icons/bs';
import type { Category, CategoryStatus } from '@/data/categories/categories-list';

interface CategoryCardProps {
  category: Category;
}

// Icon mapping based on category icon field
const iconMap: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700 text-3xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700 text-3xl" />,
  audio: <HiOutlineMusicNote className="text-gray-700 text-3xl" />,
  wearable: <BsSmartwatch className="text-gray-700 text-3xl" />,
  home: <HiOutlineHome className="text-gray-700 text-3xl" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700 text-3xl" />,
  charging: <HiOutlineLightningBolt className="text-gray-700 text-3xl" />,
  health: <HiOutlineHeart className="text-gray-700 text-3xl" />,
};

// Status badge styles
const statusStyles: Record<CategoryStatus, { bg: string; text: string; label: string }> = {
  active: { bg: 'bg-brand', text: 'text-white', label: '' },
  draft: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'COMING SOON' },
  hidden: { bg: 'bg-gray-200', text: 'text-gray-500', label: 'HIDDEN' },
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const isActive = category.status === 'active';
  const isDraft = category.status === 'draft';
  const isClickable = isActive || isDraft;
  const statusConfig = statusStyles[category.status];

  const cardContent = (
    <div 
      className={`
        bg-white rounded-[2rem] p-6 min-h-[200px] relative group 
        transition-all duration-300
        ${isClickable ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : 'opacity-60'}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Icon */}
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
          {iconMap[category.icon || ''] || <HiOutlineDesktopComputer className="text-gray-700 text-3xl" />}
        </div>
        
        {/* Status Badge or Arrow */}
        {isActive ? (
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <FiArrowUpRight className="w-5 h-5 text-white" />
          </div>
        ) : isDraft ? (
          <span className={`text-xs font-semibold ${statusConfig.bg} ${statusConfig.text} px-3 py-1 rounded-full`}>
            {statusConfig.label}
          </span>
        ) : (
          <span className={`text-xs font-semibold ${statusConfig.bg} ${statusConfig.text} px-3 py-1 rounded-full`}>
            {statusConfig.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {category.title}
        </h3>
        <p className={`text-sm ${isClickable ? 'text-gray-600' : 'text-gray-400'} line-clamp-2`}>
          {category.description}
        </p>
      </div>

      {/* Bottom accent line for clickable cards */}
      {isClickable && (
        <div className={`absolute bottom-0 left-6 right-6 h-1 ${isActive ? 'bg-brand' : 'bg-yellow-400'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link href={`/category/${category.slug}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return <div className="block cursor-default">{cardContent}</div>;
};

// Grid component for displaying multiple categories
interface CategoryGridProps {
  categories: Category[];
  title?: string;
  showDrafts?: boolean;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  title,
  showDrafts = true 
}) => {
  const filteredCategories = showDrafts 
    ? categories.filter(cat => cat.status !== 'hidden')
    : categories.filter(cat => cat.status === 'active');

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
