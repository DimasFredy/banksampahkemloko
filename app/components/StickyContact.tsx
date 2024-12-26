import React from 'react';
import Image from 'next/image';

const StickyContact = () => {
  return (
    <div className="bg-blue-900 bg-opacity-80 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        {/* Bagian Kiri: Logo dan Deskripsi */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Bank Sampah Desa Kemloko</h2>
          {/* Logo Kranggan dan KKN */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <Image
              src="/images/lambang.png"
              alt="Logo UGM"
              width={70}
              height={70}
              className="rounded"
            />
            <Image
              src="/images/kkn.png"
              alt="Logo KKN"
              width={70}
              height={70}
              className="rounded"
            />
            <Image
              src="/images/kranggan.png"
              alt="Logo Kranggan"
              width={70}
              height={70}
              className="rounded"
            />
          </div>
          {/* Deskripsi */}
          <p className="text-sm mt-4 leading-relaxed">
            Kami bangga menjadi salah satu fasilitas daur ulang plastik di Indonesia. <br />
            Mari bersama wujudkan masa depan bebas polusi plastik.
          </p>
        </div>

        {/* Bagian Kanan: Kontak */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="font-bold text-lg">Kontak</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>WhatsApp: +62 823463 39593</li>
            <li>Email: kkn@ugm.ac.id</li>
            <li>Instagram: @pesonakranggan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StickyContact;
