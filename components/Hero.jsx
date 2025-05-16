import { useState, useEffect } from 'react';
import About from './About';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // Start fade out after 3.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Hide intro after fade out completes
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 4 seconds total for the animation sequence

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleEnterClick = () => {
    setShowContent(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  if (showIntro) {
    return (
      <div className="h-screen w-full bg-[#ececec] flex items-center justify-center">
        <div className={`text-center relative transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-4xl md:text-6xl font-light tracking-widest text-black">
            <div className="overflow-hidden whitespace-nowrap relative">
              <span className="inline-block animate-typewriter">
                ARYA SHAH × THE EXPLORATION COMPANY
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <section className="h-screen relative bg-white overflow-hidden">
      {showAbout && <About onClose={() => setShowAbout(false)} />}
      <div className={`h-full transition-all duration-1000 ease-in-out transform ${showContent ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Initial full-screen video with enter button */}
        <div className="h-full flex items-center justify-center">
          <video
            src="/hero-video-landscape-continuous.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <button 
              onClick={handleEnterClick}
              className="px-12 py-5 rounded-full border-2 border-white bg-white text-gray-900 hover:scale-110 hover:shadow-lg transition-all duration-300 text-xl font-light tracking-wider"
            >
              Enter Here
            </button>
            <button 
              onClick={handleAboutClick}
              className="px-5 py-2 rounded-full border-2 border-white bg-white text-gray-900 hover:scale-110 hover:shadow-lg transition-all duration-300 text-base font-light tracking-wider"
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${showContent ? 'translate-y-0' : 'translate-y-full'}`}>
        {/* Split screen layout */}
        <div className="h-full flex">
          {/* Left side - Video */}
          <div className="w-1/2 h-full relative">
            <video
              src="/hero-video-landscape-continuous.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20" />
          </div>
          
          {/* Right side - Collection Description */}
          <div className="w-1/2 h-full bg-white p-16 flex flex-col justify-center">
            <h1 className="text-4xl font-light tracking-wider mb-6">13.8</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A space-age sustainability thesis that reimagines the future of adaptive clothing. 
              Drawing inspiration from space race and advanced thermal regulation systems, 
              this collection explores the intersection of form and function in extreme environments.
            </p>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">THERMAL REGULATION</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">MODULAR DESIGN</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
                <span className="text-sm tracking-wider">SUSTAINABLE MATERIALS</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 