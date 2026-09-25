import React from 'react';
import blackTShirt2 from '../assets/black-T-shirt-2.png';
import whiteShirt2 from '../assets/white-shirt-2.png';
import pant2 from '../assets/pant-2.png';
import jacket2 from '../assets/jacket-2.png';



import { FiHeart } from 'react-icons/fi'; 
const NewSeason = () => {
  const products = [
    {
      id: 1,
      title: 'Crown Essential Tee',
      subtitle: 'Oversized Fit • 100% Cotton',
      price: '$29.00',
      image: blackTShirt2,
    },
    {
      id: 2,
      title: 'Linen Casual Shirt',
      subtitle: 'Breathable • Premium Linen',
      price: '$49.00',
      image: whiteShirt2,
    },
    {
      id: 3,
      title: 'Cargo Pants',
      subtitle: 'Relaxed Fit • Utility Style',
      price: '$59.00',
      image: pant2,
    },
    {
      id: 4,
      title: 'Windbreaker Jacket',
      subtitle: 'Lightweight • Water Resistant',
      price: '$79.00',
      image: jacket2,
    },
  ];

  return (
    <section className="w-full bg-[#0b0c10] text-white py-12 px-4 md:px-12 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between lg:block">
              <div>
                <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
                  NEW COLLECTION
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide mt-1 mb-2">
                  NEW SEASON
                </h2>
              </div>
              <button className="lg:hidden border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black px-3 py-1.5 rounded text-xs font-semibold transition duration-300 flex items-center gap-1">
                VIEW ALL ➔
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-1 mb-6">
              Fresh drops. Timeless pieces.
            </p>
          </div>
          {/* ল্যাপটপ/পিসিতে বড় View All Products বাটন (ছবি ১ এর মতো) */}
          <button className="hidden lg:inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs tracking-wider px-6 py-3.5 rounded transition duration-300 w-fit">
            VIEW ALL PRODUCTS ➔
          </button>
        </div>

        {/* ২. ডান পাশের প্রোডাক্ট কার্ড গ্রিড সেকশন */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141c] border border-gray-800 rounded-lg p-3 flex flex-col justify-between group hover:border-gray-700 transition duration-300 relative"
            >
              {/* ইমেইল/ছবি ও উইশলিস্ট আইকন */}
              <div className="relative w-full h-44 md:h-52 bg-[#181a24] rounded-md overflow-hidden flex items-center justify-center mb-3">
                {/* লাভ/উইশলিস্ট আইকন */}
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 z-10 p-1">
                  <FiHeart className="w-4 h-4" />
                </button>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* প্রোডাক্ট ইনফরমেশন */}
              <div>
                <h3 className="text-xs md:text-sm font-bold text-gray-200 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-400 font-light mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
                <p className="text-sm md:text-base font-bold text-white mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewSeason;