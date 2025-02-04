import { FC } from 'react';

const ResiduPage: FC = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Sampah Residu</h1>

      {/* Penjelasan Sampah Residu */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Apa Itu Sampah Residu?</h2>
        <p className="text-black text-justify">
          Sampah residu adalah jenis sampah yang sulit untuk didaur ulang, baik karena sulitnya proses dalam
          mendaur ulang, maupun karena sampah tersebut telah terkontaminasi, dan kemungkinan besar akan
          berakhir di TPA.
        </p>
        <p className="text-black text-justify mt-2">
          Karena sifatnya yang sulit untuk terurai di alam, sampah residu harus dikelola dengan baik agar tidak
          terbuang ke lingkungan dan menjadi sumber pencemaran. Ciri-ciri sampah residu ialah sulit didaur ulang, memiliki potensi
          sumber penyakit, dan biaya yang tinggi untuk mendaur ulang. Contohnya seperti plastic wrap atau cling wrap yang sangat 
          fleksibel dan tipis sehingga rentan terbelit di dalam mesin, popok/pembalut dan tisu bekas, dan bahan tekstil.
        </p>
      </section>

      {/* Macam-macam Sampah Residu */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Macam-Macam Sampah Residu</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/21.png" alt="Popok Bekas" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Popok dan Pembalut Bekas</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/20.png" alt="Masker Bekas" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Masker Bekas</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/styrofoam.png" alt="Styrofoam" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Styrofoam</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/16.png" alt="Bungkus Sisa Makanan" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Bungkus Sisa Makanan</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/tisu.png" alt="Tisu" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Tisu Kering atau Basah</p>
          </div>
        </div>
      </section>

      {/* Pentingnya Pengelolaan Sampah Residu */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pentingnya Pengelolaan yang Tepat</h2>
        <p className="text-black text-justify">
          Sampah residu memerlukan pengelolaan yang tepat untuk mengurangi dampak negatifnya terhadap
          lingkungan dan kesehatan manusia. Beberapa langkah yang dapat diambil untuk mengelola sampah
          residu secara efisien adalah:
        </p>
        <h3 className="text-xl font-semibold mt-4">1. Sumber Pengurangan Sampah</h3>
        <p className="text-black text-justify">
          Mengurangi produksi sampah residu dengan menghindari penggunaan produk sekali pakai dan memilih
          produk yang mudah didaur ulang.
        </p>
        <h3 className="text-xl font-semibold mt-4">2. Pengolahan Lanjutan</h3>
        <p className="text-black text-justify">
          Beberapa sampah residu dapat diproses melalui metode seperti pembakaran terkendali atau
          pemanfaatan energi dari sampah (Waste-to-Energy) untuk menghasilkan listrik.
        </p>
        <p className="text-black text-justify">
          Selain itu, sampah residu juga dapat diatasi dengan dibersihkan dari kontaminan, dikeringkan, kemudian
          dapat dibakar atau dibuang ke TPA.
        </p>
        <h3 className="text-xl font-semibold mt-4">3. Pendidikan dan Kesadaran Masyarakat</h3>
        <p className="text-black text-justify">
          Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah residu yang tepat,
          termasuk pemilahan dan pembuangan di tempat yang sesuai, juga sangat krusial.
        </p>
      </section>
    </div>
  );
};

export default ResiduPage;