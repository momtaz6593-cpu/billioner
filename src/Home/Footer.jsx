import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/KIngs-society.png'

const Footer = () => {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. PC & MAIN DESKTOP FOOTER (Page-er ekdam sheshe thakbe) */}
      {/* ========================================================= */}
      <footer className="w-full bg-[#0b0c10] text-gray-400 text-sm border-t border-gray-800 pt-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="KROWN Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-xl font-bold tracking-widest text-white uppercase">
                  KROWN
                </span>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                More Than Just Clothes.<br />It's a lifestyle.
              </p>
            </div>

            {/* Column 2: Shop Links */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                SHOP
              </h3>
              <ul className="space-y-2 text-xs">
                <li><Link to="/men" className="hover:text-amber-400 transition">Men</Link></li>
                <li><Link to="/boys" className="hover:text-amber-400 transition">Boys</Link></li>
                <li><Link to="/newarrivals" className="hover:text-amber-400 transition">New Arrivals</Link></li>
                <li><Link to="/sale" className="hover:text-amber-400 transition">Sale</Link></li>
              </ul>
            </div>

            {/* Column 3: Collections / Support Links */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                SUPPORT
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-amber-400 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: Follow Us (Social Links Placeholder) */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                FOLLOW US
              </h3>
              <div className="flex items-center space-x-4 text-lg">
                {/* Social media links placeholders */}
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-400 transition">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-400 transition">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-400 transition">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-400 transition">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-400 transition">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Policy Links */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
            <p>© 2026 KROWN. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================= */}
      {/* 2. MOBILE BOTTOM NAVIGATION (Always Fixed At Bottom)      */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b0c10]/95 backdrop-blur-md border-t border-gray-800 z-50 py-2 px-6">
        <div className="flex justify-between items-center text-center">
          
          {/* Home */}
          <Link to="/" className="flex flex-col items-center text-amber-400 hover:text-amber-300 transition">
            <i className="fa-solid fa-house text-lg"></i>
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </Link>

          {/* Shop */}
          <Link to="/collections" className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition">
            <i className="fa-solid fa-store text-lg"></i>
            <span className="text-[10px] mt-1 font-medium">Shop</span>
          </Link>

          {/* Account */}
          <Link to="/account" className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition">
            <i className="fa-regular fa-user text-lg"></i>
            <span className="text-[10px] mt-1 font-medium">Account</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition relative">
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-lg"></i>
              <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-[10px] mt-1 font-medium">Cart</span>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Footer; 