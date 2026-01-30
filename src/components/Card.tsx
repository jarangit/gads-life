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
    highlight: 'bg-[#e6ffe6] border-2 border-[#05db04]',
  };

  return (
    <div className={`rounded-lg p-6 shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
