import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 md:px-20 bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-cyan-900">Tentang Website Ini</h1>

        <p className="text-lg leading-relaxed text-justify">
          Website ini terinspirasi dari seorang YouTuber bernama <span className="font-semibold text-cyan-800">Steeze Kane</span>, yang memiliki online store sendiri dengan gaya yang khas dan modern. Terinspirasi dari semangat kreatif dan
          gaya streetwear yang ditampilkan oleh Kane, website ini bertujuan menjadi platform yang menyajikan produk-produk eksklusif dengan desain yang orisinal dan pengalaman pengguna yang memuaskan.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Website ini dibangun menggunakan teknologi modern seperti <span className="font-medium text-cyan-800">React.js</span> untuk pengembangan antarmuka pengguna yang cepat dan responsif,{' '}
          <span className="font-medium text-cyan-800">Tailwind CSS</span> untuk styling yang efisien dan fleksibel, serta <span className="font-medium text-cyan-800">Vite</span> sebagai bundler yang mempercepat proses pengembangan. Komponen
          seperti carousel, pencarian dinamis, dan sidebar keranjang juga ditambahkan untuk memberikan pengalaman interaktif kepada pengguna.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Website ini juga menggunakan teknologi back-end seperti <span className="font-medium text-cyan-800">Express.js</span> untuk menangani server dan routing yang efisien, serta{' '}
          <span className="font-medium text-cyan-800">MongoDB</span> sebagai database NoSQL yang memungkinkan penyimpanan data produk dan pengguna secara fleksibel. Dengan kombinasi ini, website dapat memberikan pengalaman berbelanja yang
          cepat dan responsif di kedua sisi, baik front-end maupun back-end.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Website ini masih dalam tahap <span className="font-semibold">pengembangan</span>. Beberapa fitur akan terus ditambahkan, termasuk sistem autentikasi pengguna, halaman checkout, serta dashboard admin untuk mengelola produk. Kami
          berkomitmen untuk terus meningkatkan kualitas website agar dapat memberikan pengalaman berbelanja yang lebih baik bagi para pengguna.
        </p>

        <div className="bg-cyan-100 border border-cyan-200 p-5 rounded-xl shadow-md">
          <p className="text-lg text-gray-700">Jika kamu seorang developer atau seseorang yang tertarik untuk berkontribusi, kamu sangat dipersilakan untuk berkolaborasi lewat GitHub saya:</p>
          <p className="mt-3 text-cyan-800 font-semibold">
            👉{' '}
            <a href="https://github.com/IchwanArdi/Online-Merch-Store" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-600">
              https://github.com/IchwanArdi/Online-Merch-Store
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
