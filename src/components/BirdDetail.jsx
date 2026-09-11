import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function BirdDetail({ bird, onClose, initialPosition }) {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Trigger animation
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

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

  const handleImageError = () => {
    console.log('Image failed to load:', bird.image);
    setImageError(true);
    setImageLoaded(true);
  };

  // Calculate initial transform style based on card position
  const getInitialStyle = () => {
    if (!initialPosition || !isAnimating) return {};

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const cardCenterX = initialPosition.left + initialPosition.width / 2;
    const cardCenterY = initialPosition.top + initialPosition.height / 2;

    const translateX = cardCenterX - centerX;
    const translateY = cardCenterY - centerY;
    // Prevent division by zero and ensure minimum scale
    const scale = initialPosition.width > 0 ? Math.min(initialPosition.width / 800, 0.3) : 0.1;

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 0,
    };
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto backdrop-blur-md bg-black/30 transition-opacity duration-300 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center" onClick={onClose}>
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden transition-all duration-500 ease-out"
          style={getInitialStyle()}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-emerald-700 to-teal-600 text-white p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label={t('backToList')}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h1 className="text-3xl font-bold mb-2">{bird.name}</h1>
            <p className="text-xl italic text-emerald-100">{bird.scientific_name}</p>
          </div>

          {/* Image */}
          <div className="relative aspect-[16/9] bg-gray-200">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-400">Loading image...</span>
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-9xl">🦜</span>
                  <p className="text-gray-500 text-lg mt-4">Image unavailable</p>
                </div>
              </div>
            ) : (
              <img
                src={bird.image}
                alt={bird.name}
                className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />
            )}
            <div className={`absolute top-4 right-4 px-4 py-2 text-sm font-bold rounded-full shadow-lg ${getConservationStatusColor(bird.conservation_status)}`}>
              {t(`conservation.${bird.conservation_status}`, bird.conservation_status)}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t('scientificName')}
                </h2>
                <p className="text-lg italic text-gray-800">{bird.scientific_name}</p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t('conservationStatus')}
                </h2>
                <p className="text-lg text-gray-800">{t(`conservation.${bird.conservation_status}`, bird.conservation_status)}</p>
              </div>

              {bird.habitat && (
                <div className="md:col-span-2">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('habitat')}
                  </h2>
                  <p className="text-lg text-gray-800">{bird.habitat}</p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {t('description')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{bird.description}</p>
            </div>

            {bird.photo_credit && (
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {t('photo')}: {bird.photo_credit_url ? (
                    <a
                      href={bird.photo_credit_url}
                      className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {bird.photo_credit}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-medium">{bird.photo_credit}</span>
                  )}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                {t('backToList')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirdDetail;
