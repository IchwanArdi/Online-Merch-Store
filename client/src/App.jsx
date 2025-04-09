// import { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';

import AllProductListCard from './components/allProductList/AllProductListCard';
import ProductCard from './components/Collections/ProductCard';
import Footer from './components/Footer/Footer';
import Carousel from './components/Header/Carousel';
import ProductListCard from './components/ProductList/ProductListCard';

function App() {
  return (
    <div>
      <Carousel />
      <ProductCard />
      <ProductListCard />
      <AllProductListCard />
      <Footer />
    </div>
  );
}

export default App;
