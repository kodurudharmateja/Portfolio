import { PulseBeams } from '@/components/ui/pulse-beams';
import BlurText from '@/components/ui/blur-text';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear" as const, repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear" as const, repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear" as const, repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }],
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear" as const, repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 770, cy: 427, r: 6.5 }, { cx: 493, cy: 274, r: 6 }],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear" as const, repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }],
  },
];

const gradientColors = { start: "#18CCFC", middle: "#6344F5", end: "#AE48FF" };

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'kodurudharmateja23@gmail.com', href: 'mailto:kodurudharmateja23@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9515596926', href: 'tel:+919515596926' },
  { icon: Linkedin, label: 'LinkedIn', value: 'kodurusaidharmateja', href: 'https://www.linkedin.com/in/kodurusaidharmateja' },
  { icon: Github, label: 'GitHub', value: 'kodurudharmateja', href: 'https://github.com/kodurudharmateja' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background">
      <PulseBeams
        beams={beams}
        gradientColors={gradientColors}
        className="min-h-screen bg-slate-950"
      >
        <div className="relative z-40 flex flex-col items-center text-center px-6 py-20">
          <BlurText
            text="Let's Connect"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold justify-center mb-4 text-white"
          />
          <p className="text-slate-400 text-lg max-w-xl mb-12">
            Looking for an internship where I can grow while delivering measurable impact.
            Let's build something amazing together.
          </p>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full mb-12">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{link.label}</div>
                  <div className="text-sm text-white font-medium">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <LiquidButton
              className="text-white font-semibold text-lg"
              onClick={() => window.open('https://www.linkedin.com/in/kodurusaidharmateja', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </LiquidButton>
          </motion.div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-8 text-slate-500 text-sm">
            <MapPin size={14} />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </PulseBeams>
    </section>
  );
}
