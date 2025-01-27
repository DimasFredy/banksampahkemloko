import { FC } from 'react';
import Image from 'next/image';

const TentangKamiPage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Bagian Tim KKN Kami */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-black text-center">
          Tim KKN Kami
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gambar kiri */}
          <div className="flex justify-center md:justify-start items-center">
            <Image
              src="/images/tim2.jpg"
              alt="Foto aktivitas tim 1"
              width={250}
              height={250}
              className="rounded shadow"
            />
          </div>

          {/* Penjelasan kanan */}
          <div className="flex-1 text-black text-justify hyphens-auto">
            <p className="mb-4" style={{ wordSpacing: 'normal' }}>
              Tim KKN kami terlibat dalam berbagai aktivitas untuk mendukung pengelolaan
              sampah di Desa Kemloko. Kami bekerja sama dengan masyarakat untuk memilah sampah
              organik dan anorganik, serta mengedukasi pentingnya daur ulang untuk lingkungan
              yang lebih bersih.
            </p>
            <p>
              Melalui kolaborasi erat dengan masyarakat, kami telah membantu menciptakan produk
              ramah lingkungan dan meningkatkan kesadaran masyarakat akan pentingnya
              pengelolaan sampah yang berkelanjutan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKamiPage;
