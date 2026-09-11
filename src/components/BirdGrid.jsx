import { useTranslation } from 'react-i18next';
import BirdCard from './BirdCard';

function BirdGrid({ birds, onBirdClick }) {
  const { t } = useTranslation();

  if (birds.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-xl text-gray-500 mb-2">
          {t('noResults')}
        </p>
        <p className="text-gray-400">
          {t('tryDifferentSearch')}
        </p>
      </div>
    );
  }

  const resultKey = birds.length === 1 ? 'showingResults_one' : 'showingResults_other';

  return (
    <>
      <div className="mb-8">
        <p className="text-gray-600 text-center">
          {t(resultKey, { count: birds.length })}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {birds.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onClick={onBirdClick} />
        ))}
      </div>
    </>
  );
}

export default BirdGrid;
