'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, ChevronDown } from 'lucide-react';

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface ProductDetailProps {
  images: ProductImage[];
  name: string;
  price: number;
  description: string;
  reference: string;
}

export function ProductDetail({
  images,
  name,
  price,
  description,
  reference,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="flex bg-[#F8F6F4] flex-col md:flex-row">
          {/* Thumbnail strip */}
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:mr-4 mb-4 md:mb-0">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative w-20 h-20 border-2 cursor-pointer ${
                  selectedImage.id === image.id
                    ? 'border-[#00b8d4]'
                    : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative h-[500px]">
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Product info */}
        <div className="flex text-[#111928] flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-2xl font-semibold mb-6">{price.toFixed(2)}€</p>
            <p className="text-gray-600 mb-8 whitespace-pre-line">
              {description}
            </p>
            <p className="text-sm text-gray-500 mb-8">REF: {reference}</p>
          </div>

          <div className="flex space-x-4 mb-6">
            <div className="flex-1 flex items-center border rounded-lg">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button className="flex-1 bg-[#00b8d4] text-white py-2 rounded-lg hover:bg-[#00a0bc]">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Description Column */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600 whitespace-pre-line">
            Notre appareil à raclette traditionnel avec demi-roue est parfait
            pour vos soirées conviviales. Équipé d'un système de chauffe
            horizontal réglable en hauteur, il permet une cuisson uniforme et
            personnalisée. Sa puissance de 900W et son alimentation en 220V
            garantissent une performance optimale pour une expérience
            gastronomique authentique.
          </p>
        </div>

        {/* Accordion Column */}
        <div className="border-t pt-6">
          {/* Details Accordion */}
          <div className="mb-4">
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="text-xl font-semibold">Détails techniques</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  isDetailsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isDetailsOpen && (
              <div className="py-4 text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Puissance: 900W</li>
                  <li>Voltage: 220V</li>
                  <li>Hauteur réglable</li>
                  <li>Système de chauffe horizontal</li>
                  <li>Compatible demi-roue de fromage</li>
                </ul>
              </div>
            )}
          </div>

          {/* Shipping Accordion */}
          <div>
            <button
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="text-xl font-semibold">Livraison</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  isShippingOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isShippingOpen && (
              <div className="py-4 text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Livraison gratuite à partir de 100€</li>
                  <li>Délai de livraison: 2-3 jours ouvrés</li>
                  <li>Zone de livraison: France métropolitaine</li>
                  <li>Service de suivi en ligne</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
