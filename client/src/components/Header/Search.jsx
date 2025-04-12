import { useState, useEffect, useRef, useCallback } from 'react';
import './style.css';

export default function Search({ onClose }) {
  const [closing, setClosing] = useState(false);
  const searchRef = useRef(null);

  // Wrap handleClose in useCallback to memoize it
  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Adjust based on your animation duration
  }, [onClose]); // Only recreate handleClose if onClose changes

  // Handle clicks outside of the search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        handleClose(); // Close search if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener
  }, [handleClose]); // Use memoized handleClose as dependency

  return (
    <div className={`fixed top-0 left-0 w-full h-24 bg-white z-50 flex items-center justify-center shadow-md ${closing ? 'animate-slideOutTop' : 'animate-slideInTop'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 transition-opacity duration-300" onClick={handleClose}></div>

      <form ref={searchRef} className={`w-full max-w-4xl ${closing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
        <div className="relative">
          <input type="search" placeholder="Search Mockups, Logos..." className="w-full p-4 ps-10 text-sm text-black bg-gray-100 rounded-full" required />
          <button type="button" onClick={handleClose} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black text-xl">
            &times;
          </button>
        </div>
      </form>
    </div>
  );
}
