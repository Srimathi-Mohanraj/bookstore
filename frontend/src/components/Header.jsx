// src/components/Header.jsx
import React from "react";
import { FaHome, FaBook, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { itemCount } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-[#0f1724] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 rounded p-2 text-black">
            {/* small logo */}
            <svg width="20" height="20" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="4" rx="2" fill="#111827" /></svg>
          </div>
          <div className="text-white font-semibold">BookStore</div>
        </div>

        <nav className="flex items-center gap-6 text-white">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90">
            <FaHome /> <span className="hidden sm:inline">Home</span>
          </Link>
          <Link to="/books" className="flex items-center gap-2 hover:opacity-90">
            <FaBook /> <span className="hidden sm:inline">Books</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:opacity-90">
            <FaEnvelope /> <span className="hidden sm:inline">Contact</span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaShoppingCart className="text-white" />
            <span>Cart</span>
            <span className={`px-2 py-0.5 rounded-full text-sm ${itemCount ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}>
              {itemCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
