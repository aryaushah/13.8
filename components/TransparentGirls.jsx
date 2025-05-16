import { useEffect, useRef, useState } from 'react';
import Contact from './Contact';

export default function TransparentGirls() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const contactRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
            if (textRef.current) {
              textRef.current.classList.add('opacity-100', 'translate-y-0');
              textRef.current.classList.remove('opacity-0', '-translate-y-4');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* CLO Experimentation Section */}
      <section className="min-h-screen bg-white relative overflow-hidden">
        {showContact && <Contact onClose={() => setShowContact(false)} />}
        <div 
          ref={containerRef}
          className="h-screen flex items-center justify-center transition-all duration-1000 ease-out opacity-0 scale-95"
        >
          <div className="relative w-full h-full">
            {/* Text overlay */}
            <div 
              ref={textRef}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out opacity-0 -translate-y-4 z-10"
            >
              <h2 className="text-4xl font-light tracking-widest text-gray-900">
                CLO EXPERIMENTATION
              </h2>
            </div>

            <img
              src="/transparentgirls.png"
              alt="Fashion Models"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/20" />
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className="min-h-screen bg-white relative overflow-hidden">
        <div className="h-screen flex items-center justify-center transition-all duration-1000 ease-out">
          <div className="relative w-full h-full py-32">
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10">
              <h2 className="text-4xl font-light tracking-widest text-gray-900">
                DESIGN PROCESS
              </h2>
            </div>
            <div className="h-full flex items-center justify-center">
              <img
                src="/Image (1).png"
                alt="Design Process"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/20" />
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="min-h-screen bg-white relative overflow-hidden">
        <div className="h-screen flex items-center justify-center transition-all duration-1000 ease-out">
          <div className="relative w-full h-full py-32">
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10">
              <h2 className="text-4xl font-light tracking-widest text-gray-900">
                FINAL CREATION
              </h2>
            </div>
            <div className="h-full flex items-center justify-center">
              <img
                src="/Image (2).png"
                alt="Final Creation"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/20" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div 
          ref={contactRef}
          className="w-full max-w-2xl px-8 py-16 text-center"
        >
          <h3 className="text-2xl font-light tracking-wider mb-12">GET IN TOUCH</h3>
          <div 
            className="inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={() => setShowContact(true)}
              className={`
                group relative px-8 py-4 
                border-2 border-gray-900 
                bg-white/80 backdrop-blur-sm
                transition-all duration-300 ease-out
                ${isHovered ? 'scale-105 shadow-lg' : 'scale-100'}
              `}
            >
              <div className="flex items-center space-x-3">
                <svg 
                  className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:scale-110" 
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
                <span className="text-sm font-light tracking-wider text-gray-900">
                  CONTACT
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 