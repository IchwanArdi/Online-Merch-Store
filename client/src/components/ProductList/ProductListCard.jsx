import { useState, useEffect } from 'react';
import CollectionSection from '../Collections/CollectionSection';
import ProductCardItem from './ProductCardItem';

function ProductListCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://online-merch-store-production.up.railway.app/shop')
      .then((res) => res.json())
      .then((result) => {
        setData(result); // langsung dapat 5 terbaru dari backend
      })
      .catch((err) => {
        console.error('Gagal fetch data:', err);
      });
  }, []);

  return (
    <div className="2xl:px-50">
      <CollectionSection title="OFF THE PIER" showViewAll={false} />
      <section className="px-3 border-b-2 border-slate-200">
        <div className="container mx-auto overflow-x-auto my-3">
          <div className="flex overflow-x-auto md:flex-wrap md:justify-evenly items-center" data-aos="zoom-in" data-aos-duration="1000">
            {data.map((product, index) => (
              <ProductCardItem key={index} image={product.gambar} name={product.nama} price={product.price} stock={product.stock} isNew={product.new} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductListCard;
