import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '../Collections/ProductCard';

function ProductDetail() {
  const { slug } = useParams();
  const location = useLocation();

  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const product = location.state || fetchedProduct;

  useEffect(() => {
    if (!location.state) {
      fetch(`https://server-production-45df.up.railway.app/shop/slug/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error('Produk tidak ditemukan');
          return res.json();
        })
        .then((data) => setFetchedProduct(data))
        .catch((err) => setError(err.message))
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

      <motion.div className="px-6 py-10 max-w-7xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>{' '}
          /{' '}
          <Link to="/collections/straight-edge-collection" className="hover:underline">
            Collections
          </Link>
          <span className="font-semibold text-gray-700"> / {product.name}</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT - IMAGE */}
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-xl">
            <img src={product.image} alt={product.name} className="object-contain w-full h-[400px] rounded-lg transition duration-300 hover:scale-105" />
          </div>

          {/* RIGHT - INFO */}
          <div className="flex flex-col space-y-5">
            <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold text-blue-700">${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>

            {/* Warna */}
            <div>
              <p className="font-semibold text-sm mb-2">Color</p>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:ring-2 ring-black"></button>
                <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:ring-2 ring-black"></button>
              </div>
            </div>

            {/* Ukuran */}
            <div>
              <p className="font-semibold text-sm mb-2">Size</p>
              <div className="flex flex-wrap gap-3">
                {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                  <button key={size} className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-sm font-medium">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-gray-100 border border-gray-400 py-3 rounded-lg hover:bg-gray-200 font-bold">Add to Cart</button>
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-bold transition">Buy with Shop</button>
              <a href="#" className="block text-center text-sm underline text-gray-600 hover:text-gray-800">
                More payment options
              </a>
            </div>
          </div>
        </div>

        {/* Deskripsi & Promo */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-bold">Get 50% Off a DTLA Signed Poster</h2>
          <span className="text-gray-600 underline cursor-pointer text-sm sm:text-base">View size chart</span>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>This is an Adult Unisex Shirt available in XS-5XL</li>
            <li>Classic heavyweight fabric</li>
            <li>100% US sustainably grown and harvested cotton</li>
          </ul>
        </div>

        {/* Produk Terkait */}
        <ProductCard />
      </motion.div>
    </>
  );
}

export default ProductDetail;
