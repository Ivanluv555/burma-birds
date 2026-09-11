import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function BirdCard({ bird, onClick }) {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getConservationStatusColor = (status) => {
    switch (status) {
      case "LC": return "bg-green-500 text-white";
      case "NT": return "bg-yellow-500 text-white";
      case "VU": return "bg-orange-500 text-white";
      case "EN": return "bg-red-500 text-white";
      case "CR": return "bg-red-700 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const handleImageError = (e) => {
    console.log('Image failed to load:', bird.image);
    setImageError(true);
    setImageLoaded(true);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onClick(bird, rect);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-400">Loading...</span>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
            <div className="text-center p-4">
              <span className="text-6xl">🦜</span>
              <p className="text-gray-500 text-sm mt-2">Image unavailable</p>
            </div>
          </div>
        ) : (
          <img
            src={bird.image}
            alt={bird.name}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
        )}
        <div className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-bold rounded-full shadow-lg ${getConservationStatusColor(bird.conservation_status)}`}>
          {t(`conservation.${bird.conservation_status}`)}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
          {bird.name}
        </h2>
        <p className="italic text-gray-500 text-sm mb-3 line-clamp-1">
          {bird.scientific_name}
        </p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {bird.description}
        </p>
        <button
          onClick={handleClick}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {t('viewDetails')}
        </button>
      </div>
    </div>
  );
}

export default BirdCard;
