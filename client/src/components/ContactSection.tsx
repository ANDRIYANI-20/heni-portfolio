import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Contact Section Component
 * Design: Glassmorphic contact form with contact information
 * Features: Contact methods, social links, call-to-action, multi-language support
 */
export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:handriyani047@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'handriyani047@gmail.com',
      link: 'mailto:handriyani047@gmail.com',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+62 858 4656 3208',
      link: 'tel:+6285846563208',
      color: 'from-magenta-500 to-magenta-600',
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: t('Mampang Prapatan, South Jakarta - Indonesia'),
      link: '#',
      color: 'from-lime-500 to-lime-600',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: t('contact.instagram'),
      value: '@hn.andriyani',
      link: 'https://instagram.com/hn.andriyani',
      color: 'from-pink-500 to-fuchsia-600',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Heni Andriyani',
      link: 'https://www.linkedin.com/in/heni-andriyani/',
      color: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <section id="contact-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.contactInfo')}</h3>
            {contactMethods.map((method, idx) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={idx}
                  href={method.link}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{method.title}</h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.socialTitle')}</h3>
              <div className="space-y-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-5 hover:scale-105 transition-all duration-300 group flex items-start gap-4"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{social.label}</h4>
                        <p className="text-gray-400 text-sm">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">{t('contact.messageLabel')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.messagePlaceholder')}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4">{t('contact.readyToWork')}</p>
          <a
            href="https://wa.me/6285846563208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            {t('contact.letsConnect')}
          </a>
        </div>
      </div>
    </section>
  );
}
