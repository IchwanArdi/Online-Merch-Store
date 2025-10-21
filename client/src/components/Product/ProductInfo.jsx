import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null); // ✅ state untuk size
  const [selectedColor, setSelectedColor] = useState('black'); // state untuk color
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const { addToCart, isInCart, getCartItem } = useCart();

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setToastMessage('Pilih ukuran terlebih dahulu');
      setToastType('warning');
      setShowToast(true);
      return;
    }

    if (product.stock === 0) {
      setToastMessage('Produk sedang tidak tersedia');
      setToastType('error');
      setShowToast(true);
      return;
    }

    try {
      addToCart(product, selectedSize, selectedColor, 1);
      setToastMessage('Produk berhasil ditambahkan ke keranjang');
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      setToastMessage(error.message || 'Terjadi kesalahan saat menambahkan ke keranjang');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold">{product.name || product.nama}</h1>
        <p className="text-xl font-semibold text-blue-700">${product.price}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>

        {/* Warna */}
        <div>
          <p className="font-semibold text-sm mb-2">Color</p>
          <div className="flex space-x-3">
            <button onClick={() => setSelectedColor('black')} className={`w-8 h-8 rounded-full bg-black border-2 hover:ring-2 ring-black cursor-pointer ${selectedColor === 'black' ? 'ring-2 ring-black' : 'border-gray-300'}`}></button>
            <button onClick={() => setSelectedColor('white')} className={`w-8 h-8 rounded-full bg-white border-2 hover:ring-2 ring-black cursor-pointer ${selectedColor === 'white' ? 'ring-2 ring-black' : 'border-gray-300'}`}></button>
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
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || !selectedSize}
            className={`w-full py-3 rounded-lg font-bold transition ${
              product.stock === 0 || !selectedSize
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isInCart(product._id || product.id, selectedSize, selectedColor)
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-100 border border-gray-400 hover:bg-gray-200 text-black'
            }`}
          >
            {product.stock === 0 ? 'SOLD OUT' : !selectedSize ? 'Pilih Ukuran' : isInCart(product._id || product.id, selectedSize, selectedColor) ? 'Sudah di Keranjang' : 'Add to Cart'}
          </button>
          <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-bold transition cursor-pointer">Buy with Shop</button>
          <a href="#" className="block text-center text-sm underline text-gray-600 hover:text-gray-800">
            More payment options
          </a>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50">
          <div className={`px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 ${toastType === 'success' ? 'bg-green-500 text-white' : toastType === 'error' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
            <span className="text-lg font-bold">{toastType === 'success' ? '✓' : toastType === 'error' ? '✕' : '⚠'}</span>
            <span className="font-medium">{toastMessage}</span>
            <button onClick={() => setShowToast(false)} className="ml-2 text-lg font-bold hover:opacity-70">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductInfo;
