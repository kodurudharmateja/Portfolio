import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Education from '@/sections/Education';
import Certificates from '@/sections/Certificates';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
