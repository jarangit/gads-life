import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              gads<span className="text-[#05db04]">✓</span>life
            </span>
          </Link>
          <nav>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
