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
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Hizmetler
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sunduğum profesyonel yazılım geliştirme hizmetleri
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * index}>
                <Card className="h-full flex flex-col group">
                  <CardHeader>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Fiyatlandırma:</span>
                        <span className="text-white font-medium">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Teslimat:</span>
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
        <ScrollReveal direction="up" delay={0.3}>
          <Card gradient className="text-center p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Projeniz için görüşelim
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Projeniz hakkında konuşmak ve size nasıl yardımcı olabileceğimi 
              öğrenmek için benimle iletişime geçin
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={scrollToContact}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              İletişime Geç
            </Button>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}