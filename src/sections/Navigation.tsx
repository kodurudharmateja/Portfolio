import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-background/60 border-b border-border/40 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <span className="text-xl font-bold tracking-tight text-foreground">Dharmateja</span>
        <div className="hidden md:flex items-center gap-5">
          <button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</button>
          <button onClick={() => scrollToSection('education')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Education</button>
          <button onClick={() => scrollToSection('projects')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/kodurudharmateja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/kodurusaidharmateja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:kodurudharmateja23@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Moon size={18} className="text-foreground" />
          ) : (
            <Sun size={18} className="text-foreground" />
          )}
        </button>
      </div>
    </nav>
  );
}
