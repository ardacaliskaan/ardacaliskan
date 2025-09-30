'use client';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react';

export function Hero() {
  const typedText = useTypingEffect(
    ['Full-Stack Developer', 'iOS Developer', 'Problem Solver', 'Code Enthusiast'],
    150,
    100,
    2000
  );

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <ScrollReveal direction="down" delay={0.2}>
            <p className="text-cyan-400 font-medium mb-6 text-lg">
              👋 Merhaba, ben
            </p>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal direction="up" delay={0.3}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arda Çalışkan
              </span>
            </h1>
          </ScrollReveal>

          {/* Typing Effect */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="min-h-[100px] flex items-center justify-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {typedText}
                <span className="inline-block w-1 h-8 md:h-12 bg-indigo-400 ml-2 animate-pulse" />
              </h2>
            </div>
          </ScrollReveal>

          {/* Description - ORTALANMIŞ */}
          <ScrollReveal direction="up" delay={0.5}>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed text-center">
              Modern web teknolojileri ve mobil uygulama geliştirme konusunda tutkulu bir yazılımcıyım. 
              Kullanıcı odaklı, performanslı ve ölçeklenebilir çözümler üretiyorum.
            </p>
          </ScrollReveal>

          {/* CTA Buttons - DAHA İYİ SPACING */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={<Mail className="w-5 h-5" />}
                className="w-full sm:w-auto px-10 py-4"
              >
                İletişime Geç
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-10 py-4"
              >
                Projeleri Gör
              </Button>
            </div>
          </ScrollReveal>

          {/* Social Links - DAHA BÜYÜK VE GÜzel */}
          <ScrollReveal direction="up" delay={0.7}>
            <div className="flex items-center justify-center gap-8 mb-12">
              <a
                href="https://github.com/ardacaliskaan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all" />
                <div className="relative p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <Github className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/ardacaliskaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all" />
                <div className="relative p-4 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              
              <a
                href="mailto:alkanlardal@icloud.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 transition-all" />
                <div className="relative p-4 bg-purple-500/10 rounded-full border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-all duration-300 animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}