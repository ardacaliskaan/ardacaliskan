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

      {/* MERKEZ CONTAINER */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <ScrollReveal direction="down" delay={0.2}>
            <p className="text-cyan-400 font-medium mb-6 text-base sm:text-lg">
              👋 Merhaba, ben
            </p>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal direction="up" delay={0.3}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arda Çalışkan
              </span>
            </h1>
          </ScrollReveal>

          {/* Typing Effect */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="min-h-[80px] sm:min-h-[100px] flex items-center justify-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {typedText}
                <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-indigo-400 ml-1 sm:ml-2 animate-pulse" />
              </h2>
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.5}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
              Modern web teknolojileri ve mobil uygulama geliştirme konusunda tutkulu bir yazılımcıyım. 
              Kullanıcı odaklı, performanslı ve ölçeklenebilir çözümler üretiyorum.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={<Mail className="w-5 h-5" />}
                className="w-full sm:w-auto px-8 sm:px-10"
              >
                İletişime Geç
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-8 sm:px-10"
              >
                Projeleri Gör
              </Button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={0.7}>
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <a
                href="https://github.com/ardacaliskaan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative p-3 sm:p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/ardacaliskaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative p-3 sm:p-4 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
              
              <a
                href="mailto:alkanlardal@icloud.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative p-3 sm:p-4 bg-purple-500/10 rounded-full border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-16 sm:mt-20">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-all duration-300 animate-bounce inline-block"
                aria-label="Scroll down"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}