import { useState } from 'react';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import Search from './Search';
import CartList from './CartSidebar';
import icon from '../../assets/information.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header({ darkMode = false }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { totalItems } = useCart();

  const textColor = darkMode ? 'text-black' : 'text-white';
  const iconFilter = darkMode ? '' : 'invert';
  const borderBottom = darkMode ? 'border-b-2 border-slate-200' : '';

  const information = !darkMode && (
    <div id="information" className="relative top-0 w-full z-10 bg-cyan-900 text-white shadow-md py-2 flex items-center justify-center gap-3 px-4">
      <img src={icon} alt="Info Icon" className="w-5 h-5 filter invert" />
      <p className="text-sm md:text-base">
        Ketahui lebih dalam tentang{' '}
        <Link to="/Information" className="font-semibold underline underline-offset-2 hover:text-white/90">
          website ini
        </Link>
      </p>
    </div>
  );

  return (
    <>
      {information}

      {showSearch && <Search onClose={() => setShowSearch(false)} />}
      {showCart && <CartList onClose={() => setShowCart(false)} />}

      <header className={`w-full absolute z-10 ${borderBottom}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-5 font-extrabold ${textColor}`}>
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8 lg:space-x-20">
              <Link to={'/'}>
                <h1 className="font-bold text-base md:text-3xl cursor-pointer">ICHWAN ARDI</h1>
              </Link>
              <ul className="space-x-8 hidden md:flex">
                <li>
                  <Link to="/" className="font-semibold text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collections/all-products" className="font-semibold text-lg">
                    Shop All
                  </Link>
                </li>
                <li>
                  <a href="#new" className="font-semibold text-lg">
                    New
                  </a>
                </li>
              </ul>
            </div>

            {/* Right side - Icons */}
            <div className="flex items-center space-x-8">
              <img src={search} alt="icon search" className={`w-7 md:w-10 filter cursor-pointer ${iconFilter}`} onClick={() => setShowSearch(true)} />
              <div className="relative">
                <img src={cart} alt="icon cart" className={`w-7 md:w-10 filter cursor-pointer ${iconFilter}`} onClick={() => setShowCart(true)} />
                {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{totalItems > 99 ? '99+' : totalItems}</span>}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
