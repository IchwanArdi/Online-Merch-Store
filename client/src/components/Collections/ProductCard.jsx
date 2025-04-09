import { useState, useEffect } from 'react';
import CollectionSection from './CollectionSection';
import ProductCardItem from './ProductCardItem';

function ProductCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shop')
      .then((res) => res.json())
      .then((result) => {
        setData(result); // langsung dapat 5 terbaru dari backend
      })

      .catch((err) => {
        console.error('Gagal fetch data:', err);
      });
  }, []);

  return (
    <div>
      <CollectionSection title="Straight Edge Collection" />
      <section className="px-3 border-b-2 border-slate-200">
        <div className="container mx-auto overflow-x-auto my-3">
          <div className="flex overflow-x-auto justify-between mb-2" data-aos="zoom-in" data-aos-duration="1000">
            {data.map((product, index) => (
              <ProductCardItem key={index} image={product.gambar} name={product.nama} price={product.price} stock={product.stock} isNew={product.new} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
