import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌿</span>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                Burma Biodiversity
              </h1>
              <p className="text-xs text-gray-500 hidden md:block">
                Birds of Myanmar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                i18n.language === 'en'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('my')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                i18n.language === 'my'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Switch to Burmese"
            >
              မြန်မာ
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                i18n.language === 'zh'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Switch to Chinese"
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
