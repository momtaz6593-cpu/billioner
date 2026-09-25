import React from 'react';

const Hero = () => {
  return (
    <div>
      <div 
        className='aspect-[16/9] w-full bg-cover bg-center relative flex items-center'
        style={{ backgroundImage: "url('/Hero-img.png')" }}
      >
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Left Text & Buttons Block */}
          <div className="max-w-xl text-left">
            <p className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              PREMIUM MEN'S & BOYS' FASHION
            </p>

            <h2 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-3">
              DEFINE YOUR <br />
              <span>STANDARD</span>
            </h2>

            <p className="text-gray-300 text-[11px] sm:text-sm md:text-base font-light mb-6">
              Modern essentials. Built for presence.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="#men" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs md:text-sm px-5 py-2.5 rounded-xs transition flex items-center gap-2 uppercase tracking-wider"
              >
                SHOP MEN <span>&rarr;</span>
              </a>

              <a 
                href="#boys" 
                className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold text-xs md:text-sm px-5 py-2.5 rounded-xs transition flex items-center gap-2 uppercase tracking-wider"
              >
                SHOP BOYS <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Side Indicators (01, 02, 03) */}
          <div className="hidden md:flex flex-col items-center space-y-3 text-xs font-semibold text-gray-400">
            <span className="text-amber-400">01</span>
            <div className="w-[2px] h-6 bg-amber-400"></div>
            <span>02</span>
            <span>03</span>
          </div>

        </div>

        {/* Mobile Bottom Indicator Dots */}
        <div className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5">
          <div className="w-5 h-1 bg-amber-400 rounded-full"></div>
          <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
