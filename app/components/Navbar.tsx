'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Logo1.png"
            alt="Logo Bank Sampah"
            width={35}
            height={35}
            className="mr-2"
          />
          <span className="text-white text-xl font-bold">Bank Sampah Kemloko</span>
        </div>

        {/* Mobile menu toggle */}
        <button className="text-white md:hidden" onClick={toggleNav}>
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
          <Link href="/" className="text-white block mt-4 md:mt-0 hover:underline" onClick={closeMenu}>
            Beranda
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button className="text-white mt-4 md:mt-0 flex items-center" onClick={toggleMenu}>
              Menu <span className="ml-2">{isMenuOpen ? '▲' : '▼'}</span>
            </button>

            {isMenuOpen && (
              <div className="absolute bg-blue-800 mt-1 rounded shadow z-50">
                <Link href="/menu/strategi-pemilahan" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  Strategi Pemilahan
                </Link>
                <Link href="/menu/organik" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  Organik
                </Link>
                <Link href="/menu/anorganik" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  Anorganik
                </Link>
                <Link href="/menu/residu" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  Residu
                </Link>
                <Link href="/menu/b3" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  B3
                </Link>
                <Link href="/menu/peta-persebaran" className="block px-4 py-2 text-white hover:underline" onClick={closeMenu}>
                  Peta Persebaran
                </Link>
              </div>
            )}
          </div>

          <Link href="/tentang-kami" className="text-white block mt-4 md:mt-0 hover:underline" onClick={closeMenu}>
            Tentang Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
