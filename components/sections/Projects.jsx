'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TechBadge } from '@/components/ui/Badge';
import { projects, categories } from '@/data/projects';
import { ExternalLink, Github, Star } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 relative">
      {/* MERKEZ CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Projeler
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Geliştirdiğim ve üzerinde çalıştığım projeler
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`
                px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base
                ${activeFilter === 'all'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              Tümü ({projects.length})
            </button>
            {categories.map((category) => {
              const count = projects.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base
                    ${activeFilter === category
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <span className="hidden sm:inline">{category}</span>
                  <span className="sm:hidden">{category.split(' ')[0]}</span>
                  <span className="ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * (index % 3)}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-4 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl">💻</div>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                      <div className="mt-2">
                        <span className={`
                          text-xs px-2 sm:px-3 py-1 rounded-full inline-block
                          ${project.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}
                        `}>
                          {project.status === 'active' ? '🟢 Aktif' : '✅ Tamamlandı'}
                        </span>
                      </div>
                    </div>
                    {project.stars && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="mb-4 text-sm">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>

                <CardFooter>
                  <div className="flex gap-3 w-full">
                    {project.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                        icon={<Github className="w-4 h-4" />}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        variant="gradient"
                        size="sm"
                        className="flex-1"
                        icon={<ExternalLink className="w-4 h-4" />}
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        Demo
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              icon={<Github className="w-5 h-5" />}
              onClick={() => window.open('https://github.com/ardacaliskaan', '_blank')}
            >
              GitHub'da Daha Fazla Proje
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}