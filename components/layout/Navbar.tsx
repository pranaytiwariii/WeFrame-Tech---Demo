'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from './SearchBar';
import { NavbarActions } from './NavbarActions';

const categories = [
  'MOBILIER',
  'NAPPAGE',
  'MATÉRIEL DE SALLE',
  'CUISINE',
  'BARBECUE',
  'TENTE',
  'CHAUFFAGE',
  'PODIUM - PISTE DE DANSE',
  'SON ET LUMIÈRE',
  'PACKS',
  'CONSOMMABLES',
];

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-32 h-12">
                <Image
                  src="/logo.png"
                  alt="WeFrameTech Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <SearchBar />
          <NavbarActions />
          <MobileMenu categories={categories} />
        </div>

        {/* Categories Row - Hidden on mobile */}
        <div className="hidden text-xs text-[#3B4347] md:flex justify-center text-center items-center space-x-2 py-2 overflow-x-auto scrollbar-hide">
          <p className="text-[#0093D0]">ART DE LA TABLE</p>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="whitespace-nowrap hover:text-[#00b8d4]"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
