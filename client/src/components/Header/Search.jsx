import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Search({ onClose }) {
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

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

  // Debounced search function
  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://online-merch-store-production.up.railway.app/shop/search?q=${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const results = await response.json();
      setSearchResults(Array.isArray(results) ? results : []);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []); // Remove performSearch from dependency to prevent re-renders

  // Debounce search input
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searchQuery]); // Remove performSearch from dependency

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    handleClose();
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-blur-sm z-40 transition-opacity duration-300" onClick={handleClose}></div>

      <div className={`fixed top-0 left-0 w-full h-24 bg-white z-50 flex items-center justify-center shadow-md ${closing ? 'animate-slideOutTop' : 'animate-slideInTop'}`}>
        <div ref={searchRef} className={`w-full max-w-4xl ${closing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          <div className="relative">
            <input type="search" placeholder="Search Mockups, Logos..." className="w-full p-4 ps-10 text-sm text-black bg-gray-100 rounded-full" value={searchQuery} onChange={handleSearchChange} autoFocus />
            <button type="button" onClick={handleClose} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black text-xl">
              &times;
            </button>
          </div>

          {/* Search Results Dropdown */}
          {searchQuery && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 max-h-96 overflow-y-auto z-50">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2">Mencari...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((product, index) => (
                    <Link
                      key={index}
                      to={`/product/${product.nama?.toLowerCase().replace(/\s+/g, '-')}`}
                      state={{
                        name: product.nama,
                        image: product.gambar,
                        price: product.price,
                        stock: product.stock,
                      }}
                      onClick={handleResultClick}
                      className="block p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <img src={product.gambar} alt={product.nama} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm text-gray-900">{product.nama}</h3>
                          <p className="text-sm text-gray-600">${product.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  <p>Tidak ada produk yang ditemukan untuk "{searchQuery}"</p>
                  <p className="text-xs mt-1">Coba kata kunci lain</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
