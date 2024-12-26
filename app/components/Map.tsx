import { FC } from 'react';

const Map: FC = () => {
  const mapUrl = "https://www.google.com/maps/d/u/0/embed?mid=1wjrbMf4Ua1yizTiEOnn5s-x2_BFT0PU&ll=-7.303819510405737%2C110.22037915301902&z=16"
  return (
    <div className="w-full h-80 bg-gray-200">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
