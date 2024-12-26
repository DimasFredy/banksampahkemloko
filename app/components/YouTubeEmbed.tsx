import React from 'react';

type YouTubeEmbedProps = {
  videoIds: string[]; // Menggunakan array untuk mendukung banyak video
  className?: string; // Menambahkan className sebagai prop opsional
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoIds, className }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}> {/* Grid responsif */}
      {videoIds.map((videoId, index) => (
        <div key={index} className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTubeEmbed;
