import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Disclosure</h3>
            <p className="text-sm text-gray-600">
              เราใช้ลิงก์ affiliate อย่างโปร่งใส 
              และไม่มีอันดับสปอนเซอร์
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Methodology</h3>
            <p className="text-sm text-gray-600">
              คัดเลือกจากการใช้งานจริง 
              ไม่ใช่แค่สเปกอย่างเดียว
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <p className="text-sm text-gray-600">
              © 2026 gadslife. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
