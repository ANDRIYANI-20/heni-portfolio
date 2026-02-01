import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Hero Section Component
 * Design: Modern Glassmorphism with vibrant accent colors
 * Features: Animated background, gradient text, floating elements, multi-language support
 */
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-magenta-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img src="/images/hero-bg.png" alt="hero background" className="w-full h-full object-cover" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
        {/* Profile Image */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-magenta-500 to-lime-500 rounded-full p-1 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-full flex items-center justify-center">
                <img
                  src="/images/foto.jpg"
                  alt="Heni Andriyani"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="gradient-text">{t('hero.title')}</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-cyan-300 mb-6 font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t('hero.subtitle')}
        </p>

        {/* Description */}
        <p className={`text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t('hero.description')}
        </p>

      </div>
    </section>
  );
}
