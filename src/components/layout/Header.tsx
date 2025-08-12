'use client';

import Link from 'next/link';
import { useState } from 'react';
import data from "@/components/layout/data/menu.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
           
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {data.menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-gray-400 transition-colors font-medium"
            > 
              {item.label}
            </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {data.menu.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block px-3 py-2 text-gray-600 hover:text-gray-400 hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              > 
                {item.label}
              </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
