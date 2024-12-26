'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const MenuPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Menu Utama</h1>

      {/* Menu utama dengan tombol (v) */}
      <div className="relative">
        <button
          className="text-blue-500 hover:underline flex items-center"
          onClick={toggleMenu}
        >
          Pilihan Menu
          <span className="ml-2">{isMenuOpen ? '▲' : '▼'}</span> {/* Menampilkan ▼ atau ▲ */}
        </button>

        {/* Menu dropdown */}
        {isMenuOpen && (
          <ul className="list-disc pl-5 mt-2 absolute bg-white shadow-md z-10">
            <li>
              <Link href="/menu/organik" className="text-blue-500 hover:underline">
                Sampah Organik
              </Link>
            </li>
            <li>
              <Link href="/menu/anorganik" className="text-blue-500 hover:underline">
                Sampah Anorganik
              </Link>
            </li>
            <li>
              <Link href="/menu/peta-persebaran" className="text-blue-500 hover:underline">
                Peta Persebaran Bank Sampah
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
