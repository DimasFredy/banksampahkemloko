import { FC } from 'react';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const OrganikPage: FC = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Sampah Organik</h1>

      {/* Penjelasan Sampah Organik */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Apa Itu Sampah Organik?</h2>
        <p className="text-black text-justify">
          Salah satu “sampah” yang sering berada di rumah adalah “sampah” organik. Kita bisa mengganti sebutan “sampah” organik menjadi sisa organik, karena ternyata sisa organik mempunyai banyak sekali manfaat jika diolah dengan benar.
        </p>
        <p className="text-black text-justify mt-2">
          Secara alami, sampah organik akan mengalami pembusukan dan peruraian oleh mikroba dan berbagai jenis binatang kecil yang hidup di tanah. Proses ini dapat dimanfaatkan untuk mengelola sampah organik menjadi pupuk dengan metode yang tepat.
        </p>
      </section>

      {/* Macam-macam Sampah Organik */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Macam-Macam Sampah Organik</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/2.png" alt="Sisa Sayuran" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Sisa Sayuran</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/3.png" alt="Buah Busuk" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Buah Busuk</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/4.png" alt="Batok Kelapa" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Batok Kelapa</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/5.png" alt="Daun Kering" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Daun Kering</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/17.png" alt="Sisa Makanan" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Sisa Makanan</p>
          </div>
        </div>
      </section>

      {/* Pengolahan Sampah Organik dengan Losida */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pengolahan Sampah Organik</h2>
        <h3 className="text-xl font-semibold mb-1">1. Metode Losida</h3>
        <p className="text-black text-justify">
          Sampah organik yang sudah dipilah dapat dikelola dengan teknologi sederhana menggunakan metode Lodong Sisa Dapur (Losida). Losida menggunakan pipa paralon yang ditanam sebagian di tanah untuk menampung sampah dapur, seperti makanan, sayuran, atau dedaunan kering.
        </p>
        <img src="/images/15.png" alt="Skema Losida" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Losida</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat Losida:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi sampah organik di masyarakat.</li>
          <li>Menyuburkan tanah sebagai media tanam.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Pipa paralon/PVC sepanjang 120 cm.</li>
          <li>Bor.</li>
          <li>Sekop.</li>
          <li>Penggaris/meteran.</li>
          <li>Spidol permanen.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Siapkan pipa paralon sepanjang 120 cm.</li>
          <li>Buat lubang-lubang kecil pada bagian bawah pipa sepanjang 40 cm.</li>
          <li>Tanam pipa paralon di tanah sehingga 40 cm berada di dalam tanah dan 80 cm di atas tanah.</li>
          <li>Masukkan sampah organik ke dalam pipa.</li>
          <li>Biarkan sampah membusuk selama 2-3 bulan hingga menjadi kompos.</li>
          <li>Cabut pipa dan ambil kompos yang telah terbentuk.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan LOSIDA</h2>
        <YouTubeEmbed videoIds={["J6l9K62NTzE"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Losida */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">2. Metode Losida</h3>
        <p className="text-black text-justify">
          Sampah organik yang sudah dipilah dapat dikelola dengan teknologi sederhana menggunakan metode Lodong Sisa Dapur (Losida). Losida menggunakan pipa paralon yang ditanam sebagian di tanah untuk menampung sampah dapur, seperti makanan, sayuran, atau dedaunan kering.
        </p>
        <img src="/images/15.png" alt="Skema Losida" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Losida</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat Losida:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi sampah organik di masyarakat.</li>
          <li>Menyuburkan tanah sebagai media tanam.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Pipa paralon/PVC sepanjang 120 cm.</li>
          <li>Bor.</li>
          <li>Sekop.</li>
          <li>Penggaris/meteran.</li>
          <li>Spidol permanen.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Siapkan pipa paralon sepanjang 120 cm.</li>
          <li>Buat lubang-lubang kecil pada bagian bawah pipa sepanjang 40 cm.</li>
          <li>Tanam pipa paralon di tanah sehingga 40 cm berada di dalam tanah dan 80 cm di atas tanah.</li>
          <li>Masukkan sampah organik ke dalam pipa.</li>
          <li>Biarkan sampah membusuk selama 2-3 bulan hingga menjadi kompos.</li>
          <li>Cabut pipa dan ambil kompos yang telah terbentuk.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan LOSIDA</h2>
        <YouTubeEmbed videoIds={["GfT0nfVq01w"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Losida */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">3. Metode Losida</h3>
        <p className="text-black text-justify">
          Sampah organik yang sudah dipilah dapat dikelola dengan teknologi sederhana menggunakan metode Lodong Sisa Dapur (Losida). Losida menggunakan pipa paralon yang ditanam sebagian di tanah untuk menampung sampah dapur, seperti makanan, sayuran, atau dedaunan kering.
        </p>
        <img src="/images/15.png" alt="Skema Losida" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Losida</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat Losida:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi sampah organik di masyarakat.</li>
          <li>Menyuburkan tanah sebagai media tanam.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Pipa paralon/PVC sepanjang 120 cm.</li>
          <li>Bor.</li>
          <li>Sekop.</li>
          <li>Penggaris/meteran.</li>
          <li>Spidol permanen.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Siapkan pipa paralon sepanjang 120 cm.</li>
          <li>Buat lubang-lubang kecil pada bagian bawah pipa sepanjang 40 cm.</li>
          <li>Tanam pipa paralon di tanah sehingga 40 cm berada di dalam tanah dan 80 cm di atas tanah.</li>
          <li>Masukkan sampah organik ke dalam pipa.</li>
          <li>Biarkan sampah membusuk selama 2-3 bulan hingga menjadi kompos.</li>
          <li>Cabut pipa dan ambil kompos yang telah terbentuk.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan LOSIDA</h2>
        <YouTubeEmbed videoIds={["7pMUxa6mxfE"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Losida */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">4. Metode Losida</h3>
        <p className="text-black text-justify">
          Sampah organik yang sudah dipilah dapat dikelola dengan teknologi sederhana menggunakan metode Lodong Sisa Dapur (Losida). Losida menggunakan pipa paralon yang ditanam sebagian di tanah untuk menampung sampah dapur, seperti makanan, sayuran, atau dedaunan kering.
        </p>
        <img src="/images/15.png" alt="Skema Losida" className="mt-4 w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto" />
        <p className="text-black text-center mt-2">Skema Losida</p>

        <h4 className="text-lg font-semibold mt-4">Manfaat Losida:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi sampah organik di masyarakat.</li>
          <li>Menyuburkan tanah sebagai media tanam.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Pipa paralon/PVC sepanjang 120 cm.</li>
          <li>Bor.</li>
          <li>Sekop.</li>
          <li>Penggaris/meteran.</li>
          <li>Spidol permanen.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Siapkan pipa paralon sepanjang 120 cm.</li>
          <li>Buat lubang-lubang kecil pada bagian bawah pipa sepanjang 40 cm.</li>
          <li>Tanam pipa paralon di tanah sehingga 40 cm berada di dalam tanah dan 80 cm di atas tanah.</li>
          <li>Masukkan sampah organik ke dalam pipa.</li>
          <li>Biarkan sampah membusuk selama 2-3 bulan hingga menjadi kompos.</li>
          <li>Cabut pipa dan ambil kompos yang telah terbentuk.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan LOSIDA</h2>
        <YouTubeEmbed videoIds={["9JYp4Rkz0J0"]} className="w-full sm:w-2/4 aspect-video mx-auto" />
      </section>
    </div>
  );
};

export default OrganikPage;
