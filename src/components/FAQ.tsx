'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-gray-500 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FAQProps {
  items: FAQItemProps[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => (
        <FAQItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
