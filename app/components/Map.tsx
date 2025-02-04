import { FC } from 'react';

const Map: FC = () => {
  const mapUrl = "https://www.google.com/maps/d/u/0/embed?mid=1sPzBAXzzPVWsnAgcjGdmiF5gYIrqpb8&ehbc=2E312F&noprof=1" 
  return (
    <div className="w-full h-screen  bg-gray-200">
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
