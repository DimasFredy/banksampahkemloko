"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <header className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-96"
        >
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-96"
              style={{ backgroundImage: 'url(/images/112.png)' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Solusi Sampah Berkelanjutan</h1>
                  <p className="text-lg mb-6">
                    Berkontribusi untuk lingkungan dengan mengelola sampah organik dan
                    anorganik secara berkelanjutan.
                  </p>
                  <Link
                    href="/tentang-kami"
                    className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-700"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-96"
              style={{ backgroundImage: 'url(/images/12.png)' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Konservasi Lingkungan</h1>
                  <p className="text-lg mb-6">
                    Mendorong keberlanjutan dengan pengelolaan sampah yang efektif
                  </p>
                  <Link
                    href="/tentang-kami"
                    className="bg-green-600 px-6 py-2 rounded text-white hover:bg-green-700"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-96"
              style={{ backgroundImage: 'url(/images/13.png)' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Gerakan Peduli Sampah</h1>
                  <p className="text-lg mb-6">
                    Bersama-sama menjaga kebersihan lingkungan melalui pengelolaan sampah
                  </p>
                  <Link
                    href="/tentang-kami"
                    className="bg-green-600 px-6 py-2 rounded text-white hover:bg-green-700"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>

      {/* Grid Menu */}
      <section className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Strategi Pemilahan */}
        <div className="bg-gray-300 p-6 text-center rounded shadow">
          <Image src="/images/strategi.png" alt="Strategi Pemilahan" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Strategi Pemilahan</h2>
          <p className="text-gray-700 mb-4">Langkah-langkah pemilahan sampah yang efektif untuk lingkungan.</p>
          <Link href="/menu/strategi-pemilahan" className="text-gray-600 font-bold hover:underline">Lihat Detail</Link>
        </div>

        {/* Sampah Organik */}
        <div className="bg-green-100 p-6 text-center rounded shadow">
          <Image src="/images/organik-animasi.png" alt="Sampah Organik" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-green-800">Sampah Organik</h2>
          <p className="text-gray-700 mb-4">Mengelola sampah organik menjadi kompos dan energi terbarukan.</p>
          <Link href="/menu/organik" className="text-green-600 font-bold hover:underline">Lihat Detail</Link>
        </div>

        {/* Sampah Anorganik */}
        <div className="bg-blue-100 p-6 text-center rounded shadow">
          <Image src="/images/anorganik-animasi.png" alt="Sampah Anorganik" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Sampah Anorganik</h2>
          <p className="text-gray-700 mb-4">Daur ulang sampah anorganik untuk menciptakan produk baru.</p>
          <Link href="/menu/anorganik" className="text-blue-600 font-bold hover:underline">Lihat Detail</Link>
        </div>

        {/* Residu */}
        <div className="bg-red-100 p-6 text-center rounded shadow">
          <Image src="/images/19.png" alt="Residu" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-red-800">Sampah Residu</h2>
          <p className="text-gray-700 mb-4">Pengelolaan sampah yang tidak dapat didaur ulang.</p>
          <Link href="/menu/residu" className="text-red-600 font-bold hover:underline">Lihat Detail</Link>
        </div>

        {/* Sampah B3 */}
        <div className="bg-purple-100 p-6 text-center rounded shadow">
          <Image src="/images/b3.png" alt="Sampah B3" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Limbah B3</h2>
          <p className="text-gray-700 mb-4">Pengelolaan limbah berbahaya dan beracun secara aman.</p>
          <Link href="/menu/b3" className="text-purple-600 font-bold hover:underline">Lihat Detail</Link>
        </div>
      
        {/* Peta Persebaran */}
        <div className="bg-yellow-100 p-6 text-center rounded shadow">
          <Image src="/images/peta.png" alt="Peta Persebaran" width={150} height={150} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Peta Persebaran</h2>
          <p className="text-gray-700 mb-4">Rekomendasi titik bank sampah di desa Kemloko.</p>
          <Link href="/menu/peta-persebaran" className="text-yellow-600 font-bold hover:underline">Lihat Detail</Link>
        </div>
      </section>
    </div>
  );
}
