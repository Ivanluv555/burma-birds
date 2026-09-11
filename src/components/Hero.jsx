import { useTranslation } from 'react-i18next';

function Hero({ children }) {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 drop-shadow">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {children}
        </div>

        {/* Decorative birds */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end space-x-8 pointer-events-none">
          <div className="text-6xl md:text-8xl opacity-20 transform translate-y-4">🦜</div>
          <div className="text-5xl md:text-7xl opacity-30 transform translate-y-2">🦚</div>
          <div className="text-6xl md:text-8xl opacity-20 transform translate-y-4">🦅</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
