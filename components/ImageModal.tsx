'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { FaHeart, FaComment, FaBookmark, FaShare } from 'react-icons/fa';
import ReactDOM from 'react-dom';

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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Delay closing to allow animation to finish
  }, [onClose]);

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMultiple) return;
    
    const swipeThreshold = 50; // Minimum distance to register as a swipe
    if (touchStart - touchEnd > swipeThreshold) {
      // Swipe left - go to next image
      if (onNextImage) onNextImage();
    } else if (touchEnd - touchStart > swipeThreshold) {
      // Swipe right - go to previous image
      if (onPrevImage) onPrevImage();
    }
  };

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

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50"
      style={{
        backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 300ms'
      }}
    >
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Force the modal to be centered regardless of parent scaling */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none' 
        }}
      >
        <div
          className={`max-w-5xl w-[95%] mx-auto max-h-[90vh] rounded-lg overflow-hidden z-60 flex flex-col md:flex-row transition-all duration-300 bg-black`}
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1)' : 'scale(0.95)',
            pointerEvents: 'auto'
          }}
        >
          {/* Image container with touch events */}
          <div 
            className="w-full md:w-2/3 relative bg-black flex-shrink-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              aspectRatio: '1/1',
              maxHeight: '90vh'
            }}
          >
            <div className="h-full w-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority
              />

              {/* Navigation arrows - only visible on non-mobile */}
              {isMultiple && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onPrevImage) onPrevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-colors shadow-lg z-20 hidden md:block"
                    aria-label="Previous image"
                  >
                    <span className="text-xl font-bold">←</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNextImage) onNextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-colors shadow-lg z-20 hidden md:block"
                    aria-label="Next image"
                  >
                    <span className="text-xl font-bold">→</span>
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

          {/* Info sidebar */}
          <div className="w-full md:w-1/3 flex flex-col relative overflow-hidden bg-black">
            {/* Background blur using the same image */}
            <div className="absolute inset-0">
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover blur-xl opacity-30"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>

            <div className="p-4 border-b border-gray-700 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden">
                <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" />
              </div>
              <span className="font-semibold text-white">Parishka Gupta</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 relative z-10">
              <div className="flex items-start gap-3 mb-4">
                {/* <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                  <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" />
                </div> */}
                <div>
                  {/* <span className="font-semibold text-white">Parishka Gupta</span> */}
                  <span className="ml-2 text-sm text-gray-200">Beautiful shot from my recent trip. #photography #{image.category}</span>
                </div>
              </div>

              {/* <div className="text-xs text-gray-300 mt-3">2 HOURS AGO</div> */}
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
      </div>

      <button
        className="fixed top-6 right-6 text-white text-4xl font-light hover:text-gray-300 z-60"
        onClick={handleClose}
        style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 300ms' }}
      >
        ×
      </button>
    </div>,
    document.body
  );
}