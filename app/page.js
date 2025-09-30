'use client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 bg-grid-pattern opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Page Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}