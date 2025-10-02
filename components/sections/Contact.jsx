'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Linkedin, Github, MapPin, Clock, Zap, ArrowRight } from 'lucide-react';

export function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ delay: 150, threshold: 0.1 });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Hızlı yanıt için',
      value: 'alkanlardal@icloud.com',
      href: 'mailto:alkanlardal@icloud.com',
      primary: true
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Profesyonel ağ',
      value: 'ardacaliskaan',
      href: 'https://www.linkedin.com/in/ardacaliskaan/'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Kod örnekleri',
      value: 'ardacaliskaan',
      href: 'https://github.com/ardacaliskaan'
    }
  ];

  const stats = [
    { icon: MapPin, label: 'Konum', value: 'Karabük, TR' },
    { icon: Clock, label: 'Yanıt', value: '24 saat' },
    { icon: Zap, label: 'Durum', value: 'Uygun' }
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-32">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header - PERFECTLY CENTERED */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium text-sm">İletişim</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Birlikte Çalışalım
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Projeniz için benimle iletişime geçin. Fikirlerinizi gerçeğe dönüştürmenize yardımcı olayım.
          </p>
        </div>

        {/* Main Content - SPACIOUS */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 ${
            contentVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-20 blur-sm'
          }`}
        >
          
          {/* Contact Methods - BIG CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`h-full bg-[#0a0a0a] border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 ${method.primary ? 'bg-gradient-to-br from-green-500/5 to-emerald-500/5' : ''}`}>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl ${method.primary ? 'bg-gradient-to-br from-green-500 to-emerald-500' : 'bg-white/5'}`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{method.subtitle}</p>
                  <p className="text-sm text-gray-400 font-mono break-all">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Stats - CLEAN ROW */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{stat.label}</p>
                <p className="text-base font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Card - BIG & BEAUTIFUL */}
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-12 overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Content - CENTERED */}
            <div className="relative text-center">
              <h3 className="text-4xl font-black text-white mb-4">
                Projeniz Hazır mı?
              </h3>
              <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto">
                Hemen iletişime geçin ve ücretsiz ilk danışmanlığınızı alın. Her türlü web ve mobil uygulama projesi için profesyonel destek.
              </p>
              
              {/* CTA Buttons - BIG */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href="mailto:alkanlardal@icloud.com"
                  className="group/btn w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-bold hover:bg-white/90 transition-all">
                    <Mail className="w-5 h-5" />
                    <span>Hemen İletişime Geç</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}