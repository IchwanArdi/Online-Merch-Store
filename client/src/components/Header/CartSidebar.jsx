import { useState } from 'react';
import './style.css';

function CartSidebar({ onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // sesuai durasi animasi
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 transition-opacity duration-300" onClick={handleClose}></div>

      {/* Sidebar */}
      <div className={`ml-auto w-[80%] md:w-[400px] h-full bg-white z-50 shadow-lg p-6 overflow-y-auto relative ${closing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={handleClose} className="text-lg font-bold text-gray-600 hover:text-black">
            ×
          </button>
        </div>
        <hr className=" text-slate-400" />

        {/* Cart items */}
        <div className="space-y-4 mt-5">
          <div className="border p-4 rounded-md">
            <p className="font-medium">Produk 1</p>
            <p className="text-sm text-gray-600">Rp 100.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
