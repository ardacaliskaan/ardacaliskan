'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/data/services';
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  MessageSquare, 
  Wrench,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Code,
  Smartphone,
  Database,
  Palette,
  MessageSquare,
  Wrench,
};

export function Services() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-32">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header - PERFECTLY CENTERED */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 font-medium text-sm">Hizmetlerim</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Sunduğum Hizmetler
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Modern teknolojilerle profesyonel çözümler üretiyorum. İşletmenizi dijital dünyada öne çıkaracak hizmetler.
          </p>
        </div>

        {/* Services Grid - SPACIOUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    delay: index * 100,
    threshold: 0.1 
  });
  
  const Icon = iconMap[service.icon] || Code;

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-1000 ${
        cardVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-20 blur-sm'
      }`}
    >
      <button 
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="relative w-full h-full text-left"
      >
        {/* Card with SPACIOUS padding */}
        <div className="relative h-full bg-[#0a0a0a] border border-white/[0.08] rounded-3xl p-10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
          
          {/* Icon - BIG */}
          <div className="relative mb-8">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          
          {/* Title - BIG */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
            {service.title}
          </h3>
          
          {/* Description - READABLE */}
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mb-8" />

          {/* Pricing - SPACIOUS */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-gray-600 mb-1.5">Fiyatlandırma</p>
              <p className="text-sm font-semibold text-white">{service.pricing}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600 mb-1.5">Teslimat</p>
              <p className="text-sm font-semibold text-white">{service.delivery}</p>
            </div>
          </div>

          {/* CTA - VISIBLE */}
          <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
            <span>İletişime geç</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </button>
    </div>
  );
}