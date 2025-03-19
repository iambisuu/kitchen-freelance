// components/PortfolioGrid.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

// Sample portfolio items with multiple images in some cells
const portfolioItems = [
  {
    id: 1,
    isMultiple: true,
    images: [
      { src: 'https://images.unsplash.com/photo-1741851373794-ab6b44b367c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 1' },
      { src: 'https://images.unsplash.com/photo-1724963843259-3b0727c53b0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 2' },
      { src: '/portfolio/image3.jpg', alt: 'Portfolio image 3' },
    ],
    category: 'landscape',
    displaySrc: 'https://images.unsplash.com/photo-1741851373794-ab6b44b367c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    isMultiple: true,
    images: [{ src: 'https://images.unsplash.com/photo-1741851374666-1bc849a293c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
         alt: 'Portfolio image 2' },{
            src:"https://images.unsplash.com/photo-1741559935512-3b018321e35f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
         }],
    category: 'portrait',
    displaySrc: 'https://images.unsplash.com/photo-1741851374666-1bc849a293c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    isMultiple: true,
    images: [
      { src: 'https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 3' },
      { src: 'https://images.unsplash.com/photo-1741920852881-5284c70305bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 4' },
    ],
    category: 'city',
    displaySrc: 'https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    isMultiple: true,
    images: [{ src: 'https://plus.unsplash.com/premium_photo-1741194731808-bc78113545ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 4' },{
        src: 'https://plus.unsplash.com/premium_photo-1738772657819-8f58f03017b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'
    }],
    category: 'landscape',
    displaySrc: 'https://plus.unsplash.com/premium_photo-1741194731808-bc78113545ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    isMultiple: true,
    images: [{ src: '/portfolio/image5.jpg', alt: 'Portfolio image 5' }],
    category: 'portrait',
    displaySrc: 'https://plus.unsplash.com/premium_photo-1734656325511-be5d5ca931fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    isMultiple: true,
    images: [
      { src: '/portfolio/image6.jpg', alt: 'Portfolio image 6' },
      { src: '/portfolio/image7.jpg', alt: 'Portfolio image 7' },
      { src: '/portfolio/image8.jpg', alt: 'Portfolio image 8' },
    ],
    category: 'city',
    displaySrc: 'https://images.unsplash.com/photo-1725980457213-e718a2b7bb5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    isMultiple: true,
    images: [{ src: '/portfolio/image7.jpg', alt: 'Portfolio image 7' }],
    category: 'plants',
    displaySrc: 'https://images.unsplash.com/photo-1724963843259-3b0727c53b0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    isMultiple: false,
    images: [{ src: '/portfolio/image8.jpg', alt: 'Portfolio image 8' }],
    category: 'nyc',
    displaySrc: 'https://images.unsplash.com/photo-1740896552447-96707a46adce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    isMultiple: false,
    images: [{ src: '/portfolio/image9.jpg', alt: 'Portfolio image 9' }],
    category: 'chicago',
    displaySrc: 'https://images.unsplash.com/photo-1741230713152-244939ffbd75?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    isMultiple: true,
    images: [
      { src: '/portfolio/image10.jpg', alt: 'Portfolio image 10' },
      { src: '/portfolio/image11.jpg', alt: 'Portfolio image 11' },
    ],
    category: 'landscape',
    displaySrc: '/portfolio/image10.jpg',
  },
  {
    id: 11,
    isMultiple: false,
    images: [{ src: '/portfolio/image11.jpg', alt: 'Portfolio image 11' }],
    category: 'portrait',
    displaySrc: '/portfolio/image11.jpg',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/portfolio/image12.jpg',
  },
];

export default function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (item: any) => {
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
<div className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-0.5">
    {portfolioItems.map((item) => (
      <div 
        key={item.id} 
        className="aspect-square relative cursor-pointer group overflow-hidden h-72"
        onClick={() => handleImageClick(item)}
      >
        <Image
          src={item.displaySrc}
          alt={item.images[0].alt || 'Default alt text'}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Multiple images indicator */}
        {item.isMultiple && (
          <div className="absolute top-2 right-2 bg-white rounded-md p-1 z-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V4C21 3.45 20.8 2.979 20.4 2.587C20.008 2.195 19.542 2 19 2H8C7.458 2 6.992 2.195 6.6 2.587C6.2 2.979 6 3.45 6 4V16C6 16.55 6.2 17.021 6.6 17.413C6.992 17.805 7.458 18 8 18H19C19.542 18 20.008 17.805 20.4 17.413C20.8 17.021 21 16.55 21 16ZM9.5 10.5L11 13L13.5 9.5L17 14H10L9.5 10.5ZM5 6H3V18C3 18.55 3.2 19.021 3.6 19.413C3.992 19.805 4.458 20 5 20H17V18H5V6Z" fill="currentColor" />
            </svg>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
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
