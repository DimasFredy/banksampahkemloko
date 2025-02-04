import { FC } from 'react';

const LimbahB3Page: FC = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Limbah B3</h1>

      {/* Penjelasan Limbah B3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Apa Itu Limbah B3?</h2>
        <p className="text-black text-justify">
        Kata B3 merupakan akronim dari <strong>bahan beracun dan berbahaya.</strong> Oleh karena itu, pengertian limbah B3 dapat 
        diartikan sebagai suatu buangan atau limbah yang sifat dan konsentrasinya mengandung zat yang beracun dan berbahaya 
        sehingga secara langsung maupun tidak langsung dapat merusak lingkungan, mengganggu kesehatan, dan mengancam kelangsungan 
        hidup manusia serta organisme lainya. 
        </p>

        <p className="text-black text-justify mt-2">
        Limbah B3 bukan hanya dapat dihasilkan dari kegiatan industri. Kegiatan rumah tangga 
        juga menghasilkan beberapa limbah jenis ini. Beberapa contoh limbah B3 yang dihasilkan rumah tangga domestik) di antaranya 
        bekas pengharum ruangan, pemutih pakaian, deterjen pakaian, pembersih kamar mandi, pembesih kaca/jendela, pembersih lantai, 
        pengkilat kayu, pembersih oven, pembasmi serangga, lem perekat, hair spray, dan batu baterai.
        </p>
      </section>

      {/* Karakteristik Limbah B3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Karakteristik Limbah B3</h2>
        <ul className="list-disc pl-6 text-black text-justify">
          <li><strong>Mudah meledak:</strong> Dapat meledak pada suhu dan tekanan standar.</li>
          <li><strong>Mudah terbakar:</strong> Bisa menyala pada suhu rendah saat terkena api atau percikan.</li>
          <li><strong>Bukan cairan,</strong> tetapi mudah menyebabkan kebakaran melalui gesekan atau reaksi kimia.</li>
          <li><strong>Limbah bertekanan</strong> yang mudah terbakar.</li>
          <li><strong>Bersifat pengoksidasi</strong> yang dapat menyebabkan reaksi kimia.</li>
        </ul>
      </section>

      {/* Macam-macam Limbah B3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Macam-Macam Limbah B3</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/medis.png" alt="Limbah Medis" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Limbah Medis</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/25.png" alt="Baterai Bekas" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Baterai Bekas</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4">
            <img src="/images/23.png" alt="Kemasan Terkontaminasi" className="mx-auto w-4/4 sm:w-full" />
            <p className="text-black mt-2">Kemasan Terkontaminasi</p>
          </div>
        </div>
      </section>

      {/* Pengelolaan Limbah B3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pengelolaan Limbah B3</h2>
        <p className="text-black text-justify">
          Pengelolaan limbah B3 harus dilakukan dengan baik agar tidak membahayakan lingkungan.
          Langkah-langkah yang bisa diambil meliputi:
        </p>
        <ul className="list-disc pl-6 text-black mt-2 text-justify">
          <li>Minimisasi limbah dengan mengganti bahan berbahaya dengan alternatif yang lebih aman.</li>
          <li>Memilah limbah B3 dari limbah non-B3 untuk mencegah pencampuran.</li>
          <li>Menggunakan kembali atau mendaur ulang limbah jika memungkinkan.</li>
          <li>Membuang limbah sesuai dengan prosedur yang telah ditentukan seperti dibersihkan dari kontaminan menggunakan air atau bahan tertentu.</li>
          <li>Menyimpan limbah dengan aman dan sesuai regulasi.</li>
        </ul>
      </section>
    </div>
  );
};

export default LimbahB3Page;
