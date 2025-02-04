import { FC } from 'react';
import Map from '../../components/Map';

const PetaPage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Peta Rekomendasi Persebaran Bank Sampah</h1>
      <Map />
    </div>
  );
};

export default PetaPage;
