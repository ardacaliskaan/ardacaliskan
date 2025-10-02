'use client';
import { SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: SOCIAL_LINKS.email,
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-green-400'
    }
  ];

  // Quick links organized by category
  const quickLinks = [
    {
      title: 'Hızlı Linkler',
      links: NAV_ITEMS.slice(0, 3).map(item => ({
        name: item.name,
        onClick: () => scrollToSection(item.id)
      }))
    },
    {
      title: 'Daha Fazla',
      links: NAV_ITEMS.slice(3).map(item => ({
        name: item.name,
        onClick: () => scrollToSection(item.id)
      }))
    }
  ];

  return (
    <footer className="relative bg-black/50 border-t border-white/10 backdrop-blur-lg">
      <div className="container py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Arda Çalışkan
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md">
              Modern web ve mobil uygulamalar geliştiren full-stack yazılımcı. 
              Kullanıcı odaklı, performanslı çözümler üretiyorum.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-white/5 rounded-lg border border-white/10 ${link.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  alkanlardal@icloud.com
                </a>
              </li>
              <li className="text-gray-400">
                Ankara, Turkey
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Freelance için müsait</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Arda Çalışkan. Tüm hakları saklıdır. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
              using Next.js
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <span className="text-gray-400 group-hover:text-white text-xs sm:text-sm">
                Başa Dön
              </span>
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    </footer>
  );
}