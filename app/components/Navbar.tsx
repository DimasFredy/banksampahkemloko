'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Kontrol dropdown "Menu"
  const [isNavOpen, setIsNavOpen] = useState(false);  // Kontrol navigasi di ponsel

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Membuka/menutup dropdown
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Menutup dropdown setelah memilih opsi
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Membuka/menutup navigasi untuk ponsel
  };

  return (
    <nav className="bg-blue-900 p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/1.png"
            alt="Logo KKN"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-white text-xl font-bold">Bank Sampah Desa Kemloko</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="text-white md:hidden"
          onClick={toggleNav}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6`}
        >
          <Link
            href="/"
            className="text-white block mt-4 md:mt-0 hover:underline"
            onClick={closeMenu} // Tutup menu jika dipilih
          >
            Beranda
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="text-white mt-4 md:mt-0 flex items-center"
              onClick={toggleMenu}
            >
              Menu
              <span className="ml-2">{isMenuOpen ? '▲' : '▼'}</span>
            </button>

            {isMenuOpen && (
              <div className="absolute bg-blue-800 mt-1 rounded shadow z-50">
                <Link
                  href="/menu/organik"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={closeMenu} // Tutup menu setelah pilihan di klik
                >
                  Organik
                </Link>
                <Link
                  href="/menu/anorganik"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={closeMenu} // Tutup menu setelah pilihan di klik
                >
                  Anorganik
                </Link>
                <Link
                  href="/menu/peta-persebaran"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={closeMenu} // Tutup menu setelah pilihan di klik
                >
                  Peta Persebaran
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          <Link
            href="/tentang-kami"
            className="text-white block mt-4 md:mt-0 hover:underline"
            onClick={closeMenu} // Tutup menu setelah memilih opsi
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
