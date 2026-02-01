import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Navigation Component
 * Design: Glassmorphic sticky header with mobile menu and language toggle
 * Features: Smooth scroll navigation, mobile responsive, multi-language support
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), href: '#about-section' },
    { label: t('nav.experience'), href: '#experience-section' },
    { label: t('nav.education'), href: '#education-section' },
    { label: t('nav.skills'), href: '#skills-section' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card backdrop-blur-md border-b border-cyan-500/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:scale-105 transition-transform">
          <img
            src="/images/la.jpeg"
            alt="Heni Andriyani"
            className="w-12 h-12 rounded-full object-cover border border-cyan-500/30"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${
                language === 'id'
                  ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${
                language === 'en'
                  ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-cyan-500/30 backdrop-blur-md">
          <nav className="container max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
