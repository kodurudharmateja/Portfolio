import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import BlurText from '@/components/ui/blur-text';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Data Analytics',
    skills: ['Power BI', 'Data Visualization', 'Data Cleaning', 'KPI Analysis', 'Statistical Analysis'],
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    title: 'AI & NLP',
    skills: ['OpenAI API', 'Ollama', 'Resume Parsing', 'NLP Techniques'],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
  {
    title: 'Web Development',
    skills: ['React.js', 'Node.js', 'REST APIs', 'Streamlit', 'Flask'],
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-background overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-20 px-6">
        <BlurText
          text="My Technical Skills"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold justify-center mb-4 text-foreground"
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive toolkit spanning programming, data analytics, AI/ML, and web development
        </p>
      </div>

      {/* Container Scroll Animation */}
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
              Skills That <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
          </div>
        }
      >
        <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 md:p-10 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-5 rounded-xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} backdrop-blur-sm`}
              >
                <h3 className="font-bold text-white mb-3 text-lg">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { value: '8.62', label: 'CGPA' },
              { value: '6+', label: 'Languages' },
              { value: '3', label: 'Projects' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
