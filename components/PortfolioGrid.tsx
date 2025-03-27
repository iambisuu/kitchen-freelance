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
    displaySrc: '/split3/1.png',
  },
  {
    id: 2,
    isMultiple: true,
    images: [{ src: 'https://images.unsplash.com/photo-1741851374666-1bc849a293c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
         alt: 'Portfolio image 2' },{
            src:"https://images.unsplash.com/photo-1741559935512-3b018321e35f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
         }],
    category: 'portrait',
    displaySrc: '/split3/2.png',
  },
  {
    id: 3,
    isMultiple: true,
    images: [
      { src: 'https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 3' },
      { src: 'https://images.unsplash.com/photo-1741920852881-5284c70305bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 4' },
    ],
    category: 'city',
    displaySrc: '/split3/3.png',
  },
  {
    id: 4,
    isMultiple: true,
    images: [{ src: 'https://plus.unsplash.com/premium_photo-1741194731808-bc78113545ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 4' },{
        src: 'https://plus.unsplash.com/premium_photo-1738772657819-8f58f03017b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'
    }],
    category: 'landscape',
    displaySrc: '/split3/4.png',
  },
  {
    id: 5,
    isMultiple: true,
    images: [{ src: '/portfolio/image5.jpg', alt: 'Portfolio image 5' }],
    category: 'portrait',
    displaySrc: '/split3/5.png',
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
    displaySrc: '/split3/6.png',
  },
  {
    id: 7,
    isMultiple: true,
    images: [{ src: '/portfolio/image7.jpg', alt: 'Portfolio image 7' }],
    category: 'plants',
    displaySrc: '/split3/7.png',
  },
  {
    id: 8,
    isMultiple: false,
    images: [{ src: '/portfolio/image8.jpg', alt: 'Portfolio image 8' }],
    category: 'nyc',
    displaySrc: '/split3/8.png',
  },
  {
    id: 9,
    isMultiple: false,
    images: [{ src: '/portfolio/image9.jpg', alt: 'Portfolio image 9' }],
    category: 'chicago',
    displaySrc: '/split3/9.png',
  },
  {
    id: 10,
    isMultiple: true,
    images: [
      { src: '/portfolio/image10.jpg', alt: 'Portfolio image 10' },
      { src: '/portfolio/image11.jpg', alt: 'Portfolio image 11' },
    ],
    category: 'landscape',
    displaySrc: '/split3/10.png',
  },
  {
    id: 11,
    isMultiple: false,
    images: [{ src: '/portfolio/image11.jpg', alt: 'Portfolio image 11' }],
    category: 'portrait',
    displaySrc: '/split3/11.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/12.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/13.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/14.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/15.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/16.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/17.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/18.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/19.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/20.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/21.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/22.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/23.png',
  },
  {
    id: 12,
    isMultiple: false,
    images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
    category: 'city',
    displaySrc: '/split3/24.png',
  }
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
<div className="w-[95%]">
  <div className="grid grid-cols-1 ml-4 max-sm:ml-12 sm:grid-cols-2 md:grid-cols-4 gap-y-[1px] gap-x-0.5">
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

