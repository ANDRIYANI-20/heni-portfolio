import { useEffect, useState } from 'react';
import { BookOpen, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Education Section Component
 * Design: Timeline-style layout with glassmorphic cards
 * Features: Educational background, certifications, multi-language support
 */
export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('education-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      level: t('education.bachelor'),
      field: t('education.informationSystems'),
      institution: t('education.universitas'),
      period: t('education.bachelorPeriod'),
      description: t('education.bachelorDesc'),
      icon: BookOpen,
    },
    {
      level: t('education.seniorHigh'),
      field: t('education.generalEducation'),
      institution: t('education.sma'),
      period: t('education.smaPeriod'),
      description: t('education.smaDesc'),
      icon: Award,
    },
  ];

  return (
    <section id="education-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {education.map((edu, idx) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={idx}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
              >
                <div className="flex gap-6 items-start">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-magenta-500 flex items-center justify-center text-white flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {idx < education.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-cyan-500 to-magenta-500 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-8 flex-1 hover:scale-105 transition-transform duration-300 group">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {edu.level}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-lg">{edu.field}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-magenta-500/20 border border-magenta-500/50 text-magenta-300 text-sm font-semibold whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-cyan-300 font-semibold mb-3">{edu.institution}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
