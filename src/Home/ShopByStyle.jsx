import React from 'react';
import img1 from '../assets/shop-style-1.png'
import img2 from '../assets/shop-style-2.png'
import img3 from '../assets/shop-style-3.png'

const styles = [
  {
    id: 1,
    title: 'ESSENTIALS',
    subtitle: 'Clean. Simple. Always.',
    image: img1,
    link: '#',
  },
  {
    id: 2,
    title: 'STREET',
    subtitle: 'Bold. Urban. Expressive.',
    image: img2,
    link: '#',
  },
  {
    id: 3,
    title: 'SMART CASUAL',
    subtitle: 'Polished. Modern. Versatile.',
    image: img3,
    link: '#',
  },
];

const ShopByStyle = () => {
  return (
    <section className="w-full bg-[#0b0c10] text-white py-8 md:py-14 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="mb-6 md:mb-8">
          <span className="text-amber-500 font-semibold text-xs md:text-sm tracking-widest uppercase block mb-1">
            SHOP BY STYLE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
            Find Your Look
          </h2>
        </div>

        {/* 
          - মোবাইলে grid-cols-1 (ছবিগুলো একের পর এক নিচে নামবে)
          - পিসি/ল্যাপটপে md:grid-cols-3 (পাশাপাশি ১ সারিতে ৩টি থাকবে)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {styles.map((style) => (
            <a
              key={style.id}
              href={style.link}
              className="group relative rounded-xl overflow-hidden border border-gray-800/80 bg-[#12141c] aspect-[16/9] transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 block"
            >
              {/* ১. ব্যাকগ্রাউন্ড ছবি (১৬:৯ রেশিও) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* ডার্ক ওভারলে বাদ দিয়ে ডানপাশে টেক্সটের নিচে হালকা শেড ও গ্লো দেওয়া হয়েছে */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/40 to-transparent" />
              </div>

              {/* ২. টেক্সট কন্টেন্ট (ডান সাইডে আলাইন করা) */}
              <div className="relative z-10 h-full p-5 sm:p-6 md:p-6 flex flex-col justify-center items-end text-right">
                
                {/* কার্ড টাইটেল */}
                <h3 className="text-lg sm:text-xl md:text-xl font-serif font-bold text-white tracking-wider group-hover:text-amber-400 transition-colors">
                  {style.title}
                </h3>

                {/* সাবটাইটেল */}
                <p className="text-gray-300 text-xs sm:text-sm font-light mt-1 mb-3">
                  {style.subtitle}
                </p>

                {/* শপ নাও বাটন বা ইনডিকেটর */}
                <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Shop Now ➔
                </span>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByStyle;