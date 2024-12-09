'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Table ronde 150cm',
    price: 25.0,
    image: '/demoProduct.png',
    category: 'ART DE LA TABLE',
  },
  {
    id: 2,
    name: 'Table ronde 180cm',
    price: 30.0,
    image:
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=500&h=500&fit=crop',
    category: 'ART DE LA TABLE',
  },
  {
    id: 3,
    name: 'Table ronde 200cm',
    price: 35.0,
    image:
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500&h=500&fit=crop',
    category: 'ART DE LA TABLE',
  },
  {
    id: 4,
    name: 'Table ronde 220cm',
    price: 40.0,
    image: '',
    category: 'ART DE LA TABLE',
  },
  {
    id: 5,
    name: 'Table ronde 240cm',
    price: 45.0,
    image: '',
    category: 'ART DE LA TABLE',
  },
];

export function SimilarProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Articles similaires</h2>
        <a href="#" className="text-[#393939] hover:underline">
          VOIR TOUTE LA COLLECTION
        </a>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#00b8d4] p-2 rounded-lg shadow-lg hover:bg-[#00a0bc] transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#00b8d4] p-2 rounded-lg shadow-lg hover:bg-[#00a0bc] transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Products Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sampleProducts.map((product) => (
            <div key={product.id} className="flex-none w-[300px]">
              <div className="relative group bg-[#F8F6F4]">
                <div className="relative h-[300px] w-[300px] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/demoProduct.png"
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10"
                  >
                    <Heart
                      className={`h-6 w-6 ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm">
                    {product.category}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-[#00b8d4] font-bold mt-1">
                  {product.price.toFixed(2)}€
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
