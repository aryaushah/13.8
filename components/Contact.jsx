import { useState } from 'react';

export default function Contact({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="h-full w-full flex items-center justify-center">
        <div className="max-w-2xl w-full px-8">
          <button
            onClick={handleClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-light tracking-wider mb-4">CONTACT</h1>
              <div className="w-24 h-0.5 bg-gray-900" />
            </div>

            <div className="space-y-8">
              <a 
                href="mailto:arshah20@student.scad.edu"
                className="group block"
              >
                <div className="relative px-8 py-6 border-2 border-gray-900 bg-white transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <svg 
                      className="w-6 h-6 text-gray-900 transition-transform duration-300 group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span className="text-lg font-light tracking-wider text-gray-900">
                      arshah20@student.scad.edu
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </div>
              </a>

              <div className="space-y-4">
                {/* <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">SCAD STUDENT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">FASHION DESIGN</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">SUSTAINABLE INNOVATION</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 