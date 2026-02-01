import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * About Section Component
 * Design: Glassmorphic cards with gradient accents
 * Features: Professional summary, key competencies, multi-language support
 */
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const competencies = [
    { title: t('about.operationalManagement'), description: t('about.operationalManagementDesc') },
    { title: t('about.dataManagement'), description: t('about.dataManagementDesc') },
    { title: t('about.administrativeSupport'), description: t('about.administrativeSupportDesc') },
    { title: t('about.teamCollaboration'), description: t('about.teamCollaborationDesc') },
  ];

  return (
    <section id="about-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/accent-pattern.png" alt="pattern" className="w-full h-full object-cover" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Summary */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">{t('about.summary')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.summaryText')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.summaryText2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.summaryText3')}
              </p>
            </div>
          </div>

          {/* Right Column - Key Stats */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              {/* Stat Cards */}
              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold gradient-text">5+</div>
                  <div>
                    <h4 className="text-white font-semibold">{t('about.yearsOfDedication')}</h4>
                    <p className="text-gray-400 text-sm">{t('about.yearsOfDedicationDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold gradient-text">100%</div>
                  <div>
                    <h4 className="text-white font-semibold">{t('about.reliability')}</h4>
                    <p className="text-gray-400 text-sm">{t('about.reliabilityDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold gradient-text">∞</div>
                  <div>
                    <h4 className="text-white font-semibold">{t('about.learningMindset')}</h4>
                    <p className="text-gray-400 text-sm">{t('about.learningMindsetDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competencies Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">{t('about.competencies')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((comp, idx) => (
              <div key={idx} className="glass-card p-6 hover:border-magenta-500 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{comp.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
