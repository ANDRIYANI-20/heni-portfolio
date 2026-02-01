import { useEffect, useRef, useState } from 'react';
import { Code, Database, Users, Zap, Monitor, FileText, Brain, Handshake, Gauge, CheckCircle, Lightbulb, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Skills Section Component
 * Design: Auto-scrolling skill cards with category grouping and animated icons
 * Features: Horizontal auto-scroll, skill categories, proficiency indicators, animated icons, multi-language support
 */
export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering && scrollContainerRef.current) {
      const interval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          container.scrollLeft += 1.5;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 40);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const skillCategories = [
    {
      category: t('skills.technicalSkills'),
      icon: Code,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: t('skills.microsoftOffice'), level: 95, icon: FileText },
        { name: t('skills.webDevelopment'), level: 80, icon: Monitor },
        { name: t('skills.dataManagement'), level: 90, icon: Database },
        { name: t('skills.aiTools'), level: 85, icon: Brain },
      ],
    },
    {
      category: t('skills.professionalSkills'),
      icon: Users,
      color: 'from-magenta-500 to-magenta-600',
      skills: [
        { name: t('skills.communication'), level: 95, icon: MessageSquare },
        { name: t('skills.teamCollaboration'), level: 90, icon: Handshake },
        { name: t('skills.problemSolving'), level: 88, icon: Lightbulb },
        { name: t('skills.leadership'), level: 85, icon: Users },
      ],
    },
    {
      category: t('skills.operationalSkills'),
      icon: Zap,
      color: 'from-lime-500 to-lime-600',
      skills: [
        { name: t('skills.processManagement'), level: 92, icon: Gauge },
        { name: t('skills.administrativeSupport'), level: 95, icon: CheckCircle },
        { name: t('skills.coordination'), level: 90, icon: Handshake },
        { name: t('skills.qualityAssurance'), level: 88, icon: CheckCircle },
      ],
    },
  ];

  return (
    <section id="skills-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('skills.hoverPause')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full mt-4" />
        </div>

        {/* Auto-scroll Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`flex gap-6 overflow-x-auto scroll-smooth pb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-96 glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-grab active:cursor-grabbing"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-cyan-500/30">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white animate-pulse`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List with Animated Icons */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skillIdx} className="group/skill">
                        {/* Skill Header with Icon */}
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 group-hover/skill:scale-110 transition-transform duration-300">
                              <SkillIcon className="w-4 h-4 text-cyan-400 animate-bounce" style={{ animationDelay: `${skillIdx * 100}ms` }} />
                            </div>
                            <span className="text-gray-300 font-medium group-hover/skill:text-cyan-300 transition-colors">{skill.name}</span>
                          </div>
                          <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIdx * 100}ms`,
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-cyan-500/30">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{t('skills.proficiencyLevel')}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-400 text-sm mt-8">
          {t('skills.continuousDevelopment')}
        </p>
      </div>
    </section>
  );
}
