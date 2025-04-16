import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function CustomCursor({ containerRef }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      
      // Update position for rendering
      setPosition({ x, y });
      
      // Check if mouse is over a modal element
      const isOverModal = !!e.target && 
        (e.target as Element).closest('.fixed.inset-0[style*="background-color"]') !== null;
      
      if (isOverModal) {
        // Show normal cursor over modal
        setVisible(false);
        document.body.style.cursor = 'auto'; 
        return;
      }

      // Check if the element under cursor has isMultiple=true
      const targetElement = e.target as Element;
      const portfolioItem = targetElement.closest('[data-is-multiple="true"]');
      
      if (portfolioItem) {
        // Show custom cursor only for multiple items
        setVisible(true);
        document.body.style.cursor = 'none';
        
        // Apply cursor:none to the specific multiple item and its children
        portfolioItem.querySelectorAll('*').forEach(el => {
          (el as HTMLElement).style.cursor = 'none';
        });
        (portfolioItem as HTMLElement).style.cursor = 'none';
      } else {
        // For non-multiple items or outside the container, use default cursor
        setVisible(false);
        document.body.style.cursor = 'auto';
        
        if (container) {
          container.style.cursor = 'auto';
          // Reset cursor for all elements
          const allElements = container.querySelectorAll('*');
          allElements.forEach(el => {
            (el as HTMLElement).style.cursor = 'auto';
          });
        }
      }
    };
    
    // Handle mouse entering/leaving the document
    const handleMouseLeave = () => {
      setVisible(false);
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
      
      if (container) {
        container.style.cursor = 'auto';
        const children = container.children;
        for (let i = 0; i < children.length; i++) {
          (children[i] as HTMLElement).style.cursor = 'auto';
        }
      }
    };
  }, [containerRef]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[99999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Image
        src="/cursorCircle.jpeg"
        alt="Custom Cursor"
        width={60}
        height={60}
        className="rounded-full"
        priority
      />
    </div>
  );
}