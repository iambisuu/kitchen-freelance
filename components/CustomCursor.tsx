import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function CustomCursor({ containerRef }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is inside the container
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        // Set position to center the image on the actual cursor
        setPosition({ x: e.clientX + 10, y: e.clientY + 50});
        setVisible(true);
        
        // Hide the default cursor when inside the container
        document.body.style.cursor = 'none';
        if (containerRef.current) {
          containerRef.current.style.cursor = 'none';
          // Apply cursor:none to all child elements
          const allElements = containerRef.current.querySelectorAll('*');
          allElements.forEach(el => {
            (el as HTMLElement).style.cursor = 'none';
          });
        }
      } else {
        setVisible(false);
        
        // Restore default cursor when outside the container
        document.body.style.cursor = 'auto';
        if (containerRef.current) {
          containerRef.current.style.cursor = 'auto';
          // Restore cursor for all child elements
          const allElements = containerRef.current.querySelectorAll('*');
          allElements.forEach(el => {
            (el as HTMLElement).style.cursor = 'auto';
          });
        }
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      // Restore default cursor when leaving the container
      document.body.style.cursor = 'auto';
      if (containerRef.current) {
        containerRef.current.style.cursor = 'auto';
        // Restore cursor for all child elements
        const allElements = containerRef.current.querySelectorAll('*');
        allElements.forEach(el => {
          (el as HTMLElement).style.cursor = 'auto';
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        containerRef.current.style.cursor = 'auto';
        // Restore cursor for all child elements
        const allElements = containerRef.current.querySelectorAll('*');
        allElements.forEach(el => {
          (el as HTMLElement).style.cursor = 'auto';
        });
      }
    };
  }, [containerRef]);

  if (!visible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)' // Center the cursor image on the actual cursor position
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