import { useState, useEffect } from 'react';

function SuccessModal({ onClose, orderNumber }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(), 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm" onClick={handleClose}></div>

      {/* Modal */}
      <div
        className={`relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full border border-white/20 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
      >
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">Pembayaran Berhasil!</h2>

          <p className="text-gray-600 mb-6 text-lg">Terima kasih! Pesanan Anda sedang diproses.</p>

          {/* Order Number */}
          {orderNumber && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6 border border-blue-100">
              <p className="text-sm text-gray-600 mb-2">Nomor Pesanan:</p>
              <p className="font-mono font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{orderNumber}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Lanjut Belanja
            </button>

            <button onClick={handleClose} className="w-full text-gray-600 py-3 text-sm hover:text-gray-800 transition-colors duration-200">
              Tutup
            </button>
          </div>

          {/* Auto close indicator */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Modal akan tertutup otomatis dalam 5 detik</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
