// components/TabNavigation.tsx
'use client';

import { useState } from 'react';
import { FaRegSquare, FaFilm, FaTag } from 'react-icons/fa';

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState('posts');
  
  return (
    <div className="border-t border-gray-200">
      {/* <div className="flex justify-center">
        <button 
          className={`flex items-center gap-2 px-10 py-4 text-xs font-medium uppercase ${
            activeTab === 'posts' 
              ? 'text-gray-900 border-t border-gray-900' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          <FaRegSquare size={14} />
          <span>Posts</span>
        </button>
        
        <button 
          className={`flex items-center gap-2 px-10 py-4 text-xs font-medium uppercase ${
            activeTab === 'reels' 
              ? 'text-gray-900 border-t border-gray-900' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('reels')}
        >
          <FaFilm size={14} />
          <span>Reels</span>
        </button>
        
        <button 
          className={`flex items-center gap-2 px-10 py-4 text-xs font-medium uppercase ${
            activeTab === 'tagged' 
              ? 'text-gray-900 border-t border-gray-900' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('tagged')}
        >
          <FaTag size={14} />
          <span>Tagged</span>
        </button>
      </div> */}
    </div>
  );
}