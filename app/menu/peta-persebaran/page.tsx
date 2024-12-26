import { FC } from 'react';
import Map from '../../components/Map';

const PetaPage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Peta Persebaran Bank Sampah</h1>
      <Map />

      {/* Keterangan Lokasi */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Keterangan Lokasi:</h2>
        <ul className="list-decimal pl-5 text-black">
          <li>
            Di dekat pos ronda - <a href="https://www.google.com/maps/search/ugm+maps/@-7.559209,110.8188121,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Lihat di Google Maps</a>
          </li>
          <li>
            Di sebelah posyandu - <a href="https://www.google.com/maps/search/ugm+maps/@-7.559209,110.8188121,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Lihat di Google Maps</a>
          </li>
          <li>
            Di depan balai desa - <a href="https://www.google.com/maps/search/ugm+maps/@-7.559209,110.8188121,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Lihat di Google Maps</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PetaPage;
