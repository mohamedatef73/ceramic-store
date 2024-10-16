"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "/porcelain4.jpg",
    "/porcelain3.jpg",
    "/porcelain2.jpg",
    "/porcelain2.jpg",
    "/five.jpg",
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full bg-slate-400">
      {/* Navbar embedded on top of the carousel */}

      {/* Carousel wrapper */}
      <div className="relative h-screen overflow-hidden bg-slate-400 rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transform transition duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 p-2 bg-gray-800/50 rounded-full text-white shadow-lg hover:bg-gray-800 focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 p-2 bg-gray-800/50 rounded-full text-white shadow-lg hover:bg-gray-800 focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-4 flex justify-center items-center w-full">
  <span
    className="h-20 rounded-full w-10 bg-black bg-opacity-40 text-white text-sm flex items-center justify-center cursor-pointer"
    onClick={() => {
      const nextSection = document.getElementById("next-section");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <svg
      className="animate-bounce w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  </span>
</div>
    </div>
  );
};

export default Carousel;
