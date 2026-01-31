import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    highlight: 'bg-brand-light border-2 border-brand',
  };

  return (
    <div className={`rounded-lg p-6 shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
