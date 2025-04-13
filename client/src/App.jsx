import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllProductListCard from './components/AllProductList/AllProductListCard';
import ProductCard from './components/Collections/ProductCard';
import Footer from './components/Footer/Footer';
import Carousel from './components/Header/Carousel';
import ProductListCard from './components/ProductList/ProductListCard';
import Information from '../src/components/Header/Information'; // tambahkan ini
import ShowAllCollections from './components/Collections/ShowAllCollections';
import ShowAllProduct from './components/AllProductList/ShowAllProduct';
import ProductDetail from './components/Product/ProductDetail';

function Home() {
  return (
    <>
      <Carousel />
      <ProductCard />
      <ProductListCard />
      <AllProductListCard />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/collections/straight-edge-collection" element={<ShowAllCollections />} />
        <Route path="/collections/all-products" element={<ShowAllProduct />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
