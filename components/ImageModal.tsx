// components/ImageModal.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { FaHeart, FaComment, FaBookmark, FaShare } from 'react-icons/fa';

interface ImageModalProps {
  image: {
    id: number;
    src: string;
    alt: string;
    category: string;
  };
  onClose: () => void;
  isMultiple?: boolean;
  onPrevImage?: () => void;
  onNextImage?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

export default function ImageModal({ 
  image, 
  onClose, 
  isMultiple = false,
  onPrevImage,
  onNextImage,
  currentIndex = 0,
  totalImages = 1
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Delay closing to allow animation to finish
  }, [onClose]);
  
  useEffect(() => {
    // Small delay to trigger the transition
    setTimeout(() => setIsOpen(true), 10);
    
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscPress);
      document.body.style.overflow = 'auto';
    };
  }, [handleClose]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'bg-opacity-80' : 'bg-opacity-0'}`}>
      <div className="absolute inset-0" onClick={handleClose}></div>
      
      <div className={`max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden z-10 flex flex-col md:flex-row transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="w-full md:w-2/3 relative bg-black">
          <div className="aspect-square relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
            
            {/* Navigation arrows */}
            {isMultiple && (
              <>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (onPrevImage) onPrevImage(); 
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (onNextImage) onNextImage(); 
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                  {Array.from({ length: totalImages }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col relative overflow-hidden">
          {/* Background blur using the same image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover blur-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="p-4 border-b border-gray-200 flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden">
              <Image src="/profile-placeholder.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <span className="font-semibold text-white">jordan</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 relative z-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                <Image src="/profile-placeholder.jpg" alt="Profile" fill className="object-cover" />
              </div>
              <div>
                <span className="font-semibold text-white">jordan</span>
                <span className="ml-2 text-sm text-gray-200">Beautiful {image.category} shot from my recent trip. #photography #{image.category}</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-300 mt-3">2 HOURS AGO</div>
          </div>
          
          <div className="p-4 border-t border-gray-700 relative z-10">
            <div className="flex justify-between mb-3">
              <div className="flex gap-5">
                <FaHeart className="text-gray-200 cursor-pointer hover:text-red-500 transition-colors" size={22} />
                <FaComment className="text-gray-200 cursor-pointer hover:text-blue-500 transition-colors" size={22} />
                <FaShare className="text-gray-200 cursor-pointer hover:text-green-500 transition-colors" size={22} />
              </div>
              <FaBookmark className="text-gray-200 cursor-pointer hover:text-yellow-500 transition-colors" size={22} />
            </div>
            <div className="font-semibold text-white">245 likes</div>
          </div>
        </div>
      </div>
      
      <button 
        className={`absolute top-6 right-6 text-white text-4xl font-light transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} hover:text-gray-300`}
        onClick={handleClose}
      >
        ×
      </button>
    </div>
  );
}