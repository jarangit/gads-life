import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { 
  HiOutlineLightningBolt,
  HiOutlineWifi
} from 'react-icons/hi';
import { BsBatteryFull, BsPlug } from 'react-icons/bs';
import { MdCable, MdOutlineElectricalServices } from 'react-icons/md';
import { IoCarSportOutline } from 'react-icons/io5';
import type { Subcategory, CategoryStatus } from '@/data/categories/categories-list';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categorySlug: string;
}

// Icon mapping based on subcategory icon field
const iconMap: Record<string, React.ReactNode> = {
  'power-bank': <BsBatteryFull className="text-gray-700 text-2xl" />,
  'wall-charger': <BsPlug className="text-gray-700 text-2xl" />,
  'charging-cable': <MdCable className="text-gray-700 text-2xl" />,
  'magsafe-wireless': <HiOutlineWifi className="text-gray-700 text-2xl" />,
  'charging-station': <MdOutlineElectricalServices className="text-gray-700 text-2xl" />,
  'car-charger': <IoCarSportOutline className="text-gray-700 text-2xl" />,
  default: <HiOutlineLightningBolt className="text-gray-700 text-2xl" />,
};

// Status badge styles
const statusStyles: Record<CategoryStatus, { bg: string; text: string; label: string }> = {
  active: { bg: 'bg-brand', text: 'text-white', label: '' },
  draft: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'COMING SOON' },
  hidden: { bg: 'bg-gray-200', text: 'text-gray-500', label: 'HIDDEN' },
};

export const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory, categorySlug }) => {
  const isActive = subcategory.status === 'active';
  const isDraft = subcategory.status === 'draft';
  const isClickable = isActive || isDraft;
  const statusConfig = statusStyles[subcategory.status];

  const cardContent = (
    <div 
      className={`
        bg-white rounded-2xl p-5 h-full min-h-[180px] relative group flex flex-col
        transition-all duration-300 border border-gray-100
        ${isClickable ? 'hover:shadow-lg cursor-pointer hover:border-brand/30' : 'opacity-60'}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Icon */}
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          {iconMap[subcategory.icon || ''] || iconMap.default}
        </div>
        
        {/* Status Badge or Arrow */}
        {isActive ? (
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <FiArrowUpRight className="w-4 h-4 text-white" />
          </div>
        ) : isDraft ? (
          <span className={`text-xs font-semibold ${statusConfig.bg} ${statusConfig.text} px-2 py-1 rounded-full`}>
            {statusConfig.label}
          </span>
        ) : null}
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {subcategory.title}
        </h3>
        <p className={`text-sm ${isClickable ? 'text-gray-500' : 'text-gray-400'} line-clamp-2`}>
          {subcategory.description}
        </p>
      </div>

      {/* Bottom accent line for clickable cards */}
      {isClickable && (
        <div className={`absolute bottom-0 left-4 right-4 h-0.5 ${isActive ? 'bg-brand' : 'bg-yellow-400'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link href={`/category/${categorySlug}/${subcategory.slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return <div className="block cursor-default h-full">{cardContent}</div>;
};

// Grid component for displaying multiple subcategories
interface SubcategoryGridProps {
  subcategories: Subcategory[];
  categorySlug: string;
  title?: string;
}

export const SubcategoryGrid: React.FC<SubcategoryGridProps> = ({ 
  subcategories,
  categorySlug,
  title
}) => {
  if (subcategories.length === 0) {
    return null;
  }

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {subcategories.map((subcategory) => (
          <SubcategoryCard 
            key={subcategory.id} 
            subcategory={subcategory} 
            categorySlug={categorySlug}
          />
        ))}
      </div>
    </section>
  );
};
