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
          Secara alami, sampah organik akan mengalami pembusukan dan peruraian oleh mikroba dan berbagai jenis binatang kecil yang hidup di tanah. Proses ini dapat dimanfaatkan untuk mengelola sampah organik menjadi pupuk jika menggunakan metode yang tepat.
        </p>
        <p className="text-black text-justify mt-2">
          Selain itu, sisa organik juga dapat diolah menggunakan metode lain seperti Ember Tumpuk, Biopori, Losida, Briket dari batok kelapa, dll. Dengan beragam metode pengolahan ini, sisa organik tidak lagi dianggap sebagai sampah, melainkan sebagai sumber daya berharga yang dapat dimanfaatkan untuk kehidupan sehari-hari.
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
            <p className="text-black mt-2">Tempurung Kelapa</p>
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

      {/* Pengolahan Sampah Organik dengan Ember Tumpuk */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pengolahan Sampah Organik</h2>
        <h3 className="text-xl font-semibold mb-1">1. Ember Tumpuk</h3>
        <p className="text-black text-justify">
          Ember tumpuk adalah alat sederhana yang digunakan untuk mengolah sampah organik menjadi kompos. Metode ini menggunakan beberapa ember plastik yang disusun bertingkat, di mana ember atas berfungsi untuk menampung sampah organik dan ember bawah untuk menampung cairan hasil proses dekomposisi (lindi).
        </p>
        <p className="text-black text-justify mt-2">
          Prinsip dasar ember tumpuk adalah ember atas berfungsi menampung sampah organik dan melakukan pengomposan sedangkan ember bawah berfungsi mengumpulkan cairan lindi yang akan diolah menjadi pupuk cair.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/ember.jpg" alt="Skema Ember Tumpuk" className="w-full sm:w-3/4 md:w-full lg:w-2/3" />
            <p className="text-black text-center mt-2">Skema ember tumpuk</p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/ember-tumpuk2.jpg" alt="Penyerahan Ember Tumpuk" className="w-full sm:w-3/4 md:w-full lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Sosialisasi ember tumpuk kepada Kelompok Wanita Tani (KWT) Dusun Klowok Kidul</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Keunggulan Ember Tumpuk:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li><strong>Efisien:</strong> Tidak memerlukan banyak ruang, cocok untuk area perkotaan.</li>
          <li><strong>Ekonomis:</strong> Menggunakan ember bekas atau murah, tidak membutuhkan alat mahal.</li>
          <li><strong>Ramah lingkungan:</strong> Mengolah sampah organik secara mandiri, mengurangi pencemaran.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Persiapan Alat:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Lubangi dasar ember atas dengan diameter 5 mm (untuk aliran cairan).</li>
          <li>Pasang keran di ember bawah sekitar 5 cm dari dasar untuk menampung cairan lindi.</li>
          <li>Susun ember dengan posisi ember atas di atas ember bawah.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li><strong>Persiapan bahan:</strong> Siapkan ember bertingkat dengan lubang di bagian dasar ember atas dan tengah untuk sirkulasi udara dan pembuangan cairan. Gunakan ember tanpa lubang di bagian bawah sebagai penampung lindi.</li>
          <li><strong>Pemotongan limbah:</strong> Potong sampah organik rumah tangga menjadi bagian kecil agar lebih mudah terurai.</li>
          <li><strong>Penyusunan lapisan: </strong> Letakkan tanah sebagai lapisan dasar dalam ember tumpuk dan tambahkan limbah organik di atas tanah secara merata.</li>
          <li><strong> Penambahan cairan fermentasi:</strong> Campurkan air cucian beras, molase, air bersih, dan EM4, lalu siramkan ke dalam ember untuk mempercepat proses fermentasi.</li>
          <li><strong>Perawatan dan pencampuran:</strong> Aduk isi ember setiap 1 kali dalam seminggu agar proses dekomposisi berjalan merata. Pastikan ember tertutup untuk menghindari gangguan hama dan bau tidak sedap.</li>
          <li><strong>Panen cairan lindi (POC):</strong> Masukkan lindi ke botol bening dan biarkan di bawah sinar matahari hingga warnanya berubah menjadi coklat tua. Cairan lindi dapat diencerkan dengan air (1:10) sebelum digunakan sebagai pupuk cair.</li>
          <li><strong>Panen kompos padat:</strong> Setelah 1–2 bulan, sampah organik akan terurai menjadi kompos padat. Kompos dapat digunakan langsung sebagai pupuk padat untuk tanaman atau sumber mikroba perombak.</li>
        </ol>

        <h4 className="text-lg font-semibold mt-4">Manfaat Pupuk Organik Cair:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Cepat meresap ke tanah dan mudah diserap oleh tanaman.</li>
          <li>Meningkatkan kandungan nutrisi tanah.</li>
          <li>Mendukung pertanian organik.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Manfaat Kompos Padat:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Memperbaiki struktur tanah dan meningkatkan kesuburan.</li>
          <li>Menambah ketersediaan unsur hara secara bertahap (slow release).</li>
          <li>Mengurangi ketergantungan pada pupuk kimia.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Tips untuk Pengguna Baru:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li>Hindari memasukkan bahan berminyak, daging, atau plastik.</li>
          <li>Aduk sampah setiap minggu untuk memastikan proses penguraian merata.</li>
          <li>Simpan ember di tempat teduh dan jauh dari sinar matahari langsung.</li>
        </ul>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Ember Tumpuk</h2>
        <YouTubeEmbed videoIds={["HgJ8HZ5De8I"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Briket */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">2. Briket dari Tempurung Kelapa</h3>
        <p className="text-black text-justify">
          Metode pengolahan briket tempurung kelapa adalah cara mengubah limbah tempurung kelapa menjadi briket energi alternatif yang efisien dan ramah lingkungan. Proses ini dimulai dengan membakar tempurung kelapa dalam kondisi terbatas oksigen untuk menghasilkan arang. Arang tersebut kemudian digiling menjadi serbuk halus yang siap diolah lebih lanjut.
        </p>
        <p className="text-black text-justify mt-2">
          Setelah menjadi serbuk, arang dicampur dengan bahan perekat seperti tepung tapioka yang telah dilarutkan dalam air untuk membentuk adonan. Adonan ini kemudian dicetak menggunakan alat cetak khusus untuk memberikan bentuk pada briket. Briket yang telah dicetak dikeringkan di bawah sinar matahari atau dengan oven bersuhu rendah hingga kadar airnya berkurang dan teksturnya menjadi padat.
        </p>
        <p className="text-black text-justify mt-2">
          Briket tempurung kelapa memiliki banyak manfaat, termasuk sebagai bahan bakar alternatif untuk memasak, industri, dan kegiatan lainnya. Produk ini memiliki daya bakar tinggi dan emisi karbon yang lebih rendah dibandingkan bahan bakar fosil, sehingga lebih ramah lingkungan. Selain mengurangi limbah organik, briket tempurung kelapa juga menjadi solusi energi berkelanjutan.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/briket1.jpg" alt="Proses Pembakaran Tempurung Kelapa" className="w-full sm:w-3/4 md:w-full lg:w-2/3" />
            <p className="text-black text-center mt-2">Proses pembakaran tempurung kelapa</p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/briket2.jpg" alt="Briket dari Tempurung Kelapa" className="w-full sm:w-3/4 md:w-full lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Briket dari tempurung kelapa</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Manfaat Briket:</h4>
        <ul className="list-disc pl-5 text-black text-justify">
          <li><strong>Sebagai sumber energi alternatif:</strong> Mengganti bahan bakar fosil untuk keperluan rumah tangga atau industri.</li>
          <li><strong>Ramah lingkungan:</strong> Menghasilkan emisi karbon yang lebih rendah dibandingkan bahan bakar lainnya.</li>
          <li><strong>Ekonomis:</strong> Lebih hemat biaya karena daya bakarnya tahan lama.</li>
          <li><strong>Pemanfaatan limbah:</strong> Mengurangi limbah organik seperti tempurung kelapa, serbuk gergaji, atau biomassa lainnya.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Gergaji besi</li>
          <li>Saringan</li>
          <li>Drum/kaleng pembakaran</li>
          <li>Penggiling daging atau penumbuk arang</li>
          <li>Sarung tangan plastik</li>
          <li>Cetakan</li>
          <li>Tempurung kelapa</li>
          <li>Tepung tapioka</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Siapkan tempurung kelapa yang sudah di potong kecil.</li>
          <li>Buat lubang di drum/kaleng pembakaran.</li>
          <li>Masukan tempurung kelapa di drum/kaleng pembakaran.</li>
          <li>Haluskan tempurung dengan penggiling daging</li>
          <li>Saring tempurung kelapa yang sudah digiling.</li>
          <li>Buat adonan tepung tapioka dengan air panas 9:1.</li>
          <li>Campurkan tempurung halus dengan adonan tepung tapioka.</li>
          <li>Cetak adonan dan keringkan di bawah sinar matahari.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Briket</h2>
        <YouTubeEmbed videoIds={["01WoNDGuits"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Biopori */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">3. Metode Biopori</h3>
        <p className="text-black text-justify">
          Biopori adalah lubang silindris vertikal di tanah yang berfungsi sebagai metode resapan air untuk mengurangi genangan dan meningkatkan daya serap tanah. Selain itu, biopori juga berfungsi sebagai komposter aerob untuk mengolah sampah organik menjadi kompos. Lubang ini diisi dengan sampah organik mudah terurai, yang memberdayakan cacing dan mikroorganisme untuk membentuk pori-pori tanah, meningkatkan resapan air, dan menyediakan oksigen di dalam tanah.
        </p>
        <p className="text-black text-justify mt-2">
          Penguraian sampah dalam lubang biopori memakan waktu sekitar 2 minggu untuk sampah dapur dan 2 bulan untuk sampah kebun. Sampah organik yang terurai akan mendukung fauna tanah, menghasilkan kompos, dan menyuburkan tanah di sekitar lubang. Kompos yang terbentuk dapat dimanfaatkan sebagai pupuk untuk tanaman, memberikan manfaat lingkungan yang berkelanjutan.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/Biopori.png" alt="Skema Biopori" className="w-full sm:w-3/4 md:w-full lg:w-2/3" />
            <p className="text-black text-center mt-2">Skema biopori</p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/Biopori2.jpg" alt="Implementasi Biopori" className="w-full sm:w-3/4 md:w-full lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Penerapan biopori</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Manfaat Biopori:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Memaksimalkan air yang meresap ke dalam tanah sehingga menambah air tanah.</li>
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi genangan air yang menimbulkan penyakit.</li>
          <li>Mengurangi resiko banjir di musim hujan.</li>
          <li>Mencegah terjadinya erosi tanah dan bencana tanah longsor.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat dan Bahan:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Bor tanah</li>
          <li>Pipa PVC berdiameter 20 cm</li>
          <li>Tutup pipa</li>
          <li>Sampah organik dari sisa sayuran, buah, rumput, daun</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Metode Pembuatan:</h4>
        <ol className="list-decimal pl-5 text-black text-justify">
          <li>Buat lubang silinder secara vertikal ke dalam tanah dengan diameter 20 cm kedalaman kurang lebih 100 cm atau tidak sampai melampaui muka air tanah bila air tanahnya dangkal. Jarak antar lubang antara 50-100 cm.</li>
          <li>Mulut lubang dapat diperkuat dengan semen. </li>
          <li>Isi lubang dengan sampah organik, yang berasal dari sampah dapur, sisa tanaman, dedaunan atau ranting pohon yang sudah dicacah (2-4 cm).</li>
          <li>Tutup lubang biopori yang telah terisi sampah organik menggunakan tutup pipa.</li>
          <li>Kompos yang terbentuk dalam lubang dapat diambil pada setiap akhir musim kemarau bersamaan dengan pemeliharaan lubang resapan.</li>
          <li>Proses pengomposan akan membutuhkan waktu selama 2-3 bulan sampai berubah menjadi pupuk kompos yang siap digunakan.</li>
          <li>Jaga lubang agar selalu terisi sampah organik, sehingga lubang tidak terisi oleh tanah, pasir atau benda lain selain sampah organik. Ada beberapa jenis sampah organik yang berpotensi bau, kondisi ini dapat direndam dengan sampah kering yang menyumbat mulut lubang resapan biopori.</li>
        </ol>
      </section>

      {/* Video Tutorial */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Video Tutorial Pembuatan Biopori</h2>
        <YouTubeEmbed videoIds={["bzRDG9NMbOU"]} className="w-full sm:w-2/4 aspect-video mx-auto mb-8" />
      </section>

      {/* Pengolahan Sampah Organik dengan Losida */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-1">4. Metode LOSIDA</h3>
        <p className="text-black text-justify">
          Sampah organik yang sudah dipilah dapat dikelola dengan teknologi sederhana menggunakan metode Lodong Sisa Dapur (Losida). Losida menggunakan pipa paralon yang ditanam sebagian di tanah untuk menampung sampah dapur, seperti makanan, sayuran, atau dedaunan kering.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/Losida2.jpg" alt="Skema Losida" className="w-full sm:w-3/4 md:w-full lg:w-2/3" />
            <p className="text-black text-center mt-2">Skema LOSIDA</p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img src="/images/Losida.jpeg" alt="Implementasi Losida" className="w-full sm:w-3/4 md:w-full lg:w-2/3 mt-4" />
            <p className="text-black text-center mt-2">Implementasi LOSIDA</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-4">Manfaat LOSIDA:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Membuat kompos alami dari sampah organik.</li>
          <li>Mengurangi sampah organik di masyarakat.</li>
          <li>Menyuburkan tanah sebagai media tanam.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Alat:</h4>
        <ul className="list-disc pl-5 text-black">
          <li>Pipa paralon/PVC berdiameter 20 cm</li>
          <li>Bor</li>
          <li>Sekop</li>
          <li>Penggaris/meteran</li>
          <li>Spidol permanen</li>
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
        <YouTubeEmbed videoIds={["V9YKLqar1ao"]} className="w-full sm:w-2/4 aspect-video mx-auto" />
      </section>
    </div>
  );
};

export default OrganikPage;
