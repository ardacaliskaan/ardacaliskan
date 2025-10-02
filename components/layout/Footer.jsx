'use client';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: 'Ana Sayfa', id: 'hero' },
    { label: 'Hizmetler', id: 'services' },
    { label: 'Projeler', id: 'projects' },
    { label: 'İletişim', id: 'contact' }
  ];

  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ardacaliskaan',
      username: 'ardacaliskaan'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ardacaliskaan/',
      username: 'ardacaliskaan'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:alkanlardal@icloud.com',
      username: 'Email'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#0a0a0a] py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content - SPACIOUS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Arda Çalışkan
            </h3>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Modern web ve mobil uygulamalar geliştiren full-stack developer. Kullanıcı odaklı, performanslı ve ölçeklenebilir çözümler üretiyorum.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:alkanlardal@icloud.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl font-semibold text-sm text-white transition-all"
            >
              <span>Proje Başlat</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-6">Navigasyon</h4>
            <ul className="space-y-4">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-6">Bağlantılar</h4>
            <ul className="space-y-4">
              {socials.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <span>{social.username}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom Bar - CLEAN */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600">
            <p>© {currentYear} Arda Çalışkan</p>
            <span className="hidden sm:block">·</span>
            <p>Tüm hakları saklıdır</p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Built with</span>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-white/5 border border-white/[0.08] rounded-lg text-xs font-medium text-gray-500">
                Next.js
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/[0.08] rounded-lg text-xs font-medium text-gray-500">
                Tailwind CSS
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}