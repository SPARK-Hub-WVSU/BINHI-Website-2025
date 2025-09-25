'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ImageCarousel({ images, alt, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // If no images or only one image, show single image without carousel
  if (!images || images.length === 0) {
    return null;
  }
  
  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          width={750}
          height={422}
          className="relative aspect-video object-center object-cover w-full h-full rounded-lg"
          priority
        />
      </div>
    );
  }
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg aspect-video">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          width={750}
          height={422}
          className="object-center object-cover w-full h-full transition-all duration-300"
          priority={currentIndex === 0}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
        {/* Image Counter */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-primary scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Thumbnail Strip (for desktop) */}
      {images.length <= 6 && (
        <div className="hidden sm:flex justify-center mt-4 space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative w-16 h-12 md:w-20 md:h-15 rounded border-2 transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-primary shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                width={80}
                height={60}
                className="object-cover w-full h-full rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}