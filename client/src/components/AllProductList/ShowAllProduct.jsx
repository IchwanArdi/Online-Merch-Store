import { useState, useEffect } from 'react';
import CollectionSection from '../Collections/CollectionSection';
import AllShopSection from './AllShopSection';
import Header from '../Header/Header';

function ShowAllCollections() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://server-production-45df.up.railway.app/randomAllShop/allproduct')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })

      .catch((err) => {
        console.error('Gagal fetch data:', err);
      });
  }, []);

  return (
    <div>
      <Header darkMode />
      <div className="xl:px-30 ">
        <CollectionSection title="All Products" showViewAll={false} />
        <section className="px-3 border-b-2 border-slate-200 ">
          <div className="container mx-auto my-3">
            <div className="flex flex-wrap justify-around mb-2" data-aos="zoom-in" data-aos-duration="1000">
              {data.map((product, index) => (
                <AllShopSection key={index} image={product.gambar} name={product.nama} price={product.price} stock={product.stock} isNew={product.new} className="py-2 w-32 sm:w-64 xl:w-96 md:mt-5" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShowAllCollections;
