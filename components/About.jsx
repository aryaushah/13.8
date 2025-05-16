import { useState } from 'react';

export default function About({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500); // Match the transition duration
  };

  return (
    <div className={`fixed inset-0 bg-[#ececec] z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="h-full w-full flex">
        {/* Left side - Image */}
        <div className="w-1/2 h-full flex items-center justify-center bg-white">
          <div className="relative w-96 h-96">
            <img
              src="/IMG_5195.jpg"
              alt="Arya Shah"
              className="w-full h-full object-cover object-[center_30%] rounded-full"
            />
            <div className="absolute inset-0 bg-black opacity-10 rounded-full" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 h-full bg-white p-16 flex flex-col justify-center relative">
          <button
            onClick={handleClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-light tracking-wider mb-8">About Me</h1>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                As a designer I am led by curiosity, emotion and a deep connection to story-telling. My work is research-driven but intuitive, shaped by my identity, heritage and cultural tension.
              </p>
              
              <p className="text-lg leading-relaxed">
                The collections I have built are suspended in a reality that is raw, yet refined, nostalgic but forward-thinking. Tools like CLO-3D allow me to transform abstract concepts into something grounded.
              </p>
              
              <p className="text-lg leading-relaxed">
                For me fashion is a space that encourages dialogue, nuance, and allows people to feel seen and heard. With my designs I seek to build intense narratives, reimagine silhouettes and above all lead with care, intention and respect.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">RESEARCH-DRIVEN</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">CULTURAL NARRATIVE</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">INNOVATIVE DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 