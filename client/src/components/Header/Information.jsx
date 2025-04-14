// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <section className="min-h-screen px-6 py-16 md:px-20 bg-gradient-to-br from-white to-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-cyan-900">Tentang Website Ini</h1>

          <p className="text-lg leading-relaxed text-justify">
            Website ini dibuat sebagai proyek latihan untuk mengembangkan keterampilan dalam membangun aplikasi full-stack menggunakan teknologi MERN (MongoDB, Express.js, React.js, Node.js). Saya terinspirasi oleh berbagai contoh online
            store, salah satunya oleh YouTuber <span className="font-semibold text-cyan-800">Steeze Kane</span>, yang memiliki online store sendiri dengan desain yang modern dan fungsional.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            Website ini dibangun menggunakan teknologi modern seperti <span className="font-medium text-cyan-800">React.js</span> untuk pengembangan antarmuka pengguna yang cepat dan responsif,{' '}
            <span className="font-medium text-cyan-800">Tailwind CSS</span> untuk styling yang efisien dan fleksibel, serta <span className="font-medium text-cyan-800">Vite</span> sebagai bundler yang mempercepat proses pengembangan.
            Komponen seperti carousel, pencarian dinamis, dan sidebar keranjang juga ditambahkan untuk memberikan pengalaman interaktif kepada pengguna.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            Untuk sisi back-end, saya menggunakan <span className="font-medium text-cyan-800">Express.js</span> untuk menangani server dan routing yang efisien. <span className="font-medium text-cyan-800">MongoDB</span> dipilih sebagai
            database NoSQL untuk penyimpanan data produk dan pengguna, yang memungkinkan sistem ini bekerja secara fleksibel dan skalabel.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            Website ini masih dalam tahap <span className="font-semibold">pengembangan</span>. Fitur-fitur baru akan terus ditambahkan, termasuk sistem autentikasi pengguna, halaman checkout, dan dashboard admin untuk mengelola produk. Saya
            berkomitmen untuk terus meningkatkan website ini agar dapat memberikan pengalaman berbelanja yang lebih baik bagi penggunanya.
          </p>

          <div className="bg-cyan-100 border border-cyan-200 p-5 rounded-xl shadow-md">
            <p className="text-lg text-gray-700">Jika kamu seorang developer atau tertarik untuk berkontribusi, kamu bisa berkolaborasi melalui GitHub saya:</p>
            <p className="mt-3 text-cyan-800 font-semibold">
              👉{' '}
              <a href="https://github.com/IchwanArdi/Online-Merch-Store" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-600">
                github.com/IchwanArdi/Online-Merch-Store
              </a>
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
