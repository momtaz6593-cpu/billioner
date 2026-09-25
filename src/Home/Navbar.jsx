import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/KIngs-society.png'

const Navbar = () => {
  // মোবাইল মেনু খোলা নাকি বন্ধ তা ট্র্যাক করার জন্য State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b0c10] text-white border-b border-gray-800">
      {/* ১. টপ অ্যানাউন্সমেন্ট বার */}
      <div className="bg-black border-b border-gray-800/80 text-xs py-2 px-4 md:px-8 flex justify-between items-center text-gray-400">
        <div>Free Shipping on Orders Over $75</div>
        <div className="hidden md:flex items-center space-x-2">
          <span>Better Style</span>
          <span className="text-amber-400">•</span>
          <span>Bigger Dreams</span>
        </div>
      </div>

      {/* ২. মেইন নেভবার */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* মোবাইল: হ্যামবার্গার আইকন */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl text-gray-300 hover:text-white focus:outline-none"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* লোগো এবং পিসি মেনু লিংক */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <img
              src= {logo}
              alt="Logo"
              className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover"
            />
          </a>

          {/* পিসি মেনু লিংক */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <Link to="/men" className="hover:text-amber-400 transition">Men</Link>
            <Link to="/boys" className="hover:text-amber-400 transition">Boys</Link>
            <Link to="/newarrivals" className="hover:text-amber-400 transition">New Arrivals</Link>
            <Link to="/collections" className="hover:text-amber-400 transition">Collections</Link>
            <Link to="/sale" className="hover:text-amber-400 transition">Sale</Link>
          </nav>
        </div>

        {/* সার্চ ইনপুট (পিসির জন্য) */}
        <div className="hidden md:flex flex-1 max-w-xs relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-[#121318] border border-gray-800 rounded-md py-1.5 pl-3 pr-9 text-xs text-gray-200 focus:outline-none focus:border-gray-600 placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* ডানপাশের আইকনসমূহ (User, Wishlist, Cart) */}
        <div className="flex items-center space-x-4 md:space-x-5">
          <button className="md:hidden text-gray-300 hover:text-amber-400 text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <a href="#" className="hidden md:block text-gray-300 hover:text-amber-400 text-lg">
            <i className="fa-regular fa-user"></i>
          </a>

          <a href="#" className="hidden md:block text-gray-300 hover:text-amber-400 text-lg">
            <i className="fa-regular fa-heart"></i>
          </a>

          <a href="#" className="relative text-gray-300 hover:text-amber-400 text-lg">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </a>
        </div>

      </div>

      {/* ৩. মোবাইল ড্রপডাউন মেনু */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0c10] border-t border-gray-800 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <Link to="/men" className="hover:text-amber-400 transition">Men</Link>
            <Link to="/boys" className="hover:text-amber-400 transition">Boys</Link>
            <Link to="/newarrivals" className="hover:text-amber-400 transition">New Arrivals</Link>
            <Link to="/collections" className="hover:text-amber-400 transition">Collections</Link>
            <Link to="/sale" className="hover:text-amber-400 transition">Sale</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;