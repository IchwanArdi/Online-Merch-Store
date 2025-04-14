import { useState } from 'react';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import Search from './Search';
import CartList from './CartSidebar';
import icon from '../../assets/information.svg';
import { Link } from 'react-router-dom';

function Header({ darkMode = false }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

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

      <header className={`w-full absolute mx-auto z-10 xl:px-20 ${borderBottom}`}>
        <div className="container mx-auto px-5 lg:px-20">
          <div className={`flex py-5 items-center font-extrabold ${textColor}`}>
            <nav className="flex items-center space-x-20">
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
            </nav>

            <div className="icon ml-auto flex">
              <ul className="flex items-center space-x-8">
                <li>
                  <img src={search} alt="icon search" className={`w-7 md:w-10 filter cursor-pointer ${iconFilter}`} onClick={() => setShowSearch(true)} />
                </li>
                <li>
                  <img src={cart} alt="icon cart" className={`w-7 md:w-10 filter cursor-pointer ${iconFilter}`} onClick={() => setShowCart(true)} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
