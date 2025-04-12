import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllProductListCard from './components/AllProductList/AllProductListCard';
import ProductCard from './components/Collections/ProductCard';
import Footer from './components/Footer/Footer';
import Carousel from './components/Header/Carousel';
import ProductListCard from './components/ProductList/ProductListCard';
import Information from '../src/components/Header/Information'; // tambahkan ini

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
