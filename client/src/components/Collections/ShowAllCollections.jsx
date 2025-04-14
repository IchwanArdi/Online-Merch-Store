import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Corousel from '../Header/Carousel';
import CollectionSection from './CollectionSection';
import ProductCardItem from './ProductCardItem';

function ShowAllCollections() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://server-production-45df.up.railway.app/shop/allmerch') //https://server-production-45df.up.railway.app/shop/allmerch
      .then((res) => res.json())
      .then((result) => {
        setData(result); // langsung dapat 5 terbaru dari backend
      })

      .catch((err) => {
        console.error('Gagal fetch data:', err);
      });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Corousel />
      <div className="xl:px-20">
        <CollectionSection showViewAll={false} />
        <section className="px-3 border-b-2 border-slate-200 ">
          <div className="container mx-auto my-3">
            <div className="flex flex-wrap justify-around mb-2" data-aos="zoom-in" data-aos-duration="1000">
              {data.map((product, index) => (
                <ProductCardItem key={index} image={product.gambar} name={product.nama} price={product.price} stock={product.stock} isNew={product.new} className="py-2 w-32 sm:w-64 xl:w-96 md:mt-5" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default ShowAllCollections;
