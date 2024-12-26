import { FC } from 'react';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const AnorganikPage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Sampah Anorganik</h1>

      {/* Penjelasan Sampah Anorganik */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Apa Itu Sampah Anorganik?</h2>
        <p className="text-black text-justify">
          Sampah anorganik adalah sampah yang tidak berasal dari makhluk hidup dan tidak mudah terurai, seperti plastik, kaca, dan logam. Sampah ini membutuhkan proses khusus untuk didaur ulang atau dibuang dengan aman.
        </p>
      </section>

      {/* Macam-macam Sampah Anorganik */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Macam-Macam Sampah Anorganik</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/26.png" alt="Botol Plastik" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Botol Plastik</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/7.png" alt="Sampah Kaleng" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Sampah Kaleng</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/8.png" alt="Kantong Plastik" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Kantong Plastik</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/9.png" alt="Sampah Kaca" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Sampah Kaca</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/10.png" alt="Sampah Kertas" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Sampah Kertas</p>
          </div>
        </div>
      </section>

      {/* Pengolahan Sampah Anorganik dengan Paving Blok */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pengolahan Sampah Anorganik</h2>
        <h3 className="text-xl font-semibold mb-1">1. Paving Blok dari Plastik</h3>
        <p className="text-black text-justify">
          Sampah anorganik seperti plastik dapat diolah menjadi paving blok dengan metode sederhana. Proses ini membantu mengurangi sampah plastik di masyarakat.
        </p>
        <img src="/images/14.png" alt="Skema Paving Blok" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Paving Blok</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Mengurangi limbah plastik di lingkungan.</li>
          <li>Menghasilkan produk yang berguna untuk konstruksi.</li>
          <li>Mengurangi penggunaan material alam seperti batu bata.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Plastik bekas (botol, kantong plastik, dll.).</li>
          <li>Semen.</li>
          <li>Cetakan paving blok.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Kumpulkan sampah plastik, seperti botol dan kantong plastik.</li>
          <li>Cuci dan keringkan plastik, kemudian potong kecil-kecil.</li>
          <li>Campurkan plastik dengan adukan semen hingga merata.</li>
          <li>Cetak adukan ke dalam cetakan paving blok.</li>
          <li>Biarkan hingga kering selama beberapa hari.</li>
          <li>Paving blok siap digunakan.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Paving Blok</h2>
        <YouTubeEmbed videoIds={["GfT0nfVq01w"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Anorganik dengan Paving Blok */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">2. Paving Blok dari Plastik</h3>
        <p className="text-black text-justify">
          Sampah anorganik seperti plastik dapat diolah menjadi paving blok dengan metode sederhana. Proses ini membantu mengurangi sampah plastik di masyarakat.
        </p>
        <img src="/images/14.png" alt="Skema Paving Blok" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Paving Blok</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Mengurangi limbah plastik di lingkungan.</li>
          <li>Menghasilkan produk yang berguna untuk konstruksi.</li>
          <li>Mengurangi penggunaan material alam seperti batu bata.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Plastik bekas (botol, kantong plastik, dll.).</li>
          <li>Semen.</li>
          <li>Cetakan paving blok.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Kumpulkan sampah plastik, seperti botol dan kantong plastik.</li>
          <li>Cuci dan keringkan plastik, kemudian potong kecil-kecil.</li>
          <li>Campurkan plastik dengan adukan semen hingga merata.</li>
          <li>Cetak adukan ke dalam cetakan paving blok.</li>
          <li>Biarkan hingga kering selama beberapa hari.</li>
          <li>Paving blok siap digunakan.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Paving Blok</h2>
        <YouTubeEmbed videoIds={["GfT0nfVq01w"]} className="w-full sm:w-2/4 aspect-video mx-auto" />
      </section>
    </div>
  );
};

export default AnorganikPage;
