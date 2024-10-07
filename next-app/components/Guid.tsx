'use client';

import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };
  const [hoveredButton, setHoveredButton] = useState(null);
    
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };


    
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-90 h-screen m-4">
        {/* First Image Div with Button */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden group">
          <Image
            src="/porcelain2.jpg"
            alt="Ceramic 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300 ease-in-out group-hover:bg-teal-200 group-hover:bg-opacity-40">
            <button
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigate('/ProductsDetails')}
              className="px-8 py-4 bg-teal-500 text-white text-lg rounded-md hover:bg-green-400 transition duration-300"
            >
              {hoveredButton === 1 ? 'Show Product' : 'Outdoor Floors'}
            </button>
          </div>
        </div>
  
        {/* Second Image Div with Button */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden group">
          <Image
            src="/ceramic1.jpg"
            alt="Porcelain 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300 ease-in-out  group-hover:bg-teal-200 group-hover:bg-opacity-40">
            <button
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigate('/PorcelainDetails')}
              className="px-8 py-4 bg-teal-500 text-white text-lg rounded-md hover:bg-green-400 transition duration-300"
            >
              {hoveredButton === 2 ? 'Show Product' : 'Outdoor Walls'}
            </button>
          </div>
        </div>
  
        {/* Third Image Div with Button */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden group">
          <Image
            src="/ceramic2.jpg"
            alt="Ceramic 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300 ease-in-out  group-hover:bg-teal-200 group-hover:bg-opacity-40">
            <button
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigate('/ProductsDetails')}
              className="px-8 py-4 bg-teal-500 text-white text-lg rounded-md hover:bg-green-400 transition duration-300"
            >
              {hoveredButton === 3 ? 'Show Product' : 'Doors'}
            </button>
          </div>
        </div>
  
        {/* Fourth Image Div with Button */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden group">
          <Image
            src="/ceramic3.jpg"
            alt="Porcelain 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-300 ease-in-out  group-hover:bg-teal-200 group-hover:bg-opacity-40">
            <button
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigate('/ProductsDetails')}
              className="px-8 py-4 bg-teal-500 text-white text-lg rounded-md hover:bg-green-400 transition duration-300"
            >
              {hoveredButton === 4 ? 'Show Product' : 'Walls'}
            </button>
          </div>
        </div>
      </div>      );
    }
    
