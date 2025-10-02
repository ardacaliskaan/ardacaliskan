'use client';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Code, Server, Smartphone, Zap } from 'lucide-react';

export function About() {
  const stats = [
    {
      value: '5+',
      label: 'Yıllık Deneyim',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      value: '15+',
      label: 'Tamamlanan Proje',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      value: '10+',
      label: 'Farklı Teknoloji',
      color: 'from-green-400 to-emerald-400'
    },
    {
      value: '100%',
      label: 'Müşteri Memnuniyeti',
      color: 'from-pink-400 to-rose-400'
    }
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Clean Code',
      description: 'Okunabilir ve sürdürülebilir kod',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Modern Stack',
      description: 'En güncel teknolojiler',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'User-Centric',
      description: 'Kullanıcı odaklı tasarım',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Performance',
      description: 'Optimize edilmiş uygulamalar',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Teknoloji tutkunu bir yazılımcı olarak, sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Yazılım Geliştirme Yolculuğum
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Teknoloji tutkunu bir yazılımcı olarak, sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <span className="text-white font-semibold">C#, JavaScript, Swift</span> ve modern web 
                teknolojileri ile çalışıyorum. Full-stack web uygulamalarından iOS mobil 
                uygulamalarına kadar geniş bir yelpazede proje deneyimim var.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Kullanıcılara değer katan, performanslı ve sürdürülebilir yazılımlar üretmeyi hedefliyorum.
              </p>
            </ScrollReveal>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="right" delay={0.3 + index * 0.1}>
                <Card className="text-center p-6 sm:p-8 hover:scale-105 transition-transform">
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm lg:text-base">
                    {stat.label.split(' ').map((word, i) => (
                      <span key={i}>
                        {word}
                        {i < stat.label.split(' ').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="text-center group hover:scale-105 transition-all duration-300 p-6 sm:p-8">
                <div className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}