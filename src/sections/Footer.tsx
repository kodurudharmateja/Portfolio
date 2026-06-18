import CurvedLoop from '@/components/ui/curved-loop';
import { Moon, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Curved Marquee */}
      <div className="py-12">
        <CurvedLoop
          marqueeText="DATA ✦ AI ✦ ENGINEER ✦ DEVELOPER ✦ ANALYST ✦ INNOVATOR ✦ "
          speed={1.5}
          curveAmount={350}
          direction="left"
          interactive={true}
          className="fill-foreground"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-primary" />
            <div>
              <span className="font-bold text-foreground text-lg">Dharmateja</span>
              <p className="text-xs text-muted-foreground">Data & AI Engineer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>by Koduru Sai Dharmateja</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
