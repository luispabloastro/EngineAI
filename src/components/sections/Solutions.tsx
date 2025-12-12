'use client';

import { Bot, Cpu, Globe, Rocket } from 'lucide-react';
import Container from '../layout/Container';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Solutions() {
  const t = useTranslations('Services');

  const solutions = [
    {
      icon: <Bot className="h-12 w-12 text-[#7042f8]" />,
      title: t('automation.title'),
      description: t('automation.description'),
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Cpu className="h-12 w-12 text-[#00c6ff]" />,
      title: t('software.title'),
      description: t('software.description'),
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Globe className="h-12 w-12 text-[#ff0080]" />,
      title: t('web.title'),
      description: t('web.description'),
      gradient: "from-pink-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="solutions">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <AnimatedSection>
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('title')}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full group">
                <motion.div
                  className="flex flex-col items-center text-center h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className={`h-full w-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="mb-8 p-6 bg-black/40 rounded-2xl inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-inner">
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                        {solution.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
