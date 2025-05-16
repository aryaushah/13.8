import { useEffect, useRef } from 'react';

export default function CFDA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div 
        ref={containerRef}
        className="h-screen flex items-center justify-center transition-all duration-1000 ease-out opacity-0 translate-y-10"
      >
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/cfda-2.jpg"
                  alt="CFDA Award"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gray-900 transform rotate-12" />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-light tracking-wider">CFDA AWARD</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Recognition of excellence in sustainable fashion design and innovation.
                </p>
                <p className="text-lg leading-relaxed">
                  A testament to the fusion of traditional craftsmanship with cutting-edge technology.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">SUSTAINABLE INNOVATION</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">DESIGN EXCELLENCE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-sm tracking-wider">INDUSTRY RECOGNITION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 