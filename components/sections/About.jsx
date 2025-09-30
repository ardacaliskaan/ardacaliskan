'use client';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Okunabilir ve sürdürülebilir kod yazma',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Modern Stack',
      description: 'En güncel teknolojiler',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Kullanıcı odaklı tasarım',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimize edilmiş uygulamalar',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Teknoloji tutkunu bir yazılımcı olarak, sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content - 2 Column */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <ScrollReveal direction="left" delay={0.2}>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Yazılım Geliştirme Yolculuğum
                </h3>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Yazılım dünyasına olan tutkum, karmaşık problemleri basit ve etkili çözümlere 
                  dönüştürme arzumdan kaynaklanıyor.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4}>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-white font-semibold">C#, JavaScript, Swift</span> ve modern web 
                  teknolojileri ile çalışıyorum. Full-stack web uygulamalarından iOS mobil 
                  uygulamalarına kadar geniş bir yelpazede proje deneyimim var.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.5}>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Kullanıcılara değer katan, performanslı ve sürdürülebilir yazılımlar üretmeyi hedefliyorum.
                </p>
              </ScrollReveal>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal direction="right" delay={0.3}>
                <Card className="text-center p-8 hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-3">
                    5+
                  </div>
                  <div className="text-gray-400 text-lg">Yıllık<br/>Deneyim</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <Card className="text-center p-8 hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-3">
                    15+
                  </div>
                  <div className="text-gray-400 text-lg">Tamamlanan<br/>Proje</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.5}>
                <Card className="text-center p-8 hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-3">
                    10+
                  </div>
                  <div className="text-gray-400 text-lg">Farklı<br/>Teknoloji</div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.6}>
                <Card className="text-center p-8 hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text mb-3">
                    100%
                  </div>
                  <div className="text-gray-400 text-lg">Müşteri<br/>Memnuniyeti</div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Highlights - 4 Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="text-center group hover:scale-105 transition-all duration-300 p-8">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}