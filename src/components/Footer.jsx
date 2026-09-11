import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🌿</span>
              Burma Biodiversity
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.developed')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-sm hover:text-emerald-400 transition-colors text-left"
              >
                {t('home')}
              </button>
              <a
                href="https://github.com/burma-biodiv-platform/burma-birds"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-emerald-400 transition-colors"
              >
                {t('github')}
              </a>
            </div>
          </div>

          {/* License */}
          <div>
            <h3 className="text-white font-bold mb-4">License</h3>
            <p className="text-sm text-gray-400 mb-2">
              {t('footer.license')}{' '}
              <a
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                CC BY-NC 4.0
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
