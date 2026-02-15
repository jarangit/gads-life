'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Card } from '@/components/ui';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';

interface ProductCardProps {
  rank: number;
  name: string;
  badge?: string;
  reason: string;
  pros?: string[];
  cons?: string[];
  bestFor?: string;
  whoShouldSkip?: string;
  isHighlight?: boolean;
  imageUrl?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  rank,
  name,
  badge,
  reason,
  pros = [],
  cons = [],
  bestFor,
  whoShouldSkip,
  isHighlight = false,
  imageUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card variant={isHighlight ? 'highlight' : 'default'} className="mb-4">
      <div className="flex items-start gap-4 mb-4">
        {/* Product Image */}
        {imageUrl && (
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 96px, 128px"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-bold text-gray-400">#{rank}</span>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          </div>
          {badge && <Badge variant="success">{badge}</Badge>}
          <p className="text-gray-700 mt-2">{reason}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 mb-4 border-t pt-4">
          {pros.length > 0 && (
            <div>
              <h4 className="font-semibold text-brand-dark mb-2 flex items-center gap-1"><FiCheck /> ข้อดี</h4>
              <ul className="space-y-1">
                {pros.map((pro, idx) => (
                  <li key={idx} className="text-sm text-gray-700">• {pro}</li>
                ))}
              </ul>
            </div>
          )}

          {cons.length > 0 && (
            <div>
              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1"><FiX /> ข้อเสีย</h4>
              <ul className="space-y-1">
                {cons.map((con, idx) => (
                  <li key={idx} className="text-sm text-gray-700">• {con}</li>
                ))}
              </ul>
            </div>
          )}

          {bestFor && (
            <div>
              <h4 className="font-semibold text-brand-dark mb-2">เหมาะกับ</h4>
              <p className="text-sm text-gray-700">{bestFor}</p>
            </div>
          )}

          {whoShouldSkip && (
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">ใครไม่ควรซื้อ</h4>
              <p className="text-sm text-gray-700">{whoShouldSkip}</p>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'ซ่อนรายละเอียด' : 'ดูรายละเอียด'}
        </Button>
        <Button variant="primary" size="sm" className="flex items-center gap-1">
          ดูราคาล่าสุด <FiArrowRight />
        </Button>
      </div>
    </Card>
  );
};
