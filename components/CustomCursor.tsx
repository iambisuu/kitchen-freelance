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

      // Original container logic
      if (!containerRef.current) {
        setVisible(false);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is inside the container
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        // Show custom cursor
        setVisible(true);
        document.body.style.cursor = 'none';
        
        if (containerRef.current) {
          containerRef.current.style.cursor = 'none';
          // Apply cursor:none to direct children only
          const children = containerRef.current.children;
          for (let i = 0; i < children.length; i++) {
            (children[i] as HTMLElement).style.cursor = 'none';
          }
        }
      } else {
        // Hide custom cursor
        setVisible(false);
        document.body.style.cursor = 'auto';
        
        if (containerRef.current) {
          containerRef.current.style.cursor = 'auto';
          // Reset cursor for direct children
          const children = containerRef.current.children;
          for (let i = 0; i < children.length; i++) {
            (children[i] as HTMLElement).style.cursor = 'auto';
          }
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
      document.addEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
      
      if (containerRef.current) {
        containerRef.current.style.cursor = 'auto';
        const children = containerRef.current.children;
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