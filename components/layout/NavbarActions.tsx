'use client';

import Link from 'next/link';
import {
  Lightbulb,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
} from 'lucide-react';

export function NavbarActions() {
  return (
    <div className="flex text-[#3B4347] items-center space-x-4 md:space-x-6">
      <Link
        href="/inspirations"
        className="hidden md:flex items-center space-x-1 hover:text-[#00b8d4]"
      >
        <Lightbulb className="h-5 w-5" />
        <span>Inspirations</span>
      </Link>

      <div className="hidden md:flex items-center space-x-1">
        <div className="relative">
          <Heart className="h-5 w-5" />
        </div>
        <span>Mes favoris</span>
        <span className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">
          24
        </span>
      </div>

      <Link
        href="/cart"
        className="text-white bg-[#00b8d4] px-4 py-2 rounded-lg flex items-center space-x-2"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="hidden md:inline">Panier</span>
      </Link>

      <div className="hidden md:flex items-center space-x-2">
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="h-5 w-5" />
        </div>
        <span>FR</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}
