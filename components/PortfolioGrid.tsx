'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { PortfolioItem, portfolioItems } from '@/utils/portfolioItems';

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePrevImage = () => {
    if (selectedItem && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (selectedItem) {
      // Loop back to the last image
      setSelectedImageIndex(selectedItem.images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedItem && selectedImageIndex < selectedItem.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else if (selectedItem) {
      // Loop back to the first image
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className="w-[95%] max-sm:ml-[4px]">
      <div className="grid grid-cols-4 ml-4 gap-y-[1px] gap-x-[1vh] sm:gap-x-1 max-sm:mx-auto ">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="aspect-square relative cursor-pointer group overflow-hidden"
            style={{ height: 'calc(25vw - 15px)', maxHeight: '18rem' }}
            onClick={() => handleImageClick(item)}
          >
            <Image
              src={item.displaySrc}
              alt={item.images[0].alt || 'Default alt text'}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-30">
            </div>
          </div>
        ))}
      </div>
      
      {selectedItem && (
        <ImageModal 
          image={{
            id: selectedItem.id,
            src: selectedItem.images[selectedImageIndex].src,
            alt: selectedItem.images[selectedImageIndex].alt,
            category: selectedItem.category
          }}
          onClose={handleCloseModal}
          isMultiple={selectedItem.isMultiple}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
          currentIndex={selectedImageIndex}
          totalImages={selectedItem.images.length}
        />
      )}
    </div>
  );
}