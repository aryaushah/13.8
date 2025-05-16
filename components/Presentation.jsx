import { useState } from 'react';

export default function Presentation({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-2">
      <div className="bg-white rounded-lg w-full max-w-[95vw] h-[95vh] relative">
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10"
        >
          ×
        </button>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-2xl font-light tracking-wider text-gray-900">Detailed Keynote</h2>
        </div>
        <div className="h-[calc(95vh-4rem)] relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-gray-600">Loading presentation...</div>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-center p-8">
                <p className="text-gray-600 mb-4">Unable to load the presentation directly.</p>
                <a 
                  href="/presentation.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Click here to view the presentation
                </a>
              </div>
            </div>
          )}
          <iframe
            src="/presentation.pdf"
            className="w-full h-full rounded-b-lg"
            title="Presentation"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </div>
    </div>
  );
} 