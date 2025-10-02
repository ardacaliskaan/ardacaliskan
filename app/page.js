import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}