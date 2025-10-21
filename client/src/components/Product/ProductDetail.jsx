import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumb from './Breadcrumb';
import ProductInfo from './ProductInfo';
import PromoSection from './PromoSection';
import ProductCard from '../Collections/ProductCard';
import Header from '../Header/Header';

function ProductDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const product = location.state || fetchedProduct;

  useEffect(() => {
    // Scroll ke atas saat halaman ini dibuka
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!location.state) {
      fetch(`https://online-merch-store-production.up.railway.app/shop/slug/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error('Produk tidak ditemukan');
          return res.json();
        })
        .then((data) => setFetchedProduct(data))
        .catch((err) => {
          console.error('Error fetching product:', err);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [slug, location.state]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-600 text-center mt-20">{error}</p>;

  return (
    <>
      <Helmet>
        <title>{product.name} | My Shop</title>
      </Helmet>

      <Header darkMode />
      <div className="px-6 py-25 max-w-7xl mx-auto xl:py-30">
        <Breadcrumb productName={product.name} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-xl">
            <img src={product.image} alt={product.name} className="object-contain w-full h-[400px] rounded-lg transition duration-300 hover:scale-105" />
          </div>
          <ProductInfo product={product} />
        </div>

        <PromoSection />
        <ProductCard />
      </div>
    </>
  );
}

export default ProductDetail;
