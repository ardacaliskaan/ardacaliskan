'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects, categories } from '@/data/projects';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const TechBadge = ({ tech }) => (
    <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
      {tech}
    </span>
  );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projeler
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Geliştirdiğim ve üzerinde çalıştığım projeler
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4">
            <button
              onClick={() => setActiveFilter('Tümü')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === 'Tümü'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              Tümü ({projects.length})
            </button>
            
            {categories.map((category) => {
              const count = projects.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * (index % 3)}>
              <Card className="h-full flex flex-col group">
                <CardHeader>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl sm:text-6xl">💻</div>
                  </div>

                  {/* Title and Status */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg mb-2 truncate">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 sm:px-3 py-1 rounded-full inline-flex items-center gap-1 ${
                          project.status === 'active' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {project.status === 'active' ? '🟢 Aktif' : '✅ Tamamlandı'}
                        </span>
                        {project.year && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </span>
                        )}
                      </div>
                    </div>
                    {project.stars && (
                      <div className="flex items-center gap-1 text-yellow-400 flex-shrink-0">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="mb-4 text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex items-center gap-3 w-full">
                    {project.demoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1"
                        icon={<ExternalLink className="w-4 h-4" />}
                        iconPosition="right"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1"
                        icon={<Github className="w-4 h-4" />}
                        iconPosition="right"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Bu kategoride henüz proje bulunmuyor.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}