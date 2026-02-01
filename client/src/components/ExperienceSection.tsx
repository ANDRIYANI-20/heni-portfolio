import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Experience Section Component
 * Design: Auto-scrolling carousel with glassmorphic cards
 * Features: Horizontal auto-scroll, manual navigation, hover pause, multi-language support
 */
export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('experience-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering && scrollContainerRef.current) {
      const interval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          container.scrollLeft += 2;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  // Check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollContainerRef.current.scrollLeft < 
        scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const experiences = [
    {
      company: t('experience.company'),
      position: t('experience.position'),
      period: t('experience.period'),
      description: t('experience.description'),
      responsibilities: [
        t('experience.responsibility1'),
        t('experience.responsibility2'),
        t('experience.responsibility3'),
        t('experience.responsibility4'),
        t('experience.responsibility5'),
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      company: t('experience.company2'),
      position: t('experience.position2'),
      period: t('experience.period2'),
      description: t('experience.description2'),
      responsibilities: [
        t('experience.responsibility2_1'),
        t('experience.responsibility2_2'),
        t('experience.responsibility2_3'),
        t('experience.responsibility2_4'),
      ],
      color: 'from-magenta-500 to-magenta-600',
    },
  ];

  return (
    <section id="experience-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('experience.scrollExplore')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full mt-4" />
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Navigation Buttons */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 disabled:opacity-30 transition-all duration-300 border border-cyan-500/30"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
          </div>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-96 glass-card p-8 hover:scale-105 transition-all duration-300 cursor-grab active:cursor-grabbing group"
              >
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-cyan-500/30">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold mb-3`}>
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wider">{t('experience.keyResponsibilities')}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="inline-block w-2 h-2 bg-magenta-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex gap-2">
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 disabled:opacity-30 transition-all duration-300 border border-cyan-500/30"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center gap-3 mt-8">
          <button
            onClick={() => scroll('left')}
            className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 text-cyan-400 transition-all duration-300"
          >
            ← Previous
          </button>
          <button
            onClick={() => scroll('right')}
            className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/30 text-cyan-400 transition-all duration-300"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
