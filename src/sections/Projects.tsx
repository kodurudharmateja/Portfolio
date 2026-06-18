import { useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import BlurText from '@/components/ui/blur-text';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart AI Resume Analyzer',
    description: 'An AI-powered resume analysis platform for ATS compatibility evaluation. Implemented resume parsing and skill extraction using NLP techniques. Generated resume scores, keyword analysis, and personalized recommendations.',
    tech: ['Python', 'NLP', 'OpenAI API', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    link: '#',
    github: 'https://github.com/kodurudharmateja',
  },
  {
    title: 'Sales Data Analysis Dashboard',
    description: 'Analyzed sales transaction data using SQL to identify revenue trends and market performance. Developed interactive Power BI dashboards for KPI tracking and business reporting. Generated insights on customer behavior, product performance, and regional sales trends.',
    tech: ['SQL', 'Power BI', 'Data Visualization', 'KPI Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '#',
    github: 'https://github.com/kodurudharmateja',
  },
  {
    title: 'JARVIS AI Assistant',
    description: 'Developed an AI-powered assistant to streamline automation and enhance intelligent interactions. Integrated multiple AI APIs for natural language understanding and task automation.',
    tech: ['Python', 'OpenAI API', 'NLP', 'Automation'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    link: '#',
    github: 'https://github.com/kodurudharmateja',
  },
];

// FlowingMenu CSS-inspired component using GSAP
function FlowingProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, { y: '0%', duration: 0.6, ease: 'expo.out' });
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, { y: '100%', duration: 0.6, ease: 'expo.out' });
    }
  };

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative border-t border-border overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between py-8 px-4 md:px-8 cursor-pointer group">
        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground font-mono">0{index + 1}</span>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors uppercase">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>

      {/* Marquee Overlay */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 bg-primary pointer-events-none"
        style={{ transform: 'translateY(101%)' }}
      >
        <div className="flex items-center h-full px-8 gap-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-48 h-16 object-cover rounded-lg"
          />
          <div className="flex gap-3">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
          <span className="text-primary-foreground font-medium">{project.description.slice(0, 80)}...</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-20 px-6">
        <BlurText
          text="Featured Projects"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold justify-center mb-4 text-foreground"
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real-world applications bridging AI, data analytics, and web development
        </p>
      </div>

      {/* Flowing Menu Projects */}
      <div className="max-w-6xl mx-auto border-b border-border">
        {projects.map((project, idx) => (
          <FlowingProjectItem key={project.title} project={project} index={idx} />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/kodurudharmateja"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <Github size={18} />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
