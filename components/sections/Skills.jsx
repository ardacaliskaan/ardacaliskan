'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';
import { Code, Server, Smartphone, Wrench, Users } from 'lucide-react';

const iconMap = {
  Code,
  Server,
  Smartphone,
  Wrench,
  Users,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Yetenekler & Teknolojiler
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Profesyonel olarak kullandığım teknolojiler ve deneyim seviyelerim
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {skillCategories.map((category, index) => {
              const Icon = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300
                    flex items-center gap-2 text-sm sm:text-base
                    ${activeCategory === index
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index % 3)}>
              <Card className="group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {skill.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">{skill.experience}</p>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-400">
                  {skill.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary Stats */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Teknoloji</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                5+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Framework</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                3+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Platform</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">
                92%
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Ort. Seviye</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}