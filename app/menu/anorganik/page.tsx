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
          Sampah anorganik adalah limbah yang tidak dapat terurai secara alami oleh mikroorganisme, seperti plastik, logam, kaca, dan bahan kimia sintetis. Berbeda dengan sampah organik yang mudah terurai, limbah anorganik berasal dari sumber daya tak terbarukan dan dapat bertahan di lingkungan selama bertahun-tahun, bahkan berabad-abad. Hal ini menjadikan limbah anorganik sebagai ancaman serius bagi kelestarian lingkungan.
        </p>
        <p className="text-black text-justify mt-2">
          Limbah anorganik dihasilkan dalam jumlah besar melalui aktivitas manusia, seperti penggunaan plastik, barang elektronik, dan proses industri. Karena sifatnya yang tidak biodegradabel, limbah ini menumpuk di lingkungan, mencemari tanah, air, dan udara. Plastik adalah salah satu contoh limbah anorganik paling umum, yang meskipun tahan lama, dapat terurai menjadi mikroplastik yang berbahaya bagi ekosistem dan kesehatan manusia.
        </p>
        <p className="text-black text-justify mt-2">
          Selain plastik, limbah anorganik meliputi logam, kaca, karet, dan limbah elektronik. Logam seperti aluminium dan tembaga banyak digunakan dalam industri, sedangkan kaca digunakan dalam produk seperti botol dan jendela. Meskipun beberapa limbah, seperti kaca, dapat didaur ulang, proses daur ulang yang tidak efisien sering kali menyebabkan penumpukan sampah di lingkungan.
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

      {/* Paving Blok */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pengolahan Sampah Anorganik</h2>
        <h3 className="text-xl font-semibold mb-1">1. Paving Blok dari Sampah Plastik</h3>
        <p className="text-black text-justify">
          Pengolahan sampah anorganik, khususnya plastik, menjadi paving blok adalah salah satu inovasi 
          penting dalam mendaur ulang limbah plastik sekaligus mengurangi pencemaran lingkungan. Proses ini 
          diawali dengan pengumpulan sampah plastik yang sulit terurai, seperti botol, kantong, dan kemasan plastik. 
          Sampah plastik tersebut kemudian dibersihkan dan dipotong kecil-kecil untuk mempermudah proses pengolahan lebih lanjut.
        </p>
        <p className="text-black text-justify mt-2">
          Potongan plastik yang telah disiapkan dilelehkan pada suhu tertentu hingga mencair. Plastik cair ini 
          kemudian dicampur dengan pasir dalam proporsi tertentu untuk meningkatkan kekuatan dan daya tahan paving blok. 
          Setelah tercampur rata, campuran tersebut dituangkan ke dalam cetakan paving blok dan dipadatkan hingga membentuk 
          produk yang solid. Setelah dingin dan mengeras, paving blok plastik siap digunakan.
        </p>
        <p className="text-black text-justify mt-2">
          Paving blok dari limbah plastik memiliki sejumlah keunggulan, seperti daya tahan tinggi terhadap air dan cuaca. 
          Selain itu, inovasi ini juga secara signifikan mengurangi jumlah sampah plastik yang mencemari lingkungan. Dengan 
          mengolah limbah plastik menjadi produk bernilai guna, metode ini tidak hanya membantu menangani masalah sampah tetapi 
          juga mendukung keberlanjutan lingkungan secara keseluruhan.
        </p>
      
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-1 mt-6">
          <div className="w-auto md:w-1/2 flex flex-col items-center">
            <img src="/images/paving-blok1.jpg" alt="Proses pembuatan paving blok" className="w-full sm:w-3/4 md:w-auto lg:w-2/3" />
            <p className="text-black text-center mt-2">Proses pembuatan paving blok</p>
          </div>
          
          <div className="w-auto md:w-1/2 flex flex-col items-center">
            <img src="/images/paving-blok2.jpg" alt="Paving blok hasil olahan sampah plastik" className="w-full sm:w-3/4 md:w-auto lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Paving blok hasil olahan sampah plastik</p>
          </div>

          <div className="w-auto md:w-1/2 flex flex-col items-center">
            <img src="/images/paving-blok3.jpg" alt="Implementasi paving blok" className="w-full sm:w-3/4 md:w-auto lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Implementasi paving blok</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Manfaat:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Mengurangi limbah plastik di lingkungan.</li>
          <li>Menghasilkan produk yang berguna untuk konstruksi.</li>
          <li>Mengurangi penggunaan material alam seperti batu bata.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Cetakan paving blok</li>
          <li>Tong/kaleng besi</li>
          <li>Sarung tangan</li>
          <li>Gunting</li>
          <li>Saringan dan pengaduk</li>
          <li>Sampah plastik</li>
          <li>Pasir</li>
          <li>Pelumas seperti oli atau minyak goreng</li>
          <li>Kayu bakar atau bahan bakar lainnya</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Kumpulkan sampah plastik, seperti botol dan kantong plastik.</li>
          <li>Cuci dan keringkan plastik, kemudian potong kecil-kecil.</li>
          <li>Lelehkan serpihan plastik dalam ketel/panci peleleh pada suhu tertentu hingga menjadi cairan plastik.</li>
          <li>Campurkan plastik cair dengan pasir dalam proporsi tertentu.</li>
          <li>Tuangkan campuran ke dalam cetakan paving blok sesuai ukuran dan bentuk yang diinginkan, kemudian padatkan.</li>
          <li>Biarkan plastik di dalam cetakan mengeras secara alami lalu keluarkan dari cetakan.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Paving Blok</h2>
        <YouTubeEmbed videoIds={["tU1DT_bNPRk"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Daur Ulang Kertas */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">2. Daur Ulang Kertas</h3>
        <p className="text-black text-justify">
          Kertas tidak terpakai yang dapat berasal dari buku, majalah, LKS, dan kertas-kertas lainnya dapat disebut kertas bekas 
          atau sampah kertas. Penyumbang kertas paling banyak biasanya adalah siswa-siswa sekolah yang masih aktif menggunakan kertas 
          sebagai media pembelajaran. Banyaknya kertas bekas tidak terpakai akan menjadi sampah yang menumpuk dan dapat mencemari 
          lingkungan apabila tidak dikelola dengan baik. Akan tetapi, kertas memiliki sifat yang mudah didaur ulang seperti dijadikan
          kertas daur ulang, kerajinan, atau bahan komposit.
        </p>
        <p className="text-black text-justify mt-2">
          Pengelolaan yang paling mudah dilakukan oleh siswa-siswa sekolah adalah daur ulang kertas menjadi kerajinan. Contoh kerajinan 
          yang dapat dibuat dari kertas antara lain adalah vas bunga, kotak pensil, dan patung. Pembuatan kerajinan dari kertas bekas 
          sendiri selain untuk mengelola sampah juga sebagai media untuk mengembangkan kreativitas siswa-siswa sekolah. Selain itu, kerajinan
          mampu memiliki nilai ekonomis yang akan menambah jiwa kewirausahaan para siswa.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-1 mt-6">
          <div className="w-auto md:w-1/2 flex flex-col items-center">
            <img src="/images/daur-ulang-kertas1.jpg" alt="Hasil Daur Ulang Kertas" className="w-full sm:w-3/4 md:w-auto lg:w-2/3" />
            <p className="text-black text-center mt-2">Hasil daur ulang kertas</p>
          </div>
          
          <div className="w-auto md:w-1/2 flex flex-col items-center">
            <img src="/images/daur-ulang-kertas2.jpg" alt="Membuat Kerajinan Peta dari Sampah Kertas" className="w-full sm:w-3/4 md:w-auto lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Membuat kerajinan peta dari olahan sampah kertas oleh anak-anak SDN 1 Kemloko</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Kertas bekas</li>
          <li>Lem kayu</li>
          <li>Cat akrilik</li>
          <li>Gunting</li>
          <li>Ember</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Langkah Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Rendam kertas bekas menggunakan air sampai dapat dihancurkan.</li>
          <li>Kertas bekas yang sudah direndam, dihancurkan sampai berupa serpihan-serpihan kertas kecil.</li>
          <li>Saring kertas hingga sudah tidak ada air yang terserap oleh kertas.</li>
          <li>Campur serpihan kertas yang sudah disaring dengan lem kayu.</li>
          <li>Bubur kertas sudah siap lalu dapat segera diolah menjadi kerajinan.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Daur Ulang Kertas</h2>
        <YouTubeEmbed videoIds={["Ydjg8pnJGqA"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

    </div>
  );
};

export default AnorganikPage;
