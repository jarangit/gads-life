import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'info' | 'warning';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-brand-light text-brand-dark',
    info: 'bg-brand-light text-brand-dark',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
