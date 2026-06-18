import { motion } from 'framer-motion';
import BlurText from '@/components/ui/blur-text';
import { Award, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    title: 'Data Analytics Certification',
    issuer: 'Industry Recognized',
    skills: ['Power BI', 'SQL', 'Data Visualization'],
    status: 'completed',
  },
  {
    title: 'AI & Machine Learning Fundamentals',
    issuer: 'Online Learning Platform',
    skills: ['Python', 'NLP', 'OpenAI API'],
    status: 'completed',
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Coding Platform',
    skills: ['React.js', 'Node.js', 'REST APIs'],
    status: 'completed',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Educational Platform',
    skills: ['Pandas', 'NumPy', 'Data Cleaning'],
    status: 'completed',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-32 bg-background overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-20 px-6">
        <BlurText
          text="Certifications"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold justify-center mb-4 text-foreground"
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional certifications and courses completed
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-500">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="uppercase tracking-wider">{cert.status}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground text-lg mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
