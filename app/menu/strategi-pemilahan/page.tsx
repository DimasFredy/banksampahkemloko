import { FC } from 'react';

const StrategiPemilahanPage: FC = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Strategi Pemilahan Sampah</h1>

      <section className="mb-6">
        <p className="text-black text-justify">
          Pemilahan sampah sangat penting untuk mengurangi dampak negatif terhadap lingkungan. Jika semua sampah
          dikumpulkan dalam satu tempat tanpa pemilahan, berbagai jenis sampah seperti organik, anorganik, dan residu
          akan tercampur, menyebabkan sulitnya proses pengolahan. Sampah yang tercampur akan meningkatkan volume di
          Tempat Pembuangan Akhir (TPA), mempercepat penuhnya TPA, dan menyebabkan pencemaran tanah serta air tanah akibat
          leachate atau air lindi yang dihasilkan dari tumpukan sampah. Selain itu, pencampuran sampah berbahaya
          seperti limbah medis dan limbah elektronik dapat mencemari lingkungan dan berisiko bagi kesehatan manusia.
        </p>
      </section>

      {/* Gambar Bank Sampah */}
      <div className="flex flex-col items-center my-3">
        <img src="/images/bank-sampah.jpg" alt="Bank Sampah" className="mx-auto w-4/4 sm:w-full" />
        <p className="text-black mt-2 text-center">Skema Bank Sampah</p>
    </div>

      <section className="mb-6">
        <p className="text-black text-justify">
          Dengan adanya pemilahan sampah sejak dari sumbernya, proses daur ulang menjadi lebih mudah dan efisien.
          Sampah organik dapat diolah menjadi kompos, pupuk cair, dan briket, sementara sampah anorganik seperti plastik dan kertas
          dapat didaur ulang menjadi produk baru seperti kerajinan dan paving blok. Bank sampah juga dapat berperan dalam meningkatkan kesadaran
          masyarakat untuk memilah dan mengolah sampah dengan baik, bahkan memberikan nilai ekonomi melalui sistem
          tukar sampah dengan insentif seperti menjual botol platik, botol kaca, dan kaleng. Dengan strategi pemilahan yang tepat, kita tidak hanya mengurangi beban
          lingkungan dalam mengurai sampah tetapi juga menciptakan ekonomi sirkular yang berkelanjutan.
        </p>
      </section>
    </div>
  );
};

export default StrategiPemilahanPage;
