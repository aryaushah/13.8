import { useState } from 'react';

export default function Presentation({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
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
        <div className="h-[calc(95vh-4rem)]">
          <iframe
            src="/presentation.pdf"
            className="w-full h-full rounded-b-lg"
            title="Presentation"
          />
        </div>
      </div>
    </div>
  );
} 