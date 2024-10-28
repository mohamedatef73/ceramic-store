'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../pages/api/CartContext'; // Import your cart context

export default function Home() {
  const router = useRouter();
  const { addToCart } = useCart(); // Access addToCart function from the context

  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  const handleMouseEnter = () => {
    setHoveredButton(null);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Sample product details
  const products = [
    { id: 1, name: 'Outdoor Floors', price: 45, image: '/porcelain2.jpg' },
    { id: 2, name: 'Outdoor Walls', price: 20, image: '/ceramic1.jpg' },
    { id: 3, name: 'Doors', price: 10, image: '/ceramic2.jpg' },
    { id: 4, name: 'Walls', price: 35, image: '/ceramic3.jpg' },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-90 h-screen m-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden group"
        >
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300 ease-in-out group-hover:bg-teal-200 group-hover:bg-opacity-40">
            <button
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigate('/ProductsDetails')}
              className="px-8 py-4 bg-teal-500 text-white text-lg rounded-md hover:bg-green-400 transition duration-300"
            >
              {hoveredButton === product.id ? 'Show Product' : product.name}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <button
              onClick={() =>
                addToCart({
                  id: product.id, name: product.name, price: product.price, image: product.image,
                  quantity: 0
                })
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
