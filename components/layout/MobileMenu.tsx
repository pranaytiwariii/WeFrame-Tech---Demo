'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface MobileMenuProps {
  categories: string[];
}

export function MobileMenu({ categories }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-[#00b8d4]"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="px-4 py-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-[#00b8d4]"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}