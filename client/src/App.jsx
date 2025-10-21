import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import AllProductListCard from './components/AllProductList/AllProductListCard';
import ProductCard from './components/Collections/ProductCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Carousel from './components/Header/Carousel';
import ProductListCard from './components/ProductList/ProductListCard';
import Information from '../src/components/Header/Information'; // tambahkan ini
import ShowAllCollections from './components/Collections/ShowAllCollections';
import ShowAllProduct from './components/AllProductList/ShowAllProduct';
import ProductDetail from './components/Product/ProductDetail';
import CheckoutPage from './components/Checkout/CheckoutPage';

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <ProductCard />
      <ProductListCard />
      <AllProductListCard />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/collections/straight-edge-collection" element={<ShowAllCollections />} />
          <Route path="/collections/all-products" element={<ShowAllProduct />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
