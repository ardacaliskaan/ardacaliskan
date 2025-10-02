'use client';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { Globe, Server, Smartphone, Palette, MessageSquare, Wrench, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe,
  Server,
  Smartphone,
  Palette,
  MessageSquare,
  Wrench,
};

export function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Hizmetler
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Sunduğum profesyonel yazılım geliştirme hizmetleri
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * (index % 3)}>
                <Card className="h-full flex flex-col group">
                  <CardHeader>
                    {/* Icon */}
                    <div className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {IconComponent && <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />}
                    </div>

                    <CardTitle className="text-lg sm:text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    {/* Features List */}
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs sm:text-sm text-gray-500">
                          +{service.features.length - 4} daha fazla...
                        </li>
                      )}
                    </ul>

                    {/* Pricing & Delivery */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-400">Fiyatlandırma:</span>
                        <span className="text-white font-medium">{service.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-400">Teslimat:</span>
                        <span className="text-white font-medium">{service.delivery}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Projeniz için görüşelim
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
                  Projeniz hakkında konuşmak ve size nasıl yardımcı olabileceğimi öğrenmek için benimle iletişime geçin
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={scrollToContact}
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  İletişime Geç
                </Button>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}