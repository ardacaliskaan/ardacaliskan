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
            <p className="text-cyan-400 font-medium mb-4 text-lg">
              👋 Merhaba, ben
            </p>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal direction="up" delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arda Çalışkan
              </span>
            </h1>
          </ScrollReveal>

          {/* Typing Effect */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="h-16 flex items-center justify-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                {typedText}
                <span className="inline-block w-1 h-8 md:h-10 bg-indigo-400 ml-1 animate-pulse" />
              </h2>
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.5}>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Modern web teknolojileri ve mobil uygulama geliştirme konusunda tutkulu bir yazılımcıyım. 
              Kullanıcı odaklı, performanslı ve ölçeklenebilir çözümler üretiyorum.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={<Mail className="w-5 h-5" />}
              >
                İletişime Geç
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                Projeleri Gör
              </Button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={0.7}>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/ardacaliskaan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/ardacaliskaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a
                href="mailto:alkanlardal@icloud.com"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
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