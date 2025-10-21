import { useState, useEffect } from 'react';

const Loading = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4';
      case 'medium':
        return 'w-8 h-8';
      case 'large':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-center">
          <div className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto ${getSizeClasses()}`}></div>
          <p className="mt-4 text-gray-600 font-medium">
            {text}
            {dots}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <div className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto ${getSizeClasses()}`}></div>
        {text && (
          <p className="mt-2 text-gray-600 text-sm">
            {text}
            {dots}
          </p>
        )}
      </div>
    </div>
  );
};

// Skeleton loader untuk product cards
export const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-md mb-3"></div>
      <div className="space-y-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
      </div>
    </div>
  );
};

// Skeleton loader untuk cart items
export const CartItemSkeleton = () => {
  return (
    <div className="animate-pulse border p-4 rounded-md">
      <div className="flex space-x-3">
        <div className="w-16 h-16 bg-gray-300 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
          <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
          <div className="bg-gray-300 h-3 w-1/4 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
