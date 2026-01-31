'use client';

import React, { useState } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';
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
  isHighlight = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card variant={isHighlight ? 'highlight' : 'default'} className="mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-bold text-gray-400">#{rank}</span>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          </div>
          {badge && <Badge variant="success">{badge}</Badge>}
        </div>
      </div>

      <p className="text-gray-700 mb-4">{reason}</p>

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
