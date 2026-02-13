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
import type { ICategoryItemVm } from '@/types/models/category';

interface CategoryCardProps {
  category: ICategoryItemVm;
}

// Icon mapping based on category slug
const iconMap: Record<string, React.ReactNode> = {
  laptop: <HiOutlineDesktopComputer className="text-gray-700 text-3xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-gray-700 text-3xl" />,
  audio: <HiOutlineMusicNote className="text-gray-700 text-3xl" />,
  wearable: <BsSmartwatch className="text-gray-700 text-3xl" />,
  home: <HiOutlineHome className="text-gray-700 text-3xl" />,
  'home-gadgets': <HiOutlineHome className="text-gray-700 text-3xl" />,
  desk: <HiOutlineOfficeBuilding className="text-gray-700 text-3xl" />,
  'desk-work': <HiOutlineOfficeBuilding className="text-gray-700 text-3xl" />,
  charging: <HiOutlineLightningBolt className="text-gray-700 text-3xl" />,
  'charging-power': <HiOutlineLightningBolt className="text-gray-700 text-3xl" />,
  health: <HiOutlineHeart className="text-gray-700 text-3xl" />,
  'health-lifestyle': <HiOutlineHeart className="text-gray-700 text-3xl" />,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`} className="block">
      <div 
        className="bg-white rounded-[2rem] p-6 min-h-[200px] relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          {/* Icon */}
          <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
            {iconMap[category.slug] || <HiOutlineDesktopComputer className="text-gray-700 text-3xl" />}
          </div>
          
          {/* Arrow */}
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <FiArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {category.nameTh || category.nameEn}
          </h3>
          {category.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {category.description}
            </p>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-6 right-6 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
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
