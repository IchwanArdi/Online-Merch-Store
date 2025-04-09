// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function Search({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full h-24 bg-white z-50 flex items-center justify-center shadow-md"
      >
        <form className="w-full max-w-4xl ">
          <div className="relative">
            <input type="search" placeholder="Search Mockups, Logos..." className="w-full p-4 ps-10 text-sm text-black bg-gray-100 rounded-full" required />
            <button type="button" onClick={onClose} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black text-xl">
              &times;
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
