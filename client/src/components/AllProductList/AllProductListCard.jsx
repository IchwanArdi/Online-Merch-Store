import { useState, useEffect } from 'react';
import CollectionSection from '../Collections/CollectionSection';
import AllShopSection from './AllShopSection';
import Btn from './Btn';

function AllProductListCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://server-production-45df.up.railway.app/randomAllShop')
      .then((res) => res.json())
      .then((result) => {
        setData(result); // langsung dapat 8 terbaru dari backend
      })
      .catch((err) => {
        console.error('Gagal fetch data:', err);
      });
  }, []);

  return (
    <div className="xl:px-20">
      <CollectionSection title="SHOP ALL" showViewAll={false} />
      <section className="px-3 border-b-2 border-slate-200">
        <div className="container mx-auto overflow-x-auto my-3">
          <div className="flex overflow-x-auto md:flex-wrap md:justify-evenly items-center cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            {data.map((product, index) => (
              <AllShopSection key={index} image={product.gambar} name={product.nama} price={product.price} stock={product.stock} isNew={product.new} />
            ))}
          </div>
        </div>
        <Btn />
      </section>
    </div>
  );
}

export default AllProductListCard;
