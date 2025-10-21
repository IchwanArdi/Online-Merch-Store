import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './style.css';

function CartSidebar({ onClose }) {
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // sesuai durasi animasi
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
      return;
    }
    onClose(); // Close cart sidebar
    navigate('/checkout'); // Navigate to checkout page
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id, item.selectedSize, item.selectedColor);
    } else {
      updateQuantity(item.id, item.selectedSize, item.selectedColor, newQuantity);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex">
        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent bg-opacity-10 backdrop-blur-sm transition-opacity duration-300" onClick={handleClose}></div>

        {/* Sidebar */}
        <div className={`ml-auto w-[90%] sm:w-[80%] md:w-[400px] h-full bg-white z-50 shadow-lg p-4 sm:p-6 overflow-y-auto relative ${closing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Cart ({totalItems})</h2>
            <button onClick={handleClose} className="text-lg font-bold text-gray-600 hover:text-black">
              ×
            </button>
          </div>
          <hr className="text-slate-400" />

          {/* Cart items */}
          <div className="space-y-4 mt-5">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Keranjang Anda kosong</p>
                <button onClick={handleClose} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Lanjut Belanja
                </button>
              </div>
            ) : (
              <>
                {items.map((item, index) => (
                  <div key={index} className="border p-4 rounded-md">
                    <div className="flex space-x-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-600">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </p>
                        <p className="text-sm font-semibold text-blue-600">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100 touch-manipulation">
                              -
                            </button>
                            <span className="text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              disabled={item.quantity >= item.stock}
                              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                            >
                              +
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} className="text-red-500 text-xs hover:text-red-700 px-2 py-1 rounded touch-manipulation">
                            Hapus
                          </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-1">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Checkout
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Yakin ingin mengosongkan keranjang?')) {
                        clearCart();
                      }
                    }}
                    className="w-full mt-2 text-gray-600 py-2 text-sm hover:text-gray-800"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
