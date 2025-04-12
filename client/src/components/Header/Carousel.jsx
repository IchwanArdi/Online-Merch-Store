import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Header';
import banner1 from '../../assets/Homepage_Banners.webp';
import banner2 from '../../assets/1.webp';
import banner3 from '../../assets/2.jpg';
import banner4 from '../../assets/4.jpg';

const slides = [
  {
    image: banner1,
    title: 'New Collection',
    desc: 'AVAILABLE NOW',
    buttonText: 'BUY NOW',
  },
  {
    image: banner2,
    title: 'OFF THE PIER MERCH',
    desc: 'PIER MERCH FOR GOOD!',
    buttonText: 'BUY NOW',
  },
  {
    image: banner3,
    title: 'Straight Edge 2.0',
    desc: 'HOODIE BACK FOR GOOD!',
    buttonText: 'BUY NOW',
  },
  {
    image: banner4,
    title: 'Belajar Dari Rumah',
    desc: 'DESIGNS YOU NEED TO CHECK OUT',
    buttonText: 'BUY NOW',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const handleStart = (x) => {
    setStartX(x);
    setIsDragging(true);
  };

  const handleMove = (x) => {
    if (!isDragging || startX === null) return;
    const diff = x - startX;
    if (Math.abs(diff) > 50) {
      setCurrentIndex((prev) => (diff > 0 ? (prev - 1 + slides.length) % slides.length : (prev + 1) % slides.length));
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Header />

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        data-aos="zoom-in"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[550px] md:h-[700px] relative" data-aos="zoom-in" data-aos-duration="1000">
            <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} draggable={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className={`absolute text-white max-w-lg ${index === 0 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center' : 'bottom-15 left-10 md:left-20 xl:left-35 md:bottom-20'}`} data-aos="zoom-in">
              <h2 className="text-2xl md:text-4xl xl:text-7xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-lg mt-2">{slide.desc}</p>
              <button className="mt-4 px-5 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Panah Navigasi */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-5 -translate-y-1/2 z-10">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} className="text-white text-3xl hover:scale-110 transition">
          ❮
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} className="text-white text-3xl hover:scale-110 transition">
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  );
}
