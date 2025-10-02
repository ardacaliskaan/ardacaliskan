'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';
import { Code, Server, Smartphone, Wrench, Layers, Palette } from 'lucide-react';

const iconMap = {
  Code,
  Server,
  Smartphone,
  Wrench,
  Layers,
  Palette
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Yetenekler & Teknolojiler
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Profesyonel olarak kullandığım teknolojiler ve deneyim seviyelerim
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Overview */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center mb-12 sm:mb-16">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Teknoloji</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                {skillCategories.length}+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Kategori</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                3+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Platform</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">
                92%
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Ort. Seviye</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Categories */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon];
            
            return (
              <ScrollReveal key={category.id} direction="up" delay={0.1 * catIndex}>
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                      {IconComponent && <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <Card 
                        key={skillIndex}
                        className="group cursor-pointer"
                        hover={true}
                      >
                        <div className="space-y-3 sm:space-y-4">
                          {/* Skill Header */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base sm:text-lg font-semibold text-white mb-1 truncate">
                                {skill.name}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-400">
                                {skill.experience}
                              </p>
                            </div>
                            <div className="text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text flex-shrink-0">
                              {skill.level}%
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${skill.level}%`,
                                transitionDelay: `${skillIndex * 100}ms`
                              }}
                            />
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}