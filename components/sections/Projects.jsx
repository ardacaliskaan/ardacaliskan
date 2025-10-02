'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-32">
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
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-medium text-sm">Portfolio</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Seçili Projeler
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Gerçek dünya problemlerine ürettiğim çözümler ve başarıyla tamamladığım projeler.
          </p>
        </div>

        {/* Projects Grid - SPACIOUS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [cardRef, cardVisible] = useScrollAnimation({ 
    delay: index * 150,
    threshold: 0.1 
  });

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-1000 ${
        cardVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-20 blur-sm'
      }`}
    >
      <div className="relative h-full bg-[#0a0a0a] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2">
        
        {/* Image Section - BIG */}
        <div className="relative h-80 overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900/50 to-black flex items-center justify-center">
              <div className="text-9xl font-black text-white/[0.03]">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          {/* Status Badge */}
          {project.status === 'active' && (
            <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-xl border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-bold">Live</span>
            </div>
          )}
        </div>

        {/* Content - SPACIOUS */}
        <div className="p-10">
          
          {/* Meta - SPACED */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-600">{project.year}</span>
            <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
            <span className="text-sm text-gray-600">{project.category}</span>
          </div>

          {/* Title - BIG */}
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
            {project.title}
          </h3>

          {/* Description - READABLE */}
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Technologies - SPACED */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 text-xs font-medium bg-white/[0.03] border border-white/[0.08] rounded-lg text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions - BIG BUTTONS */}
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-all">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </div>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div className="flex items-center justify-center gap-2 px-6 py-4 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20 rounded-xl font-bold text-sm text-white transition-all">
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}