"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-amber-800 mr-2">🐇</span>
          <span className="text-xl font-bold text-amber-900">
            Nutri Rabbit Kenya
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="#" 
            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="#" 
            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="#" 
            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
          >
            Ecosystem
          </Link>
          <Link 
            href="#" 
            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
          >
            Products
          </Link>
          <Link 
            href="#" 
            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-900 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-100 px-4 pt-2 pb-4 space-y-3">
          <Link 
            href="#" 
            className="block py-2 text-amber-900 hover:text-amber-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#" 
            className="block py-2 text-amber-900 hover:text-amber-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#" 
            className="block py-2 text-amber-900 hover:text-amber-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Ecosystem
          </Link>
          <Link 
            href="#" 
            className="block py-2 text-amber-900 hover:text-amber-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="#" 
            className="block py-2 text-amber-900 hover:text-amber-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}