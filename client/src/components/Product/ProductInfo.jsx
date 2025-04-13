import { useState } from 'react';

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null); // ✅ state untuk size

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
      <p className="text-xl font-semibold text-blue-700">${product.price}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>

      {/* Warna */}
      <div>
        <p className="font-semibold text-sm mb-2">Color</p>
        <div className="flex space-x-3">
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:ring-2 ring-black cursor-pointer"></button>
          <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:ring-2 ring-black cursor-pointer"></button>
        </div>
      </div>

      {/* Ukuran */}
      <div>
        <p className="font-semibold text-sm mb-2">Size</p>
        <div className="flex flex-wrap gap-3">
          {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)} // ✅ update size saat diklik
              className={`
                border px-4 py-2 rounded-md text-sm font-medium cursor-pointer
                ${selectedSize === size ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300 hover:bg-gray-100'}
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-gray-100 border border-gray-400 py-3 rounded-lg hover:bg-gray-200 font-bold cursor-pointer">Add to Cart</button>
        <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-bold transition cursor-pointer">Buy with Shop</button>
        <a href="#" className="block text-center text-sm underline text-gray-600 hover:text-gray-800">
          More payment options
        </a>
      </div>
    </div>
  );
}

export default ProductInfo;
