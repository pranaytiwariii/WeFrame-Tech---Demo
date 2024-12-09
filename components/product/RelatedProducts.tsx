'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

const relatedProducts = [
  {
    id: 1,
    name: 'Table ronde 150cm',
    description:
      'Table ronde pliante en polyéthylène haute densité, idéale pour vos réceptions',
    price: 25.0,
    image: '',
    category: 'ART DE LA TABLE',
  },
  {
    id: 2,
    name: 'Table ronde 180cm',
    description:
      'Grande table ronde avec surface anti-taches et pieds renforcés',
    price: 30.0,
    image: '',
    category: 'ART DE LA TABLE',
  },
  {
    id: 3,
    name: 'Table ronde 200cm',
    description:
      'Table de réception professionnelle avec mécanisme de pliage sécurisé',
    price: 35.0,
    image: '',
    category: 'ART DE LA TABLE',
  },
];

export function RelatedProducts() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

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
        <h2 className="text-2xl font-bold">
          Ces produits pourraient vous intéresser
        </h2>
        <a href="#" className="text-[#00b8d4] hover:underline">
          VOIR TOUTE LA COLLECTION
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative group">
              <div className="relative h-[300px] w-full bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/demoProduct.png"
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                {product.description}
              </p>
              <p className="text-[#00b8d4] font-bold mt-2">
                {product.price.toFixed(2)}€
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
