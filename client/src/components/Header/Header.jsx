import { useState } from 'react';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import Search from './Search';
import CartList from './CartSidebar';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setshowCart] = useState(false);

  return (
    <>
      {showSearch && <Search onClose={() => setShowSearch(false)} />}
      {showCart && <CartList onClose={() => setshowCart(false)} />}

      <header className="w-full absolute mx-auto z-10 bg-transparent">
        <div className="container mx-auto px-5 lg:px-20 lg:py-5">
          <div className="flex py-5 text-white items-center">
            <nav className="flex items-center space-x-20">
              <h1 className="font-bold text-base md:text-3xl">ICHWAN ARDI</h1>
              <ul className="space-x-8 hidden md:flex">
                <li>
                  <a href="#home" className="font-semibold text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop-all" className="font-semibold text-lg">
                    Shop All
                  </a>
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
                  <img src={search} alt="icon search" className=" w-7 md:w-10 filter invert cursor-pointer" onClick={() => setShowSearch(true)} />
                </li>
                <li>
                  <img src={cart} alt="icon cart" className=" w-7 md:w-10 filter invert cursor-pointer" onClick={() => setshowCart(true)} />
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
