import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Footer Component
 * Design: Glassmorphic footer with copyright and links
 * Features: Multi-language support
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-cyan-500/30 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Heni Andriyani</h3>
            <p className="text-gray-400 text-sm">{t('hero.subtitle')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about-section" className="hover:text-cyan-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#experience-section" className="hover:text-cyan-400 transition-colors">{t('nav.experience')}</a></li>
              <li><a href="#education-section" className="hover:text-cyan-400 transition-colors">{t('nav.education')}</a></li>
              <li><a href="#skills-section" className="hover:text-cyan-400 transition-colors">{t('nav.skills')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactDetails')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:handriyani047@gmail.com" className="hover:text-cyan-400 transition-colors">{t('contact.email')}</a></li>
              <li><a href="tel:+6285846563208" className="hover:text-cyan-400 transition-colors">{t('contact.phone')}</a></li>
              <li className="text-gray-500">{t('contact.location')}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Heni Andriyani. {t('footer.rights')}</p>
            <p>{t('footer.designedWith')} <span className="text-magenta-500">♥</span> {t('footer.usingTech')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
