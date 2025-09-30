'use client';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Okunabilir, sürdürülebilir ve test edilebilir kod yazma prensipleri',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Modern Stack',
      description: 'En güncel teknolojiler ve best practices ile geliştirme',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Kullanıcı deneyimini ön planda tutan tasarım anlayışı',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Hızlı yüklenen ve optimize edilmiş uygulamalar',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teknoloji tutkunu bir yazılımcı olarak, sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-3xl font-bold text-white mb-4">
                Yazılım Geliştirme Yolculuğum
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-gray-300 leading-relaxed">
                Yazılım dünyasına olan tutkum, karmaşık problemleri basit ve etkili çözümlere 
                dönüştürme arzumdan kaynaklanıyor. Her proje, yeni bir öğrenme fırsatı ve 
                becerilerimi geliştirme şansı sunuyor.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">C#, JavaScript, Swift</strong> ve modern web 
                teknolojileri ile çalışıyorum. Full-stack web uygulamalarından iOS mobil 
                uygulamalarına kadar geniş bir yelpazede proje deneyimim var.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <p className="text-gray-300 leading-relaxed">
                Freelance projeler ve kişisel geliştirmelerimle, sürekli olarak yeni 
                teknolojileri keşfediyor ve mevcut becerilerimi pekiştiriyorum. Hedefim, 
                kullanıcılara değer katan, performanslı ve sürdürülebilir yazılımlar üretmek.
              </p>
            </ScrollReveal>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <ScrollReveal direction="right" delay={0.3}>
              <Card className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-2">
                  5+
                </div>
                <div className="text-gray-400">Yıllık Deneyim</div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <Card className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                  15+
                </div>
                <div className="text-gray-400">Tamamlanan Proje</div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <Card className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                  10+
                </div>
                <div className="text-gray-400">Teknoloji</div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <Card className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text mb-2">
                  100%
                </div>
                <div className="text-gray-400">Müşteri Memnuniyeti</div>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}