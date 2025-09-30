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
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Projeler
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Geliştirdiğim ve üzerinde çalıştığım projeler
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300
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
                    px-6 py-3 rounded-xl font-medium transition-all duration-300
                    ${activeFilter === category
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * (index % 3)}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                    <div className="text-6xl">💻</div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle>{project.title}</CardTitle>
                      <div className="mt-2">
                        <span className={`
                          text-xs px-3 py-1 rounded-full
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
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="space-y-1 text-sm text-gray-400">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>{highlight}</span>
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

        {/* View All Projects CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-12">
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