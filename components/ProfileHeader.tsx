import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center sm:ml-28 md:items-start gap-5 md:gap-10 mb-8 md:mb-12">
      {/* Profile Image with Gradient Border */}
      <div className="relative w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1">
          <div className="rounded-full bg-white p-0.5 h-full w-full">
            <Image 
              src="/profile.jpeg" 
              alt="Profile" 
              width={180} 
              height={180} 
              className="rounded-full w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="flex-1 pt-1 md:pt-2 text-center md:text-left max-w-md mx-auto md:mx-0">
        {/* Username */}
        <h1 className="text-2xl font-medium mb-3 md:mb-6">Parishka</h1>
        
        {/* Bio Section */}
        <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
          <h2 className="font-medium text-lg">Designer </h2>
          <p className="text-gray-800 text-sm md:text-base">Graphic designer and photographer portfolio, showcasing landscape, portrait, and city photography.</p>
          <p className="text-gray-500 text-sm">57,845,605</p>
        </div>
        
        {/* Website */}
        <div className="mb-3 md:mb-6">
          <a 
            href="https://www.defectdesigns.com" 
            className="text-blue-900 font-medium hover:underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.defectdesigns.com
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-5 md:gap-8 justify-center md:justify-start">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <FaGithub size={20} className="md:h-6 md:w-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <FaLinkedin size={20} className="md:h-6 md:w-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <FaTwitter size={20} className="md:h-6 md:w-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <FaEnvelope size={20} className="md:h-6 md:w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}