import { motion } from 'framer-motion';
import BlurText from '@/components/ui/blur-text';
import Counter from '@/components/ui/counter';
import { GraduationCap, School, Award } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Guru Nanak Institute of Technology, Hyderabad',
    period: '2024 – 2028',
    score: '8.62',
    scoreLabel: 'CGPA',
    description: 'Currently in 3rd Year. Specializing in Data Analytics, AI/ML, and Web Development.',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: School,
    title: 'Intermediate (MPC)',
    institution: 'Harvest Public School and College',
    period: '2022 – 2024',
    score: '80.82',
    scoreLabel: 'Percentage',
    description: 'Mathematics, Physics, Chemistry stream with strong analytical foundation.',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: Award,
    title: 'Secondary School Education (10th)',
    institution: 'Harvest Public School',
    period: '2020 – 2022',
    score: '83.8',
    scoreLabel: 'Percentage',
    description: 'Strong foundation in science and mathematics.',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 bg-background overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-20 px-6">
        <BlurText
          text="Education Path"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold justify-center mb-4 text-foreground"
        />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My academic journey and achievements
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/50 to-border" />

          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${edu.iconBg}`}>
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{edu.title}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
                    {edu.period}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>

                  {/* Score with Counter */}
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${edu.color}`}>
                      <Counter
                        value={parseFloat(edu.score)}
                        fontSize={28}
                        padding={0}
                        places={edu.score.includes('.') ? [10, 1, '.', 0.1] : [10, 1]}
                        gap={2}
                        textColor="white"
                        fontWeight={700}
                        gradientFrom="transparent"
                        gradientTo="transparent"
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{edu.scoreLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
