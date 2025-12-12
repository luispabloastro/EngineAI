'use client';

import Container from '../layout/Container';
import { cn } from '@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ProcessTimeline() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const t = useTranslations('Process');
  const stepsKeys = ['1', '2', '3', '4', '5'] as const;

  return (
    <section className="py-20 relative overflow-hidden" id="process">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <AnimatedSection>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{t('titleAccent')}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto z-10">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          {stepsKeys.map((key, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className={cn(
                "relative mb-12 md:mb-24 flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Circle with number - always centered */}
              <motion.div
                className={cn(
                  "absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center z-10 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.3)]",
                  hoveredStep === index ? "bg-purple-600 border-purple-500 scale-110" : "bg-[#0a0a0a] border-purple-900/50"
                )}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <span className="text-sm font-bold text-white">0{index + 1}</span>
              </motion.div>

              {/* Content */}
              <motion.div
                className={cn(
                  "w-full md:w-1/2 pt-16 md:pt-0 transition-all duration-300",
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                )}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={cn(
                  "p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30",
                  hoveredStep === index ? "transform -translate-y-1 shadow-lg shadow-purple-900/20" : ""
                )}>
                  <h3 className={cn(
                    "text-xl font-bold mb-2 transition-colors duration-300",
                    hoveredStep === index ? "text-purple-300" : "text-white"
                  )}>
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`steps.${key}.description`)}</p>
                </div>
              </motion.div>

              {/* Empty space for the other side */}
              <div className="hidden md:block w-1/2" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
} 