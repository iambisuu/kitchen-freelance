// Define interfaces for your portfolio item data structure
export interface PortfolioImage {
    src: string;
    alt: string;
  }
  
 export interface PortfolioItem {
    id: number;
    isMultiple: boolean;
    images: PortfolioImage[];
    category: string;
    displaySrc: string;
  }
  
  // Sample portfolio items with multiple images in some cells
  export const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      isMultiple: false,
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
      images: [  { src: '/inside/2/a.png', alt: 'Portfolio image 8' },
        { src: '/inside/2/b.png', alt: 'Portfolio image 8' }, 
        { src: '/inside/2/c.png', alt: 'Portfolio image 8' },
        { src: '/inside/2/d.png', alt: 'Portfolio image 8' },
   ],
      category: 'portrait',
      displaySrc: '/split3/2.png',
    },
    {
      id: 3,
      isMultiple: false,
      images: [
        { src: 'https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 3' },
        { src: 'https://images.unsplash.com/photo-1741920852881-5284c70305bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D', alt: 'Portfolio image 4' },
      ],
      category: 'city',
      displaySrc: '/split3/3.png',
    },
    {
      id: 4,
      isMultiple: false,
      images: [{ 
        src: 'https://plus.unsplash.com/premium_photo-1741194731808-bc78113545ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D', 
        alt: 'Portfolio image 4' 
      }, {
        src: 'https://plus.unsplash.com/premium_photo-1738772657819-8f58f03017b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portfolio image 4-2'
      }],
      category: 'landscape',
      displaySrc: '/split3/4.png',
    },
    // ... rest of the portfolio items remain unchanged
    {
      id: 5,
      isMultiple: false,
      images: [{ src: '/portfolio/image5.jpg', alt: 'Portfolio image 5' }],
      category: 'portrait',
      displaySrc: '/split3/5.png',
    },
    {
      id: 6,
      isMultiple: true,
      images: [
        { src: '/inside/6/a.png', alt: 'Portfolio image 8' },
        { src: '/inside/6/b.png', alt: 'Portfolio image 8' },
        { src: '/inside/6/c.png', alt: 'Portfolio image 8' },
        { src: '/inside/6/d.png', alt: 'Portfolio image 8' },
      ],
      category: 'city',
      displaySrc: '/split3/6.png',
    },
    {
      id: 7,
      isMultiple: false,
      images: [{ src: '/portfolio/image7.jpg', alt: 'Portfolio image 7' }],
      category: 'plants',
      displaySrc: '/split3/7.png',
    },
    {
      id: 8,
      isMultiple: true,
      images: [{ src: '/inside/8/a.png', alt: 'Portfolio image 8' },
        { src: '/inside/8/b.png', alt: 'Portfolio image 8' },
        { src: '/inside/8/c.png', alt: 'Portfolio image 8' },
        { src: '/inside/8/d.png', alt: 'Portfolio image 8' },
        { src: '/inside/8/e.png', alt: 'Portfolio image 8' },
        { src: '/inside/8/f.png', alt: 'Portfolio image 8' },
      ],
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
      isMultiple: false,
      images: [
        { src: '/portfolio/image10.jpg', alt: 'Portfolio image 10' },
        { src: '/portfolio/image11.jpg', alt: 'Portfolio image 11' },
      ],
      category: 'landscape',
      displaySrc: '/split3/10.png',
    },
    {
      id: 11,
      isMultiple: true,
      images: [{ src: '/inside/11/a.png', alt: 'Portfolio image 11' },
        { src: '/inside/11/b.png', alt: 'Portfolio image 11' }
      ],
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
      id: 13,
      isMultiple: true,
      images: [{ src: '/inside/13/a.png', alt: 'Portfolio image 12' },
        { src: '/inside/13/b.png', alt: 'Portfolio image 12' },
        { src: '/inside/13/c.png', alt: 'Portfolio image 12' },
        { src: '/inside/13/d.png', alt: 'Portfolio image 12' },
        { src: '/inside/13/e.png', alt: 'Portfolio image 12' },
      ],
      category: 'city',
      displaySrc: '/split3/13.png',
    },
    {
      id: 14,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/14.png',
    },
    {
      id: 15,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/15.png',
    },
    {
      id: 16,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/16.png',
    },
    {
      id: 17,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/17.png',
    },
    {
      id: 18,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/18.png',
    },
    {
      id: 19,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/19.png',
    },
    {
      id: 20,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/20.png',
    },
    {
      id: 21,
      isMultiple: true,
      images: [  { src: '/inside/21/a.png', alt: 'Portfolio image 8' },
        { src: '/inside/21/b.png', alt: 'Portfolio image 8' },
      ],
      category: 'city',
      displaySrc: '/split3/21.png',
    },
    {
      id: 22,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/22.png',
    },
    {
      id: 23,
      isMultiple: true,
      images: [{ src: '/inside/23/a.png', alt: 'Portfolio image 12' },
        { src: '/inside/23/b.png', alt: 'Portfolio image 12' },
        { src: '/inside/23/c.png', alt: 'Portfolio image 12' },
        { src: '/inside/23/d.png', alt: 'Portfolio image 12' },
        { src: '/inside/23/e.png', alt: 'Portfolio image 12' },
        { src: '/inside/23/f.png', alt: 'Portfolio image 12' },

      ],
      category: 'city',
      displaySrc: '/split3/23.png',
    },
    {
      id: 24,
      isMultiple: false,
      images: [{ src: '/portfolio/image12.jpg', alt: 'Portfolio image 12' }],
      category: 'city',
      displaySrc: '/split3/24.png',
    }
  ];