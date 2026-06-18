import { GooeyText } from '@/components/ui/gooey-text-morphing';
import BlurText from '@/components/ui/blur-text';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-background">
      <div className="max-w-6xl w-full mx-auto">
        {/* Gooey Text Morphing */}
        <div className="h-[200px] flex items-center justify-center mb-16">
          <GooeyText
            texts={['Data', 'AI', 'Engineer', 'Developer']}
            morphTime={1.2}
            cooldownTime={0.3}
            className="font-bold"
            textClassName="text-foreground"
          />
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BlurText
              text="Turning Data into Decisions"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aspiring Data & AI Engineer currently pursuing B.Tech in Computer Science.
              I specialize in turning data into decisions — whether through SQL-powered analytics,
              AI-driven automation, or interactive dashboards. My projects include an ATS-compatible
              Resume Analyzer and a conversational AI assistant, demonstrating my ability to bridge
              machine learning with practical applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code2, label: 'Programming', desc: 'Python, SQL, JS, TS' },
              { icon: Database, label: 'Data Analytics', desc: 'Power BI, Cleaning' },
              { icon: Brain, label: 'AI & NLP', desc: 'OpenAI, Ollama' },
              { icon: BarChart3, label: 'Visualization', desc: 'Dashboards, KPIs' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
