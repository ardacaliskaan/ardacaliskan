'use client';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react';

export function Hero() {
  const typedText = useTypingEffect(
    ['Full-Stack Developer', 'iOS Developer', 'Problem Solver', 'Code Enthusiast'],
    120,
    80,
    2000
  );

  const [greetingRef, greetingVisible] = useScrollAnimation({ delay: 100 });
  const [nameRef, nameVisible] = useScrollAnimation({ delay: 200 });
  const [typingRef, typingVisible] = useScrollAnimation({ delay: 300 });
  const [descRef, descVisible] = useScrollAnimation({ delay: 400 });
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ delay: 500 });
  const [socialsRef, socialsVisible] = useScrollAnimation({ delay: 600 });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto text-center">
        
        {/* Greeting */}
        <div 
          ref={greetingRef}
          style={{ marginBottom: '24px' }}
          className={`transition-all duration-1000 ${
            greetingVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <p className="text-cyan-400 font-medium text-base">
            👋 Merhaba, ben
          </p>
        </div>

        {/* Name */}
        <div 
          ref={nameRef}
          style={{ marginBottom: '32px' }}
          className={`transition-all duration-1000 ${
            nameVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arda Çalışkan
            </span>
          </h1>
        </div>

        {/* Typing Effect */}
        <div 
          ref={typingRef}
          style={{ marginBottom: '32px' }}
          className={`transition-all duration-1000 ${
            typingVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white flex items-center justify-center">
            {typedText}
            <span className="inline-block w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-indigo-400 to-purple-400 ml-1 animate-pulse" />
          </h2>
        </div>

        {/* Description */}
        <div 
          ref={descRef}
          style={{ marginBottom: '48px' }}
          className={`transition-all duration-1000 ${
            descVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Modern web teknolojileri ve mobil uygulama geliştirme konusunda tutkulu bir yazılımcıyım. 
            Kullanıcı odaklı, performanslı ve ölçeklenebilir çözümler üretiyorum.
          </p>
        </div>

        {/* Buttons */}
        <div 
          ref={buttonsRef}
          style={{ marginBottom: '120px' }}
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
            buttonsVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          {/* İletişime Geç */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-white shadow-2xl overflow-hidden hover:scale-110 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>İletişime Geç</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
            </div>
          </button>
          
          {/* Hizmetleri Gör */}
          <button 
            onClick={() => scrollToSection('services')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-transparent rounded-2xl font-bold text-white overflow-hidden hover:scale-110 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
              <div className="w-full h-full bg-[#0a0a0a] rounded-2xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center gap-3">
              <span>Hizmetleri Gör</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Social Icons */}
        <div 
          ref={socialsRef}
          style={{ marginBottom: '48px' }}
          className={`flex gap-8 justify-center items-center transition-all duration-1000 ${
            socialsVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          {/* GitHub */}
          <a 
            href="https://github.com/ardacaliskaan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-500 hover:scale-125 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Github className="relative w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/ardacaliskaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/20 hover:from-blue-500/20 hover:to-blue-600/30 border border-blue-500/20 hover:border-blue-400/50 rounded-2xl transition-all duration-500 hover:scale-125 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Linkedin className="relative w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </a>
          
          {/* Email */}
          <a 
            href="mailto:alkanlardal@icloud.com"
            className="group relative p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/20 hover:from-green-500/20 hover:to-emerald-600/30 border border-green-500/20 hover:border-green-400/50 rounded-2xl transition-all duration-500 hover:scale-125 shadow-xl shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/40"
          >
            <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Mail className="relative w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
          </a>
        </div>

        {/* Scroll Down */}
        <div 
          style={{ paddingTop: '32px' }}
          className={`flex justify-center transition-all duration-1000 delay-700 ${
            socialsVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <button 
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Aşağı Kaydır</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}