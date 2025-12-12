'use client';

import { Calendar } from 'lucide-react';
import Container from '../layout/Container';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Booking() {
  const t = useTranslations('Booking');

  return (
    <section className="py-24 relative overflow-hidden" id="booking">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <AnimatedSection>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{t('titleAccent')}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl shadow-purple-900/10">
              <div className="p-1 md:p-8">
                <motion.div
                  className="flex items-center mb-8 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="bg-purple-500/10 p-2 rounded-lg mr-3">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('selectTitle')}</h3>
                </motion.div>

                {/* Cal.com Iframe Replacement */}
                <motion.div
                  className="rounded-xl overflow-hidden bg-[#030014]"
                  style={{ minHeight: '600px', width: '100%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <iframe
                    src="https://cal.com/digitalai?theme=dark&brandColor=%237042f8"
                    style={{ width: "100%", height: "600px", border: "none" }}
                    title="Schedule Appointment"
                  ></iframe>
                </motion.div>

                <motion.p
                  className="text-slate-500 text-sm mt-6 text-center italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {t('disclaimer')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}