'use client';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Clean Code',
      description: 'Okunabilir ve sürdürülebilir kod',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Modern Stack',
      description: 'En güncel teknolojiler',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'User-Centric',
      description: 'Kullanıcı odaklı tasarım',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Performance',
      description: 'Optimize edilmiş uygulamalar',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative">
      {/* MERKEZ CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Teknoloji tutkunu bir yazılımcı olarak, sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left - Text */}
            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal direction="left" delay={0.2}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Yazılım Geliştirme Yolculuğum
                </h3>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  Yazılım dünyasına olan tutkum, karmaşık problemleri basit ve etkili çözümlere 
                  dönüştürme arzumdan kaynaklanıyor.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4}>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  <span className="text-white font-semibold">C#, JavaScript, Swift</span> ve modern web 
                  teknolojileri ile çalışıyorum. Full-stack web uygulamalarından iOS mobil 
                  uygulamalarına kadar geniş bir yelpazede proje deneyimim var.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.5}>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  Kullanıcılara değer katan, performanslı ve sürdürülebilir yazılımlar üretmeyi hedefliyorum.
                </p>
              </ScrollReveal>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <ScrollReveal direction="right" delay={0.3}>
                <Card className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-2 sm:mb-3">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base md:text-lg">Yıllık<br/>Deneyim</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <Card className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 sm:mb-3">
                    15+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base md:text-lg">Tamamlanan<br/>Proje</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.5}>
                <Card className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2 sm:mb-3">
                    10+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base md:text-lg">Farklı<br/>Teknoloji</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.6}>
                <Card className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text mb-2 sm:mb-3">
                    100%
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base md:text-lg">Müşteri<br/>Memnuniyeti</div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="text-center group hover:scale-105 transition-all duration-300 p-6 sm:p-8">
                <div className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}